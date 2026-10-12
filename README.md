# 🛡️ Commit008 | PUP CCIS Database Administration Reviewer

<div align="center">

![PUP CCIS Badge](https://img.shields.io/badge/PUP%20CCIS-COMP%20008-881337?style=for-the-badge&logo=polytechnicuniversityofthephilippines&logoColor=white)
![React](https://img.shields.io/badge/React%2018-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite%206-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![AlaSQL](https://img.shields.io/badge/AlaSQL-In--Browser%20Engine-F59E0B?style=for-the-badge&logo=sqlite&logoColor=white)
![Storage](https://img.shields.io/badge/Storage-100%25%20Local-10B981?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

<p align="center">
  <strong>The definitive, interactive midterm exam simulator & hands-on laboratory reviewer for Polytechnic University of the Philippines (PUP) College of Computer and Information Sciences (CCIS).</strong>
</p>

[✨ Live Features](#-key-features) •
[📚 Curriculum Coverage](#-curriculum-coverage) •
[🧪 In-Browser SQL Lab](#-in-browser-sql-laboratory-engine) •
[📝 100-Item Practice Exam](#-100-item-practice-exam--major-practical) •
[🚀 Quickstart](#-getting-started) •
[💾 Local Storage & Privacy](#-device-storage--privacy)

</div>

---

## 📌 Overview

**Commit008** is a comprehensive, student-first web application designed specifically for students taking **COMP 008: Database Administration** under **Prof. Florencio V. Contreras Jr.** at the **Polytechnic University of the Philippines (PUP)**.

Instead of navigating through static PDF dumps, **Commit008** transforms the curriculum into an engaging, progressive learning platform:
- **Bite-Sized Lessons**: Every lesson is cut into proportional, digestable segments (`Part 1 of N`) with bolded exam terminology and quick navigation controls.
- **In-Browser SQL Playground**: Real-time SQL execution engine powered by AlaSQL. Write queries and inspect live result tables without needing a local MySQL server installed.
- **Strict, Verbatim Alignment**: Every theoretical definition, quiz item, and practice question directly matches the course textbook and lecture materials.
- **6-Table ERD Practical Exam**: An interactive Entity-Relationship Diagram with relationship lines (`1:N`, `N:1`), required SQL clauses (`LEFT JOIN`, `WHERE`, `ORDER BY`), and strict hints-free automated grading.
- **Adaptive Responsive Layout**: Seamless transition between desktop workstations (top header navigation) and mobile phones (ergonomic bottom navigation bar with iOS safe-area support).
- **100% Device-Isolated Storage**: All quiz scores, completed labs, and exam attempts are saved exclusively in your device's browser `localStorage`, with one-click JSON backup export and import.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| 📖 **18 Bite-Sized Lessons** | Spanning 5 core curriculum modules. Broken down into cards with bolded high-yield exam keywords. |
| 💡 **Key Takeaways & Exam Traps** | Curated insights warning students of common midterm traps (e.g., `WHERE` vs `HAVING`, `LEFT JOIN` NULL semantics, Cartesian products). |
| 🎯 **Per-Lesson Quizzes** | 10–20 balanced multiple-choice questions per lesson with instant scoring and detailed answer keys. |
| 💻 **Interactive SQL Console** | Live syntax editor supporting `SELECT`, joins, grouping, aggregation, subqueries, and table schema inspection. |
| 📊 **100-Item Midterm Exam** | 90-minute timed simulator containing **40 MCQs**, **30 Identification items**, and **30 True/False items**. |
| 🗺️ **Interactive SVG ERD** | 6-table schema visualizer with primary key (`PK`) / foreign key (`FK`) badges and relational connector lines. |
| 📱 **Phone WebApp Optimized** | Built to run natively in mobile browsers or as an "Add to Home Screen" webapp with ergonomic thumb controls. |
| 💾 **JSON Backup & Restore** | Export your progress to a `.json` file and restore it on any device without account logins or cloud tracking. |

---

## 📚 Curriculum Coverage

The reviewer comprehensively covers all **5 Modules** and **18 Lessons**:

### Module 1: Introduction to Database Administration
- **Lesson 1**: Database Administration Overview (DBA roles, system vs application DBAs)
- **Lesson 2**: DBMS Architecture & Components (Storage engine, memory structures, transaction manager)
- **Lesson 3**: Database Environments & Lifecycles (Development, Testing, Staging, Production)
- **Lesson 4**: DBA Tools & Daily Responsibilities (Health checks, backup automation, capacity planning)

### Module 2: Relational Data Modeling & Normalization
- **Lesson 1**: Relational Model Concepts & Integrity Constraints (Entity, Referential, Domain integrity)
- **Lesson 2**: Normalization (1NF, 2NF, 3NF, BCNF anomalies and decomposition)
- **Lesson 3**: Entity-Relationship Modeling (Entities, attributes, relationships, cardinalities, crows-foot notation)

### Module 3: Advanced SQL Querying & Joins
- **Lesson 1**: Data Retrieval Fundamentals (`SELECT`, `WHERE`, `ORDER BY`, `LIMIT`)
- **Lesson 2**: Multi-Table Relational Joins (`INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `CROSS JOIN`, `SELF JOIN`)
- **Lesson 3**: Aggregations, Grouping & Filtering (`GROUP BY`, `HAVING`, `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`)

### Module 4: Subqueries, Views & Advanced Operations
- **Lesson 1**: Scalar & Multiple-Row Subqueries (`IN`, `ANY`, `ALL`)
- **Lesson 2**: Correlated Subqueries & `EXISTS` Operators
- **Lesson 3**: Database Views (Virtual tables, updatable views, security abstraction)
- **Lesson 4**: Set Operations (`UNION`, `UNION ALL`, `INTERSECT`, `MINUS`)
- **Lesson 5**: Conditional Query Logic (`CASE WHEN`, `IFNULL`, `COALESCE`)

### Module 5: Performance Tuning, Storage & Transactions
- **Lesson 1**: Indexing Architectures (B-Trees, Clustered vs Non-Clustered indices)
- **Lesson 2**: Query Optimization & Execution Plans (`EXPLAIN`, table scans vs index seeks)
- **Lesson 3**: ACID Properties & Concurrency Control (Atomicity, Consistency, Isolation levels, Durability)

---

## 🧪 In-Browser SQL Laboratory Engine

The application includes a sandboxed relational database engine running client-side using **AlaSQL**. Students can execute queries and immediately view rendered data tables.

### Seeded Schema (6 Connected Relational Tables):
```
  ┌──────────────┐          ┌───────────────┐          ┌──────────────┐
  │   offices    │──1────N──│   employees   │──1────N──│  customers   │
  └──────────────┘          └───────────────┘          └──────────────┘
                                                               │ 1
                                                               │
                                                               │ N
  ┌──────────────┐          ┌───────────────┐          ┌──────────────┐
  │   products   │──1────N──│ orderdetails  │──N────1──│    orders    │
  └──────────────┘          └───────────────┘          └──────────────┘
```

- `offices`: `officeCode` (PK), `city`, `phone`, `addressLine1`, `country`, `postalCode`, `territory`
- `employees`: `employeeNumber` (PK), `lastName`, `firstName`, `extension`, `email`, `officeCode` (FK), `reportsTo` (FK), `jobTitle`
- `customers`: `customerNumber` (PK), `customerName`, `contactLastName`, `contactFirstName`, `phone`, `city`, `country`, `salesRepEmployeeNumber` (FK), `creditLimit`
- `orders`: `orderNumber` (PK), `orderDate`, `requiredDate`, `shippedDate`, `status`, `customerNumber` (FK)
- `orderdetails`: `orderNumber` (PK, FK), `productCode` (PK, FK), `quantityOrdered`, `priceEach`, `orderLineNumber`
- `products`: `productCode` (PK), `productName`, `productLine` (FK), `productScale`, `productVendor`, `quantityInStock`, `buyPrice`, `MSRP`

---

## 📝 100-Item Practice Exam & Major Practical

### Theoretical Midterm Exam (100 Questions)
- **Part I**: 40 Multiple-Choice Questions (curated, balanced options)
- **Part II**: 30 Identification Questions (case-insensitive fuzzy term matching)
- **Part III**: 30 True/False Questions
- **Exam HUD**: Real-time 90-minute countdown timer, question matrix drawer, item flagging, and automatic scoring breakdown.

### Part IV: Major SQL Laboratory Practical
Simulates a real laboratory midterm examination:
- **Input**: 6-Table Relational ERD with active line connectors.
- **Specification**: Requires multi-table `LEFT JOIN` (to capture customers with zero orders), `INNER JOIN` (to map sales reps and office branches), `WHERE` filters, and explicit `ORDER BY` sorting.
- **Strict Protocol**: Displays target 7-column result table (`customerName`, `country`, `orderNumber`, `status`, `salesRepLastName`, `officeCity`, `officeCountry`). **Zero hints or solutions given**.
- **Automated Verification**: Automatically validates clause usage, column count, row count, and record data accuracy.

---

## 📱 Mobile-First Responsive Design

Commit008 adapts dynamically based on the student's active device:

- **Desktop Experience (`> 768px`)**:
  - Sticky top header with navigation tabs (`Home`, `Lessons`, `100-Item Exam`, `SQL Lab`, `Analytics`).
  - Bottom navigation bar is completely removed to eliminate duplicate buttons.
  - Multi-column dashboard layouts.

- **Mobile WebApp Experience (`≤ 768px`)**:
  - Minimalist top brand bar with device status pill.
  - Fixed ergonomic bottom navigation bar with thumb-accessible icons.
  - Native support for iOS safe-area insets (`env(safe-area-inset-bottom)`).
  - Horizontal scroll safeguards for complex data tables and code consoles.

---

## 💾 Device Storage & Privacy

All user data is stored strictly in the client device's browser `localStorage` under the key `pup_comp008_device_profile_v1`.

- 🔒 **Zero Remote Tracking**: No external servers, no databases, no cookies, and no telemetry.
- 💾 **Export Backup**: Click **Export Backup (.json)** in the Analytics dashboard to download a snapshot of your progress.
- 🔄 **Restore Backup**: Use **Import / Restore (.json)** to transfer your completed lessons and exam scores to any laptop, tablet, or phone.
- 🧹 **Reset Option**: Clear all progress anytime with the built-in reset utility.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- `npm` or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Commit008.git
   cd Commit008
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://127.0.0.1:5173/`.

4. **Run the automated unit test suite:**
   ```bash
   node tests/data_and_engine.test.mjs
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in the `dist/` directory.

---

## 📂 Project Structure

```
Commit008/
├── index.html                   # HTML entry point with meta viewport & font links
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite build configuration
├── tests/
│   └── data_and_engine.test.mjs # 18-lesson integrity & SQL engine unit tests
└── src/
    ├── main.jsx                 # React root renderer
    ├── App.jsx                  # Main application state & adaptive tab coordinator
    ├── index.css                # PUP CCIS Cyber-Garnet design system & responsive tokens
    ├── data/
    │   ├── modulesData.js       # 5 modules, 18 lessons with bite-sized sections
    │   ├── quizzesData.js       # Verbatim per-lesson quiz question bank
    │   ├── labActivitiesData.js # Hands-on SQL exercises with target datasets
    │   ├── examData.js          # 100-item practice exam & Major Lab Exam specification
    │   └── databaseSchemas.js   # 6 relational tables seeded data
    ├── utils/
    │   ├── sqlEngine.js         # AlaSQL-based query runner & strict clause grader
    │   └── storage.js           # Per-device localStorage manager & JSON export/import
    └── components/
        ├── Header.jsx           # Top header with desktop navigation & progress pill
        ├── BottomNav.jsx        # Mobile WebApp bottom navigation bar
        ├── HomeView.jsx         # Curriculum overview & quick launch dashboard
        ├── LessonViewer.jsx     # Bite-sized paginated lesson viewer & quiz/lab tabs
        ├── QuizModal.jsx        # Instant feedback interactive quiz modal
        ├── LabConsole.jsx       # SQL syntax editor, schema inspector & live output
        ├── ErdViewer.jsx        # Interactive 6-table SVG ERD with connector lines
        ├── ExamEngine.jsx       # 100-item timed exam & Major Practical runner
        ├── LabPlayground.jsx    # Standalone query scratchpad with preset queries
        └── ProgressDashboard.jsx# Student analytics, readiness score & JSON backup center
```

---

## 🎓 Course Credits & Acknowledgments

- **Institution**: [Polytechnic University of the Philippines (PUP)](https://www.pup.edu.ph/)
- **College**: College of Computer and Information Sciences (CCIS)
- **Course**: COMP 008 — Database Administration
- **Course Instructor**: Prof. Florencio V. Contreras Jr.

*Disclaimer: This repository is an independent, student-created educational reviewer and practice platform built to support exam preparation for PUP CCIS students. All learning concepts adhere strictly to the course curriculum.*

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute for educational purposes.

---

<div align="center">
  <sub>Engineered with precision for PUPian Computer Science & IT scholars. Pass the midterms with flying colors! 🌟</sub>
</div>
