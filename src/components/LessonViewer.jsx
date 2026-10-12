import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Terminal,
  Lightbulb,
  Award,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Search,
  Check,
  Layers,
  ArrowRight,
  ArrowLeft,
  ListOrdered
} from 'lucide-react';
import { MODULES_DATA } from '../data/modulesData.js';
import { QUIZZES_DATA } from '../data/quizzesData.js';
import { LAB_ACTIVITIES_DATA } from '../data/labActivitiesData.js';
import QuizModal from './QuizModal.jsx';
import LabConsole from './LabConsole.jsx';
import { markLessonComplete, saveQuizResult, markLabComplete } from '../utils/storage.js';

// Student-friendly text formatter that converts **bold** and `code` into styled elements
function FormattedLessonText({ text }) {
  if (!text) return null;

  // Split text by lines to preserve paragraphs and code blocks
  const paragraphs = text.split('\n\n');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', lineHeight: 1.75 }}>
      {paragraphs.map((para, pIdx) => {
        const trimmed = para.trim();
        if (!trimmed) return null;

        // Check if paragraph is a code block
        if (trimmed.startsWith('```') && trimmed.endsWith('```')) {
          const lines = trimmed.slice(3, -3).trim().split('\n');
          const lang = lines[0].match(/^[a-z]+/i) ? lines[0] : '';
          const codeContent = lang ? lines.slice(1).join('\n') : lines.join('\n');
          return (
            <div key={pIdx} className="code-container" style={{ margin: '8px 0' }}>
              <pre style={{ margin: 0 }}>
                <code>{codeContent}</code>
              </pre>
            </div>
          );
        }

        // Render formatted text with bolding and inline code
        const renderFormattedLine = (line) => {
          // Replace `code` and **bold**
          const parts = [];
          let remaining = line;
          let keyIdx = 0;

          // Regex matching **bold** or `code`
          const regex = /(\*\*([^*]+)\*\*|`([^`]+)`)/g;
          let match;
          let lastIndex = 0;

          while ((match = regex.exec(line)) !== null) {
            // Push plain text before match
            if (match.index > lastIndex) {
              parts.push(line.substring(lastIndex, match.index));
            }

            if (match[2]) {
              // **bold**
              parts.push(
                <strong
                  key={keyIdx++}
                  style={{
                    color: '#ffffff',
                    fontWeight: 800,
                    textDecoration: 'underline',
                    textDecorationColor: 'rgba(225, 29, 72, 0.4)',
                    textUnderlineOffset: '3px'
                  }}
                >
                  {match[2]}
                </strong>
              );
            } else if (match[3]) {
              // `code`
              parts.push(
                <code
                  key={keyIdx++}
                  style={{
                    background: 'rgba(56, 189, 248, 0.12)',
                    color: '#38bdf8',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.86rem'
                  }}
                >
                  {match[3]}
                </code>
              );
            }

            lastIndex = regex.lastIndex;
          }

          if (lastIndex < line.length) {
            parts.push(line.substring(lastIndex));
          }

          return parts.length > 0 ? parts : line;
        };

        // Bullet or numbered list
        if (trimmed.startsWith('•') || trimmed.startsWith('-') || /^\d+\./.test(trimmed)) {
          const listLines = trimmed.split('\n');
          return (
            <div
              key={pIdx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.02)',
                padding: '14px 16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              {listLines.map((l, lIdx) => (
                <div key={lIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: '#e2e8f0' }}>
                  <span style={{ color: 'var(--pup-crimson)', fontWeight: 800 }}>•</span>
                  <span>{renderFormattedLine(l.replace(/^[•\-\d+\.]\s*/, ''))}</span>
                </div>
              ))}
            </div>
          );
        }

        return (
          <p key={pIdx} style={{ fontSize: '0.94rem', color: '#cbd5e1', margin: 0 }}>
            {renderFormattedLine(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

export default function LessonViewer({
  selectedLessonId,
  onSelectLesson,
  userProgress,
  onUpdateProgress
}) {
  const [activeTab, setActiveTab] = useState('content'); // 'content' | 'takeaways' | 'tips' | 'quiz' | 'lab'
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [showAllParts, setShowAllParts] = useState(false);
  const [showModuleDrawer, setShowModuleDrawer] = useState(false);

  // Find the selected lesson and its module
  let currentModule = null;
  let currentLesson = null;

  for (const m of MODULES_DATA) {
    const found = m.lessons.find((l) => l.id === selectedLessonId);
    if (found) {
      currentModule = m;
      currentLesson = found;
      break;
    }
  }

  if (!currentLesson) {
    currentModule = MODULES_DATA[0];
    currentLesson = currentModule.lessons[0];
  }

  const sections = currentLesson.sections || [];
  const currentSection = sections[currentPartIndex] || sections[0];

  // Quiz & Lab data for current lesson
  const lessonQuiz = QUIZZES_DATA[currentLesson.id] || [];
  const lessonLab = LAB_ACTIVITIES_DATA[currentLesson.id] || null;

  const isCompleted = !!userProgress?.completedLessons?.[currentLesson.id];
  const quizScore = userProgress?.quizScores?.[currentLesson.id];
  const isLabDone = !!userProgress?.labCompleted?.[currentLesson.id];

  const handleQuizCompleted = (score, total) => {
    const updated = saveQuizResult(currentLesson.id, score, total);
    if (onUpdateProgress) onUpdateProgress(updated);
  };

  const handleLabPassed = () => {
    const updated = markLabComplete(currentLesson.id);
    if (onUpdateProgress) onUpdateProgress(updated);
  };

  // Next and Previous Lesson navigation
  const allLessons = MODULES_DATA.flatMap((m) => m.lessons);
  const currentIdx = allLessons.findIndex((l) => l.id === currentLesson.id);
  const prevLesson = currentIdx > 0 ? allLessons[currentIdx - 1] : null;
  const nextLesson = currentIdx < allLessons.length - 1 ? allLessons[currentIdx + 1] : null;

  const handleSelectDifferentLesson = (id) => {
    onSelectLesson(id);
    setCurrentPartIndex(0);
    setActiveTab('content');
    setShowModuleDrawer(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
      {/* Top Header Card */}
      <div className="glass-card" style={{ padding: '16px 20px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '12px',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="badge badge-crimson">
                Module {currentModule.moduleNumber}: {currentModule.title}
              </span>
              <button
                onClick={() => setShowModuleDrawer(!showModuleDrawer)}
                className="badge badge-cyan"
                style={{ cursor: 'pointer', border: '1px solid rgba(56,189,248,0.4)', background: 'rgba(56,189,248,0.1)' }}
              >
                <Layers size={11} style={{ marginRight: '4px' }} />
                <span>Jump to Lesson ({allLessons.length} available)</span>
              </button>
            </div>

            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
              Lesson {currentLesson.lessonNumber}: {currentLesson.title}
            </h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {currentLesson.subtitle}
            </p>
          </div>

          {/* Quick status pill */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {isCompleted && (
              <span className="badge badge-emerald" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Check size={12} /> Mastered
              </span>
            )}
            {quizScore && (
              <span className="badge badge-gold">
                Quiz: {quizScore.percentage}%
              </span>
            )}
          </div>
        </div>

        {/* Module Drawer (When user clicks Jump to Lesson) */}
        {showModuleDrawer && (
          <div style={{
            background: 'rgba(10, 16, 28, 0.95)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            marginBottom: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>
                Course Modules & Lessons Navigator
              </span>
              <button
                onClick={() => setShowModuleDrawer(false)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.8rem' }}
              >
                Close ✕
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '300px', overflowY: 'auto' }}>
              {MODULES_DATA.map((m) => (
                <div key={m.id}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--pup-gold)', marginBottom: '4px' }}>
                    Module {m.moduleNumber}: {m.title}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '6px' }}>
                    {m.lessons.map((l) => {
                      const isCur = l.id === currentLesson.id;
                      const isDone = userProgress?.completedLessons?.[l.id];
                      return (
                        <button
                          key={l.id}
                          onClick={() => handleSelectDifferentLesson(l.id)}
                          style={{
                            padding: '6px 10px',
                            borderRadius: 'var(--radius-sm)',
                            background: isCur ? 'var(--pup-crimson)' : 'rgba(255, 255, 255, 0.03)',
                            border: `1px solid ${isCur ? 'var(--pup-crimson)' : 'var(--border-subtle)'}`,
                            color: isCur ? '#fff' : '#cbd5e1',
                            fontSize: '0.76rem',
                            textAlign: 'left',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                        >
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            L{l.lessonNumber}. {l.title}
                          </span>
                          {isDone && <CheckCircle2 size={12} color="var(--accent-emerald)" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Navigation Controls */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--border-subtle)',
          overflowX: 'auto',
          gap: '6px',
          paddingBottom: '2px'
        }}>
          {[
            { id: 'content', label: 'Bite-Sized Lesson Content', icon: BookOpen },
            { id: 'takeaways', label: 'Key Takeaways', icon: CheckCircle2 },
            { id: 'tips', label: 'Exam Tips & Traps', icon: Lightbulb },
            { id: 'quiz', label: `Quiz (${lessonQuiz.length} Items)`, icon: HelpCircle, badge: quizScore ? `${quizScore.score}/${quizScore.total}` : null },
            { id: 'lab', label: 'Laboratory Activity', icon: Terminal, badge: isLabDone ? 'Done' : null }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: isActive ? 'rgba(225, 29, 72, 0.15)' : 'transparent',
                  border: 'none',
                  borderBottom: isActive ? '2px solid var(--pup-crimson)' : '2px solid transparent',
                  color: isActive ? '#fff' : 'var(--text-muted)',
                  padding: '10px 14px',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={15} color={isActive ? 'var(--pup-crimson)' : 'var(--text-muted)'} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span style={{
                    fontSize: '0.68rem',
                    background: 'rgba(255,255,255,0.1)',
                    padding: '1px 5px',
                    borderRadius: '4px',
                    marginLeft: '2px'
                  }}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Tab Body */}
      <div>
        {activeTab === 'content' && (
          <div className="glass-card animate-fade-in" style={{ padding: '24px' }}>
            {/* Learning Outcomes Banner */}
            {currentLesson.learningOutcomes && (
              <div style={{
                background: 'rgba(56, 189, 248, 0.06)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                borderRadius: 'var(--radius-md)',
                padding: '14px 18px',
                marginBottom: '20px'
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Target Learning Outcomes
                </div>
                <ul style={{ paddingLeft: '18px', fontSize: '0.84rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {currentLesson.learningOutcomes.map((lo, i) => (
                    <li key={i}>{lo}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bite-Sized Part Pagination Header (Prevents Wall-of-Text Overwhelm) */}
            {sections.length > 1 && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '10px 16px',
                borderRadius: 'var(--radius-md)',
                marginBottom: '20px',
                border: '1px solid var(--border-subtle)',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--pup-gold)', fontWeight: 700 }}>
                    Part {currentPartIndex + 1} of {sections.length}:
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>
                    {currentSection.title}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={() => setShowAllParts(!showAllParts)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--accent-cyan)',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      textDecoration: 'underline'
                    }}
                  >
                    {showAllParts ? 'Switch to Bite-Sized Cards' : 'View All Parts at Once'}
                  </button>

                  <div style={{ display: 'flex', gap: '4px' }}>
                    {sections.map((_, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => {
                          setCurrentPartIndex(pIdx);
                          setShowAllParts(false);
                        }}
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '4px',
                          background: currentPartIndex === pIdx && !showAllParts ? 'var(--pup-crimson)' : 'rgba(255, 255, 255, 0.08)',
                          border: 'none',
                          color: '#fff',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        {pIdx + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Lesson Sections Display */}
            {!showAllParts ? (
              // BITE-SIZED PAGINATED VIEW (Single Part with Next/Prev Controls)
              <div className="animate-fade-in">
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: '14px',
                    borderLeft: '4px solid var(--pup-crimson)',
                    paddingLeft: '12px'
                  }}>
                    {currentSection.title}
                  </h3>

                  <FormattedLessonText text={currentSection.content} />
                </div>

                {/* Part-by-part navigation controls */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '28px',
                  paddingTop: '18px',
                  borderTop: '1px solid var(--border-subtle)',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  {currentPartIndex > 0 ? (
                    <button
                      onClick={() => {
                        setCurrentPartIndex(currentPartIndex - 1);
                        window.scrollTo({ top: 120, behavior: 'smooth' });
                      }}
                      className="btn btn-secondary"
                      style={{ fontSize: '0.82rem' }}
                    >
                      <ArrowLeft size={15} />
                      <span>Previous: {sections[currentPartIndex - 1].title}</span>
                    </button>
                  ) : <div />}

                  {currentPartIndex < sections.length - 1 ? (
                    <button
                      onClick={() => {
                        setCurrentPartIndex(currentPartIndex + 1);
                        window.scrollTo({ top: 120, behavior: 'smooth' });
                      }}
                      className="btn btn-primary"
                      style={{ fontSize: '0.82rem' }}
                    >
                      <span>Proceed to Part {currentPartIndex + 2}: {sections[currentPartIndex + 1].title}</span>
                      <ArrowRight size={15} />
                    </button>
                  ) : (
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => {
                          const upd = markLessonComplete(currentLesson.id);
                          if (onUpdateProgress) onUpdateProgress(upd);
                        }}
                        className="btn btn-secondary"
                        style={{ fontSize: '0.82rem' }}
                      >
                        <CheckCircle2 size={16} color="var(--accent-emerald)" />
                        <span>Mark Lesson Complete</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('quiz')}
                        className="btn btn-primary"
                        style={{ fontSize: '0.82rem' }}
                      >
                        <span>Take Lesson Quiz ({lessonQuiz.length} Items)</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              // ALL PARTS VIEW
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {sections.map((sec, idx) => (
                  <div key={idx} style={{
                    paddingBottom: idx < sections.length - 1 ? '24px' : '0',
                    borderBottom: idx < sections.length - 1 ? '1px solid var(--border-subtle)' : 'none'
                  }}>
                    <h3 style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: '#fff',
                      marginBottom: '12px',
                      borderLeft: '4px solid var(--pup-crimson)',
                      paddingLeft: '10px'
                    }}>
                      Part {idx + 1}: {sec.title}
                    </h3>
                    <FormattedLessonText text={sec.content} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'takeaways' && (
          <div className="glass-card animate-fade-in" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={20} color="var(--pup-gold)" /> Key Takeaways
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {currentLesson.keyTakeaways.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '14px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(245, 158, 11, 0.15)',
                    color: 'var(--pup-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    {idx + 1}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                    <FormattedLessonText text={item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tips' && (
          <div className="glass-card animate-fade-in" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lightbulb size={20} color="var(--accent-cyan)" /> Midterm Exam Tips & Common Pitfalls
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {currentLesson.examTips.map((tip, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(56, 189, 248, 0.06)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}
                >
                  <Sparkles size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                    <FormattedLessonText text={tip} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <QuizModal
            lessonTitle={currentLesson.title}
            lessonId={currentLesson.id}
            questions={lessonQuiz}
            onComplete={handleQuizCompleted}
            onClose={() => setActiveTab('content')}
          />
        )}

        {activeTab === 'lab' && (
          <div>
            {lessonLab ? (
              <LabConsole
                labActivity={lessonLab}
                onLabPassed={handleLabPassed}
              />
            ) : (
              <div className="glass-card" style={{ padding: '30px', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)' }}>No specific lab activity configured for this lesson.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Previous / Next Lesson Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10px',
        padding: '12px 0'
      }}>
        {prevLesson ? (
          <button
            onClick={() => handleSelectDifferentLesson(prevLesson.id)}
            className="btn btn-secondary"
            style={{ fontSize: '0.82rem' }}
          >
            <ChevronLeft size={16} />
            <span>Prev Lesson: {prevLesson.title}</span>
          </button>
        ) : <div />}

        {nextLesson && (
          <button
            onClick={() => handleSelectDifferentLesson(nextLesson.id)}
            className="btn btn-secondary"
            style={{ fontSize: '0.82rem' }}
          >
            <span>Next Lesson: {nextLesson.title}</span>
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
