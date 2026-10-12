import React, { useState } from 'react';
import { Database, Key, Link2, Eye, LayoutGrid, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

export default function ErdViewer({ activeHighlight = null }) {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;
  const [viewMode, setViewMode] = useState(isMobile ? 'cards' : 'diagram'); // 'diagram' | 'cards'
  const [zoomLevel, setZoomLevel] = useState(1);
  const [hoveredTable, setHoveredTable] = useState(null);

  // 6 Relational Tables matching Prof. Contreras' curriculum & Image 1
  const tables = [
    {
      id: "offices",
      name: "offices",
      x: 20,
      y: 30,
      width: 170,
      height: 220,
      columns: [
        { name: "officeCode", type: "VARCHAR(10)", pk: true },
        { name: "city", type: "VARCHAR(50)" },
        { name: "phone", type: "VARCHAR(50)" },
        { name: "addressLine1", type: "VARCHAR(50)" },
        { name: "country", type: "VARCHAR(50)" },
        { name: "postalCode", type: "VARCHAR(15)" },
        { name: "territory", type: "VARCHAR(10)" }
      ]
    },
    {
      id: "employees",
      name: "employees",
      x: 240,
      y: 30,
      width: 190,
      height: 245,
      columns: [
        { name: "employeeNumber", type: "INT", pk: true },
        { name: "lastName", type: "VARCHAR(50)" },
        { name: "firstName", type: "VARCHAR(50)" },
        { name: "extension", type: "VARCHAR(10)" },
        { name: "email", type: "VARCHAR(100)" },
        { name: "officeCode", type: "VARCHAR(10)", fk: true, ref: "offices.officeCode" },
        { name: "reportsTo", type: "INT", fk: true, ref: "employees.employeeNumber" },
        { name: "jobTitle", type: "VARCHAR(50)" }
      ]
    },
    {
      id: "customers",
      name: "customers",
      x: 480,
      y: 30,
      width: 210,
      height: 285,
      columns: [
        { name: "customerNumber", type: "INT", pk: true },
        { name: "customerName", type: "VARCHAR(50)" },
        { name: "contactLastName", type: "VARCHAR(50)" },
        { name: "contactFirstName", type: "VARCHAR(50)" },
        { name: "phone", type: "VARCHAR(50)" },
        { name: "addressLine1", type: "VARCHAR(50)" },
        { name: "city", type: "VARCHAR(50)" },
        { name: "state", type: "VARCHAR(50)" },
        { name: "postalCode", type: "VARCHAR(15)" },
        { name: "country", type: "VARCHAR(50)" },
        { name: "salesRepEmployeeNumber", type: "INT", fk: true, ref: "employees.employeeNumber" },
        { name: "creditLimit", type: "DECIMAL(10,2)" }
      ]
    },
    {
      id: "payments",
      name: "payments",
      x: 740,
      y: 30,
      width: 170,
      height: 180,
      columns: [
        { name: "customerNumber", type: "INT", pk: true, fk: true, ref: "customers.customerNumber" },
        { name: "checkNumber", type: "VARCHAR(50)", pk: true },
        { name: "paymentDate", type: "DATE" },
        { name: "amount", type: "DECIMAL(10,2)" }
      ]
    },
    {
      id: "orders",
      name: "orders",
      x: 480,
      y: 360,
      width: 210,
      height: 200,
      columns: [
        { name: "orderNumber", type: "INT", pk: true },
        { name: "orderDate", type: "DATE" },
        { name: "requiredDate", type: "DATE" },
        { name: "shippedDate", type: "DATE" },
        { name: "status", type: "VARCHAR(15)" },
        { name: "customerNumber", type: "INT", fk: true, ref: "customers.customerNumber" }
      ]
    },
    {
      id: "orderdetails",
      name: "orderdetails",
      x: 240,
      y: 360,
      width: 190,
      height: 180,
      columns: [
        { name: "orderNumber", type: "INT", pk: true, fk: true, ref: "orders.orderNumber" },
        { name: "productCode", type: "VARCHAR(15)", pk: true, fk: true, ref: "products.productCode" },
        { name: "quantityOrdered", type: "INT" },
        { name: "priceEach", type: "DECIMAL(10,2)" },
        { name: "orderLineNumber", type: "SMALLINT" }
      ]
    }
  ];

  // SVG lines connecting specific primary and foreign keys with Crow's Foot ER notation
  const connectors = [
    // offices -> employees (officeCode)
    { from: "offices", to: "employees", x1: 190, y1: 145, x2: 240, y2: 145, label: "1:N" },
    // employees -> customers (salesRepEmployeeNumber)
    { from: "employees", to: "customers", x1: 430, y1: 70, x2: 480, y2: 245, label: "1:N" },
    // customers -> payments (customerNumber)
    { from: "customers", to: "payments", x1: 690, y1: 60, x2: 740, y2: 60, label: "1:N" },
    // customers -> orders (customerNumber)
    { from: "customers", to: "orders", x1: 585, y1: 315, x2: 585, y2: 360, label: "1:N" },
    // orders -> orderdetails (orderNumber)
    { from: "orders", to: "orderdetails", x1: 480, y1: 440, x2: 430, y2: 440, label: "1:N" }
  ];

  const handleZoom = (delta) => {
    setZoomLevel((prev) => Math.min(1.6, Math.max(0.65, +(prev + delta).toFixed(2))));
  };

  return (
    <div style={{
      background: 'rgba(10, 16, 29, 0.9)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      padding: '16px',
      overflow: 'hidden'
    }}>
      {/* Top Header / View Controls */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '14px',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #e11d48, #9f1239)',
            padding: '7px',
            borderRadius: 'var(--radius-md)',
            color: '#fff',
            display: 'flex'
          }}>
            <Database size={18} />
          </div>
          <div>
            <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#fff' }}>
              Relational Database ERD Schema (6 Tables)
            </h3>
            <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
              See tables: <code style={{ color: 'var(--accent-cyan)' }}>offices</code>, <code style={{ color: 'var(--accent-cyan)' }}>employees</code>, <code style={{ color: 'var(--accent-cyan)' }}>customers</code>, <code style={{ color: 'var(--accent-cyan)' }}>payments</code>, <code style={{ color: 'var(--accent-cyan)' }}>orders</code>, <code style={{ color: 'var(--accent-cyan)' }}>orderdetails</code>
            </p>
          </div>
        </div>

        {/* View Toggle & Zoom Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {/* View Switcher */}
          <div style={{
            display: 'flex',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 'var(--radius-sm)',
            padding: '2px',
            border: '1px solid var(--border-subtle)'
          }}>
            <button
              onClick={() => setViewMode('diagram')}
              style={{
                background: viewMode === 'diagram' ? 'var(--pup-crimson)' : 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '0.72rem',
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>Diagram</span>
            </button>
            <button
              onClick={() => setViewMode('cards')}
              style={{
                background: viewMode === 'cards' ? 'var(--pup-crimson)' : 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '0.72rem',
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <LayoutGrid size={13} />
              <span>Table Cards</span>
            </button>
          </div>

          {/* Zoom controls for diagram */}
          {viewMode === 'diagram' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <button
                onClick={() => handleZoom(-0.15)}
                className="btn btn-secondary"
                style={{ padding: '4px 8px', fontSize: '0.72rem' }}
                title="Zoom Out"
              >
                <ZoomOut size={13} />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="btn btn-secondary"
                style={{ padding: '4px 8px', fontSize: '0.7rem', fontFamily: 'var(--font-mono)' }}
                title="Reset Zoom"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                onClick={() => handleZoom(0.15)}
                className="btn btn-secondary"
                style={{ padding: '4px 8px', fontSize: '0.72rem' }}
                title="Zoom In"
              >
                <ZoomIn size={13} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* VIEW MODE 1: Interactive SVG Diagram */}
      {viewMode === 'diagram' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="mobile-only-inline" style={{
            fontSize: '0.73rem',
            color: 'var(--accent-cyan)',
            background: 'rgba(56, 189, 248, 0.08)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            borderRadius: 'var(--radius-sm)',
            padding: '5px 10px',
            textAlign: 'center'
          }}>
            ↔ Swipe horizontally to inspect all 6 tables and join relationships (or switch to Table Cards view)
          </div>
          <div style={{
            width: '100%',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            background: '#070b14',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '12px'
          }}>
          <div style={{
            minWidth: `${940 * zoomLevel}px`,
            transition: 'width 0.2s ease',
            margin: '0 auto'
          }}>
            <svg
              viewBox="0 0 940 590"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            >
              <defs>
                <marker
                  id="crowsFoot"
                  viewBox="0 0 16 16"
                  refX="14"
                  refY="8"
                  markerWidth="8"
                  markerHeight="8"
                  orient="auto"
                >
                  <path d="M 0 2 L 14 8 L 0 14 M 14 0 L 14 16" fill="none" stroke="#38bdf8" strokeWidth="2" />
                </marker>
                <marker
                  id="oneMarker"
                  viewBox="0 0 10 16"
                  refX="2"
                  refY="8"
                  markerWidth="6"
                  markerHeight="8"
                  orient="auto"
                >
                  <path d="M 4 2 L 4 14 M 8 2 L 8 14" fill="none" stroke="#38bdf8" strokeWidth="2" />
                </marker>
              </defs>

              {/* Connecting Lines */}
              {connectors.map((conn, idx) => {
                const isHi = hoveredTable === conn.from || hoveredTable === conn.to;
                return (
                  <g key={idx}>
                    <line
                      x1={conn.x1}
                      y1={conn.y1}
                      x2={conn.x2}
                      y2={conn.y2}
                      stroke={isHi ? '#e11d48' : '#38bdf8'}
                      strokeWidth={isHi ? 2.5 : 1.8}
                      strokeDasharray={isHi ? 'none' : '4 3'}
                      markerStart="url(#oneMarker)"
                      markerEnd="url(#crowsFoot)"
                      style={{ transition: 'all 0.2s ease' }}
                    />
                    {/* Badge */}
                    <rect
                      x={(conn.x1 + conn.x2) / 2 - 14}
                      y={(conn.y1 + conn.y2) / 2 - 8}
                      width="28"
                      height="16"
                      rx="3"
                      fill="#0b1324"
                      stroke={isHi ? '#e11d48' : 'rgba(56, 189, 248, 0.4)'}
                      strokeWidth="1"
                    />
                    <text
                      x={(conn.x1 + conn.x2) / 2}
                      y={(conn.y1 + conn.y2) / 2 + 3}
                      fill={isHi ? '#fda4af' : '#7dd3fc'}
                      fontSize="9"
                      fontWeight="bold"
                      textAnchor="middle"
                      fontFamily="'JetBrains Mono', monospace"
                    >
                      {conn.label}
                    </text>
                  </g>
                );
              })}

              {/* Table Boxes */}
              {tables.map((table) => {
                const isHovered = hoveredTable === table.id;
                return (
                  <g
                    key={table.id}
                    onMouseEnter={() => setHoveredTable(table.id)}
                    onMouseLeave={() => setHoveredTable(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Table Box Outer Border */}
                    <rect
                      x={table.x}
                      y={table.y}
                      width={table.width}
                      height={table.height}
                      rx="6"
                      fill="#0a101f"
                      stroke={isHovered ? '#e11d48' : 'rgba(255, 255, 255, 0.15)'}
                      strokeWidth={isHovered ? 2 : 1}
                      style={{ transition: 'all 0.2s ease' }}
                    />

                    {/* Table Header Cell */}
                    <rect
                      x={table.x}
                      y={table.y}
                      width={table.width}
                      height="28"
                      rx="5"
                      fill={isHovered ? '#9f1239' : '#1e293b'}
                    />
                    <text
                      x={table.x + table.width / 2}
                      y={table.y + 18}
                      fill="#ffffff"
                      fontSize="12"
                      fontWeight="bold"
                      textAnchor="middle"
                      fontFamily="'JetBrains Mono', monospace"
                    >
                      {table.name}
                    </text>

                    {/* Separator Line */}
                    <line
                      x1={table.x}
                      y1={table.y + 28}
                      x2={table.x + table.width}
                      y2={table.y + 28}
                      stroke={isHovered ? '#e11d48' : 'rgba(255, 255, 255, 0.2)'}
                      strokeWidth="1"
                    />

                    {/* Columns List */}
                    {table.columns.map((col, cIdx) => {
                      const rowY = table.y + 44 + cIdx * 19;
                      return (
                        <g key={col.name}>
                          <text
                            x={table.x + 8}
                            y={rowY}
                            fill={col.pk ? '#f59e0b' : col.fk ? '#38bdf8' : '#cbd5e1'}
                            fontSize="10"
                            fontWeight={col.pk ? 'bold' : 'normal'}
                            fontFamily="'JetBrains Mono', monospace"
                          >
                            {col.pk ? `*${col.name}` : col.name}
                          </text>
                        </g>
                      );
                    })}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
      )}

      {/* VIEW MODE 2: Responsive Table Schema Cards (Optimal for Phones) */}
      {viewMode === 'cards' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
          gap: '12px'
        }}>
          {tables.map((table) => (
            <div
              key={table.id}
              style={{
                background: '#090f1d',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '6px'
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  color: '#fff'
                }}>
                  {table.name}
                </span>
                <span className="badge badge-crimson" style={{ fontSize: '0.65rem' }}>
                  {table.columns.length} columns
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {table.columns.map((col) => (
                  <div
                    key={col.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '3px 6px',
                      borderRadius: '4px',
                      background: col.pk ? 'rgba(245, 158, 11, 0.08)' : 'transparent',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <span style={{
                      color: col.pk ? 'var(--pup-gold)' : col.fk ? 'var(--accent-cyan)' : '#cbd5e1',
                      fontWeight: col.pk ? 700 : 400
                    }}>
                      {col.pk ? `* ${col.name}` : col.name}
                    </span>

                    <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>
                      {col.pk ? '(PK)' : col.fk ? `(FK → ${col.ref?.split('.')[0]})` : col.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
