import React, { useState } from 'react';
import { Terminal, Database, BookOpen, Layers, Play } from 'lucide-react';
import ErdViewer from './ErdViewer.jsx';
import LabConsole from './LabConsole.jsx';

export default function LabPlayground() {
  const [showErd, setShowErd] = useState(true);
  const [selectedPreset, setSelectedPreset] = useState('preset-1');

  const presetQueries = [
    {
      id: 'preset-1',
      title: 'Employees & Assigned Offices (INNER JOIN)',
      sql: `SELECT e.employeeNumber, e.lastName, e.firstName, e.jobTitle, o.city, o.country
FROM employees e
INNER JOIN offices o ON e.officeCode = o.officeCode
ORDER BY o.country, e.lastName;`
    },
    {
      id: 'preset-2',
      title: 'All Customers & Placed Orders (LEFT JOIN)',
      sql: `SELECT c.customerNumber, c.customerName, c.country, o.orderNumber, o.status
FROM customers c
LEFT JOIN orders o ON c.customerNumber = o.customerNumber
ORDER BY c.customerName;`
    },
    {
      id: 'preset-3',
      title: 'Sales Reps with No Assigned Customers (RIGHT JOIN)',
      sql: `SELECT e.employeeNumber, e.lastName, e.firstName, c.customerNumber
FROM customers c
RIGHT JOIN employees e ON c.salesRepEmployeeNumber = e.employeeNumber
WHERE c.customerNumber IS NULL
ORDER BY e.employeeNumber;`
    },
    {
      id: 'preset-4',
      title: 'Product Catalog with Line Descriptions (USING Syntax)',
      sql: `SELECT p.productCode, p.productName, p.buyPrice, pl.textDescription
FROM products p
INNER JOIN productlines pl USING (productLine)
WHERE p.buyPrice > 50
ORDER BY p.buyPrice DESC;`
    },
    {
      id: 'preset-5',
      title: 'Multi-Condition Compound Filter (AND / OR Precedence)',
      sql: `SELECT customerName, country, state, creditLimit
FROM customers
WHERE (country = 'USA' OR country = 'France') AND creditLimit > 100000;`
    }
  ];

  const activePreset = presetQueries.find((p) => p.id === selectedPreset) || presetQueries[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Playground Header */}
      <div className="glass-card" style={{ padding: '20px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            <span className="badge badge-cyan" style={{ marginBottom: '6px' }}>
              Interactive Sandbox & ERD Simulator
            </span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
              MySQL Relational Laboratory Playground
            </h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Test any custom queries, practice joins, and verify relational output live in your browser.
            </p>
          </div>

          <button
            onClick={() => setShowErd(!showErd)}
            className="btn btn-secondary"
            style={{ fontSize: '0.82rem' }}
          >
            <Database size={15} color="var(--accent-cyan)" />
            <span>{showErd ? 'Hide ERD Diagram' : 'Show ERD Diagram'}</span>
          </button>
        </div>

        {/* Query Presets Bar */}
        <div style={{ marginTop: '16px' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-dim)', marginBottom: '8px' }}>
            QUICK PRESET QUERIES:
          </div>
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', WebkitOverflowScrolling: 'touch', paddingBottom: '4px' }}>
            {presetQueries.map((preset) => (
              <button
                key={preset.id}
                onClick={() => setSelectedPreset(preset.id)}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  background: selectedPreset === preset.id ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${selectedPreset === preset.id ? 'rgba(56, 189, 248, 0.5)' : 'var(--border-subtle)'}`,
                  color: selectedPreset === preset.id ? '#fff' : 'var(--text-muted)',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                {preset.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ERD View */}
      {showErd && <ErdViewer />}

      {/* Interactive SQL Console */}
      <LabConsole
        key={activePreset.id}
        initialSql={activePreset.sql}
      />
    </div>
  );
}
