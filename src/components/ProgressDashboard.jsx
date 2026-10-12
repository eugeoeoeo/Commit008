import React from 'react';
import {
  Award,
  CheckCircle2,
  BookOpen,
  Terminal,
  RotateCcw,
  TrendingUp,
  BarChart,
  Calendar,
  Sparkles,
  Zap,
  Download,
  Upload,
  HardDrive
} from 'lucide-react';
import { MODULES_DATA } from '../data/modulesData.js';
import { resetAllProgress, exportProgressJSON, importProgressJSON } from '../utils/storage.js';

export default function ProgressDashboard({ userProgress, onResetProgress, onSelectLesson, setActiveTab }) {
  const totalLessons = 18;
  const completedLessonsCount = Object.keys(userProgress?.completedLessons || {}).length;
  const completedLabsCount = Object.keys(userProgress?.labCompleted || {}).length;

  const quizScoresList = Object.values(userProgress?.quizScores || {});
  const avgQuizScore = quizScoresList.length > 0
    ? Math.round(quizScoresList.reduce((acc, q) => acc + q.percentage, 0) / quizScoresList.length)
    : 0;

  const examAttempts = userProgress?.examAttempts || [];
  const latestExam = examAttempts[0] || null;

  // Calculate readiness score
  const completionWeight = (completedLessonsCount / totalLessons) * 40;
  const quizWeight = (avgQuizScore / 100) * 30;
  const examWeight = latestExam ? (latestExam.totalScore / 100) * 30 : 0;
  const readinessIndex = Math.round(completionWeight + quizWeight + examWeight);
  const [statusMsg, setStatusMsg] = React.useState(null);
  const fileInputRef = React.useRef(null);

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all your progress, quiz scores, and exam attempts?')) {
      const reset = resetAllProgress();
      if (onResetProgress) onResetProgress(reset);
      setStatusMsg('All progress data has been reset to defaults.');
      setTimeout(() => setStatusMsg(null), 4000);
    }
  };

  const handleExport = () => {
    exportProgressJSON();
    setStatusMsg('Backup downloaded to your device!');
    setTimeout(() => setStatusMsg(null), 4000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        const result = importProgressJSON(content);
        if (result.success) {
          if (onResetProgress) onResetProgress(result.state);
          setStatusMsg('Backup successfully restored to this device!');
        } else {
          alert('Failed to import backup: ' + result.error);
        }
      }
    };
    reader.readAsText(file);
    // Reset file input
    e.target.value = '';
    setTimeout(() => setStatusMsg(null), 4000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Top Banner */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <span className="badge badge-crimson" style={{ marginBottom: '6px' }}>
              Student Analytics & Readiness Index
            </span>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>
              Midterm Performance Dashboard
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Track your mastery across all 5 course modules, quizzes, and laboratory practicals.
            </p>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            background: 'rgba(255, 255, 255, 0.04)',
            padding: '12px 20px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)'
          }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>EXAM READINESS</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: readinessIndex >= 75 ? 'var(--accent-emerald)' : 'var(--pup-gold)' }}>
                {readinessIndex}%
              </div>
            </div>
            <Zap size={28} color={readinessIndex >= 75 ? 'var(--accent-emerald)' : 'var(--pup-gold)'} />
          </div>
        </div>
      </div>

      {/* 3 Metric Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))',
        gap: '14px'
      }}>
        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LESSONS COMPLETED</span>
            <BookOpen size={18} color="var(--pup-crimson)" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
            {completedLessonsCount} / {totalLessons}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
            {Math.round((completedLessonsCount / totalLessons) * 100)}% curriculum covered
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>AVERAGE QUIZ SCORE</span>
            <Award size={18} color="var(--pup-gold)" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
            {avgQuizScore}%
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Across {quizScoresList.length} completed quizzes
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LAB PRACTICALS PASSED</span>
            <Terminal size={18} color="var(--accent-emerald)" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
            {completedLabsCount} / {totalLessons}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)' }}>
            Hands-on query exercises
          </div>
        </div>
      </div>

      {/* Module by Module Progress Table */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
          Curriculum Modules & Lesson Mastery
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {MODULES_DATA.map((module) => {
            const moduleLessons = module.lessons;
            const modCompleted = moduleLessons.filter((l) => userProgress?.completedLessons?.[l.id]).length;
            const modPercentage = Math.round((modCompleted / moduleLessons.length) * 100);

            return (
              <div
                key={module.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
                      Module {module.moduleNumber}: {module.title}
                    </h4>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                      {modCompleted} of {moduleLessons.length} lessons mastered ({modPercentage}%)
                    </span>
                  </div>
                  <div style={{
                    width: '60px',
                    height: '6px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${modPercentage}%`,
                      height: '100%',
                      background: 'var(--pup-crimson)'
                    }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(170px, 100%), 1fr))', gap: '8px' }}>
                  {moduleLessons.map((l) => {
                    const isDone = userProgress?.completedLessons?.[l.id];
                    const qSc = userProgress?.quizScores?.[l.id];

                    return (
                      <button
                        key={l.id}
                        onClick={() => {
                          onSelectLesson(l.id);
                          setActiveTab('lessons');
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-sm)',
                          background: isDone ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                          border: `1px solid ${isDone ? 'rgba(16, 185, 129, 0.25)' : 'var(--border-subtle)'}`,
                          color: '#e2e8f0',
                          fontSize: '0.78rem',
                          textAlign: 'left',
                          cursor: 'pointer'
                        }}
                      >
                        <span style={{ flex: 1, minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginRight: '6px' }}>
                          L{l.lessonNumber}: {l.title}
                        </span>
                        {isDone ? (
                          <CheckCircle2 size={14} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                        ) : qSc ? (
                          <span style={{ fontSize: '0.7rem', color: 'var(--pup-gold)', flexShrink: 0 }}>{qSc.percentage}%</span>
                        ) : (
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', flexShrink: 0 }}>—</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Practice Exam Attempts History */}
      {examAttempts.length > 0 && (
        <div className="glass-card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
            100-Item Practice Exam History
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {examAttempts.map((att, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>Score: {att.totalScore} / 100</span>
                    <span className={`badge ${att.passed ? 'badge-emerald' : 'badge-crimson'}`} style={{ fontSize: '0.68rem' }}>
                      {att.passed ? 'PASSED' : 'FAILED'}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '3px' }}>
                    MCQ: {att.mcqScore}/40 • ID: {att.idScore}/30 • T/F: {att.tfScore}/30 • {new Date(att.date).toLocaleDateString()}
                  </div>
                </div>

                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: att.passed ? 'var(--accent-emerald)' : 'var(--pup-crimson)' }}>
                  {att.totalScore}%
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Device Storage & Backup Center */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: statusMsg ? '14px' : '0' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <HardDrive size={18} color="var(--accent-cyan)" />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>
                Per-Device Local Storage Management
              </h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              All your quiz scores, completed labs, and 100-item practice exam attempts are saved strictly on this device's browser storage (<code style={{ color: 'var(--accent-cyan)' }}>localStorage</code>).
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', width: '100%' }}>
            <button
              onClick={handleExport}
              className="btn btn-secondary"
              style={{ fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '6px', flex: '1 1 180px', justifyContent: 'center' }}
            >
              <Download size={15} color="var(--accent-cyan)" />
              <span>Export Backup (.json)</span>
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="btn btn-secondary"
              style={{ fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '6px', flex: '1 1 180px', justifyContent: 'center' }}
            >
              <Upload size={15} color="var(--pup-gold)" />
              <span>Import / Restore (.json)</span>
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
        </div>

        {statusMsg && (
          <div style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: 'var(--accent-emerald)',
            padding: '10px 14px',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.84rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <CheckCircle2 size={16} />
            <span>{statusMsg}</span>
          </div>
        )}
      </div>

      {/* Danger Zone: Reset */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
        <button
          onClick={handleReset}
          className="btn btn-secondary"
          style={{ fontSize: '0.8rem', color: 'var(--pup-crimson)' }}
        >
          <RotateCcw size={14} /> Reset All Progress Data
        </button>
      </div>
    </div>
  );
}
