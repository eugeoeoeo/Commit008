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
  AlertTriangle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EXAM_DATA } from '../data/examData.js';
import ErdViewer from './ErdViewer.jsx';
import LabConsole from './LabConsole.jsx';
import { saveExamAttempt } from '../utils/storage.js';

export default function ExamEngine({ onExamComplete }) {
  const [examPart, setExamPart] = useState('mcq'); // 'mcq' | 'id' | 'tf' | 'lab'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showJumpDrawer, setShowJumpDrawer] = useState(false);

  // User state
  const [mcqAnswers, setMcqAnswers] = useState({}); // { [id]: selectedIdx }
  const [idAnswers, setIdAnswers] = useState({});   // { [id]: userText }
  const [tfAnswers, setTfAnswers] = useState({});   // { [id]: boolean }
  const [flagged, setFlagged] = useState({});       // { [id]: boolean }
  const [labPassed, setLabPassed] = useState(false);
  const [sampleOutputView, setSampleOutputView] = useState('terminal'); // 'terminal' | 'grid'

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

  // Timer
  const [secondsLeft, setSecondsLeft] = useState(90 * 60); // 90 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Submission & Results
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resultSummary, setResultSummary] = useState(null);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

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

  const handleSelectMcq = (qId, optionIdx) => {
    if (isSubmitted) return;
    setMcqAnswers({ ...mcqAnswers, [qId]: optionIdx });
  };

  const handleInputId = (qId, text) => {
    if (isSubmitted) return;
    setIdAnswers({ ...idAnswers, [qId]: text });
  };

  const handleSelectTf = (qId, val) => {
    if (isSubmitted) return;
    setTfAnswers({ ...tfAnswers, [qId]: val });
  };

  const toggleFlag = (id) => {
    setFlagged({ ...flagged, [id]: !flagged[id] });
  };

  const handleSubmitExam = () => {
    setShowConfirmSubmit(false);
    setIsTimerRunning(false);
    setIsSubmitted(true);

    // Calculate MCQ score (out of 40)
    let mcqScore = 0;
    EXAM_DATA.mcq.forEach((q) => {
      if (mcqAnswers[q.id] === q.correctAnswer) mcqScore++;
    });

    // Calculate Identification score (out of 30)
    let idScore = 0;
    EXAM_DATA.identification.forEach((q) => {
      const userText = (idAnswers[q.id] || '').trim().toLowerCase();
      if (!userText) return;
      const isMatch = q.acceptedAnswers.some(
        (ans) => ans.toLowerCase().trim() === userText
      );
      if (isMatch) idScore++;
    });

    // Calculate True/False score (out of 30)
    let tfScore = 0;
    EXAM_DATA.trueOrFalse.forEach((q) => {
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
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch (e) {}
    }

    if (onExamComplete) onExamComplete(summary);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setMcqAnswers({});
    setIdAnswers({});
    setTfAnswers({});
    setFlagged({});
    setLabPassed(false);
    setSecondsLeft(90 * 60);
    setIsTimerRunning(true);
    setIsSubmitted(false);
    setResultSummary(null);
    setCurrentQuestionIndex(0);
    setExamPart('mcq');
  };

  // Answered count calculation
  const answeredMcqCount = Object.keys(mcqAnswers).length;
  const answeredIdCount = Object.values(idAnswers).filter((t) => t.trim().length > 0).length;
  const answeredTfCount = Object.keys(tfAnswers).length;
  const totalAnswered = answeredMcqCount + answeredIdCount + answeredTfCount;

  // Render Submitted Summary Screen
  if (isSubmitted && resultSummary) {
    return (
      <div className="glass-card animate-fade-in" style={{ padding: '30px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            display: 'inline-flex',
            padding: '20px',
            borderRadius: '50%',
            background: resultSummary.passed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(225, 29, 72, 0.15)',
            color: resultSummary.passed ? 'var(--accent-emerald)' : 'var(--pup-crimson)',
            marginBottom: '16px'
          }}>
            <Award size={56} />
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
            {resultSummary.passed ? 'Midterm Examination Passed!' : 'Examination Needs Further Review'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Polytechnic University of the Philippines • COMP 008 Database Administration
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginTop: '24px',
            marginBottom: '24px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '18px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>TOTAL THEORETICAL SCORE</div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: resultSummary.passed ? 'var(--accent-emerald)' : 'var(--pup-crimson)' }}>
                {resultSummary.totalScore} / 100
              </div>
              <div style={{ fontSize: '0.8rem', color: resultSummary.passed ? '#a7f3d0' : '#fda4af', fontWeight: 600 }}>
                {resultSummary.totalScore}% ({resultSummary.passed ? 'PASSED' : 'FAILED - 75% required'})
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '18px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>PART 1: MCQ (40 ITEMS)</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--pup-gold)' }}>
                {resultSummary.mcqScore} / 40
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                {Math.round((resultSummary.mcqScore / 40) * 100)}% accuracy
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '18px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>PART 2: IDENTIFICATION (30 ITEMS)</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                {resultSummary.idScore} / 30
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                {Math.round((resultSummary.idScore / 30) * 100)}% accuracy
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '18px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>PART 3: TRUE OR FALSE (30 ITEMS)</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-purple)' }}>
                {resultSummary.tfScore} / 30
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                {Math.round((resultSummary.tfScore / 30) * 100)}% accuracy
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '32px' }}>
            <button onClick={handleRetake} className="btn btn-secondary">
              <RotateCcw size={16} /> Retake Examination
            </button>
            <button onClick={() => setExamPart('mcq')} className="btn btn-primary">
              Review Detailed Answers Below
            </button>
          </div>
        </div>

        {/* Detailed Question Review Section */}
        <div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
            Detailed Item Review (100 Questions)
          </h3>

          {/* Part Switcher for Review */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', overflowX: 'auto', WebkitOverflowScrolling: 'touch', paddingBottom: '4px' }}>
            <button
              onClick={() => setExamPart('mcq')}
              className={`btn ${examPart === 'mcq' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.8rem', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              Part 1: MCQ ({resultSummary.mcqScore}/40)
            </button>
            <button
              onClick={() => setExamPart('id')}
              className={`btn ${examPart === 'id' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.8rem', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              Part 2: ID ({resultSummary.idScore}/30)
            </button>
            <button
              onClick={() => setExamPart('tf')}
              className={`btn ${examPart === 'tf' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.8rem', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              Part 3: T/F ({resultSummary.tfScore}/30)
            </button>
            <button
              onClick={() => setExamPart('lab')}
              className={`btn ${examPart === 'lab' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.8rem', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              Part 4: Major SQL Lab Exam
            </button>
          </div>

          {examPart === 'mcq' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {EXAM_DATA.mcq.map((q) => {
                const userAns = mcqAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;
                return (
                  <div key={q.id} style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${isCorrect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(225, 29, 72, 0.3)'}`
                  }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      {isCorrect ? <CheckCircle2 size={18} color="var(--accent-emerald)" /> : <XCircle size={18} color="var(--pup-crimson)" />}
                      <div style={{ fontSize: '0.88rem' }}>
                        <div style={{ fontWeight: 600, color: '#f8fafc', marginBottom: '4px' }}>
                          {q.number}. {q.question}
                        </div>
                        <div style={{ color: isCorrect ? '#a7f3d0' : '#fda4af', marginBottom: '3px' }}>
                          Your answer: {q.options[userAns] || 'Unanswered'}
                        </div>
                        {!isCorrect && (
                          <div style={{ color: '#a7f3d0', marginBottom: '3px' }}>
                            Correct answer: {q.options[q.correctAnswer]}
                          </div>
                        )}
                        <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem', marginTop: '4px' }}>
                          {q.explanation}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {examPart === 'id' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {EXAM_DATA.identification.map((q) => {
                const userText = (idAnswers[q.id] || '').trim().toLowerCase();
                const isMatch = q.acceptedAnswers.some((ans) => ans.toLowerCase().trim() === userText);
                return (
                  <div key={q.id} style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${isMatch ? 'rgba(16, 185, 129, 0.3)' : 'rgba(225, 29, 72, 0.3)'}`
                  }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      {isMatch ? <CheckCircle2 size={18} color="var(--accent-emerald)" /> : <XCircle size={18} color="var(--pup-crimson)" />}
                      <div style={{ fontSize: '0.88rem' }}>
                        <div style={{ fontWeight: 600, color: '#f8fafc', marginBottom: '4px' }}>
                          {q.number}. {q.question}
                        </div>
                        <div style={{ color: isMatch ? '#a7f3d0' : '#fda4af', marginBottom: '3px' }}>
                          Your answer: "{idAnswers[q.id] || 'Blank'}"
                        </div>
                        <div style={{ color: '#a7f3d0', marginBottom: '3px' }}>
                          Accepted answer: {q.correctAnswer}
                        </div>
                        <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem', marginTop: '4px' }}>
                          {q.explanation}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {examPart === 'tf' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {EXAM_DATA.trueOrFalse.map((q) => {
                const userAns = tfAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;
                return (
                  <div key={q.id} style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${isCorrect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(225, 29, 72, 0.3)'}`
                  }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      {isCorrect ? <CheckCircle2 size={18} color="var(--accent-emerald)" /> : <XCircle size={18} color="var(--pup-crimson)" />}
                      <div style={{ fontSize: '0.88rem' }}>
                        <div style={{ fontWeight: 600, color: '#f8fafc', marginBottom: '4px' }}>
                          {q.number}. {q.statement}
                        </div>
                        <div style={{ color: isCorrect ? '#a7f3d0' : '#fda4af', marginBottom: '3px' }}>
                          Your answer: {userAns === undefined ? 'Unanswered' : userAns ? 'True' : 'False'}
                        </div>
                        <div style={{ color: '#a7f3d0', marginBottom: '3px' }}>
                          Correct answer: {q.correctAnswer ? 'True' : 'False'}
                        </div>
                        <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem', marginTop: '4px' }}>
                          {q.explanation}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {examPart === 'lab' && (
            <div>
              <ErdViewer />
              <div style={{ marginTop: '20px' }}>
                <LabConsole
                  labActivity={{
                    title: EXAM_DATA.labExam.title,
                    description: EXAM_DATA.labExam.scenario,
                    instructions: EXAM_DATA.labExam.instructions,
                    requiredClauses: EXAM_DATA.labExam.requiredClauses,
                    expectedOutput: EXAM_DATA.labExam.sampleOutputGrid,
                    starterSql: EXAM_DATA.labExam.canonicalQuery
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Active Exam View
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
      {/* Exam Header Bar */}
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
                100 Items + Major Lab
              </span>
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
              Database Administration (COMP 008)
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Answer all 100 questions and complete the Major Practical Relational Joins Laboratory.
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
              Submit ({totalAnswered}/100)
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

        {/* Quick Question Jump Navigator Drawer */}
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
                {EXAM_DATA.mcq.map((q) => {
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
                {EXAM_DATA.identification.map((q) => {
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
                {EXAM_DATA.trueOrFalse.map((q) => {
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

      {/* Part 1: MCQ View */}
      {examPart === 'mcq' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {EXAM_DATA.mcq.map((q, idx) => (
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

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {q.options.map((opt, optIdx) => {
                  const isSelected = mcqAnswers[q.id] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectMcq(q.id, optIdx)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-md)',
                        background: isSelected ? 'rgba(225, 29, 72, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        border: `1px solid ${isSelected ? 'rgba(225, 29, 72, 0.6)' : 'var(--border-subtle)'}`,
                        color: isSelected ? '#fff' : '#cbd5e1',
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
                        background: isSelected ? 'var(--pup-crimson)' : 'rgba(255, 255, 255, 0.08)',
                        color: isSelected ? '#fff' : 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: '1px'
                      }}>
                        {String.fromCharCode(65 + optIdx)}
                      </div>
                      <span style={{ flex: 1 }}>{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Part 2: Identification View */}
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
            Type your answer in the box provided. Answers are based verbatim on the course instructional material. Spelling matters, but casing is flexible.
          </div>

          {EXAM_DATA.identification.map((q) => (
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

              <input
                type="text"
                value={idAnswers[q.id] || ''}
                onChange={(e) => handleInputId(q.id, e.target.value)}
                placeholder="Type your answer here..."
                style={{
                  width: '100%',
                  background: '#090e1a',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 16px',
                  color: '#fff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Part 3: True or False View */}
      {examPart === 'tf' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {EXAM_DATA.trueOrFalse.map((q) => (
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
                  const isSelected = tfAnswers[q.id] === val;
                  return (
                    <button
                      key={String(val)}
                      onClick={() => handleSelectTf(q.id, val)}
                      style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: 'var(--radius-md)',
                        background: isSelected
                          ? val
                            ? 'rgba(16, 185, 129, 0.2)'
                            : 'rgba(225, 29, 72, 0.2)'
                          : 'rgba(255, 255, 255, 0.03)',
                        border: `1px solid ${
                          isSelected
                            ? val
                              ? 'rgba(16, 185, 129, 0.6)'
                              : 'rgba(225, 29, 72, 0.6)'
                            : 'var(--border-subtle)'
                        }`,
                        color: isSelected ? '#fff' : '#cbd5e1',
                        cursor: 'pointer',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {val ? 'TRUE' : 'FALSE'}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Part 4: Major SQL Lab Exam View */}
      {examPart === 'lab' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* ERD Diagram with 6 Tables and Connection Lines */}
          <ErdViewer />

          {/* Target Sample Output Table (6-8 Columns) matching Prof. Contreras Image 2 */}
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

            {/* Display Mode 1: Exact MySQL Console ASCII format as shown on Prof's Screen (Image 2) */}
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
                  <code>{EXAM_DATA.labExam.asciiOutput}</code>
                </pre>
              </div>
            ) : (
              /* Display Mode 2: HTML Table Grid */
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
                      {EXAM_DATA.labExam.requiredColumns.map((col, idx) => (
                        <th key={idx} style={{ padding: '8px 12px', textAlign: 'left', color: 'var(--accent-cyan)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {EXAM_DATA.labExam.sampleOutputGrid.map((row, rIdx) => (
                      <tr key={rIdx} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        {EXAM_DATA.labExam.requiredColumns.map((col, cIdx) => (
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

          {/* Interactive Console for Lab Exam with STRICTLY NO HINTS */}
          <LabConsole
            labActivity={{
              title: EXAM_DATA.labExam.title,
              description: EXAM_DATA.labExam.scenario,
              instructions: EXAM_DATA.labExam.instructions,
              requiredClauses: EXAM_DATA.labExam.requiredClauses,
              expectedOutput: EXAM_DATA.labExam.sampleOutputGrid,
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
