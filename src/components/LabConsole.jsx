import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle, AlertCircle, Database, Check, ChevronDown, ChevronRight, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { executeQuery, gradeLabQuery } from '../utils/sqlEngine.js';

export default function LabConsole({
  labActivity = null,
  onLabPassed = null,
  initialSql = 'SELECT * FROM employees LIMIT 5;'
}) {
  const [sql, setSql] = useState(initialSql);
  const [result, setResult] = useState(null);
  const [gradeStatus, setGradeStatus] = useState(null);
  const [showSchema, setShowSchema] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (labActivity?.starterSql) {
      setSql(labActivity.starterSql);
    } else {
      setSql(initialSql);
    }
    setResult(null);
    setGradeStatus(null);
  }, [labActivity, initialSql]);

  const handleExecute = () => {
    setGradeStatus(null);
    const res = executeQuery(sql);
    setResult(res);
  };

  const handleVerify = () => {
    if (!labActivity) {
      handleExecute();
      return;
    }

    const grading = gradeLabQuery({
      userSql: sql,
      requiredClauses: labActivity.requiredClauses || [],
      expectedOutput: labActivity.expectedOutput || null
    });

    setGradeStatus(grading);
    if (grading.passed) {
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (e) {}

      if (onLabPassed) {
        onLabPassed();
      }
    }
  };

  const handleReset = () => {
    if (labActivity?.starterSql) {
      setSql(labActivity.starterSql);
    } else {
      setSql(initialSql);
    }
    setResult(null);
    setGradeStatus(null);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(sql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      background: 'rgba(13, 21, 39, 0.85)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      {/* Activity Header if attached */}
      {labActivity && (
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 'var(--radius-md)',
          padding: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
              {labActivity.title}
            </h3>
            <span className="badge badge-gold" style={{ fontSize: '0.72rem' }}>
              Hands-on Laboratory
            </span>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
            {labActivity.description}
          </p>

          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '6px' }}>
              INSTRUCTIONS:
            </div>
            <ul style={{ paddingLeft: '20px', fontSize: '0.82rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {labActivity.instructions.map((ins, i) => (
                <li key={i}>{ins}</li>
              ))}
            </ul>
          </div>

          {labActivity.requiredClauses && labActivity.requiredClauses.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600 }}>
                Required Clauses:
              </span>
              {labActivity.requiredClauses.map((clause, idx) => (
                <span key={idx} className="badge badge-cyan" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>
                  {clause}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* SQL Editor Area */}
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '8px'
        }}>
          <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Database size={15} color="var(--accent-cyan)" />
            <span>Interactive MySQL Query Console</span>
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={handleCopy}
              className="btn btn-secondary"
              style={{ padding: '4px 10px', fontSize: '0.75rem' }}
              title="Copy SQL"
            >
              {copied ? <Check size={13} color="var(--accent-emerald)" /> : <Copy size={13} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={handleReset}
              className="btn btn-secondary"
              style={{ padding: '4px 10px', fontSize: '0.75rem' }}
              title="Reset query"
            >
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Mobile-friendly SQL helper chips */}
        <div style={{
          display: 'flex',
          gap: '5px',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: '6px',
          marginBottom: '6px'
        }}>
          {['SELECT', 'FROM', 'WHERE', 'JOIN', 'ON', 'ORDER BY', 'AND', 'OR', '*', 'LIMIT'].map((kw) => (
            <button
              key={kw}
              type="button"
              onClick={() => setSql((prev) => prev ? `${prev} ${kw} ` : `${kw} `)}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--accent-cyan)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: '4px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              +{kw}
            </button>
          ))}
        </div>

        <textarea
          id="sql-editor-textarea"
          value={sql}
          onChange={(e) => setSql(e.target.value)}
          rows={5}
          spellCheck={false}
          style={{
            width: '100%',
            background: '#080d19',
            color: '#38bdf8',
            fontFamily: 'var(--font-mono)',
            fontSize: '16px',
            padding: '12px 14px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            outline: 'none',
            resize: 'vertical',
            lineHeight: 1.5,
            boxSizing: 'border-box'
          }}
          placeholder="Write your SQL statement here..."
        />
      </div>

      {/* Action Controls */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button
          id="btn-execute-sql"
          onClick={handleExecute}
          className="btn btn-secondary"
          style={{ flex: '1 1 130px' }}
        >
          <Play size={16} color="var(--accent-cyan)" />
          <span>Execute Query</span>
        </button>

        {labActivity && (
          <button
            id="btn-verify-lab"
            onClick={handleVerify}
            className="btn btn-primary"
            style={{ flex: '1 1 180px' }}
          >
            <CheckCircle size={16} />
            <span>Verify & Grade Solution</span>
          </button>
        )}
      </div>

      {/* Grading Feedback Box */}
      {gradeStatus && (
        <div style={{
          padding: '14px 16px',
          borderRadius: 'var(--radius-md)',
          background: gradeStatus.passed ? 'rgba(16, 185, 129, 0.12)' : 'rgba(225, 29, 72, 0.12)',
          border: `1px solid ${gradeStatus.passed ? 'rgba(16, 185, 129, 0.4)' : 'rgba(225, 29, 72, 0.4)'}`,
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px'
        }}>
          {gradeStatus.passed ? (
            <CheckCircle size={22} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
          ) : (
            <AlertCircle size={22} color="var(--pup-crimson)" style={{ flexShrink: 0, marginTop: '2px' }} />
          )}
          <div>
            <div style={{
              fontWeight: 700,
              fontSize: '0.9rem',
              color: gradeStatus.passed ? '#a7f3d0' : '#fda4af',
              marginBottom: '3px'
            }}>
              {gradeStatus.passed ? 'Laboratory Requirement Passed!' : 'Submission Incomplete / Incorrect'}
            </div>
            <p style={{ fontSize: '0.83rem', color: '#e2e8f0' }}>
              {gradeStatus.message}
            </p>
          </div>
        </div>
      )}

      {/* Query Result Grid */}
      {result && (
        <div style={{ marginTop: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              Execution Result:
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              {result.error ? 'Error' : `${result.rowCount || 0} rows retrieved (${result.executionTimeMs || 1}ms)`}
            </span>
          </div>

          {result.error ? (
            <div style={{
              background: 'rgba(225, 29, 72, 0.1)',
              border: '1px solid rgba(225, 29, 72, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '12px 14px',
              color: '#fda4af',
              fontSize: '0.84rem',
              fontFamily: 'var(--font-mono)'
            }}>
              {result.error}
            </div>
          ) : result.columns && result.columns.length > 0 ? (
            <div style={{
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              maxHeight: '320px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              background: '#080d19'
            }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono)'
              }}>
                <thead>
                  <tr style={{ background: 'rgba(255, 255, 255, 0.06)' }}>
                    {result.columns.map((col, idx) => (
                      <th key={idx} style={{
                        padding: '10px 14px',
                        textAlign: 'left',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'var(--accent-cyan)',
                        fontWeight: 600,
                        whiteSpace: 'nowrap'
                      }}>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {result.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      style={{
                        background: rIdx % 2 === 1 ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.04)'
                      }}
                    >
                      {result.columns.map((col, cIdx) => (
                        <td key={cIdx} style={{
                          padding: '8px 14px',
                          color: row[col] === null ? '#94a3b8' : '#f1f5f9',
                          fontStyle: row[col] === null ? 'italic' : 'normal',
                          whiteSpace: 'nowrap'
                        }}>
                          {row[col] === null ? 'NULL' : String(row[col])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{
              padding: '16px',
              textAlign: 'center',
              color: 'var(--text-dim)',
              fontSize: '0.85rem'
            }}>
              Empty result set returned.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
