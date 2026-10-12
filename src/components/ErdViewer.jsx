import React, { useState } from 'react';
import { Database, Key, Link2, Eye, ShieldCheck } from 'lucide-react';

export default function ErdViewer({ activeHighlight = null }) {
  const [hoveredTable, setHoveredTable] = useState(null);

  // Table coordinates and dimensions for responsive SVG canvas
  const tables = [
    {
      id: "offices",
      name: "offices",
      x: 30,
      y: 40,
      width: 190,
      height: 180,
      columns: [
        { name: "officeCode", type: "VARCHAR(10)", pk: true },
        { name: "city", type: "VARCHAR(50)" },
        { name: "phone", type: "VARCHAR(50)" },
        { name: "state", type: "VARCHAR(50)" },
        { name: "country", type: "VARCHAR(50)" }
      ]
    },
    {
      id: "employees",
      name: "employees",
      x: 280,
      y: 40,
      width: 220,
      height: 180,
      columns: [
        { name: "employeeNumber", type: "INT", pk: true },
        { name: "lastName", type: "VARCHAR(50)" },
        { name: "firstName", type: "VARCHAR(50)" },
        { name: "jobTitle", type: "VARCHAR(50)" },
        { name: "officeCode", type: "VARCHAR(10)", fk: true, ref: "offices" }
      ]
    },
    {
      id: "customers",
      name: "customers",
      x: 560,
      y: 40,
      width: 240,
      height: 200,
      columns: [
        { name: "customerNumber", type: "INT", pk: true },
        { name: "customerName", type: "VARCHAR(50)" },
        { name: "contactLastName", type: "VARCHAR(50)" },
        { name: "city", type: "VARCHAR(50)" },
        { name: "country", type: "VARCHAR(50)" },
        { name: "salesRepEmployeeNumber", type: "INT", fk: true, ref: "employees" }
      ]
    },
    {
      id: "orders",
      name: "orders",
      x: 560,
      y: 290,
      width: 240,
      height: 170,
      columns: [
        { name: "orderNumber", type: "INT", pk: true },
        { name: "orderDate", type: "DATE" },
        { name: "status", type: "VARCHAR(15)" },
        { name: "customerNumber", type: "INT", fk: true, ref: "customers" }
      ]
    },
    {
      id: "orderdetails",
      name: "orderdetails",
      x: 280,
      y: 290,
      width: 220,
      height: 170,
      columns: [
        { name: "orderNumber", type: "INT", pk: true, fk: true, ref: "orders" },
        { name: "productCode", type: "VARCHAR(15)", pk: true, fk: true, ref: "products" },
        { name: "quantityOrdered", type: "INT" },
        { name: "priceEach", type: "DECIMAL(10,2)" }
      ]
    },
    {
      id: "products",
      name: "products",
      x: 30,
      y: 290,
      width: 200,
      height: 170,
      columns: [
        { name: "productCode", type: "VARCHAR(15)", pk: true },
        { name: "productName", type: "VARCHAR(70)" },
        { name: "productLine", type: "VARCHAR(50)", fk: true, ref: "productlines" },
        { name: "buyPrice", type: "DECIMAL(10,2)" }
      ]
    }
  ];

  // SVG connector lines
  const connectors = [
    // offices (right center) to employees (left center)
    { from: "offices", to: "employees", x1: 220, y1: 130, x2: 280, y2: 130, label: "1 : N" },
    // employees (right center) to customers (left center)
    { from: "employees", to: "customers", x1: 500, y1: 140, x2: 560, y2: 140, label: "1 : N" },
    // customers (bottom center) to orders (top center)
    { from: "customers", to: "orders", x1: 680, y1: 240, x2: 680, y2: 290, label: "1 : N" },
    // orders (left center) to orderdetails (right center)
    { from: "orders", to: "orderdetails", x1: 560, y1: 370, x2: 500, y2: 370, label: "1 : N" },
    // orderdetails (left center) to products (right center)
    { from: "orderdetails", to: "products", x1: 280, y1: 370, x2: 230, y2: 370, label: "N : 1" }
  ];

  return (
    <div style={{
      background: 'rgba(10, 16, 29, 0.85)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      padding: '20px',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #e11d48, #9f1239)',
            padding: '8px',
            borderRadius: 'var(--radius-md)',
            color: '#fff',
            display: 'flex'
          }}>
            <Database size={20} />
          </div>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
              Relational Schema ERD Diagram (6 Tables)
            </h3>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Interactive entity relationship diagram illustrating foreign key connections
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.78rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#fde68a' }}>
            <Key size={13} color="#f59e0b" /> Primary Key (PK)
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#7dd3fc' }}>
            <Link2 size={13} color="#38bdf8" /> Foreign Key (FK)
          </span>
        </div>
      </div>

      {/* SVG Canvas */}
      <div style={{
        width: '100%',
        overflowX: 'auto',
        background: '#070c17',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(255,255,255,0.06)',
        padding: '10px'
      }}>
        <svg
          viewBox="0 0 830 500"
          style={{ width: '100%', minWidth: '780px', height: 'auto', display: 'block' }}
        >
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
            </marker>
            <linearGradient id="tableHeaderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="activeTableGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#9f1239" />
            </linearGradient>
          </defs>

          {/* Relationship Connection Lines */}
          {connectors.map((conn, idx) => {
            const isHighlighted =
              hoveredTable === conn.from || hoveredTable === conn.to;
            return (
              <g key={idx}>
                <line
                  x1={conn.x1}
                  y1={conn.y1}
                  x2={conn.x2}
                  y2={conn.y2}
                  stroke={isHighlighted ? '#e11d48' : '#38bdf8'}
                  strokeWidth={isHighlighted ? 3 : 2}
                  strokeDasharray={isHighlighted ? 'none' : '4 2'}
                  markerEnd="url(#arrow)"
                  style={{ transition: 'all 0.2s ease' }}
                />
                <rect
                  x={(conn.x1 + conn.x2) / 2 - 16}
                  y={(conn.y1 + conn.y2) / 2 - 9}
                  width="32"
                  height="18"
                  rx="4"
                  fill="#0f172a"
                  stroke={isHighlighted ? '#e11d48' : 'rgba(56,189,248,0.4)'}
                  strokeWidth="1"
                />
                <text
                  x={(conn.x1 + conn.x2) / 2}
                  y={(conn.y1 + conn.y2) / 2 + 3}
                  fill={isHighlighted ? '#fda4af' : '#7dd3fc'}
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                  fontFamily="'JetBrains Mono', monospace"
                >
                  {conn.label}
                </text>
              </g>
            );
          })}

          {/* Tables */}
          {tables.map((table) => {
            const isHovered = hoveredTable === table.id;
            return (
              <g
                key={table.id}
                onMouseEnter={() => setHoveredTable(table.id)}
                onMouseLeave={() => setHoveredTable(null)}
                style={{ cursor: 'pointer' }}
              >
                {/* Table Body Card */}
                <rect
                  x={table.x}
                  y={table.y}
                  width={table.width}
                  height={table.height}
                  rx="10"
                  fill="#0e1726"
                  stroke={isHovered ? '#e11d48' : 'rgba(255,255,255,0.12)'}
                  strokeWidth={isHovered ? 2.5 : 1}
                  style={{ transition: 'all 0.2s ease' }}
                />

                {/* Table Header */}
                <path
                  d={`M ${table.x} ${table.y + 10} Q ${table.x} ${table.y} ${table.x + 10} ${table.y} L ${table.x + table.width - 10} ${table.y} Q ${table.x + table.width} ${table.y} ${table.x + table.width} ${table.y + 10} L ${table.x + table.width} ${table.y + 34} L ${table.x} ${table.y + 34} Z`}
                  fill={isHovered ? 'url(#activeTableGrad)' : 'url(#tableHeaderGrad)'}
                />
                <text
                  x={table.x + 12}
                  y={table.y + 22}
                  fill="#ffffff"
                  fontSize="12"
                  fontWeight="700"
                  fontFamily="'JetBrains Mono', monospace"
                >
                  {table.name}
                </text>

                {/* Columns */}
                {table.columns.map((col, cIdx) => {
                  const rowY = table.y + 42 + cIdx * 25;
                  return (
                    <g key={col.name}>
                      {/* Alternating row tint */}
                      {cIdx % 2 === 1 && (
                        <rect
                          x={table.x + 2}
                          y={rowY - 8}
                          width={table.width - 4}
                          height="22"
                          fill="rgba(255,255,255,0.02)"
                        />
                      )}

                      {/* Key badge */}
                      {col.pk && (
                        <text
                          x={table.x + 10}
                          y={rowY + 7}
                          fill="#f59e0b"
                          fontSize="9"
                          fontWeight="bold"
                          fontFamily="'JetBrains Mono', monospace"
                        >
                          PK
                        </text>
                      )}
                      {col.fk && !col.pk && (
                        <text
                          x={table.x + 10}
                          y={rowY + 7}
                          fill="#38bdf8"
                          fontSize="9"
                          fontWeight="bold"
                          fontFamily="'JetBrains Mono', monospace"
                        >
                          FK
                        </text>
                      )}

                      {/* Column Name */}
                      <text
                        x={table.x + 32}
                        y={rowY + 7}
                        fill={col.pk ? '#f8fafc' : col.fk ? '#e2e8f0' : '#cbd5e1'}
                        fontSize="11"
                        fontWeight={col.pk ? '600' : '400'}
                        fontFamily="'JetBrains Mono', monospace"
                      >
                        {col.name}
                      </text>

                      {/* Column Type */}
                      <text
                        x={table.x + table.width - 10}
                        y={rowY + 7}
                        fill="rgba(148, 163, 184, 0.7)"
                        fontSize="9"
                        textAnchor="end"
                        fontFamily="'JetBrains Mono', monospace"
                      >
                        {col.type}
                      </text>
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>

      <div style={{ marginTop: '12px', fontSize: '0.78rem', color: 'var(--text-dim)', textAlign: 'center' }}>
        Hover over any table entity to trace relationship links across foreign keys.
      </div>
    </div>
  );
}
