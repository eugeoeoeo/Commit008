import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, ArrowLeft, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuizModal({
  lessonTitle,
  lessonId,
  questions = [],
  onComplete,
  onClose
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [qIdx]: selectedOptionIndex }
  const [showExplanation, setShowExplanation] = useState({}); // { [qIdx]: boolean }
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentIndex];
  const isAnswered = userAnswers[currentIndex] !== undefined;

  const handleSelectOption = (optIdx) => {
    if (isAnswered) return; // Prevent changing after revealing
    const updated = { ...userAnswers, [currentIndex]: optIdx };
    setUserAnswers(updated);
    setShowExplanation({ ...showExplanation, [currentIndex]: true });

    // If last question answered, can finish
    if (Object.keys(updated).length === questions.length) {
      // All answered
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const finishQuiz = () => {
    setIsFinished(true);
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });

    const pct = Math.round((correctCount / questions.length) * 100);
    if (pct >= 80) {
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }

    if (onComplete) {
      onComplete(correctCount, questions.length);
    }
  };

  const handleRetake = () => {
    setUserAnswers({});
    setShowExplanation({});
    setCurrentIndex(0);
    setIsFinished(false);
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="glass-card" style={{ padding: '30px', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>No questions available for this lesson.</p>
        <button onClick={onClose} className="btn btn-secondary" style={{ marginTop: '16px' }}>
          Back to Lesson
        </button>
      </div>
    );
  }

  // Finished Summary View
  if (isFinished) {
    let score = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) score++;
    });
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 75;

    return (
      <div className="glass-card animate-fade-in" style={{ padding: '30px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            display: 'inline-flex',
            padding: '16px',
            borderRadius: '50%',
            background: passed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(225, 29, 72, 0.15)',
            color: passed ? 'var(--accent-emerald)' : 'var(--pup-crimson)',
            marginBottom: '16px'
          }}>
            <Award size={48} />
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
            {passed ? 'Quiz Passed! Excellent Work' : 'Quiz Completed - Needs Review'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            {lessonTitle}
          </p>

          <div style={{
            margin: '24px auto',
            maxWidth: '240px',
            padding: '16px',
            borderRadius: 'var(--radius-lg)',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-subtle)'
          }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: passed ? 'var(--accent-emerald)' : 'var(--pup-crimson)' }}>
              {percentage}%
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {score} out of {questions.length} items correct
            </div>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e2e8f0' }}>Review Answers:</h4>
          {questions.map((q, idx) => {
            const isCorrect = userAnswers[idx] === q.correctAnswer;
            return (
              <div
                key={q.id}
                style={{
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${isCorrect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(225, 29, 72, 0.3)'}`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  {isCorrect ? (
                    <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  ) : (
                    <XCircle size={18} color="var(--pup-crimson)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  )}
                  <div style={{ fontSize: '0.85rem' }}>
                    <div style={{ fontWeight: 600, color: '#f8fafc', marginBottom: '4px' }}>
                      {idx + 1}. {q.question}
                    </div>
                    {!isCorrect && (
                      <div style={{ color: '#fda4af', fontSize: '0.8rem', marginBottom: '2px' }}>
                        Your answer: {q.options[userAnswers[idx]] || 'None'}
                      </div>
                    )}
                    <div style={{ color: '#a7f3d0', fontSize: '0.8rem' }}>
                      Correct answer: {q.options[q.correctAnswer]}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button onClick={handleRetake} className="btn btn-secondary">
            <RotateCcw size={16} /> Retake Quiz
          </button>
          <button onClick={onClose} className="btn btn-primary">
            Return to Lesson
          </button>
        </div>
      </div>
    );
  }

  // Active Question View
  return (
    <div className="glass-card animate-fade-in" style={{ padding: '24px' }}>
      {/* Quiz Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--border-subtle)',
        paddingBottom: '14px',
        marginBottom: '20px'
      }}>
        <div>
          <span className="badge badge-crimson" style={{ marginBottom: '6px' }}>
            Lesson Quiz
          </span>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
            {lessonTitle}
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
            Question {currentIndex + 1} of {questions.length}
          </span>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2px',
            marginTop: '6px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
              height: '100%',
              background: 'linear-gradient(90deg, var(--pup-crimson), var(--accent-cyan))',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>
      </div>

      {/* Question Text */}
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{
          fontSize: '1.05rem',
          fontWeight: 600,
          color: '#f8fafc',
          lineHeight: 1.5
        }}>
          {currentQ.question}
        </h4>
      </div>

      {/* Options List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
        {currentQ.options.map((opt, optIdx) => {
          const isSelected = userAnswers[currentIndex] === optIdx;
          const isCorrect = optIdx === currentQ.correctAnswer;
          const isRevealed = isAnswered;

          let btnBg = 'rgba(255, 255, 255, 0.04)';
          let borderColor = 'var(--border-subtle)';
          let textColor = '#e2e8f0';

          if (isRevealed) {
            if (isCorrect) {
              btnBg = 'rgba(16, 185, 129, 0.15)';
              borderColor = 'rgba(16, 185, 129, 0.6)';
              textColor = '#a7f3d0';
            } else if (isSelected && !isCorrect) {
              btnBg = 'rgba(225, 29, 72, 0.15)';
              borderColor = 'rgba(225, 29, 72, 0.6)';
              textColor = '#fda4af';
            }
          }

          return (
            <button
              key={optIdx}
              onClick={() => handleSelectOption(optIdx)}
              disabled={isRevealed}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '12px 14px',
                borderRadius: 'var(--radius-md)',
                background: btnBg,
                border: `1px solid ${borderColor}`,
                color: textColor,
                textAlign: 'left',
                cursor: isRevealed ? 'default' : 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.86rem',
                lineHeight: 1.45,
                transition: 'all 0.2s ease',
                wordBreak: 'break-word'
              }}
            >
              <div style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: isRevealed && isCorrect
                  ? 'var(--accent-emerald)'
                  : isRevealed && isSelected
                  ? 'var(--pup-crimson)'
                  : 'rgba(255, 255, 255, 0.08)',
                color: isRevealed && (isCorrect || isSelected) ? '#fff' : 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.78rem',
                fontWeight: 700,
                flexShrink: 0,
                marginTop: '1px'
              }}>
                {String.fromCharCode(65 + optIdx)}
              </div>
              <span style={{ flex: 1 }}>{opt}</span>
              {isRevealed && isCorrect && <CheckCircle2 size={18} color="var(--accent-emerald)" />}
              {isRevealed && isSelected && !isCorrect && <XCircle size={18} color="var(--pup-crimson)" />}
            </button>
          );
        })}
      </div>

      {/* Explanation Banner */}
      {isAnswered && (
        <div style={{
          padding: '14px 16px',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(56, 189, 248, 0.08)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.82rem' }}>
            <HelpCircle size={16} /> Reference & Explanation:
          </div>
          <p style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.5 }}>
            {currentQ.explanation}
          </p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="btn btn-secondary"
          style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}
        >
          <ArrowLeft size={16} /> Previous
        </button>

        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className="btn btn-primary"
          style={{ opacity: !isAnswered ? 0.5 : 1 }}
        >
          <span>{currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
