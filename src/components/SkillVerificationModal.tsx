import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SKILL_QUIZZES } from '../data/mockData';
import { Category } from '../types';
import { 
  X, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw,
  ShieldCheck
} from 'lucide-react';

export const SkillVerificationModal: React.FC = () => {
  const { 
    isSkillQuizModalOpen, 
    setIsSkillQuizModalOpen, 
    activeQuizCategory, 
    passSkillQuiz, 
    language 
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<Category>(activeQuizCategory || 'Video Editing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isSkillQuizModalOpen) return null;

  const currentQuiz = SKILL_QUIZZES[selectedCategory] || SKILL_QUIZZES['Video Editing'];
  const questions = currentQuiz.questions;
  const currentQ = questions[currentQuestionIndex];

  const handleSelectOption = (optionIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: optionIndex
    });
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correctCount += 1;
      }
    });
    return Math.round((correctCount / questions.length) * 100);
  };

  const handleFinishQuiz = () => {
    setIsSubmitted(true);
    const score = calculateScore();
    if (score >= currentQuiz.passingScorePercent) {
      passSkillQuiz(selectedCategory);
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setIsSubmitted(false);
  };

  const score = calculateScore();
  const hasPassed = score >= currentQuiz.passingScorePercent;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-400" />
            <div>
              <h2 className="font-display font-bold text-lg text-white">
                Skill Verification Assessment
              </h2>
              <p className="text-[11px] text-slate-400">Earn verified badge on your student profile</p>
            </div>
          </div>
          <button
            onClick={() => setIsSkillQuizModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <div className="space-y-6">
              
              {/* Category Switcher Tabs */}
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                {(['Video Editing', 'Graphic Design', 'Web Development'] as Category[]).map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      handleRetake();
                    }}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-emerald-100 text-emerald-900'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Progress & Current Question indicator */}
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-800">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
                <span>Passing: 75% ({Math.ceil(questions.length * 0.75)} correct)</span>
              </div>

              {/* Question Text */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="font-semibold text-sm text-slate-900 leading-snug">
                  {currentQ.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-2">
                {currentQ.options.map((opt, oIndex) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === oIndex;
                  return (
                    <button
                      key={oIndex}
                      onClick={() => handleSelectOption(oIndex)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-3 cursor-pointer ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-medium'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full border text-[11px] flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-600 text-white font-bold'
                          : 'border-slate-300 text-slate-500'
                      }`}>
                        {String.fromCharCode(65 + oIndex)}
                      </span>
                      <span className="leading-relaxed">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation controls */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <button
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                  className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 disabled:opacity-30 cursor-pointer"
                >
                  Previous
                </button>

                {currentQuestionIndex < questions.length - 1 ? (
                  <button
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                    onClick={handleFinishQuiz}
                    className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Submit & Grade Assessment</span>
                  </button>
                )}
              </div>

            </div>
          ) : (
            /* Results View */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center shadow-inner ${
                hasPassed ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
              }">
                {hasPassed ? (
                  <Award className="w-8 h-8 text-emerald-600" />
                ) : (
                  <AlertCircle className="w-8 h-8 text-red-600" />
                )}
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  {hasPassed ? 'Congratulations! Skill Verified' : 'Assessment Not Passed'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  You scored <strong className="font-mono">{score}%</strong> in <strong>{selectedCategory}</strong>
                </p>
              </div>

              {hasPassed ? (
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-left space-y-2">
                  <div className="flex items-center gap-2 text-emerald-950 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Badge Issued: Skill2Earn Verified Talent</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    The verified badge has been attached to your digital portfolio profile. Local businesses will see your authenticated status when you apply to projects.
                  </p>
                </div>
              ) : (
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs text-slate-600">
                  You need at least 75% to earn the badge. Review standard guidelines and retry whenever you are ready!
                </div>
              )}

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleRetake}
                  className="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Test</span>
                </button>
                <button
                  onClick={() => setIsSkillQuizModalOpen(false)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors cursor-pointer"
                >
                  Return to Marketplace
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
