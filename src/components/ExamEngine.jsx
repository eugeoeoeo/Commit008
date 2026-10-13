import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Flag,
  ArrowRight,
  ArrowLeft,
  Award,
  RotateCcw,
  Terminal,
  Database,
  Eye,
  AlertTriangle,
  Filter,
  Check,
  X,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EXAM_POOL, generateExamSession, EXAM_DATA } from '../data/examData.js';
import ErdViewer from './ErdViewer.jsx';
import LabConsole from './LabConsole.jsx';
import {
  saveExamAttempt,
  loadActiveExamSession,
  saveActiveExamSession,
  clearActiveExamSession
} from '../utils/storage.js';

export default function ExamEngine({ onExamComplete }) {
  // Initialize Active 100-Item Exam from LocalStorage or generate fresh from 205-item pool
  const [activeExam, setActiveExam] = useState(() => {
    const saved = loadActiveExamSession();
    if (saved && saved.activeExam && saved.activeExam.mcq) {
      return saved.activeExam;
    }
    const fresh = generateExamSession(false);
    return fresh;
  });

  const [examPart, setExamPart] = useState(() => {
    const saved = loadActiveExamSession();
    return saved?.examPart || 'mcq'; // 'mcq' | 'id' | 'tf' | 'lab'
  });

  const [showJumpDrawer, setShowJumpDrawer] = useState(false);

  // User state
  const [mcqAnswers, setMcqAnswers] = useState(() => {
    const saved = loadActiveExamSession();
    return saved?.mcqAnswers || {};
  });

  const [idAnswers, setIdAnswers] = useState(() => {
    const saved = loadActiveExamSession();
    return saved?.idAnswers || {};
  });

  const [idEvaluated, setIdEvaluated] = useState(() => {
    const saved = loadActiveExamSession();
    return saved?.idEvaluated || {}; // { [id]: { checked: boolean, isMatch: boolean, submittedText: string } }
  });

  const [tfAnswers, setTfAnswers] = useState(() => {
    const saved = loadActiveExamSession();
    return saved?.tfAnswers || {};
  });

  const [flagged, setFlagged] = useState(() => {
    const saved = loadActiveExamSession();
    return saved?.flagged || {};
  });

  const [labPassed, setLabPassed] = useState(() => {
    const saved = loadActiveExamSession();
    return saved?.labPassed || false;
  });

  const [sampleOutputView, setSampleOutputView] = useState('terminal'); // 'terminal' | 'grid'

  // Timer: 90 minutes
  const [secondsLeft, setSecondsLeft] = useState(() => {
    const saved = loadActiveExamSession();
    return typeof saved?.secondsLeft === 'number' ? saved.secondsLeft : 90 * 60;
  });

  const [isTimerRunning, setIsTimerRunning] = useState(() => {
    const saved = loadActiveExamSession();
    return saved?.isSubmitted ? false : true;
  });

  // Submission & Results State
  const [isSubmitted, setIsSubmitted] = useState(() => {
    const saved = loadActiveExamSession();
    return saved?.isSubmitted || false;
  });

  const [resultSummary, setResultSummary] = useState(() => {
    const saved = loadActiveExamSession();
    return saved?.resultSummary || null;
  });

  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

  // Review Navigation Filter: 'all' | 'wrong' | 'correct' | 'flagged'
  const [reviewFilter, setReviewFilter] = useState('all');
  const [reviewPartFilter, setReviewPartFilter] = useState('all'); // 'all' | 'mcq' | 'id' | 'tf' | 'lab'

  // Persist exam session to LocalStorage on state updates
  useEffect(() => {
    const sessionState = {
      activeExam,
      examPart,
      mcqAnswers,
      idAnswers,
      idEvaluated,
      tfAnswers,
      flagged,
      labPassed,
      secondsLeft,
      isSubmitted,
      resultSummary
    };
    saveActiveExamSession(sessionState);
  }, [
    activeExam,
    examPart,
    mcqAnswers,
    idAnswers,
    idEvaluated,
    tfAnswers,
    flagged,
    labPassed,
    secondsLeft,
    isSubmitted,
    resultSummary
  ]);

  // Countdown timer
  useEffect(() => {
    if (!isTimerRunning || isSubmitted) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, isSubmitted]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const scrollToQuestion = (qNum, part) => {
    if (part && part !== examPart) {
      setExamPart(part);
    }
    setShowJumpDrawer(false);
    setTimeout(() => {
      const el = document.getElementById(`exam-q-${qNum}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  // Immediate Per-Click MCQ Handler
  const handleSelectMcq = (qId, optionIdx) => {
    if (isSubmitted) return;
    setMcqAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  // Identification typing & submit handler
  const handleInputId = (qId, text) => {
    if (isSubmitted) return;
    setIdAnswers((prev) => ({ ...prev, [qId]: text }));
  };

  const handleCheckIdAnswer = (q) => {
    if (isSubmitted) return;
    const userText = (idAnswers[q.id] || '').trim().toLowerCase();
    if (!userText) return;
    const isMatch = q.acceptedAnswers.some(
      (ans) => ans.toLowerCase().trim() === userText
    );
    setIdEvaluated((prev) => ({
      ...prev,
      [q.id]: {
        checked: true,
        isMatch,
        submittedText: (idAnswers[q.id] || '').trim()
      }
    }));
  };

  // Immediate Per-Click True or False Handler
  const handleSelectTf = (qId, val) => {
    if (isSubmitted) return;
    setTfAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const toggleFlag = (id) => {
    setFlagged((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Submit Examination Handler
  const handleSubmitExam = () => {
    setShowConfirmSubmit(false);
    setIsTimerRunning(false);
    setIsSubmitted(true);

    // Calculate MCQ score (out of 40)
    let mcqScore = 0;
    activeExam.mcq.forEach((q) => {
      if (mcqAnswers[q.id] === q.correctAnswer) mcqScore++;
    });

    // Calculate Identification score (out of 30)
    let idScore = 0;
    activeExam.identification.forEach((q) => {
      const userText = (idAnswers[q.id] || '').trim().toLowerCase();
      if (!userText) return;
      const isMatch = q.acceptedAnswers.some(
        (ans) => ans.toLowerCase().trim() === userText
      );
      if (isMatch) idScore++;
    });

    // Calculate True/False score (out of 30)
    let tfScore = 0;
    activeExam.trueOrFalse.forEach((q) => {
      if (tfAnswers[q.id] === q.correctAnswer) tfScore++;
    });

    const totalTheoretical = mcqScore + idScore + tfScore;
    const passed = totalTheoretical >= 75;

    const summary = {
      mcqScore,
      idScore,
      tfScore,
      totalScore: totalTheoretical,
      passed,
      labPassed,
      timeSpentSec: 90 * 60 - secondsLeft
    };

    setResultSummary(summary);
    saveExamAttempt(summary);

    if (passed) {
      try {
        confetti({
          particleCount: 130,
          spread: 85,
          origin: { y: 0.5 }
        });
      } catch (e) {}
    }

    if (onExamComplete) onExamComplete(summary);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retake Examination: Shuffles brand new 100 questions from 205-item pool and re-shuffles all choices!
  const handleRetake = () => {
    clearActiveExamSession();
    const freshSession = generateExamSession(false);
    setActiveExam(freshSession);
    setMcqAnswers({});
    setIdAnswers({});
    setIdEvaluated({});
    setTfAnswers({});
    setFlagged({});
    setLabPassed(false);
    setSecondsLeft(90 * 60);
    setIsTimerRunning(true);
    setIsSubmitted(false);
    setResultSummary(null);
    setExamPart('mcq');
    setReviewFilter('all');
    setReviewPartFilter('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Answered counts
  const answeredMcqCount = Object.keys(mcqAnswers).length;
  const answeredIdCount = Object.values(idAnswers).filter((t) => (t || '').trim().length > 0).length;
  const answeredTfCount = Object.keys(tfAnswers).length;
  const totalAnswered = answeredMcqCount + answeredIdCount + answeredTfCount;

  // Compute breakdown of correct vs wrong for result review
  const computeItemStatus = (q, type) => {
    if (type === 'mcq') {
      const userAns = mcqAnswers[q.id];
      if (userAns === undefined) return { isAnswered: false, isCorrect: false };
      return { isAnswered: true, isCorrect: userAns === q.correctAnswer };
    }
    if (type === 'id') {
      const userText = (idAnswers[q.id] || '').trim().toLowerCase();
      if (!userText) return { isAnswered: false, isCorrect: false };
      const isMatch = q.acceptedAnswers.some(
        (ans) => ans.toLowerCase().trim() === userText
      );
      return { isAnswered: true, isCorrect: isMatch };
    }
    if (type === 'tf') {
      const userAns = tfAnswers[q.id];
      if (userAns === undefined) return { isAnswered: false, isCorrect: false };
      return { isAnswered: true, isCorrect: userAns === q.correctAnswer };
    }
    return { isAnswered: false, isCorrect: false };
  };

  const allQuestionsWithStatus = [
    ...activeExam.mcq.map((q) => ({ ...q, type: 'mcq', ...computeItemStatus(q, 'mcq') })),
    ...activeExam.identification.map((q) => ({ ...q, type: 'id', ...computeItemStatus(q, 'id') })),
    ...activeExam.trueOrFalse.map((q) => ({ ...q, type: 'tf', ...computeItemStatus(q, 'tf') }))
  ];

  const totalWrongCount = allQuestionsWithStatus.filter((q) => !q.isCorrect).length;
  const totalCorrectCount = allQuestionsWithStatus.filter((q) => q.isCorrect).length;
  const totalFlaggedCount = Object.values(flagged).filter(Boolean).length;

  // Filtered review list based on student's filter selection
  const filteredReviewQuestions = allQuestionsWithStatus.filter((q) => {
    // 1. Status Filter
    if (reviewFilter === 'wrong' && q.isCorrect) return false;
    if (reviewFilter === 'correct' && !q.isCorrect) return false;
    if (reviewFilter === 'flagged' && !flagged[q.id]) return false;

    // 2. Part Filter
    if (reviewPartFilter !== 'all' && q.type !== reviewPartFilter) return false;

    return true;
  });

  // ==========================================
  // RENDER: COMPLETED RESULTS & SEPARATED REVIEW
  // ==========================================
  if (isSubmitted && resultSummary) {
    return (
      <div className="glass-card animate-fade-in" style={{ padding: '24px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            display: 'inline-flex',
            padding: '18px',
            borderRadius: '50%',
            background: resultSummary.passed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(225, 29, 72, 0.15)',
            color: resultSummary.passed ? 'var(--accent-emerald)' : 'var(--pup-crimson)',
            marginBottom: '14px'
          }}>
            <Award size={52} />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
            {resultSummary.passed ? 'Midterm Examination Passed!' : 'Examination Needs Further Review'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Polytechnic University of the Philippines • COMP 008 Database Administration
          </p>

          {/* Score Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '14px',
            marginTop: '20px',
            marginBottom: '20px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '16px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>TOTAL THEORETICAL SCORE</div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: resultSummary.passed ? 'var(--accent-emerald)' : 'var(--pup-crimson)' }}>
                {resultSummary.totalScore} / 100
              </div>
              <div style={{ fontSize: '0.78rem', color: resultSummary.passed ? '#a7f3d0' : '#fda4af', fontWeight: 600 }}>
                {resultSummary.totalScore}% ({resultSummary.passed ? 'PASSED' : 'FAILED - 75% required'})
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '16px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>PART 1: MCQ (40 ITEMS)</div>
              <div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--pup-gold)' }}>
                {resultSummary.mcqScore} / 40
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                {Math.round((resultSummary.mcqScore / 40) * 100)}% accuracy
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '16px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>PART 2: ID (30 ITEMS)</div>
              <div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                {resultSummary.idScore} / 30
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                {Math.round((resultSummary.idScore / 30) * 100)}% accuracy
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '16px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>PART 3: T/F (30 ITEMS)</div>
              <div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--accent-purple)' }}>
                {resultSummary.tfScore} / 30
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                {Math.round((resultSummary.tfScore / 30) * 100)}% accuracy
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '28px' }}>
            <button onClick={handleRetake} className="btn btn-primary" style={{ padding: '10px 20px', fontWeight: 700 }}>
              <RotateCcw size={16} /> Retake Examination (New 100 Sample)
            </button>
            <button
              onClick={() => {
                setReviewFilter('wrong');
                setReviewPartFilter('all');
              }}
              className="btn btn-secondary"
              style={{
                borderColor: totalWrongCount > 0 ? 'rgba(225, 29, 72, 0.5)' : undefined,
                color: totalWrongCount > 0 ? '#fda4af' : undefined
              }}
            >
              <XCircle size={16} color="var(--pup-crimson)" /> Review Wrong Answers ({totalWrongCount})
            </button>
          </div>
        </div>

        {/* Separated Review Navigation Header */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.65)',
          borderRadius: 'var(--radius-lg)',
          padding: '16px',
          border: '1px solid var(--border-subtle)',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Filter size={18} color="var(--pup-gold)" /> Examination Answers Review
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Filter between correct and wrong answers for immediate mistake analysis. Results are saved locally.
              </p>
            </div>

            {/* Quick Status Filter Tabs */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setReviewFilter('all')}
                className={`btn ${reviewFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ fontSize: '0.76rem', padding: '6px 12px' }}
              >
                All (100)
              </button>
              <button
                onClick={() => setReviewFilter('wrong')}
                className={`btn ${reviewFilter === 'wrong' ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  fontSize: '0.76rem',
                  padding: '6px 12px',
                  background: reviewFilter === 'wrong' ? 'var(--pup-crimson)' : 'rgba(225, 29, 72, 0.1)',
                  borderColor: 'rgba(225, 29, 72, 0.4)',
                  color: '#fff'
                }}
              >
                <XCircle size={13} style={{ marginRight: '4px' }} />
                Wrong ({totalWrongCount})
              </button>
              <button
                onClick={() => setReviewFilter('correct')}
                className={`btn ${reviewFilter === 'correct' ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  fontSize: '0.76rem',
                  padding: '6px 12px',
                  background: reviewFilter === 'correct' ? 'var(--accent-emerald)' : 'rgba(16, 185, 129, 0.1)',
                  borderColor: 'rgba(16, 185, 129, 0.4)',
                  color: '#fff'
                }}
              >
                <CheckCircle2 size={13} style={{ marginRight: '4px' }} />
                Correct ({totalCorrectCount})
              </button>
              {totalFlaggedCount > 0 && (
                <button
                  onClick={() => setReviewFilter('flagged')}
                  className={`btn ${reviewFilter === 'flagged' ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ fontSize: '0.76rem', padding: '6px 12px' }}
                >
                  <Flag size={13} style={{ marginRight: '4px' }} />
                  Flagged ({totalFlaggedCount})
                </button>
              )}
            </div>
          </div>

          {/* Part Filter Tabs */}
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', WebkitOverflowScrolling: 'touch', paddingBottom: '4px' }}>
            <button
              onClick={() => setReviewPartFilter('all')}
              style={{
                background: reviewPartFilter === 'all' ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border-subtle)',
                color: reviewPartFilter === 'all' ? '#fff' : 'var(--text-muted)',
                borderRadius: 'var(--radius-sm)',
                padding: '4px 10px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              All Sections
            </button>
            <button
              onClick={() => setReviewPartFilter('mcq')}
              style={{
                background: reviewPartFilter === 'mcq' ? 'rgba(245, 158, 11, 0.25)' : 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border-subtle)',
                color: reviewPartFilter === 'mcq' ? '#fff' : 'var(--text-muted)',
                borderRadius: 'var(--radius-sm)',
                padding: '4px 10px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Part 1: MCQ (1-40)
            </button>
            <button
              onClick={() => setReviewPartFilter('id')}
              style={{
                background: reviewPartFilter === 'id' ? 'rgba(56, 189, 248, 0.25)' : 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border-subtle)',
                color: reviewPartFilter === 'id' ? '#fff' : 'var(--text-muted)',
                borderRadius: 'var(--radius-sm)',
                padding: '4px 10px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Part 2: ID (41-70)
            </button>
            <button
              onClick={() => setReviewPartFilter('tf')}
              style={{
                background: reviewPartFilter === 'tf' ? 'rgba(168, 85, 247, 0.25)' : 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border-subtle)',
                color: reviewPartFilter === 'tf' ? '#fff' : 'var(--text-muted)',
                borderRadius: 'var(--radius-sm)',
                padding: '4px 10px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Part 3: T/F (71-100)
            </button>
            <button
              onClick={() => setReviewPartFilter('lab')}
              style={{
                background: reviewPartFilter === 'lab' ? 'rgba(225, 29, 72, 0.25)' : 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border-subtle)',
                color: reviewPartFilter === 'lab' ? '#fff' : 'var(--text-muted)',
                borderRadius: 'var(--radius-sm)',
                padding: '4px 10px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Part 4: Lab Exam
            </button>
          </div>
        </div>

        {/* Displaying Review Questions */}
        {reviewPartFilter === 'lab' ? (
          <div>
            <ErdViewer />
            <div style={{ marginTop: '20px' }}>
              <LabConsole
                labActivity={{
                  title: activeExam.labExam.title,
                  description: activeExam.labExam.scenario,
                  instructions: activeExam.labExam.instructions,
                  requiredClauses: activeExam.labExam.requiredClauses,
                  expectedOutput: activeExam.labExam.sampleOutputGrid,
                  starterSql: activeExam.labExam.canonicalQuery
                }}
              />
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {filteredReviewQuestions.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 20px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-muted)'
              }}>
                <CheckCircle2 size={36} color="var(--accent-emerald)" style={{ marginBottom: '8px' }} />
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>No items match this filter!</div>
                <div style={{ fontSize: '0.82rem' }}>
                  {reviewFilter === 'wrong' ? 'Incredible work! You answered all selected items correctly.' : 'Try selecting another filter above.'}
                </div>
              </div>
            ) : (
              filteredReviewQuestions.map((q) => {
                const isCorrect = q.isCorrect;
                return (
                  <div
                    key={q.id}
                    style={{
                      padding: '16px',
                      borderRadius: 'var(--radius-md)',
                      background: isCorrect ? 'rgba(16, 185, 129, 0.03)' : 'rgba(225, 29, 72, 0.05)',
                      border: `1px solid ${isCorrect ? 'rgba(16, 185, 129, 0.25)' : 'rgba(225, 29, 72, 0.4)'}`
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ marginTop: '2px', flexShrink: 0 }}>
                        {isCorrect ? (
                          <CheckCircle2 size={18} color="var(--accent-emerald)" />
                        ) : (
                          <XCircle size={18} color="var(--pup-crimson)" />
                        )}
                      </div>
                      <div style={{ flex: 1, fontSize: '0.88rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                          <span style={{
                            fontSize: '0.72rem',
                            padding: '1px 6px',
                            borderRadius: '4px',
                            background: isCorrect ? 'rgba(16,185,129,0.2)' : 'rgba(225,29,72,0.2)',
                            color: isCorrect ? '#a7f3d0' : '#fda4af',
                            fontWeight: 700
                          }}>
                            {isCorrect ? 'CORRECT' : 'INCORRECT'}
                          </span>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                            {q.type === 'mcq' ? 'Part 1: MCQ' : q.type === 'id' ? 'Part 2: Identification' : 'Part 3: True/False'}
                          </span>
                        </div>

                        <div style={{ fontWeight: 600, color: '#f8fafc', marginBottom: '8px', lineHeight: 1.45 }}>
                          Q{q.number}. {q.question || q.statement}
                        </div>

                        {/* MCQ Specific Comparison */}
                        {q.type === 'mcq' && (
                          <div style={{ marginBottom: '6px' }}>
                            <div style={{ color: isCorrect ? '#a7f3d0' : '#fda4af', marginBottom: '3px' }}>
                              <strong>Your Answer:</strong>{' '}
                              {mcqAnswers[q.id] !== undefined
                                ? `${String.fromCharCode(65 + mcqAnswers[q.id])}. ${q.options[mcqAnswers[q.id]]}`
                                : 'Unanswered'}
                            </div>
                            {!isCorrect && (
                              <div style={{ color: '#a7f3d0', marginBottom: '3px' }}>
                                <strong>Correct Answer:</strong>{' '}
                                {`${String.fromCharCode(65 + q.correctAnswer)}. ${q.options[q.correctAnswer]}`}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Identification Specific Comparison */}
                        {q.type === 'id' && (
                          <div style={{ marginBottom: '6px' }}>
                            <div style={{ color: isCorrect ? '#a7f3d0' : '#fda4af', marginBottom: '3px' }}>
                              <strong>Your Answer:</strong> "{idAnswers[q.id] || 'Blank'}"
                            </div>
                            {!isCorrect && (
                              <div style={{ color: '#a7f3d0', marginBottom: '3px' }}>
                                <strong>Accepted Answer:</strong> {q.correctAnswerDisplay || q.correctAnswer}
                              </div>
                            )}
                          </div>
                        )}

                        {/* True/False Specific Comparison */}
                        {q.type === 'tf' && (
                          <div style={{ marginBottom: '6px' }}>
                            <div style={{ color: isCorrect ? '#a7f3d0' : '#fda4af', marginBottom: '3px' }}>
                              <strong>Your Answer:</strong>{' '}
                              {tfAnswers[q.id] === undefined
                                ? 'Unanswered'
                                : tfAnswers[q.id]
                                ? 'TRUE'
                                : 'FALSE'}
                            </div>
                            {!isCorrect && (
                              <div style={{ color: '#a7f3d0', marginBottom: '3px' }}>
                                <strong>Correct Answer:</strong> {q.correctAnswer ? 'TRUE' : 'FALSE'}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Explanation */}
                        <div style={{
                          color: '#cbd5e1',
                          fontSize: '0.8rem',
                          marginTop: '6px',
                          background: 'rgba(0,0,0,0.25)',
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-sm)',
                          borderLeft: `3px solid ${isCorrect ? 'var(--accent-emerald)' : 'var(--pup-crimson)'}`
                        }}>
                          {q.explanation}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    );
  }

  // ==========================================
  // RENDER: ACTIVE EXAM WITH INSTANT FEEDBACK
  // ==========================================
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
      {/* Top Header Bar */}
      <div className="glass-card" style={{ padding: '16px 20px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="badge badge-crimson">
                Midterm Comprehensive Exam
              </span>
              <span className="badge badge-gold">
                100 Items Drawn from 205 Pool
              </span>
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
              Database Administration (COMP 008)
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Instant feedback active: Answers reveal immediate correctness and explanations upon selection.
            </p>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'space-between',
            marginTop: '10px'
          }}>
            {/* Timer & Jump Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: secondsLeft < 600 ? 'rgba(225, 29, 72, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                padding: '6px 10px',
                borderRadius: 'var(--radius-md)',
                border: `1px solid ${secondsLeft < 600 ? 'rgba(225,29,72,0.5)' : 'var(--border-subtle)'}`,
                color: secondsLeft < 600 ? '#fda4af' : '#fff'
              }}>
                <Clock size={14} color={secondsLeft < 600 ? 'var(--pup-crimson)' : 'var(--accent-cyan)'} />
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.84rem' }}>
                  {formatTime(secondsLeft)}
                </span>
              </div>

              <button
                onClick={() => setShowJumpDrawer(!showJumpDrawer)}
                className="btn btn-secondary"
                style={{ padding: '6px 10px', fontSize: '0.78rem' }}
                title="Jump directly to any of the 100 questions"
              >
                <span>Jump Qs</span>
              </button>
            </div>

            {/* Submit button */}
            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="btn btn-primary"
              style={{ fontSize: '0.8rem', padding: '6px 12px' }}
            >
              Finish & Review ({totalAnswered}/100)
            </button>
          </div>
        </div>

        {/* Exam Part Switcher */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--border-subtle)',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          gap: '4px',
          marginTop: '14px',
          paddingBottom: '2px'
        }}>
          {[
            { id: 'mcq', labelDesktop: `Part 1: MCQ (1-40)`, labelMobile: `P1: MCQ`, answered: answeredMcqCount, total: 40 },
            { id: 'id', labelDesktop: `Part 2: Identification (41-70)`, labelMobile: `P2: ID`, answered: answeredIdCount, total: 30 },
            { id: 'tf', labelDesktop: `Part 3: True or False (71-100)`, labelMobile: `P3: T/F`, answered: answeredTfCount, total: 30 },
            { id: 'lab', labelDesktop: `Part 4: Major SQL Lab Exam`, labelMobile: `P4: Lab`, answered: labPassed ? 1 : 0, total: 1 }
          ].map((part) => {
            const isActive = examPart === part.id;
            return (
              <button
                key={part.id}
                onClick={() => setExamPart(part.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: isActive ? 'rgba(225, 29, 72, 0.15)' : 'transparent',
                  border: 'none',
                  borderBottom: isActive ? '2px solid var(--pup-crimson)' : '2px solid transparent',
                  color: isActive ? '#fff' : 'var(--text-muted)',
                  padding: '9px 12px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
              >
                <span className="desktop-only-inline">{part.labelDesktop}</span>
                <span className="mobile-only-inline">{part.labelMobile}</span>
                <span style={{
                  fontSize: '0.68rem',
                  background: 'rgba(255,255,255,0.08)',
                  padding: '2px 5px',
                  borderRadius: '4px',
                  color: part.answered === part.total ? 'var(--accent-emerald)' : 'var(--text-muted)'
                }}>
                  {part.answered}/{part.total}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Navigator Drawer */}
        {showJumpDrawer && (
          <div style={{
            background: 'rgba(10, 16, 28, 0.98)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '14px',
            marginTop: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#fff' }}>
                Quick Question Navigator (Tap any number to jump)
              </span>
              <button
                onClick={() => setShowJumpDrawer(false)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.8rem' }}
              >
                Close ✕
              </button>
            </div>

            {/* MCQ 1-40 */}
            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--pup-gold)', fontWeight: 700, marginBottom: '5px' }}>
                Part 1: MCQ (Questions 1 - 40)
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {activeExam.mcq.map((q) => {
                  const isAns = mcqAnswers[q.id] !== undefined;
                  const isFl = flagged[q.id];
                  return (
                    <button
                      key={q.id}
                      onClick={() => scrollToQuestion(q.number, 'mcq')}
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '4px',
                        background: isFl ? 'rgba(245, 158, 11, 0.3)' : isAns ? 'rgba(16, 185, 129, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${isFl ? 'var(--pup-gold)' : isAns ? 'rgba(16, 185, 129, 0.5)' : 'var(--border-subtle)'}`,
                        color: isFl ? '#fde68a' : isAns ? '#a7f3d0' : '#94a3b8',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {q.number}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ID 41-70 */}
            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '5px' }}>
                Part 2: Identification (Questions 41 - 70)
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {activeExam.identification.map((q) => {
                  const isAns = (idAnswers[q.id] || '').trim().length > 0;
                  const isFl = flagged[q.id];
                  return (
                    <button
                      key={q.id}
                      onClick={() => scrollToQuestion(q.number, 'id')}
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '4px',
                        background: isFl ? 'rgba(245, 158, 11, 0.3)' : isAns ? 'rgba(56, 189, 248, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${isFl ? 'var(--pup-gold)' : isAns ? 'rgba(56, 189, 248, 0.5)' : 'var(--border-subtle)'}`,
                        color: isFl ? '#fde68a' : isAns ? '#bae6fd' : '#94a3b8',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {q.number}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TF 71-100 */}
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--accent-purple)', fontWeight: 700, marginBottom: '5px' }}>
                Part 3: True or False (Questions 71 - 100)
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {activeExam.trueOrFalse.map((q) => {
                  const isAns = tfAnswers[q.id] !== undefined;
                  const isFl = flagged[q.id];
                  return (
                    <button
                      key={q.id}
                      onClick={() => scrollToQuestion(q.number, 'tf')}
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '4px',
                        background: isFl ? 'rgba(245, 158, 11, 0.3)' : isAns ? 'rgba(168, 85, 247, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${isFl ? 'var(--pup-gold)' : isAns ? 'rgba(168, 85, 247, 0.5)' : 'var(--border-subtle)'}`,
                        color: isFl ? '#fde68a' : isAns ? '#e9d5ff' : '#94a3b8',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {q.number}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Part 1: MCQ View with INSTANT PER-CLICK FEEDBACK */}
      {examPart === 'mcq' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {activeExam.mcq.map((q) => {
            const selectedIdx = mcqAnswers[q.id];
            const isAnswered = selectedIdx !== undefined;
            const isUserCorrect = isAnswered && selectedIdx === q.correctAnswer;

            return (
              <div
                key={q.id}
                id={`exam-q-${q.number}`}
                className="glass-card"
                style={{
                  padding: '16px 14px',
                  borderLeft: flagged[q.id] ? '3px solid var(--pup-gold)' : undefined
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px', gap: '10px' }}>
                  <h4 style={{ fontSize: '0.94rem', fontWeight: 600, color: '#f8fafc', lineHeight: 1.5, wordBreak: 'break-word' }}>
                    <span style={{ color: 'var(--pup-crimson)', fontWeight: 800, marginRight: '6px' }}>
                      Q{q.number}.
                    </span>
                    {q.question}
                  </h4>
                  <button
                    onClick={() => toggleFlag(q.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: flagged[q.id] ? 'var(--pup-gold)' : 'var(--text-dim)',
                      cursor: 'pointer',
                      padding: '4px',
                      flexShrink: 0
                    }}
                    title="Flag for review"
                  >
                    <Flag size={16} />
                  </button>
                </div>

                {/* Shuffled Options A, B, C, D with Immediate Per-Click Validation */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selectedIdx === optIdx;
                    const isTheCorrectOption = optIdx === q.correctAnswer;

                    // Compute dynamic button color & styling based on instant answer state
                    let btnBg = 'rgba(255, 255, 255, 0.03)';
                    let btnBorder = 'var(--border-subtle)';
                    let btnColor = '#cbd5e1';
                    let letterBg = 'rgba(255, 255, 255, 0.08)';
                    let letterColor = 'var(--text-muted)';
                    let statusBadge = null;

                    if (isAnswered) {
                      if (isSelected) {
                        if (isUserCorrect) {
                          // Correct Choice
                          btnBg = 'rgba(16, 185, 129, 0.18)';
                          btnBorder = 'rgba(16, 185, 129, 0.8)';
                          btnColor = '#a7f3d0';
                          letterBg = 'var(--accent-emerald)';
                          letterColor = '#fff';
                          statusBadge = (
                            <span style={{
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              color: 'var(--accent-emerald)',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '3px',
                              background: 'rgba(16, 185, 129, 0.15)',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              marginLeft: 'auto'
                            }}>
                              <CheckCircle2 size={13} /> Correct
                            </span>
                          );
                        } else {
                          // Incorrect Choice
                          btnBg = 'rgba(225, 29, 72, 0.18)';
                          btnBorder = 'rgba(225, 29, 72, 0.8)';
                          btnColor = '#fda4af';
                          letterBg = 'var(--pup-crimson)';
                          letterColor = '#fff';
                          statusBadge = (
                            <span style={{
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              color: 'var(--pup-crimson)',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '3px',
                              background: 'rgba(225, 29, 72, 0.15)',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              marginLeft: 'auto'
                            }}>
                              <XCircle size={13} /> Your Choice
                            </span>
                          );
                        }
                      } else if (isTheCorrectOption && !isUserCorrect) {
                        // Reveal the true answer when user selected incorrectly
                        btnBg = 'rgba(16, 185, 129, 0.1)';
                        btnBorder = 'rgba(16, 185, 129, 0.5)';
                        btnColor = '#a7f3d0';
                        letterBg = 'rgba(16, 185, 129, 0.4)';
                        letterColor = '#fff';
                        statusBadge = (
                          <span style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            color: 'var(--accent-emerald)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '3px',
                            background: 'rgba(16, 185, 129, 0.15)',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            marginLeft: 'auto'
                          }}>
                            <CheckCircle2 size={13} /> Correct Answer
                          </span>
                        );
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectMcq(q.id, optIdx)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 14px',
                          borderRadius: 'var(--radius-md)',
                          background: btnBg,
                          border: `1px solid ${btnBorder}`,
                          color: btnColor,
                          textAlign: 'left',
                          cursor: 'pointer',
                          fontSize: '0.84rem',
                          transition: 'all 0.15s ease',
                          wordBreak: 'break-word',
                          lineHeight: 1.45
                        }}
                      >
                        <div style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: letterBg,
                          color: letterColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          flexShrink: 0
                        }}>
                          {String.fromCharCode(65 + optIdx)}
                        </div>
                        <span style={{ flex: 1 }}>{opt}</span>
                        {statusBadge}
                      </button>
                    );
                  })}
                </div>

                {/* Instant Feedback Card Revealed Immediately On Selection */}
                {isAnswered && (
                  <div style={{
                    marginTop: '12px',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: isUserCorrect ? 'rgba(16, 185, 129, 0.08)' : 'rgba(225, 29, 72, 0.08)',
                    border: `1px solid ${isUserCorrect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(225, 29, 72, 0.3)'}`
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      {isUserCorrect ? (
                        <>
                          <CheckCircle2 size={16} color="var(--accent-emerald)" />
                          <strong style={{ color: 'var(--accent-emerald)', fontSize: '0.84rem' }}>
                            Correct! Great job.
                          </strong>
                        </>
                      ) : (
                        <>
                          <XCircle size={16} color="var(--pup-crimson)" />
                          <strong style={{ color: 'var(--pup-crimson)', fontSize: '0.84rem' }}>
                            Incorrect — Correct answer: Option {String.fromCharCode(65 + q.correctAnswer)}: {q.options[q.correctAnswer]}
                          </strong>
                        </>
                      )}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                      {q.explanation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Part 2: Identification View with Check & Instant Feedback */}
      {examPart === 'id' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{
            background: 'rgba(56, 189, 248, 0.06)',
            padding: '12px 16px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            fontSize: '0.84rem',
            color: '#cbd5e1'
          }}>
            Type your answer and tap <strong>Check Answer</strong> (or press Enter). Feedback is evaluated immediately against the course material.
          </div>

          {activeExam.identification.map((q) => {
            const evalState = idEvaluated[q.id];
            const isChecked = evalState && evalState.checked;
            const isUserMatch = isChecked && evalState.isMatch;

            return (
              <div key={q.id} id={`exam-q-${q.number}`} className="glass-card" style={{ padding: '16px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: '#f8fafc', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 800, marginRight: '6px' }}>
                      Q{q.number}.
                    </span>
                    {q.question}
                  </h4>
                  <button
                    onClick={() => toggleFlag(q.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: flagged[q.id] ? 'var(--pup-gold)' : 'var(--text-dim)',
                      cursor: 'pointer'
                    }}
                  >
                    <Flag size={16} />
                  </button>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <input
                    type="text"
                    value={idAnswers[q.id] || ''}
                    onChange={(e) => handleInputId(q.id, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleCheckIdAnswer(q);
                    }}
                    placeholder="Type your answer here..."
                    style={{
                      flex: 1,
                      minWidth: '200px',
                      background: '#090e1a',
                      border: `1px solid ${
                        isChecked
                          ? isUserMatch
                            ? 'rgba(16, 185, 129, 0.8)'
                            : 'rgba(225, 29, 72, 0.8)'
                          : 'var(--border-subtle)'
                      }`,
                      borderRadius: 'var(--radius-md)',
                      padding: '10px 14px',
                      color: '#fff',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                  <button
                    onClick={() => handleCheckIdAnswer(q)}
                    className="btn btn-primary"
                    style={{ fontSize: '0.8rem', padding: '10px 14px', whiteSpace: 'nowrap' }}
                  >
                    <Send size={14} style={{ marginRight: '4px' }} /> Check Answer
                  </button>
                </div>

                {/* Instant Feedback for Identification */}
                {isChecked && (
                  <div style={{
                    marginTop: '12px',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: isUserMatch ? 'rgba(16, 185, 129, 0.08)' : 'rgba(225, 29, 72, 0.08)',
                    border: `1px solid ${isUserMatch ? 'rgba(16, 185, 129, 0.3)' : 'rgba(225, 29, 72, 0.3)'}`
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      {isUserMatch ? (
                        <>
                          <CheckCircle2 size={16} color="var(--accent-emerald)" />
                          <strong style={{ color: 'var(--accent-emerald)', fontSize: '0.84rem' }}>
                            Correct! Exact course match.
                          </strong>
                        </>
                      ) : (
                        <>
                          <XCircle size={16} color="var(--pup-crimson)" />
                          <strong style={{ color: 'var(--pup-crimson)', fontSize: '0.84rem' }}>
                            Incorrect — Accepted Answer: {q.correctAnswerDisplay || q.correctAnswer}
                          </strong>
                        </>
                      )}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                      {q.explanation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Part 3: True or False View with INSTANT PER-CLICK FEEDBACK */}
      {examPart === 'tf' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {activeExam.trueOrFalse.map((q) => {
            const userChoice = tfAnswers[q.id];
            const isAnswered = userChoice !== undefined;
            const isUserCorrect = isAnswered && userChoice === q.correctAnswer;

            return (
              <div key={q.id} id={`exam-q-${q.number}`} className="glass-card" style={{ padding: '16px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: '#f8fafc', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--accent-purple)', fontWeight: 800, marginRight: '6px' }}>
                      Q{q.number}.
                    </span>
                    {q.statement}
                  </h4>
                  <button
                    onClick={() => toggleFlag(q.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: flagged[q.id] ? 'var(--pup-gold)' : 'var(--text-dim)',
                      cursor: 'pointer'
                    }}
                  >
                    <Flag size={16} />
                  </button>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  {[true, false].map((val) => {
                    const isSelected = userChoice === val;
                    const isTheCorrectStatement = val === q.correctAnswer;

                    let btnBg = 'rgba(255, 255, 255, 0.03)';
                    let btnBorder = 'var(--border-subtle)';
                    let btnColor = '#cbd5e1';

                    if (isAnswered) {
                      if (isSelected) {
                        if (isUserCorrect) {
                          btnBg = 'rgba(16, 185, 129, 0.2)';
                          btnBorder = 'rgba(16, 185, 129, 0.8)';
                          btnColor = '#a7f3d0';
                        } else {
                          btnBg = 'rgba(225, 29, 72, 0.2)';
                          btnBorder = 'rgba(225, 29, 72, 0.8)';
                          btnColor = '#fda4af';
                        }
                      } else if (isTheCorrectStatement && !isUserCorrect) {
                        btnBg = 'rgba(16, 185, 129, 0.1)';
                        btnBorder = 'rgba(16, 185, 129, 0.5)';
                        btnColor = '#a7f3d0';
                      }
                    }

                    return (
                      <button
                        key={String(val)}
                        onClick={() => handleSelectTf(q.id, val)}
                        style={{
                          flex: 1,
                          padding: '12px',
                          borderRadius: 'var(--radius-md)',
                          background: btnBg,
                          border: `1px solid ${btnBorder}`,
                          color: btnColor,
                          cursor: 'pointer',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          transition: 'all 0.15s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                      >
                        {isAnswered && isSelected && (isUserCorrect ? <Check size={16} /> : <X size={16} />)}
                        {val ? 'TRUE' : 'FALSE'}
                      </button>
                    );
                  })}
                </div>

                {/* Instant Feedback Card Revealed Immediately */}
                {isAnswered && (
                  <div style={{
                    marginTop: '12px',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: isUserCorrect ? 'rgba(16, 185, 129, 0.08)' : 'rgba(225, 29, 72, 0.08)',
                    border: `1px solid ${isUserCorrect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(225, 29, 72, 0.3)'}`
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      {isUserCorrect ? (
                        <>
                          <CheckCircle2 size={16} color="var(--accent-emerald)" />
                          <strong style={{ color: 'var(--accent-emerald)', fontSize: '0.84rem' }}>
                            Correct Statement!
                          </strong>
                        </>
                      ) : (
                        <>
                          <XCircle size={16} color="var(--pup-crimson)" />
                          <strong style={{ color: 'var(--pup-crimson)', fontSize: '0.84rem' }}>
                            Incorrect — The statement is actually {q.correctAnswer ? 'TRUE' : 'FALSE'}.
                          </strong>
                        </>
                      )}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                      {q.explanation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Part 4: Major SQL Lab Exam View */}
      {examPart === 'lab' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <ErdViewer />

          <div className="glass-card" style={{ padding: '20px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '14px',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
                    Required Sample Output (7 Columns)
                  </h3>
                  <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>
                    NO HINTS PROVIDED
                  </span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Your SQL query must produce this exact dataset. You must use: <strong style={{ color: '#fff' }}>LEFT JOIN</strong>, <strong style={{ color: '#fff' }}>INNER JOIN</strong>, <strong style={{ color: '#fff' }}>WHERE</strong>, and <strong style={{ color: '#fff' }}>ORDER BY</strong>.
                </p>
              </div>

              {/* Toggle view: MySQL Console vs Table Grid */}
              <div style={{
                display: 'flex',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 'var(--radius-sm)',
                padding: '2px',
                border: '1px solid var(--border-subtle)'
              }}>
                <button
                  onClick={() => setSampleOutputView('terminal')}
                  style={{
                    background: sampleOutputView === 'terminal' ? 'var(--pup-crimson)' : 'transparent',
                    border: 'none',
                    color: '#fff',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  MySQL Terminal Output
                </button>
                <button
                  onClick={() => setSampleOutputView('grid')}
                  style={{
                    background: sampleOutputView === 'grid' ? 'var(--pup-crimson)' : 'transparent',
                    border: 'none',
                    color: '#fff',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Interactive Grid
                </button>
              </div>
            </div>

            {/* Display Mode 1: MySQL ASCII console */}
            {sampleOutputView === 'terminal' ? (
              <div style={{
                background: '#04070f',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: 'var(--radius-md)',
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '7px 12px'
                }}>
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }}></span>
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }}></span>
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                  <span style={{ fontSize: '0.73rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginLeft: '6px' }}>
                    XAMPP for Windows - mysql (Target Result Table)
                  </span>
                </div>
                <div className="mobile-only-inline" style={{
                  fontSize: '0.72rem',
                  color: 'var(--accent-cyan)',
                  padding: '5px 12px',
                  background: 'rgba(56, 189, 248, 0.08)',
                  borderBottom: '1px solid rgba(56, 189, 248, 0.2)'
                }}>
                  ↔ Swipe horizontally to view all 7 columns (or toggle Interactive Grid)
                </div>
                <pre style={{
                  margin: 0,
                  padding: '12px 14px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(0.62rem, 1.8vw, 0.77rem)',
                  color: '#38bdf8',
                  lineHeight: 1.45,
                  overflowX: 'auto',
                  WebkitOverflowScrolling: 'touch'
                }}>
                  <code>{activeExam.labExam.asciiOutput || `+-------------+---------------------------+-------------------------------------+------------------+-----------------+-----------+------------------+
| orderNumber | customerName              | productName                         | productLine      | quantityOrdered | priceEach | salesRepName     |
+-------------+---------------------------+-------------------------------------+------------------+-----------------+-----------+------------------+
|       10101 | Atelier graphique         | 1969 Harley Davidson Ultimate Chop  | Motorcycles      |              25 |     95.70 | Gerard Hernandez |
|       10101 | Atelier graphique         | 1952 Alpine Renault 1300            | Classic Cars     |              30 |    214.30 | Gerard Hernandez |
|       10102 | Signal Gift Stores        | 1968 Ford Mustang                   | Classic Cars     |              45 |    120.50 | Leslie Jennings  |
|       10102 | Signal Gift Stores        | 1917 Grand Touring Car              | Vintage Cars     |              18 |     86.20 | Leslie Jennings  |
|       10103 | Australian Collectors, Co | 1996 Moto Guzzi 1100i               | Motorcycles      |              35 |    110.00 | Andy Fixter      |
|       10104 | La Rochelle Gifts         | 1960 BSA Gold Star DBD34            | Motorcycles      |              22 |     75.40 | Gerard Hernandez |
|       10105 | Baane Mini Imports        | 1969 Dodge Charger                  | Classic Cars     |              28 |    135.80 | Barry Jones      |
+-------------+---------------------------+-------------------------------------+------------------+-----------------+-----------+------------------+`}</code>
                </pre>
              </div>
            ) : (
              <div style={{
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                background: '#070b16'
              }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)'
                }}>
                  <thead>
                    <tr style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                      {activeExam.labExam.requiredColumns.map((col, idx) => (
                        <th key={idx} style={{ padding: '8px 12px', textAlign: 'left', color: 'var(--accent-cyan)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {activeExam.labExam.sampleOutputGrid.map((row, rIdx) => (
                      <tr key={rIdx} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        {activeExam.labExam.requiredColumns.map((col, cIdx) => (
                          <td key={cIdx} style={{ padding: '6px 12px', color: '#e2e8f0', whiteSpace: 'nowrap' }}>
                            {row[col] === null ? (
                              <span style={{ color: 'var(--pup-gold)', fontStyle: 'italic' }}>NULL</span>
                            ) : (
                              row[col]
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <LabConsole
            labActivity={{
              title: activeExam.labExam.title,
              description: activeExam.labExam.scenario,
              instructions: activeExam.labExam.instructions,
              requiredClauses: activeExam.labExam.requiredClauses,
              expectedOutput: activeExam.labExam.sampleOutputGrid,
              starterSql: `-- Type your examination SQL query below\n-- Strictly NO hints are provided. Use required clauses to produce the target output.\n`
            }}
            onLabPassed={() => setLabPassed(true)}
          />
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmSubmit && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 200,
          padding: '16px'
        }}>
          <div className="glass-card animate-fade-in" style={{ maxWidth: '440px', width: '100%', padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <AlertTriangle size={28} color="var(--pup-gold)" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>
                Confirm Exam Submission
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.5 }}>
              You have answered <strong>{totalAnswered} of 100 theoretical questions</strong>.
              {totalAnswered < 100 && (
                <span style={{ display: 'block', marginTop: '6px', color: '#fda4af' }}>
                  Warning: You have {100 - totalAnswered} unanswered questions remaining.
                </span>
              )}
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="btn btn-secondary"
              >
                Back to Questions
              </button>
              <button
                onClick={handleSubmitExam}
                className="btn btn-primary"
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
