// Generator script that compiles the exhaustive 200+ question bank for COMP 008
// into src/data/examPool.js and generates the canonical pre-sampled EXAM_DATA.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetPath = path.resolve(__dirname, '../src/data/examPool.js');

// 95 MCQs covering all aspects of the curriculum
const mcqPool = [
  // Front Matter & Institutional Outcomes (10 items)
  {
    id: "pool-mcq-1",
    module: "Front Matter",
    question: "According to the PUP Institutional Learning Outcomes (ILOs), which outcome describes graduates who apply the four macro skills in communication through conventional and digital means?",
    options: [
      "Effective Communication",
      "Critical and Creative Thinking",
      "Strong Service Orientation",
      "National and Global Responsiveness"
    ],
    correctAnswer: 0,
    explanation: "From Institutional Learning Outcomes (ILOs): 'Effective Communication. Graduates apply the four macro skills in communication (reading, writing, listening, and speaking), through conventional and digital means...'"
  },
  {
    id: "pool-mcq-2",
    module: "Front Matter",
    question: "Under the BSIT Program Description, what is the mandatory capstone project format required of every graduating student?",
    options: [
      "An IT applications development as a business solution for an industry need",
      "A purely theoretical research thesis on algorithmic complexity",
      "A hardware assembly and network cabling installation portfolio",
      "A published empirical survey analyzing enterprise social media trends"
    ],
    correctAnswer: 0,
    explanation: "From BSIT Program Description: 'The program also requires a Capstone project. It should be in the form of an IT applications development as a business solution for an industry need.'"
  },
  {
    id: "pool-mcq-3",
    module: "Front Matter",
    question: "In the course syllabus grading system for COMP 008, what percentage weight is allocated to Class Standing?",
    options: [
      "60 %",
      "40 %",
      "50 %",
      "70 %"
    ],
    correctAnswer: 0,
    explanation: "From Grading System: 'Class Standing: 60 % (Attendance/Recitation 10%, Quizzes 20%, Assignments/Activities/Lab 30%), Major Exams: 40%.'"
  },
  {
    id: "pool-mcq-4",
    module: "Front Matter",
    question: "Which CHED Memorandum Order (CMO) serves as the basis for the BSIT Program Learning Outcomes (PLOs)?",
    options: [
      "CMO 25 series of 2015",
      "CMO 46 series of 2012",
      "CMO 17 series of 2017",
      "CMO 30 series of 2004"
    ],
    correctAnswer: 0,
    explanation: "From Program Learning Outcomes (PLOs): 'Based on CMO 25 series of 2015, it is expected that every student is able to attain the following...'"
  },
  {
    id: "pool-mcq-5",
    module: "Front Matter",
    question: "According to the course description for COMP 008, which viewpoint is adopted throughout the instructional study of advanced database systems?",
    options: [
      "Systems-oriented and research-oriented",
      "Business-oriented and marketing-oriented",
      "Purely mathematical and theoretical-proof oriented",
      "Consumer electronics and hardware-benchmarking oriented"
    ],
    correctAnswer: 0,
    explanation: "From Course Description: 'The viewpoint adopted throughout is systems-oriented and research-oriented. Focus falls on the impacts on classical query processing functionality...'"
  },
  {
    id: "pool-mcq-6",
    module: "Front Matter",
    question: "Which ILO refers to graduates manifesting integrity and adherence to moral and ethical principles in personal and professional circumstances?",
    options: [
      "Personal and Professional Ethics",
      "Resilience and Agility",
      "Strong Service Orientation",
      "Leadership and Organizational Skills"
    ],
    correctAnswer: 0,
    explanation: "From Institutional Learning Outcomes (ILOs): '6. Personal and Professional Ethics. Graduates manifest integrity and adherence to moral and ethical principles in their personal and professional circumstances.'"
  },
  {
    id: "pool-mcq-7",
    module: "Front Matter",
    question: "Under the grading system breakdown of Class Standing (60%), how is the remaining weight divided among internal components?",
    options: [
      "Attendance/Recitation 10%, Quizzes 20%, Activities/Lab 30%",
      "Attendance/Recitation 20%, Quizzes 20%, Activities/Lab 20%",
      "Attendance/Recitation 15%, Quizzes 15%, Activities/Lab 30%",
      "Attendance/Recitation 5%, Quizzes 25%, Activities/Lab 30%"
    ],
    correctAnswer: 0,
    explanation: "From Grading System: 'Class Standing: Attendance / Recitation 10%, Quizzes 20%, Assignments / Activities / Laboratory 30% = 60% total.'"
  },
  {
    id: "pool-mcq-8",
    module: "Front Matter",
    question: "What is the primary objective of Course Learning Outcome 1 (CLO 1) in COMP 008?",
    options: [
      "To design database using data models",
      "To assemble local area network server racks",
      "To configure hardware firewall appliances",
      "To formulate microchip logic gate architectures"
    ],
    correctAnswer: 0,
    explanation: "From Course Learning Outcomes: '1. To design database using data models.'"
  },

  // Module 1: DBMS Foundations, Tables, Keys, Types, Functions, Advantages (25 items)
  {
    id: "pool-mcq-9",
    module: "Module 1",
    question: "What is the precise definition of a database according to the instructional material?",
    options: [
      "An organized collection of related data which represents some aspect of the real world and that is stored and accessed electronically",
      "A standalone software application used exclusively to generate visual statistical graphs and reports",
      "A collection of unstructured text files saved on an external storage drive without predefined schemas",
      "A set of hardware server racks networked together to execute compiled assembly language routines"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 1: 'A database is an organized collection of related data which represents some aspect of the real world and that is stored and accessed electronically.'"
  },
  {
    id: "pool-mcq-10",
    module: "Module 1",
    question: "Who pioneered the foundational concept of the relational database model at IBM?",
    options: [
      "Edgar Frank Codd",
      "Donald D. Chamberlin",
      "Raymond F. Boyce",
      "Florencio V. Contreras Jr."
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 3: 'The concept of a relational database is elaborated as a pivotal development in data management, pioneered by Edgar Frank Codd from IBM.'"
  },
  {
    id: "pool-mcq-11",
    module: "Module 1",
    question: "Which database size category is described as being the smallest, put away on the client's PC, and characterized by a fundamental information structure?",
    options: [
      "Personal information bases",
      "Group data sets",
      "Enterprise data sets",
      "Distributed cloud repositories"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 1: '1. Personal information bases are the littlest. They are put away on the client's PC and are described by a fundamental information structure.'"
  },
  {
    id: "pool-mcq-12",
    module: "Module 1",
    question: "What distinguishes group databases from personal databases in the instructional module?",
    options: [
      "They are utilized by a division/team and must be accessed from multiple devices simultaneously",
      "They strictly utilize flat unstructured binary files without schema definitions",
      "They cannot be connected to any local area network or server environment",
      "They are completely restricted to a single read-only client workstation"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 1: '2. Group data sets... are proposed to be utilized by a division or group... they likewise should be gotten to from various gadgets simultaneously.'"
  },
  {
    id: "pool-mcq-13",
    module: "Module 1",
    question: "What is held inside the information word reference (data dictionary) to define the design and associations of an information base?",
    options: [
      "Metadata",
      "Raw unformatted text",
      "Binary machine code",
      "Precompiled stored procedures"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 1: 'The metadata is held inside what's known as an information word reference. The word reference is the thing that portrays the segments of an information base...'"
  },
  {
    id: "pool-mcq-14",
    module: "Module 1",
    question: "Why do flat document (flat file) systems require specialized programmatic coordination unlike relational databases?",
    options: [
      "Because flat document frameworks do not contain metadata",
      "Because flat document frameworks enforce rigid foreign key rules",
      "Because flat files can only be accessed across wide-area cloud networks",
      "Because flat files automatically split attributes into third normal form"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 1: 'On a side note, you should realize that level document frameworks don't contain metadata. This implies that the projects that handle these documents need to have some type of comparable coordination.'"
  },
  {
    id: "pool-mcq-15",
    module: "Module 1",
    question: "What is the scientific arrangement of records offered in rows and columns called in relational database design?",
    options: [
      "Table",
      "Domain",
      "Constraint",
      "Index tree"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 1: 'A table, in the context of a database, is a scientific arrangement of records offered in rows and columns. It improves the performance of information control and retrieval.'"
  },
  {
    id: "pool-mcq-16",
    module: "Module 1",
    question: "Which table component is also referred to as a tuple or record in the instructional material?",
    options: [
      "Row",
      "Column",
      "Domain",
      "Schema"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 1: '2. Row: Also known as a tuple or record. The data of each student in a horizontal position is known as row or record.'"
  },
  {
    id: "pool-mcq-17",
    module: "Module 1",
    question: "Which table component is also known as a field or attribute and allows sorting and filtering of data?",
    options: [
      "Column",
      "Row",
      "Tuple",
      "File pointer"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 1: '1. Columns: Also known as fields or attributes. Each type of information present in the vertical position is known as columns or fields. They allow us to sort and filter data...'"
  },
  {
    id: "pool-mcq-18",
    module: "Module 1",
    question: "What is the point where a row and a column cross called in the instructional material?",
    options: [
      "Data item (column value)",
      "Foreign key constraint",
      "Candidate key index",
      "Schema descriptor"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 1: '4. Data Items: Data items or column values are the information stored in a specific cell within a column for a particular row. Every point where a row and a column cross signify a distinct piece of data.'"
  },
  {
    id: "pool-mcq-19",
    module: "Module 1",
    question: "Which rule strictly governs the Primary Key in any relational table?",
    options: [
      "There can only be one primary key in a table, and it cannot be null",
      "A table can have multiple primary keys, and null values are permissible",
      "A primary key must be composed exclusively of variable character data",
      "A primary key must reference the primary key of a remote parent table"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 1: 'There can only be one primary key in a table, and it can't be null. ID is the primary key for the above table. Each student is uniquely identified by their ID.'"
  },
  {
    id: "pool-mcq-20",
    module: "Module 1",
    question: "Which of the following is true regarding a Foreign Key in a relational table?",
    options: [
      "It establishes relationships, can be null, and a table can have more than one",
      "It must be unique across every table and can never store null values",
      "It must always match the primary key column name character-for-character",
      "It can only link tables that reside on completely distinct physical storage disks"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 1: 'A foreign key is a column or a set of columns in a table that refers to the primary key of another table. It establishes the relationship between the table. A foreign key can be null and there can be more than one foreign key in the table.'"
  },
  {
    id: "pool-mcq-21",
    module: "Module 1",
    question: "What schema design technique splits a large table into smaller tables when any attributes exhibit redundancy in values?",
    options: [
      "Normalization",
      "Encapsulation",
      "Denormalization",
      "Fragmentation"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 2: 'DBMS optimizes the organization of data by following a database schema design technique called normalization, which splits a large table into smaller tables when any of its attributes have redundancy in values.'"
  },
  {
    id: "pool-mcq-22",
    module: "Module 1",
    question: "Under the 5 Key Functions of a DBMS, which function is responsible for ensuring transactions adhere to ACID properties?",
    options: [
      "Data Manipulation (Transaction Management)",
      "Data Definition (Schema Definition)",
      "Data Administration (Database Tuning)",
      "Data Security and Integrity (Access Control)"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 2: '2. Data Manipulation: Transaction Management: Ensures that transactions are processed reliably and adhere to ACID properties (Atomicity, Consistency, Isolation, Durability).'"
  },
  {
    id: "pool-mcq-23",
    module: "Module 1",
    question: "What represents the theoretical or logical view that furnishes information about the database structure and metadata?",
    options: [
      "Schema",
      "Domain",
      "Constraint",
      "Trigger"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 3: 'a. Schema: This is basically the actual design, otherwise called the theoretical view or legitimate view. It is likewise the part of the data set which addresses the metadata.'"
  },
  {
    id: "pool-mcq-24",
    module: "Module 1",
    question: "In relational database theory, what does the 'Domain' of an attribute represent?",
    options: [
      "The collection of all permitted values that can belong to that attribute",
      "The physical storage drive partition where table rows are serialized",
      "The network hostname where the MySQL server daemon is currently running",
      "The maximum execution time permitted before a query triggers a timeout"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 3: 'b. Domain: Each table segment has a trait that includes various qualities. The assortment of these qualities addresses the space of that trait.'"
  },
  {
    id: "pool-mcq-25",
    module: "Module 1",
    question: "Which DBMS architecture represents records in a tree-like hierarchy where each record has a single parent and multiple children?",
    options: [
      "Hierarchical DBMS",
      "Network DBMS",
      "Relational DBMS",
      "Object-Oriented DBMS"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 3: 'Hierarchical DBMS organizes data in a tree-like structure where each record (node) has a single parent and multiple children, resembling an organizational chart.'"
  },
  {
    id: "pool-mcq-26",
    module: "Module 1",
    question: "Which early DBMS architecture supported multiple parent-child relationships in a graph-like structure?",
    options: [
      "Network DBMS",
      "Hierarchical DBMS",
      "Flat-file file system",
      "Document store DBMS"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 3: 'Network DBMS, on the other hand, extends the hierarchical model by allowing multiple parent-child relationships, forming a graph-like structure.'"
  },
  {
    id: "pool-mcq-27",
    module: "Module 1",
    question: "Which of the following is cited as a prominent example of a Hierarchical DBMS?",
    options: [
      "IBM IMS",
      "IDMS",
      "PostgreSQL",
      "MongoDB"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 3, Table 1.1: 'Example: Hierarchical DBMS: IBM IMS; Network DBMS: IDMS.'"
  },
  {
    id: "pool-mcq-28",
    module: "Module 1",
    question: "Which category of DBMS diverged from traditional relational architectures to provide flexible schema models for big data and horizontal expansion?",
    options: [
      "NoSQL DBMS",
      "Hierarchical DBMS",
      "Network DBMS",
      "Relational DBMS"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 3: 'NoSQL, which stands for \"Not Only SQL,\" refers to a category of database management systems that diverge from the traditional relational database management system (RDBMS) approach.'"
  },
  {
    id: "pool-mcq-29",
    module: "Module 1",
    question: "Which NoSQL database category is exemplified by Neo4j and ArangoDB, focusing primarily on data relationships?",
    options: [
      "Graph Databases",
      "Document-Oriented Stores",
      "Key-Value Stores",
      "Column-Family Stores"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 3: 'Graph Databases: Focuses on data relationships using graph structures (e.g., Neo4j, ArangoDB).'"
  },
  {
    id: "pool-mcq-30",
    module: "Module 1",
    question: "Which type of DBMS supports concepts like inheritance, encapsulation, and polymorphism by integrating directly with OOP languages?",
    options: [
      "Object-Oriented DBMS (OODBMS)",
      "Relational DBMS (RDBMS)",
      "Hierarchical DBMS",
      "Network DBMS"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 3: 'An Object-Oriented Database Management System (OODBMS) is a type of database management system that supports the creation and modeling of data as objects... supports advanced features like inheritance, encapsulation, and polymorphism.'"
  },
  {
    id: "pool-mcq-31",
    module: "Module 1",
    question: "Under the advantages of a DBMS, what mechanism manages simultaneous access by multiple users to prevent conflicts and ensure consistency?",
    options: [
      "Concurrency Control",
      "Centralized Data Management",
      "Database Tuning",
      "Schema Normalization"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 4: '6. Concurrency Control: DBMS manages simultaneous access to the database by multiple users or applications to ensure data consistency. Prevents conflicts and ensures transaction atomicity.'"
  },
  {
    id: "pool-mcq-32",
    module: "Module 1",
    question: "Which advantage of using a DBMS explains that data is stored in one single location rather than scattered across disparate files?",
    options: [
      "Centralized Data Management",
      "Horizontal Partitioning",
      "Ad-hoc Query Execution",
      "Dynamic Bitfield Indexing"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 4: '1. Centralized Data Management: A DBMS allows for centralized storage of data, which means all data is stored in one place rather than scattered across various files or systems.'"
  },
  {
    id: "pool-mcq-33",
    module: "Module 1",
    question: "Which of the following is an example of an Object-Oriented Database Management System mentioned in the text?",
    options: [
      "ObjectDB",
      "Cassandra",
      "Redis",
      "CouchDB"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 3: 'Examples: ObjectDB, db4o.'"
  },

  // Module 2: SQL Basics, Data Types, NULLs, MySQL Monitor (25 items)
  {
    id: "pool-mcq-34",
    module: "Module 2",
    question: "Who developed SQL at IBM in the early 1970s?",
    options: [
      "Donald D. Chamberlin and Raymond F. Boyce",
      "Edgar Frank Codd and Peter Chen",
      "Ken Thompson and Dennis Ritchie",
      "Brian Kernighan and Alfred Aho"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 1: 'Developed in the early 1970s at IBM by Donald D. Chamberlin and Raymond F. Boyce, SQL became the standard for database query languages...'"
  },
  {
    id: "pool-mcq-35",
    module: "Module 2",
    question: "Why is SQL classified as a non-procedural programming language unlike C, BASIC, or Java?",
    options: [
      "Because you instruct it WHAT to do, while the DBMS engine decides the most efficient execution approach",
      "Because it executes instructions exclusively through hardware-wired electronic logic gates",
      "Because it requires the programmer to explicitly script memory pointers and CPU registers line by line",
      "Because it cannot execute any conditional logic or mathematical operators under any circumstances"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 1: 'SQL, notwithstanding, is a non-procedural language, which implies that you should simply teach it what should be finished... The information base administration framework is the segment accountable for settling on the choice concerning the most productive way to deal with accomplish your objective.'"
  },
  {
    id: "pool-mcq-36",
    module: "Module 2",
    question: "What procedural features were later added to SQL to expand its capabilities?",
    options: [
      "Capacities (functions) and 'if' articulations (statements)",
      "Pointers and manual dynamic heap memory allocations",
      "Strict object inheritance and polymorphism interfaces",
      "Hardware interrupt controllers and register bindings"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 1: 'While SQL isn't one as such, because of a high request a procedural augmentation was added to the language. SQL would now be able to exploit a few procedural highlights like capacities and \"if\" articulations.'"
  },
  {
    id: "pool-mcq-37",
    module: "Module 2",
    question: "What is the permitted value range of an UNSIGNED TINYINT numeric data type?",
    options: [
      "0 to 255",
      "-128 to 127",
      "-32,768 to 32,767",
      "0 to 65,535"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 2: 'Specifically, TINYINT can hold integer values ranging from 0 to 255 when unsigned, and from -128 to 127 when signed.'"
  },
  {
    id: "pool-mcq-38",
    module: "Module 2",
    question: "In the fixed-point declaration DECIMAL(p, s), what does parameter 's' represent?",
    options: [
      "Scale (the number of digits after the decimal point)",
      "Precision (the total number of digits stored)",
      "Size (the total allocation in physical kilobytes)",
      "Sequence (the maximum number of rows indexed)"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 2: 'DECIMAL(p, s)/NUMERIC(p, s): Used for fixed-point numbers, where p is the precision (total number of digits) and s is the scale (number of digits after the decimal point).'"
  },
  {
    id: "pool-mcq-39",
    module: "Module 2",
    question: "Why is the FLOAT data type specifically recommended when migrating a database between 32-bit and 64-bit systems?",
    options: [
      "It allows you to determine the precision value, easing migration across differing hardware architectures",
      "It automatically compresses string characters into a 16-bit binary Unicode format",
      "It converts floating-point values into fixed integers without decimal truncation",
      "It forces the database engine to store all numeric values as unchangeable text constants"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 2: 'This information type is for the most part required just when you move your data set to another framework that is not the same as yours... The reason for the FLOAT information type is to make the relocation a simpler activity.'"
  },
  {
    id: "pool-mcq-40",
    module: "Module 2",
    question: "What is the primary difference between FLOAT and REAL in terms of precision configuration?",
    options: [
      "FLOAT allows user-defined precision, whereas REAL's precision is controlled strictly by the host computer system",
      "FLOAT is restricted to 8-bit integers, while REAL supports double-precision scientific numbers",
      "REAL allows explicit precision declaration, whereas FLOAT has a hardcoded default precision of 2",
      "There is no difference; REAL and FLOAT are identical synonyms in every database execution"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 2: 'REAL: Another term for single-precision floating-point numbers... Dissimilar to the information types we talked about in the past segment, here you can't impact the accuracy. It is typically characterized by the sort of PC framework you are running, 32 cycles or 64 bits.'"
  },
  {
    id: "pool-mcq-41",
    module: "Module 2",
    question: "How does the CHAR(n) data type handle strings that have fewer characters than the defined length 'n'?",
    options: [
      "SQL automatically fills in any missing characters by appending void blank spaces",
      "SQL triggers a runtime data truncation error and cancels the query execution",
      "SQL converts the column into a variable-length VARCHAR automatically",
      "SQL prefixes the string with null bytes until the byte quota is satisfied"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 2: 'SQL fills in any \"missing\" characters via consequently composing in void spaces. These clear spaces have no impact on your information.'"
  },
  {
    id: "pool-mcq-42",
    module: "Module 2",
    question: "What is the maximum capacity of the TEXT data type in systems like MySQL?",
    options: [
      "Up to 65,535 characters",
      "Up to 255 characters",
      "Up to 16,777,215 characters",
      "Up to 4,294,967,295 characters"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 2: 'The capacity of the TEXT type can differ across database management systems, but it generally allows for a substantial amount of data, often up to 65,535 characters in systems like MySQL.'"
  },
  {
    id: "pool-mcq-43",
    module: "Module 2",
    question: "In what year was SQL extended to officially incorporate the binary string data type?",
    options: [
      "2008",
      "1970",
      "1992",
      "1999"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 2: 'Paired data has existed since the development of the PC... So, you will likely be stunned to discover that SQL was stretched out to incorporate the double string information type just in 2008.'"
  },
  {
    id: "pool-mcq-44",
    module: "Module 2",
    question: "What mechanism is required to relocate a Binary Large Object (BLOB) from one database to another?",
    options: [
      "A locator (finder)",
      "A foreign key constraint",
      "An XML schema parser",
      "A base64 serializer"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 2: 'Besides, you can't relocate a parallel huge article information type starting with one data set then onto the next without utilizing a finder. Remember that the finder is the thing that sets up the personality of this information type.'"
  },
  {
    id: "pool-mcq-45",
    module: "Module 2",
    question: "What is the total character string length of the standard DATE format ('YYYY-MM-DD') including separators?",
    options: [
      "10 positions",
      "8 positions",
      "12 positions",
      "14 positions"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 2: 'Finally, you should remember that the complete length of the date is truth be told ten spaces because the qualities are isolated by a scramble, as so: 1990-12-03.'"
  },
  {
    id: "pool-mcq-46",
    module: "Module 2",
    question: "What calendar date range does the DATETIME data type support in SQL databases?",
    options: [
      "January 1, 1753 to December 31, 9999",
      "January 1, 1970 to January 19, 2038",
      "Year 0001-01-01 to Year 9999-12-31",
      "January 1, 1901 to December 31, 2155"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 2: 'DATETIME... usually supports dates from January 1, 1753, to December 31, 9999, and times from 00:00:00 to 23:59:59.999999.'"
  },
  {
    id: "pool-mcq-47",
    module: "Module 2",
    question: "How does the SET data type store multiple values from a permitted list internally?",
    options: [
      "Each value is stored as a single bit within a bitfield",
      "Each value is concatenated into a null-terminated ASCII string",
      "Each value is assigned an independent external integer foreign key",
      "Values are compressed into a binary JSON document array"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 2: 'Each value in the SET is stored as a single bit within a bitfield, allowing for efficient storage and quick operations.'"
  },
  {
    id: "pool-mcq-48",
    module: "Module 2",
    question: "What does a NULL value represent in SQL relational theory?",
    options: [
      "The absence of data, indicating a value is unknown, missing, or not applicable",
      "A numerical zero (0) stored as a single integer bit",
      "An empty character string consisting of zero characters ('')",
      "A fatal system error generated by an unhandled arithmetic overflow"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 2: 'Null values in SQL represent the absence of data in a column, indicating that a value is unknown, missing, or not applicable. Unlike other data types, a null value is not equivalent to zero, an empty string, or any other default value...'"
  },
  {
    id: "pool-mcq-49",
    module: "Module 2",
    question: "In the instructional material, why is the wage of Boromir Captain of Gondor ($999,999.99) set to NULL in the NUMERIC(8,2) column?",
    options: [
      "Because the value exceeds the declared numeric range and is an out-of-reach value",
      "Because fictional characters are strictly prohibited from receiving database salaries",
      "Because Gondor uses gold coins rather than modern decimal currencies",
      "Because the salary was paid in advance before the transaction was committed"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 2: 'In the last situation we have out-of-reach esteem. Suppose we have a work table with Boromir as one of the fields. We need to set his wages to invalid since we determined a NUMERIC information type with an exactness of 8 and a size of 2... Since the worth is out of reach, it's set to invalid.'"
  },
  {
    id: "pool-mcq-50",
    module: "Module 2",
    question: "In the 4 NULL value scenarios, why is the gender/sex of Data the android intentionally set to NULL?",
    options: [
      "Because no value applies to this field since Data is an android machine",
      "Because androids exist in a future temporal range that has not yet occurred",
      "Because the gender attribute requires a double-precision floating-point type",
      "Because the database administrator forgot to enter the value during migration"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 2: '3. You set an invalid worth intentionally because no worth would apply to a particular field. Envision you run an organization later on and one of your representatives is an android called Data... realizing this you set the worth to invalid.'"
  },
  {
    id: "pool-mcq-51",
    module: "Module 2",
    question: "Which MySQL command displays the table columns, data types, nullability, keys, and default values?",
    options: [
      "SHOW COLUMNS FROM tablename;",
      "SHOW TABLES FROM tablename;",
      "SHOW INDEX FROM tablename;",
      "SHOW STATUS tablename;"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 3: 'SHOW COLUMNS FROM tablename: Shows the attributes, types of attributes, key data, whether or not or not NULL is allowable, defaults, and various knowledge for a table.'"
  },
  {
    id: "pool-mcq-52",
    module: "Module 2",
    question: "Which MySQL Monitor command lists the databases accessible to the current user?",
    options: [
      "SHOW DATABASES;",
      "SHOW SCHEMAS ALL;",
      "LIST DATABASES;",
      "DISPLAY DATABASES;"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 3: 'SHOW DATABASES: Lists out the databases that area unit accessible by the MySQL software system.'"
  },
  {
    id: "pool-mcq-53",
    module: "Module 2",
    question: "Which command presents details of all indexes on a table, including the primary key?",
    options: [
      "SHOW INDEX FROM tablename;",
      "SHOW KEYS FROM tablename;",
      "DESCRIBE INDEX tablename;",
      "EXPLAIN INDEX tablename;"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 3: 'SHOW INDEX FROM tablename: Presents the tiny print of all indexes on the table, furthermore because of the 1st KEY.'"
  },

  // Module 3: Database Creation, CRUD, SQL Categories (20 items)
  {
    id: "pool-mcq-54",
    module: "Module 3",
    question: "What four core database operations form the acronym CRUD?",
    options: [
      "Create, Read, Update, Delete",
      "Create, Retrieve, Unlink, Destroy",
      "Compile, Run, Update, Debug",
      "Configure, Read, Union, Divide"
    ],
    correctAnswer: 0,
    explanation: "From Module 3, Summary: 'The fundamental CRUD operations in SQL—Create, Read, Update, and Delete—allow you to add new records, retrieve existing data, modify existing entries, and remove data from your database...'"
  },
  {
    id: "pool-mcq-55",
    module: "Module 3",
    question: "What happens if an UPDATE statement is executed without a WHERE clause?",
    options: [
      "All rows in the table will be updated with the new values",
      "The query will fail with a syntax error requiring a predicate",
      "Only the first row in the table will be modified",
      "The table schema will be dropped from the database catalog"
    ],
    correctAnswer: 0,
    explanation: "From Module 3, Lesson 1: 'WHERE: Specifies which rows should be updated based on a condition. If omitted, all rows in the table will be updated.'"
  },
  {
    id: "pool-mcq-56",
    module: "Module 3",
    question: "What happens if a DELETE statement is executed without specifying a WHERE condition?",
    options: [
      "All records in the table will be deleted",
      "The table definition and structure will be permanently dropped",
      "The database engine will reject the query due to a missing filter",
      "Only records containing NULL values will be removed"
    ],
    correctAnswer: 0,
    explanation: "From Module 3, Lesson 1: 'If the WHERE clause is omitted, all records in the table will be deleted. Therefore, it is crucial to use the WHERE clause to specify the condition for deletion to avoid removing all data from the table.'"
  },
  {
    id: "pool-mcq-57",
    module: "Module 3",
    question: "What is the critical functional difference between the DROP statement and the DELETE statement?",
    options: [
      "DROP eliminates entire structures (tables/databases) permanently, whereas DELETE removes rows without destroying structure",
      "DELETE is a DDL command, whereas DROP is a DML command that can be rolled back",
      "DROP only removes records that contain NULL keys, whereas DELETE purges all data",
      "DELETE deletes the database engine itself, whereas DROP resets individual columns"
    ],
    correctAnswer: 0,
    explanation: "From Module 3, Lesson 1: 'Similar to DELETE, this assertion eliminates whole information base construction components like tables or even the data set itself. Remember that utilizing the DELETE proclamation won't erase a table or data set. That assertion is simply used to eliminate information, not constructions.'"
  },
  {
    id: "pool-mcq-58",
    module: "Module 3",
    question: "Which ALTER TABLE clause is used to add a new column to an existing table in SQL?",
    options: [
      "ADD column_name datatype;",
      "INSERT column_name datatype;",
      "CREATE column_name datatype;",
      "APPEND column_name datatype;"
    ],
    correctAnswer: 0,
    explanation: "From Module 3, Lesson 1: 'ALTER TABLE table_name ADD column_name datatype;'"
  },
  {
    id: "pool-mcq-59",
    module: "Module 3",
    question: "Which ALTER TABLE clause is used to delete an existing column from a table?",
    options: [
      "DROP COLUMN column_name;",
      "DELETE COLUMN column_name;",
      "REMOVE COLUMN column_name;",
      "TRUNCATE COLUMN column_name;"
    ],
    correctAnswer: 0,
    explanation: "From Module 3, Lesson 1: 'ALTER TABLE table_name DROP COLUMN column_name;'"
  },
  {
    id: "pool-mcq-60",
    module: "Module 3",
    question: "Which ALTER TABLE clause is used to alter the data type of an existing column in MySQL?",
    options: [
      "MODIFY COLUMN column_name datatype;",
      "UPDATE COLUMN column_name datatype;",
      "CHANGE TYPE column_name datatype;",
      "ALTER TYPE column_name datatype;"
    ],
    correctAnswer: 0,
    explanation: "From Module 3, Lesson 1: 'ALTER TABLE table_name MODIFY COLUMN column_name datatype;'"
  },
  {
    id: "pool-mcq-61",
    module: "Module 3",
    question: "What query does MS Access automatically generate for you when you open SQL View mode in Query Design?",
    options: [
      "SELECT FROM INHERITANCE",
      "SELECT * FROM DUAL",
      "SELECT ALL FROM TABLE",
      "SELECT FIRST 10 FROM USERS"
    ],
    correctAnswer: 0,
    explanation: "From Module 3, Lesson 2: 'This is what the program composes for you to kick you off: SELECT FROM INHERITANCE. It doesn't have the foggiest idea what information you need to recover or change...'"
  },
  {
    id: "pool-mcq-62",
    module: "Module 3",
    question: "Which command line instruction is used to connect to the MySQL server as a specified user?",
    options: [
      "mysql -u username -p",
      "connect mysql username password",
      "sql login -u username -p",
      "open-db -user username"
    ],
    correctAnswer: 0,
    explanation: "From Module 3, Lesson 2: 'mysql -u username -p. You will be prompted to enter your password.'"
  },
  {
    id: "pool-mcq-63",
    module: "Module 3",
    question: "Which SQL command category consists strictly of CREATE, ALTER, DROP, and TRUNCATE?",
    options: [
      "DDL (Data Definition Language)",
      "DML (Data Manipulation Language)",
      "DQL (Data Query Language)",
      "DCL (Data Control Language)"
    ],
    correctAnswer: 0,
    explanation: "From Module 3, Lesson 3: 'DDL (Data Definition Language) consists of SQL commands that can be used for defining, altering and deleting database structures such as tables, indexes and schemas.'"
  },
  {
    id: "pool-mcq-64",
    module: "Module 3",
    question: "Which is the ONLY statement classified under DQL (Data Query Language)?",
    options: [
      "SELECT",
      "SHOW",
      "DESCRIBE",
      "FETCH"
    ],
    correctAnswer: 0,
    explanation: "From Module 3, Lesson 3: 'Note: DQL has only one command, SELECT. Other terms like FROM, WHERE, GROUP BY, HAVING, ORDER BY, DISTINCT and LIMIT are clauses of SELECT, not separate commands.'"
  },
  {
    id: "pool-mcq-65",
    module: "Module 3",
    question: "Which SQL command category includes commands like GRANT and REVOKE to manage user privileges?",
    options: [
      "DCL (Data Control Language)",
      "DML (Data Manipulation Language)",
      "DDL (Data Definition Language)",
      "DQL (Data Query Language)"
    ],
    correctAnswer: 0,
    explanation: "From Module 3, Lesson 3: 'DCL (Data Control Language) includes commands such as GRANT and REVOKE which mainly deal with the rights, permissions and other controls of the database system.'"
  },
  {
    id: "pool-mcq-66",
    module: "Module 3",
    question: "Which SQL command category handles INSERT, UPDATE, and DELETE operations?",
    options: [
      "DML (Data Manipulation Language)",
      "DDL (Data Definition Language)",
      "DCL (Data Control Language)",
      "DQL (Data Query Language)"
    ],
    correctAnswer: 0,
    explanation: "From Module 3, Lesson 3: 'DML (Data Manipulation Language) commands are used to manipulate the data stored in database tables. With DML, you can insert new records, update existing ones, delete unwanted data...'"
  },

  // Module 4: MySQL Query Revisit, Clauses, Operators, Precedence (18 items)
  {
    id: "pool-mcq-67",
    module: "Module 4",
    question: "In what internal order does MySQL evaluate the clauses of a standard SELECT statement?",
    options: [
      "FROM clause first, then WHERE clause, then SELECT clause",
      "SELECT clause first, then FROM clause, then WHERE clause",
      "WHERE clause first, then SELECT clause, then FROM clause",
      "ORDER BY clause first, then FROM clause, then SELECT clause"
    ],
    correctAnswer: 0,
    explanation: "From Module 4, Lesson 1 & Lesson 3: 'When evaluating the SELECT statement, MySQL evaluates the FROM clause first and then the SELECT clause... In the SELECT statement, the WHERE clause is evaluated after the FROM clause and before the SELECT clause.'"
  },
  {
    id: "pool-mcq-68",
    module: "Module 4",
    question: "What character serves as the statement delimiter in MySQL, separating independent statements?",
    options: [
      "Semicolon (;)",
      "Colon (:)",
      "Period (.)",
      "Forward slash (/)"
    ],
    correctAnswer: 0,
    explanation: "From Module 4, Lesson 1: 'The semicolon ; is the statement delimiter. It specifies the end of a statement. If you have two or more statements, you use the semicolon ; to separate them...'"
  },
  {
    id: "pool-mcq-69",
    module: "Module 4",
    question: "What is the default sort direction when an ORDER BY clause is specified without ASC or DESC?",
    options: [
      "ASC (Ascending)",
      "DESC (Descending)",
      "Natural disk insertion order",
      "Random index hash order"
    ],
    correctAnswer: 0,
    explanation: "From Module 4, Lesson 2: 'By default, the ORDER BY clause uses ASC if you don’t explicitly specify any option.'"
  },
  {
    id: "pool-mcq-70",
    module: "Module 4",
    question: "In multi-column sorting: ORDER BY contactLastName DESC, contactFirstName ASC, how is the data ordered?",
    options: [
      "First sorted by contactLastName descending; then tied rows are sorted by contactFirstName ascending",
      "Both columns are sorted in descending order simultaneously",
      "contactFirstName is sorted first in ascending order, and contactLastName is completely ignored",
      "The result set is randomized because conflicting sort directions are not permitted"
    ],
    correctAnswer: 0,
    explanation: "From Module 4, Lesson 2: 'In this case, the ORDER BY clause: First, sort the result set by the values in the column1... Then, sort the sorted result set by the values in the column2... the order of values in the column1 will not change in this step...'"
  },
  {
    id: "pool-mcq-71",
    module: "Module 4",
    question: "What three logical truth values can a Boolean predicate evaluate to in MySQL?",
    options: [
      "TRUE, FALSE, or UNKNOWN",
      "TRUE, FALSE, or ERROR",
      "YES, NO, or UNDEFINED",
      "1, 0, or -1"
    ],
    correctAnswer: 0,
    explanation: "From Module 4, Lesson 3: 'In MySQL, a predicate is a Boolean expression that evaluates to TRUE, FALSE, or UNKNOWN (MySQL WHERE, n.d.).'"
  },
  {
    id: "pool-mcq-72",
    module: "Module 4",
    question: "What is short-circuit evaluation in MySQL logical expressions?",
    options: [
      "MySQL stops evaluating remaining expressions whenever the final outcome is already guaranteed",
      "MySQL bypasses the index cache when a primary key is not indexed",
      "MySQL shuts down the background daemon when an invalid query is received",
      "MySQL reorders table columns alphabetically to speed up arithmetic checks"
    ],
    correctAnswer: 0,
    explanation: "From Module 4, Lesson 4: 'When evaluating an expression that has the AND operator, MySQL stops evaluating the remaining parts of the expression whenever it can determine the result. This function is called short-circuit evaluation.'"
  },
  {
    id: "pool-mcq-73",
    module: "Module 4",
    question: "What is the result of executing: SELECT 1 = 0 AND 1 / 0 ; in MySQL?",
    options: [
      "0 (returns 0 without error due to AND short-circuit evaluation)",
      "A division-by-zero fatal error",
      "NULL",
      "1 (True)"
    ],
    correctAnswer: 0,
    explanation: "From Module 4, Lesson 4: 'Consider the following example: SELECT 1 = 0 AND 1 / 0 ; Result: 0. Because 1=0 is false, MySQL stops evaluating and never divides by zero.'"
  },
  {
    id: "pool-mcq-74",
    module: "Module 4",
    question: "What is the result of executing: SELECT 1 = 1 OR 1 / 0 ; in MySQL?",
    options: [
      "1 (returns 1 without error due to OR short-circuit evaluation)",
      "A fatal division-by-zero exception",
      "NULL",
      "0 (False)"
    ],
    correctAnswer: 0,
    explanation: "From Module 4, Lesson 5: 'See the following example: SELECT 1 = 1 OR 1 / 0; Result: 1. Because the expression 1 = 1 always returns true, MySQL does not evaluate the 1 / 0.'"
  },
  {
    id: "pool-mcq-75",
    module: "Module 4",
    question: "Between logical operators AND and OR, which operator has higher precedence during expression evaluation?",
    options: [
      "AND operator has higher precedence than OR",
      "OR operator has higher precedence than AND",
      "Both have equal precedence and evaluate purely from right to left",
      "Precedence is determined arbitrarily by table row order"
    ],
    correctAnswer: 0,
    explanation: "From Module 4, Lesson 5: 'When you use more than one logical operator in an expression, MySQL always evaluates the OR operators after the AND operators. This is called operator precedence... MySQL evaluates the operator with higher precedence first.'"
  },
  {
    id: "pool-mcq-76",
    module: "Module 4",
    question: "What is the result of the expression: SELECT true OR false AND false; in MySQL?",
    options: [
      "1 (True, because false AND false is evaluated first to false, then true OR false evaluates to true)",
      "0 (False, because true OR false evaluates first to true, then true AND false evaluates to false)",
      "NULL, because logical constants cannot be chained without parentheses",
      "An error, because lowercase true and false are reserved in C only"
    ],
    correctAnswer: 0,
    explanation: "From Module 4, Lesson 5: 'SELECT true OR false AND false; Result: 1. How it works: First, MySQL evaluates the AND operator, therefore the expression false AND false returns false. Second, MySQL evaluates the OR operator hence the expression true OR false returns true.'"
  },
  {
    id: "pool-mcq-77",
    module: "Module 4",
    question: "In MySQL pattern matching with LIKE, what does the percent sign (%) wildcard match?",
    options: [
      "Any string of zero or more characters",
      "Exactly one single character",
      "Only numerical digits from 0 to 9",
      "Any whitespace or punctuation character"
    ],
    correctAnswer: 0,
    explanation: "From Module 4, Lesson 3: 'The % wildcard matches any string of zero or more characters while the _ wildcard matches any single character.'"
  },
  {
    id: "pool-mcq-78",
    module: "Module 4",
    question: "In MySQL pattern matching with LIKE, what does the underscore (_) wildcard match?",
    options: [
      "Exactly one single character",
      "Zero or more characters",
      "Any non-alphanumeric character",
      "The start of a newline character"
    ],
    correctAnswer: 0,
    explanation: "From Module 4, Lesson 3: '...while the _ wildcard matches any single character (MySQL WHERE, n.d.).'"
  },
  {
    id: "pool-mcq-79",
    module: "Module 4",
    question: "Which query correctly retrieves employees whose officeCode is between 1 and 3 inclusively?",
    options: [
      "SELECT * FROM employees WHERE officeCode BETWEEN 1 AND 3;",
      "SELECT * FROM employees WHERE officeCode IN (1, 3);",
      "SELECT * FROM employees WHERE officeCode >= 1 OR officeCode <= 3;",
      "SELECT * FROM employees WHERE officeCode LIKE '1-3';"
    ],
    correctAnswer: 0,
    explanation: "From Module 4, Lesson 3: 'The BETWEEN operator returns TRUE if a value is in a range of values... WHERE officeCode BETWEEN 1 AND 3 ORDER BY officeCode;'"
  },

  // Module 5: SQL Joins with MySQL (16 items)
  {
    id: "pool-mcq-80",
    module: "Module 5",
    question: "What is the primary objective of a SQL JOIN in relational databases?",
    options: [
      "To combine rows from two or more tables based on a related column between them",
      "To duplicate table schemas across multiple distinct database servers",
      "To enforce strict password authentication on connecting user clients",
      "To delete orphaned records that contain null values in remote tables"
    ],
    correctAnswer: 0,
    explanation: "From Module 5, Introduction: 'A SQL Join is used to combine rows from two or more tables based on a related column between them. MySQL, as one of the most widely used relational database management systems, supports several types of joins...'"
  },
  {
    id: "pool-mcq-81",
    module: "Module 5",
    question: "What result does an INNER JOIN return if no rows between the joined tables satisfy the join condition?",
    options: [
      "An empty result set",
      "All rows from the left table populated with NULL values",
      "The Cartesian product of both tables",
      "A runtime syntax error halting the database engine"
    ],
    correctAnswer: 0,
    explanation: "From Module 5, Lesson 1: 'In case no row between tables causes the join condition to evaluate to TRUE, the INNER JOIN returns an empty result set.'"
  },
  {
    id: "pool-mcq-82",
    module: "Module 5",
    question: "When joining two tables where the matching columns have identical names, which cleaner syntax can replace the ON clause?",
    options: [
      "USING (column_name)",
      "MATCHING (column_name)",
      "SAME (column_name)",
      "EQUALS (column_name)"
    ],
    correctAnswer: 0,
    explanation: "From Module 5, Lesson 1: 'Because the joined columns of both tables have the same name productline, you can use the USING syntax... The query returns the same result set. However, the USING syntax is much shorter and cleaner.'"
  },
  {
    id: "pool-mcq-83",
    module: "Module 5",
    question: "What does a LEFT JOIN return for columns of the right table when a row in the left table has no matching row?",
    options: [
      "NULL values",
      "Zeroes (0) or empty strings",
      "The primary key of the left table",
      "The query terminates with a join failure exception"
    ],
    correctAnswer: 0,
    explanation: "From Module 5, Lesson 2: 'In case the row from the left table (t1) does not match with any row from the right table(t2)... it uses NULL for all the columns of the row from the right table.'"
  },
  {
    id: "pool-mcq-84",
    module: "Module 5",
    question: "How do you construct a query using LEFT JOIN to find rows in the left table that have NO matching rows in the right table?",
    options: [
      "Add a WHERE clause specifying right_table.key IS NULL",
      "Add a WHERE clause specifying right_table.key = 0",
      "Add an EXCEPT clause followed by the right table schema",
      "Use the INNER JOIN keyword combined with a NOT EQUAL operator"
    ],
    correctAnswer: 0,
    explanation: "From Module 5, Lesson 2: 'To find members who are not the committee members, you add a WHERE clause and IS NULL operator as follows: SELECT ... FROM members m LEFT JOIN committees c USING(name) WHERE c.committee_id IS NULL;'"
  },
  {
    id: "pool-mcq-85",
    module: "Module 5",
    question: "How does a RIGHT JOIN differ fundamentally from a LEFT JOIN in its evaluation process?",
    options: [
      "The treatment is reversed: it starts selecting all rows from the right table and matches rows in the left table",
      "It only processes tables that contain double-precision floating-point numbers",
      "It automatically sorts the final output set by the right table primary key in descending order",
      "It requires three or more tables to be specified in the FROM clause"
    ],
    correctAnswer: 0,
    explanation: "From Module 5, Lesson 3: 'The right join clause is similar to the left join clause except that the treatment of tables is reversed. The right join starts selecting data from the right table instead of the left table.'"
  },
  {
    id: "pool-mcq-86",
    module: "Module 5",
    question: "Which term is synonymous with RIGHT JOIN in standard SQL?",
    options: [
      "RIGHT OUTER JOIN",
      "RIGHT INNER JOIN",
      "NATURAL RIGHT JOIN",
      "CARTESIAN RIGHT JOIN"
    ],
    correctAnswer: 0,
    explanation: "From Module 5, Lesson 3: 'Note that the RIGHT OUTER JOIN is a synonym for RIGHT JOIN.'"
  },
  {
    id: "pool-mcq-87",
    module: "Module 5",
    question: "What join produces the Cartesian product of two tables, combining every row from the first table with every row from the second table?",
    options: [
      "CROSS JOIN",
      "INNER JOIN",
      "LEFT JOIN",
      "NATURAL JOIN"
    ],
    correctAnswer: 0,
    explanation: "From Module 3, Lesson 1: 'CROSS JOIN - Returns the Cartesian product of the two tables, combining all rows from the first table with all rows from the second table.'"
  },
  {
    id: "pool-mcq-88",
    module: "Module 5",
    question: "How is a FULL OUTER JOIN typically achieved in MySQL, since MySQL lacks direct native support for the FULL OUTER JOIN keyword?",
    options: [
      "By combining a LEFT JOIN and a RIGHT JOIN using the UNION operator",
      "By executing an INNER JOIN followed by an INTERSECT statement",
      "By configuring the MySQL storage engine from InnoDB to MyISAM",
      "By adding an ON 1 = 1 condition to a CROSS JOIN clause"
    ],
    correctAnswer: 0,
    explanation: "From Module 5 Learning Outcomes & SQL standard practice: 'Understand and utilize FULL OUTER JOIN (using MySQL-compatible methods) to retrieve all records when there is a match in either table' (achieved via UNION of LEFT and RIGHT joins)."
  },
  {
    id: "pool-mcq-89",
    module: "Module 5",
    question: "In the sample database query joining products and productlines, which column serves as the foreign key referencing productlines?",
    options: [
      "productLine",
      "productCode",
      "textDescription",
      "buyPrice"
    ],
    correctAnswer: 0,
    explanation: "From Module 5, Lesson 1: 'In this diagram, the table products have the column productLine that references the column productline of the table productlines. The column productLine in the table products is called the foreign key column.'"
  },
  {
    id: "pool-mcq-90",
    module: "Module 5",
    question: "What is returned when you query: SELECT c.customerNumber, o.orderNumber FROM customers c LEFT JOIN orders o USING (customerNumber) WHERE o.orderNumber IS NULL;?",
    options: [
      "Customers who have placed zero orders",
      "Orders that have no assigned customer",
      "All customers and their existing active orders",
      "An empty table because orderNumber is a primary key"
    ],
    correctAnswer: 0,
    explanation: "From Module 5, Lesson 2: 'The LEFT JOIN clause is very useful when you want to find rows in a table that doesn’t have a matching row from another table. The following example uses the LEFT JOIN to find customers who have no order... WHERE orderNumber IS NULL;'"
  },
  {
    id: "pool-mcq-91",
    module: "Module 1",
    question: "Which of the following NoSQL database engines is explicitly classified as a Document-Oriented store in Module 1?",
    options: [
      "MongoDB",
      "Redis",
      "Cassandra",
      "Neo4j"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 3: 'Document-Oriented: Stores data as documents (e.g., MongoDB, CouchDB).'"
  },
  {
    id: "pool-mcq-92",
    module: "Module 1",
    question: "Which NoSQL engine is classified as a Column-Family store in Module 1?",
    options: [
      "Cassandra",
      "Redis",
      "MongoDB",
      "ArangoDB"
    ],
    correctAnswer: 0,
    explanation: "From Module 1, Lesson 3: 'Column-Family Stores: Stores data in columns rather than rows (e.g., Cassandra, HBase).'"
  },
  {
    id: "pool-mcq-93",
    module: "Module 2",
    question: "What integer range can a SIGNED TINYINT store in SQL?",
    options: [
      "-128 to 127",
      "0 to 255",
      "-32768 to 32767",
      "-2147483648 to 2147483647"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 2: 'Specifically, TINYINT can hold integer values ranging from 0 to 255 when unsigned, and from -128 to 127 when signed.'"
  },
  {
    id: "pool-mcq-94",
    module: "Module 2",
    question: "What is the maximum integer value that a BIGINT data type can store?",
    options: [
      "9223372036854775807",
      "2147483647",
      "32767",
      "18446744073709551615"
    ],
    correctAnswer: 0,
    explanation: "From Module 2, Lesson 2: 'BIGINT can store values like 9223372036854775807 or -9223372036854775808.'"
  },
  {
    id: "pool-mcq-95",
    module: "Module 3",
    question: "What command displays the schema structure of a table in MySQL, showing fields, types, nullability, keys, and defaults?",
    options: [
      "DESCRIBE tablename;",
      "DISPLAY tablename;",
      "SCHEMA tablename;",
      "PRINT STRUCTURE tablename;"
    ],
    correctAnswer: 0,
    explanation: "From Module 3, Lesson 2: 'Describe the structure of a table: DESCRIBE employees;'"
  }
];

// 55 Identification Questions with verbatim definitions and precise accepted answers
const identificationPool = [
  {
    id: "pool-id-1",
    category: "Module 1",
    question: "What software system serves as an interface between an end-user and a database, providing a systematic and organized way of storing, managing, and retrieving data?",
    correctAnswer: "Database Management System",
    acceptedAnswers: ["Database Management System", "DBMS", "Database Management Systems"],
    explanation: "From Module 1, Lesson 2: 'Database Management Systems (DBMS) is a software system used to store, retrieve, and run queries on data. It provides a systematic and organized way of storing, managing, and retrieving data...'"
  },
  {
    id: "pool-id-2",
    category: "Module 1",
    question: "Who pioneered the concept of the relational database at IBM in 1970?",
    correctAnswer: "Edgar Frank Codd",
    correctAnswerDisplay: "Edgar Frank Codd (E.F. Codd)",
    acceptedAnswers: ["Edgar Frank Codd", "E.F. Codd", "Edgar F. Codd", "Codd"],
    explanation: "From Module 1, Lesson 3: 'The concept of a relational database is elaborated as a pivotal development in data management, pioneered by Edgar Frank Codd from IBM.'"
  },
  {
    id: "pool-id-3",
    category: "Module 1",
    question: "What database schema design technique splits a large table into smaller tables when any of its attributes have redundancy in values?",
    correctAnswer: "Normalization",
    acceptedAnswers: ["Normalization", "database normalization"],
    explanation: "From Module 1, Lesson 2: 'DBMS optimizes the organization of data by following a database schema design technique called normalization, which splits a large table into smaller tables when any of its attributes have redundancy in values.'"
  },
  {
    id: "pool-id-4",
    category: "Module 1",
    question: "What is the unique identifier for each row in a table that can never be null, with only one allowed per table?",
    correctAnswer: "Primary Key",
    acceptedAnswers: ["Primary Key", "PK"],
    explanation: "From Module 1, Lesson 1: '6. Primary Key: It is the unique identifier for each row in a table. There can only be one primary key in a table, and it can't be null.'"
  },
  {
    id: "pool-id-5",
    category: "Module 1",
    question: "What is a column or set of columns in a table that refers to the primary key of another table to establish relationships?",
    correctAnswer: "Foreign Key",
    acceptedAnswers: ["Foreign Key", "FK"],
    explanation: "From Module 1, Lesson 1: '7. Foreign Key: A foreign key is a column or a set of columns in a table that refers to the primary key of another table. It establishes the relationship between the table.'"
  },
  {
    id: "pool-id-6",
    category: "Module 1",
    question: "What is data that characterizes the design, structure, and associations inside a database, held in an information dictionary?",
    correctAnswer: "Metadata",
    acceptedAnswers: ["Metadata", "data about data"],
    explanation: "From Module 1, Lesson 1: 'It additionally incorporates metadata, which has the reason for characterizing the data's design inside the information base... The metadata is held inside what's known as an information word reference.'"
  },
  {
    id: "pool-id-7",
    category: "Module 1",
    question: "What is the alternative formal database term for a horizontal row in a relational table?",
    correctAnswer: "Tuple",
    acceptedAnswers: ["Tuple", "Record", "tuple/record"],
    explanation: "From Module 1, Lesson 1: '2. Row: Also known as a tuple or record. The data of each student in a horizontal position is known as row or record.'"
  },
  {
    id: "pool-id-8",
    category: "Module 1",
    question: "What is the alternative formal relational database term for a vertical column in a table?",
    correctAnswer: "Attribute",
    acceptedAnswers: ["Attribute", "Field", "attribute/field"],
    explanation: "From Module 1, Lesson 1: '1. Columns: Also known as fields or attributes. Each type of information present in the vertical position is known as columns or fields.'"
  },
  {
    id: "pool-id-9",
    category: "Module 1",
    question: "What term denotes the collection of all permitted valid values that can belong to a particular table column?",
    correctAnswer: "Domain",
    acceptedAnswers: ["Domain", "attribute domain"],
    explanation: "From Module 1, Lesson 3: 'b. Domain: Each table segment has a trait that includes various qualities. The assortment of these qualities addresses the space of that trait.'"
  },
  {
    id: "pool-id-10",
    category: "Module 1",
    question: "What early DBMS model organizes data in a rigid tree-like structure where each record has a single parent and multiple children, exemplified by IBM IMS?",
    correctAnswer: "Hierarchical DBMS",
    acceptedAnswers: ["Hierarchical DBMS", "Hierarchical", "Hierarchical database"],
    explanation: "From Module 1, Lesson 3: 'Hierarchical DBMS organizes data in a tree-like structure where each record (node) has a single parent and multiple children, resembling an organizational chart.'"
  },
  {
    id: "pool-id-11",
    category: "Module 1",
    question: "What early DBMS model extends hierarchical structures by allowing multiple parent-child relationships in a graph-like structure, exemplified by IDMS?",
    correctAnswer: "Network DBMS",
    acceptedAnswers: ["Network DBMS", "Network model", "Network database"],
    explanation: "From Module 1, Lesson 3: 'Network DBMS, on the other hand, extends the hierarchical model by allowing multiple parent-child relationships, forming a graph-like structure.'"
  },
  {
    id: "pool-id-12",
    category: "Module 1",
    question: "What acronym stands for 'Not Only SQL', referring to databases designed for unstructured data, dynamic schemas, and horizontal expansion?",
    correctAnswer: "NoSQL",
    acceptedAnswers: ["NoSQL", "Not Only SQL"],
    explanation: "From Module 1, Lesson 3: 'NoSQL, which stands for \"Not Only SQL,\" refers to a category of database management systems that diverge from the traditional relational database management system...'"
  },
  {
    id: "pool-id-13",
    category: "Module 1",
    question: "What type of DBMS supports data modeling as objects and incorporates OOP principles such as inheritance, encapsulation, and polymorphism?",
    correctAnswer: "Object-Oriented DBMS",
    acceptedAnswers: ["Object-Oriented DBMS", "OODBMS", "Object Oriented Database Management System"],
    explanation: "From Module 1, Lesson 3: 'An Object-Oriented Database Management System (OODBMS) is a type of database management system that supports the creation and modeling of data as objects...'"
  },
  {
    id: "pool-id-14",
    category: "Module 1",
    question: "Under the advantages of a DBMS, what mechanism manages simultaneous database access by multiple users to prevent conflicts and ensure consistency?",
    correctAnswer: "Concurrency Control",
    acceptedAnswers: ["Concurrency Control", "concurrency"],
    explanation: "From Module 1, Lesson 4: '6. Concurrency Control: DBMS manages simultaneous access to the database by multiple users or applications to ensure data consistency.'"
  },
  {
    id: "pool-id-15",
    category: "Module 2",
    question: "What does the standardized database query acronym SQL stand for?",
    correctAnswer: "Structured Query Language",
    acceptedAnswers: ["Structured Query Language", "Structured Query Language (SQL)"],
    explanation: "From Module 2, Lesson 1: 'SQL, or Structured Query Language, is a standardized programming language used for managing and manipulating relational databases.'"
  },
  {
    id: "pool-id-16",
    category: "Module 2",
    question: "Name either of the two computer scientists at IBM who developed SQL in the early 1970s.",
    correctAnswer: "Donald D. Chamberlin",
    acceptedAnswers: ["Donald D. Chamberlin", "Raymond F. Boyce", "Donald Chamberlin", "Raymond Boyce", "Chamberlin", "Boyce"],
    explanation: "From Module 2, Lesson 1: 'Developed in the early 1970s at IBM by Donald D. Chamberlin and Raymond F. Boyce, SQL became the standard for database query languages...'"
  },
  {
    id: "pool-id-17",
    category: "Module 2",
    question: "What classification of programming language tells the system WHAT should be accomplished rather than scripting the step-by-step procedural sequence?",
    correctAnswer: "Non-procedural language",
    acceptedAnswers: ["Non-procedural", "Non-procedural language", "declarative", "non procedural"],
    explanation: "From Module 2, Lesson 1: 'SQL, notwithstanding, is a non-procedural language, which implies that you should simply teach it what should be finished...'"
  },
  {
    id: "pool-id-18",
    category: "Module 2",
    question: "What numeric data type stores whole numbers from 0 to 255 when unsigned and -128 to 127 when signed?",
    correctAnswer: "TINYINT",
    acceptedAnswers: ["TINYINT", "tiny int"],
    explanation: "From Module 2, Lesson 2: 'TINYINT: Specifically, TINYINT can hold integer values ranging from 0 to 255 when unsigned, and from -128 to 127 when signed.'"
  },
  {
    id: "pool-id-19",
    category: "Module 2",
    question: "In the fixed-point declaration DECIMAL(p, s), what term represents the total number of digits?",
    correctAnswer: "Precision",
    acceptedAnswers: ["Precision", "p"],
    explanation: "From Module 2, Lesson 2: 'DECIMAL(p, s)/NUMERIC(p, s): Used for fixed-point numbers, where p is the precision (total number of digits)...'"
  },
  {
    id: "pool-id-20",
    category: "Module 2",
    question: "In the fixed-point declaration DECIMAL(p, s), what term represents the number of digits after the decimal point?",
    correctAnswer: "Scale",
    acceptedAnswers: ["Scale", "s"],
    explanation: "From Module 2, Lesson 2: '...and s is the scale (number of digits after the decimal point).'"
  },
  {
    id: "pool-id-21",
    category: "Module 2",
    question: "What SQL character data type stores a fixed-length string of n characters and automatically pads missing spaces with void blanks?",
    correctAnswer: "CHAR",
    acceptedAnswers: ["CHAR", "CHARACTER", "CHAR(n)"],
    explanation: "From Module 2, Lesson 2: 'CHARACTER or CHAR(n): Fixed-length character string with a length of n characters... SQL fills in any \"missing\" characters via consequently composing in void spaces.'"
  },
  {
    id: "pool-id-22",
    category: "Module 2",
    question: "What SQL data type stores variable-length character strings without blank padding up to a maximum length of n?",
    correctAnswer: "VARCHAR",
    acceptedAnswers: ["VARCHAR", "CHARACTER VARYING", "VARCHAR(n)"],
    explanation: "From Module 2, Lesson 2: 'CHARACTER VARYING or VARCHAR(n): Variable-length character string with a maximum length of n characters.'"
  },
  {
    id: "pool-id-23",
    category: "Module 2",
    question: "What data type is designed to store large blocks of variable-length text data up to 65,535 characters in MySQL?",
    correctAnswer: "TEXT",
    acceptedAnswers: ["TEXT"],
    explanation: "From Module 2, Lesson 2: 'TEXT: Designed to store large blocks of variable-length text data... generally allows for a substantial amount of data, often up to 65,535 characters in systems like MySQL.'"
  },
  {
    id: "pool-id-24",
    category: "Module 2",
    question: "What data type stores large binary objects such as images or audio files, requiring a locator to move between databases?",
    correctAnswer: "BLOB",
    acceptedAnswers: ["BLOB", "BINARY LARGE OBJECT"],
    explanation: "From Module 2, Lesson 2: 'BINARY LARGE OBJECT or BLOB: Binary Large Object, used for large binary data such as images or files... you can't relocate a parallel huge article information type starting with one data set then onto the next without utilizing a finder.'"
  },
  {
    id: "pool-id-25",
    category: "Module 2",
    question: "What temporal data type in SQL combines both calendar date and clock time, supporting dates from January 1, 1753 to December 31, 9999?",
    correctAnswer: "DATETIME",
    acceptedAnswers: ["DATETIME"],
    explanation: "From Module 2, Lesson 2: 'DATETIME: Used for date and time values. DATETIME in SQL that combines both calendar date and clock time into a single value... usually supports dates from January 1, 1753, to December 31, 9999...'"
  },
  {
    id: "pool-id-26",
    category: "Module 2",
    question: "What enumerated data type restricts a column to storing exactly ONE string chosen from a predefined permitted list?",
    correctAnswer: "ENUM",
    acceptedAnswers: ["ENUM"],
    explanation: "From Module 2, Lesson 2: 'ENUM: Enumerated type, a string object with a value chosen from a list of permitted values. Designed to store one value from a predefined set of possible values...'"
  },
  {
    id: "pool-id-27",
    category: "Module 2",
    question: "What data type allows a column to store MULTIPLE values simultaneously from a predefined list, storing each value as a bit within a bitfield?",
    correctAnswer: "SET",
    acceptedAnswers: ["SET"],
    explanation: "From Module 2, Lesson 2: 'SET: Similar to ENUM, but can store multiple values from a list of permitted values... Each value in the SET is stored as a single bit within a bitfield...'"
  },
  {
    id: "pool-id-28",
    category: "Module 2",
    question: "What marker in SQL represents the absence of data in a column, indicating that a value is unknown, missing, or not applicable?",
    correctAnswer: "NULL",
    acceptedAnswers: ["NULL", "Null values", "null value"],
    explanation: "From Module 2, Lesson 2: 'Null values in SQL represent the absence of data in a column, indicating that a value is unknown, missing, or not applicable.'"
  },
  {
    id: "pool-id-29",
    category: "Module 2",
    question: "Which SQL operator must be used instead of the equal sign (=) to test whether a column contains a null value?",
    correctAnswer: "IS NULL",
    acceptedAnswers: ["IS NULL"],
    explanation: "From Module 2, Lesson 2: 'Instead, SQL provides specific operators such as IS NULL and IS NOT NULL to check for null values.'"
  },
  {
    id: "pool-id-30",
    category: "Module 2",
    question: "What MySQL command is used to select and switch to an active database work area?",
    correctAnswer: "USE",
    acceptedAnswers: ["USE", "USE Databasename", "USE database"],
    explanation: "From Module 2, Lesson 3: 'USE Databasename: this will be used to opt for data among the MySQL work area.'"
  },
  {
    id: "pool-id-31",
    category: "Module 2",
    question: "What MySQL command displays all tables in the currently selected database?",
    correctAnswer: "SHOW TABLES",
    acceptedAnswers: ["SHOW TABLES", "SHOW TABLES;"],
    explanation: "From Module 2, Lesson 3: 'SHOW TABLES: Shows the tables among the data once a piece of information has been chosen with the use command.'"
  },
  {
    id: "pool-id-32",
    category: "Module 3",
    question: "What SQL statement is used to add new records (rows) into a table?",
    correctAnswer: "INSERT INTO",
    acceptedAnswers: ["INSERT INTO", "INSERT"],
    explanation: "From Module 3, Lesson 1: 'INSERT INTO: Used to add new records (rows) into a table. It allows you to specify the table name, the columns into which data will be inserted, and the values...'"
  },
  {
    id: "pool-id-33",
    category: "Module 3",
    question: "What SQL statement is used to modify existing data in specific columns of a table?",
    correctAnswer: "UPDATE",
    acceptedAnswers: ["UPDATE"],
    explanation: "From Module 3, Lesson 1: 'UPDATE: Used to modify existing records in a table. It allows you to change the values of specific columns in one or more rows that meet a specified condition.'"
  },
  {
    id: "pool-id-34",
    category: "Module 3",
    question: "What SQL statement is used to remove one or more rows from a table based on a condition without destroying table structure?",
    correctAnswer: "DELETE",
    acceptedAnswers: ["DELETE", "DELETE FROM"],
    explanation: "From Module 3, Lesson 1: 'DELETE: Use this assertion to erase remove one or more records from a table in a database. It allows you to specify a condition that determines which rows should be deleted.'"
  },
  {
    id: "pool-id-35",
    category: "Module 3",
    question: "What SQL statement permanently removes database objects such as tables, views, or databases along with all their data and structures?",
    correctAnswer: "DROP",
    acceptedAnswers: ["DROP", "DROP TABLE", "DROP DATABASE"],
    explanation: "From Module 3, Lesson 1: 'DROP: Similar to DELETE, this assertion eliminates whole information base construction components like tables or even the data set itself... permanently removed from the database...'"
  },
  {
    id: "pool-id-36",
    category: "Module 3",
    question: "What SQL statement is used to alter the structure of an existing table by adding, deleting, or modifying columns?",
    correctAnswer: "ALTER TABLE",
    acceptedAnswers: ["ALTER TABLE", "ALTER"],
    explanation: "From Module 3, Lesson 1: 'ALTER: Used to modify the structure of an existing table. It allows you to add, delete, or modify columns, as well as to change various constraints on the table.'"
  },
  {
    id: "pool-id-37",
    category: "Module 3",
    question: "What SQL command category deals strictly with descriptions of database schema and structure (CREATE, ALTER, DROP, TRUNCATE)?",
    correctAnswer: "Data Definition Language",
    acceptedAnswers: ["Data Definition Language", "DDL"],
    explanation: "From Module 3, Lesson 3: '1. DDL - Data Definition Language: DDL consists of SQL commands that can be used for defining, altering and deleting database structures such as tables, indexes and schemas.'"
  },
  {
    id: "pool-id-38",
    category: "Module 3",
    question: "What is the ONLY command classified under DQL (Data Query Language)?",
    correctAnswer: "SELECT",
    acceptedAnswers: ["SELECT"],
    explanation: "From Module 3, Lesson 3: 'Note: DQL has only one command, SELECT. Other terms like FROM, WHERE, GROUP BY, HAVING, ORDER BY, DISTINCT and LIMIT are clauses of SELECT, not separate commands.'"
  },
  {
    id: "pool-id-39",
    category: "Module 3",
    question: "What SQL command category handles permissions and access control through GRANT and REVOKE?",
    correctAnswer: "Data Control Language",
    acceptedAnswers: ["Data Control Language", "DCL"],
    explanation: "From Module 3, Lesson 3: '4. DCL - Data Control Language: DCL includes commands such as GRANT and REVOKE which mainly deal with the rights, permissions and other controls of the database system.'"
  },
  {
    id: "pool-id-40",
    category: "Module 3",
    question: "What SQL command category manipulates stored data through INSERT, UPDATE, and DELETE?",
    correctAnswer: "Data Manipulation Language",
    acceptedAnswers: ["Data Manipulation Language", "DML"],
    explanation: "From Module 3, Lesson 3: '3. DML - Data Manipulation Language: DML commands are used to manipulate the data stored in database tables. With DML, you can insert new records, update existing ones, delete unwanted data...'"
  },
  {
    id: "pool-id-41",
    category: "Module 4",
    question: "In a standard SELECT query, which clause is evaluated FIRST by MySQL before the SELECT clause?",
    correctAnswer: "FROM",
    acceptedAnswers: ["FROM", "FROM clause"],
    explanation: "From Module 4, Lesson 1: 'When evaluating the SELECT statement, MySQL evaluates the FROM clause first and then the SELECT clause...'"
  },
  {
    id: "pool-id-42",
    category: "Module 4",
    question: "What punctuation mark serves as the statement delimiter in MySQL?",
    correctAnswer: "Semicolon",
    acceptedAnswers: ["Semicolon", ";"],
    explanation: "From Module 4, Lesson 1: 'The semicolon ; is the statement delimiter. It specifies the end of a statement.'"
  },
  {
    id: "pool-id-43",
    category: "Module 4",
    question: "What clause is added to a SELECT statement to sort the retrieved result set?",
    correctAnswer: "ORDER BY",
    acceptedAnswers: ["ORDER BY"],
    explanation: "From Module 4, Lesson 2: 'To sort the result set, you add the ORDER BY clause to the SELECT statement.'"
  },
  {
    id: "pool-id-44",
    category: "Module 4",
    question: "What keyword specifies descending sorting order in an ORDER BY clause?",
    correctAnswer: "DESC",
    acceptedAnswers: ["DESC"],
    explanation: "From Module 4, Lesson 2: '...and DESC to sort the result set in descending order.'"
  },
  {
    id: "pool-id-45",
    category: "Module 4",
    question: "What clause specifies search conditions to filter rows returned by a query, evaluated after FROM and before SELECT?",
    correctAnswer: "WHERE",
    acceptedAnswers: ["WHERE", "WHERE clause"],
    explanation: "From Module 4, Lesson 3: 'The WHERE clause allows you to specify a search condition for the rows returned by a query... In the SELECT statement, the WHERE clause is evaluated after the FROM clause and before the SELECT clause.'"
  },
  {
    id: "pool-id-46",
    category: "Module 4",
    question: "In MySQL, what is the technical term for a Boolean expression that evaluates to TRUE, FALSE, or UNKNOWN?",
    correctAnswer: "Predicate",
    acceptedAnswers: ["Predicate", "boolean predicate"],
    explanation: "From Module 4, Lesson 3: 'In MySQL, a predicate is a Boolean expression that evaluates to TRUE, FALSE, or UNKNOWN.'"
  },
  {
    id: "pool-id-47",
    category: "Module 4",
    question: "What execution feature stops evaluating remaining logical expressions whenever the final outcome can already be determined?",
    correctAnswer: "Short-circuit evaluation",
    acceptedAnswers: ["Short-circuit evaluation", "short circuit evaluation", "short circuit"],
    explanation: "From Module 4, Lesson 4: 'When evaluating an expression that has the AND operator, MySQL stops evaluating the remaining parts of the expression whenever it can determine the result. This function is called short-circuit evaluation.'"
  },
  {
    id: "pool-id-48",
    category: "Module 4",
    question: "What range operator tests if a value falls between an inclusive low and high boundary?",
    correctAnswer: "BETWEEN",
    acceptedAnswers: ["BETWEEN", "BETWEEN operator"],
    explanation: "From Module 4, Lesson 3: 'The BETWEEN operator returns TRUE if a value is in a range of values: expression BETWEEN low AND high.'"
  },
  {
    id: "pool-id-49",
    category: "Module 4",
    question: "In MySQL LIKE pattern matching, what wildcard character matches any string of zero or more characters?",
    correctAnswer: "%",
    acceptedAnswers: ["%", "percent", "percent sign", "% wildcard"],
    explanation: "From Module 4, Lesson 3: 'The % wildcard matches any string of zero or more characters while the _ wildcard matches any single character.'"
  },
  {
    id: "pool-id-50",
    category: "Module 4",
    question: "In MySQL LIKE pattern matching, what wildcard character matches exactly one single character?",
    correctAnswer: "_",
    acceptedAnswers: ["_", "underscore", "_ wildcard"],
    explanation: "From Module 4, Lesson 3: '...while the _ wildcard matches any single character (MySQL WHERE, n.d.).'"
  },
  {
    id: "pool-id-51",
    category: "Module 5",
    question: "What type of join matches each row in one table with rows in another table only when the join condition evaluates to TRUE?",
    correctAnswer: "INNER JOIN",
    acceptedAnswers: ["INNER JOIN"],
    explanation: "From Module 5, Lesson 1: 'The INNER JOIN matches each row in one table with every row in other tables and allows you to query rows that contain columns from both tables.'"
  },
  {
    id: "pool-id-52",
    category: "Module 5",
    question: "What clause syntax can replace 'ON t1.col = t2.col' when both tables share the exact same joined column name?",
    correctAnswer: "USING",
    acceptedAnswers: ["USING", "USING clause", "USING(column_name)"],
    explanation: "From Module 5, Lesson 1: 'Because the joined columns of both tables have the same name productline, you can use the USING syntax...'"
  },
  {
    id: "pool-id-53",
    category: "Module 5",
    question: "What join returns all rows from the left table and matched rows from the right table, filling right columns with NULL when there is no match?",
    correctAnswer: "LEFT JOIN",
    acceptedAnswers: ["LEFT JOIN", "LEFT OUTER JOIN"],
    explanation: "From Module 5, Lesson 2: 'LEFT JOIN returns all rows from the left table regardless of whether a row from the left table has a matching row from the right table or not. If there is no match, the columns of the row from the right table will contain NULL.'"
  },
  {
    id: "pool-id-54",
    category: "Module 5",
    question: "What join starts selecting data from the right table and matches rows in the left table, filling left columns with NULL if unmatched?",
    correctAnswer: "RIGHT JOIN",
    acceptedAnswers: ["RIGHT JOIN", "RIGHT OUTER JOIN"],
    explanation: "From Module 5, Lesson 3: 'The right join starts selecting data from the right table instead of the left table. The right join clause selects all rows from the right table and matches rows in the left table.'"
  },
  {
    id: "pool-id-55",
    category: "Module 5",
    question: "What type of join produces the Cartesian product of two tables, combining every row from the first with every row from the second?",
    correctAnswer: "CROSS JOIN",
    acceptedAnswers: ["CROSS JOIN", "Cartesian join"],
    explanation: "From Module 3, Lesson 1: 'CROSS JOIN - Returns the Cartesian product of the two tables, combining all rows from the first table with all rows from the second table.'"
  }
];

// 55 True or False Questions testing subtle concepts and nuances
const tfPool = [
  {
    id: "pool-tf-1",
    category: "Module 1",
    statement: "Edgar Frank Codd from IBM pioneered the concept of the relational database in 1970.",
    correctAnswer: true,
    explanation: "From Module 1, Lesson 3: 'The concept of a relational database is elaborated as a pivotal development in data management, pioneered by Edgar Frank Codd from IBM.'"
  },
  {
    id: "pool-tf-2",
    category: "Module 1",
    statement: "A relational table can have multiple primary keys defined, and its values can be null.",
    correctAnswer: false,
    explanation: "From Module 1, Lesson 1: 'There can only be one primary key in a table, and it can't be null.'"
  },
  {
    id: "pool-tf-3",
    category: "Module 1",
    statement: "A foreign key can be null, and there can be more than one foreign key in a relational table.",
    correctAnswer: true,
    explanation: "From Module 1, Lesson 1: 'A foreign key can be null and there can be more than one foreign key in the table.'"
  },
  {
    id: "pool-tf-4",
    category: "Module 1",
    statement: "Level document (flat file) frameworks contain metadata inside an internal information dictionary.",
    correctAnswer: false,
    explanation: "From Module 1, Lesson 1: 'On a side note, you should realize that level document frameworks don't contain metadata. This implies that the projects that handle these documents need to have some type of comparable coordination.'"
  },
  {
    id: "pool-tf-5",
    category: "Module 1",
    statement: "Normalization is a schema design technique that splits a large table into smaller tables when attributes exhibit redundancy.",
    correctAnswer: true,
    explanation: "From Module 1, Lesson 2: 'DBMS optimizes the organization of data by following a database schema design technique called normalization, which splits a large table into smaller tables when any of its attributes have redundancy in values.'"
  },
  {
    id: "pool-tf-6",
    category: "Module 1",
    statement: "Hierarchical DBMS organizes data in a graph-like structure where each record has multiple parent records.",
    correctAnswer: false,
    explanation: "From Module 1, Lesson 3: 'Hierarchical DBMS organizes data in a tree-like structure where each record (node) has a single parent and multiple children... Network DBMS, on the other hand... allows multiple parent-child relationships, forming a graph-like structure.'"
  },
  {
    id: "pool-tf-7",
    category: "Module 1",
    statement: "Object-Oriented DBMS (OODBMS) allows for the storage of complex data structures and supports inheritance, encapsulation, and polymorphism.",
    correctAnswer: true,
    explanation: "From Module 1, Lesson 3: 'It allows for the storage of complex data structures and supports advanced features like inheritance, encapsulation, and polymorphism.'"
  },
  {
    id: "pool-tf-8",
    category: "Module 1",
    statement: "In NoSQL architectures, MongoDB and CouchDB are examples of Document-Oriented databases.",
    correctAnswer: true,
    explanation: "From Module 1, Lesson 3: 'Document-Oriented: Stores data as documents (e.g., MongoDB, CouchDB).'"
  },
  {
    id: "pool-tf-9",
    category: "Module 1",
    statement: "Concurrency control in a DBMS ensures that simultaneous access by multiple users prevents data conflicts and maintains transaction atomicity.",
    correctAnswer: true,
    explanation: "From Module 1, Lesson 4: 'Concurrency Control: DBMS manages simultaneous access to the database by multiple users or applications to ensure data consistency. Prevents conflicts and ensures transaction atomicity.'"
  },
  {
    id: "pool-tf-10",
    category: "Module 1",
    statement: "Network DBMS is simpler to design and maintain than Hierarchical DBMS because it uses no pointers.",
    correctAnswer: false,
    explanation: "From Module 1, Lesson 3, Table 1.1: Network DBMS has 'More complex design and maintenance' compared to Hierarchical DBMS which is 'Simple to understand and implement'."
  },
  {
    id: "pool-tf-11",
    category: "Module 2",
    statement: "SQL is a procedural programming language like C, BASIC, or Java, where the developer scripts every instruction line by line.",
    correctAnswer: false,
    explanation: "From Module 2, Lesson 1: 'The primary thing you should know is that SQL is definitely not a procedural programming language like C, BASIC, or Java... SQL, notwithstanding, is a non-procedural language, which implies that you should simply teach it what should be finished.'"
  },
  {
    id: "pool-tf-12",
    category: "Module 2",
    statement: "Procedural extensions have been added to SQL allowing it to take advantage of functions and 'if' statements.",
    correctAnswer: true,
    explanation: "From Module 2, Lesson 1: 'SQL would now be able to exploit a few procedural highlights like capacities and \"if\" articulations.'"
  },
  {
    id: "pool-tf-13",
    category: "Module 2",
    statement: "TINYINT can hold unsigned integer values from 0 to 255.",
    correctAnswer: true,
    explanation: "From Module 2, Lesson 2: 'Specifically, TINYINT can hold integer values ranging from 0 to 255 when unsigned, and from -128 to 127 when signed.'"
  },
  {
    id: "pool-tf-14",
    category: "Module 2",
    statement: "Unlike FLOAT, the precision of the REAL data type can be explicitly set by the database developer in all SQL executions.",
    correctAnswer: false,
    explanation: "From Module 2, Lesson 2: 'Dissimilar to the information types we talked about in the past segment, here you can't impact the accuracy. It is typically characterized by the sort of PC framework you are running, 32 cycles or 64 bits.'"
  },
  {
    id: "pool-tf-15",
    category: "Module 2",
    statement: "When a string entered into a CHAR(n) column has fewer characters than n, SQL automatically pads the remaining length with void blank spaces.",
    correctAnswer: true,
    explanation: "From Module 2, Lesson 2: 'SQL fills in any \"missing\" characters via consequently composing in void spaces. These clear spaces have no impact on your information.'"
  },
  {
    id: "pool-tf-16",
    category: "Module 2",
    statement: "The TEXT data type in MySQL is limited to storing a maximum of 255 characters.",
    correctAnswer: false,
    explanation: "From Module 2, Lesson 2: 'The capacity of the TEXT type can differ across database management systems, but it generally allows for a substantial amount of data, often up to 65,535 characters in systems like MySQL.'"
  },
  {
    id: "pool-tf-17",
    category: "Module 2",
    statement: "The binary string data type was extended and officially incorporated into SQL in the year 2008.",
    correctAnswer: true,
    explanation: "From Module 2, Lesson 2: '...SQL was stretched out to incorporate the double string information type just in 2008.'"
  },
  {
    id: "pool-tf-18",
    category: "Module 2",
    statement: "You can freely migrate a BLOB (Binary Large Object) from one database to another without using any finder or locator.",
    correctAnswer: false,
    explanation: "From Module 2, Lesson 2: 'Besides, you can't relocate a parallel huge article information type starting with one data set then onto the next without utilizing a finder.'"
  },
  {
    id: "pool-tf-19",
    category: "Module 2",
    statement: "The standard DATE data type occupies a total length of ten character spaces because values are separated by hyphens (YYYY-MM-DD).",
    correctAnswer: true,
    explanation: "From Module 2, Lesson 2: 'Finally, you should remember that the complete length of the date is truth be told ten spaces because the qualities are isolated by a scramble, as so: 1990-12-03.'"
  },
  {
    id: "pool-tf-20",
    category: "Module 2",
    statement: "The DATETIME data type supports dates from January 1, 1753 to December 31, 9999.",
    correctAnswer: true,
    explanation: "From Module 2, Lesson 2: 'DATETIME... usually supports dates from January 1, 1753, to December 31, 9999, and times from 00:00:00 to 23:59:59.999999.'"
  },
  {
    id: "pool-tf-21",
    category: "Module 2",
    statement: "The ENUM data type can store multiple values chosen from a list simultaneously for a single column.",
    correctAnswer: false,
    explanation: "From Module 2, Lesson 2: 'ENUM: Designed to store one value from a predefined set of possible values... SET: Similar to ENUM, but can store multiple values from a list of permitted values.'"
  },
  {
    id: "pool-tf-22",
    category: "Module 2",
    statement: "In SQL, a NULL value is strictly equivalent to the numerical integer zero (0) and an empty character string ('').",
    correctAnswer: false,
    explanation: "From Module 2, Lesson 2: 'Unlike other data types, a null value is not equivalent to zero, an empty string, or any other default value; it is a distinct marker indicating the lack of a value.'"
  },
  {
    id: "pool-tf-23",
    category: "Module 2",
    statement: "Standard equality operators like '=' and '!=' cannot be used to compare or evaluate null values in SQL.",
    correctAnswer: true,
    explanation: "From Module 2, Lesson 2: 'For example, standard comparison operators like = or != do not work with null values. Instead, SQL provides specific operators such as IS NULL and IS NOT NULL to check for null values.'"
  },
  {
    id: "pool-tf-24",
    category: "Module 2",
    statement: "In MySQL Monitor, the command 'SHOW COLUMNS FROM tablename;' displays attributes, types, keys, and nullability for that table.",
    correctAnswer: true,
    explanation: "From Module 2, Lesson 3: 'SHOW COLUMNS FROM tablename: Shows the attributes, types of attributes, key data, whether or not or not NULL is allowable, defaults, and various knowledge for a table.'"
  },
  {
    id: "pool-tf-25",
    category: "Module 3",
    statement: "Executing an UPDATE statement without a WHERE clause will update all rows in the entire table.",
    correctAnswer: true,
    explanation: "From Module 3, Lesson 1: 'WHERE: Specifies which rows should be updated based on a condition. If omitted, all rows in the table will be updated.'"
  },
  {
    id: "pool-tf-26",
    category: "Module 3",
    statement: "Executing a DELETE statement without a WHERE clause permanently drops the table definition from the database catalog.",
    correctAnswer: false,
    explanation: "From Module 3, Lesson 1: 'If the WHERE clause is omitted, all records in the table will be deleted... Remember that utilizing the DELETE proclamation won't erase a table or data set. That assertion is simply used to eliminate information, not constructions.'"
  },
  {
    id: "pool-tf-27",
    category: "Module 3",
    statement: "The DROP TABLE statement permanently and irreversibly removes both the table structure and all contained data from the database.",
    correctAnswer: true,
    explanation: "From Module 3, Lesson 1: 'When an object is dropped, it is permanently removed from the database, along with all its data and associated structures. This operation is irreversible...'"
  },
  {
    id: "pool-tf-28",
    category: "Module 3",
    statement: "DQL (Data Query Language) contains multiple distinct commands including SELECT, WHERE, and ORDER BY.",
    correctAnswer: false,
    explanation: "From Module 3, Lesson 3: 'Note: DQL has only one command, SELECT. Other terms like FROM, WHERE, GROUP BY, HAVING, ORDER BY, DISTINCT and LIMIT are clauses of SELECT, not separate commands.'"
  },
  {
    id: "pool-tf-29",
    category: "Module 3",
    statement: "GRANT and REVOKE are commands classified under Data Control Language (DCL) to manage rights and permissions.",
    correctAnswer: true,
    explanation: "From Module 3, Lesson 3: 'DCL (Data Control Language) includes commands such as GRANT and REVOKE which mainly deal with the rights, permissions and other controls of the database system.'"
  },
  {
    id: "pool-tf-30",
    category: "Module 3",
    statement: "DDL commands include CREATE, ALTER, and DROP, which deal with the structure and definitions of database schema objects.",
    correctAnswer: true,
    explanation: "From Module 3, Lesson 3: 'DDL (Data Definition Language) consists of SQL commands that can be used for defining, altering and deleting database structures such as tables, indexes and schemas.'"
  },
  {
    id: "pool-tf-31",
    category: "Module 4",
    statement: "When evaluating a SELECT statement, MySQL evaluates the SELECT clause before evaluating the FROM clause.",
    correctAnswer: false,
    explanation: "From Module 4, Lesson 1: 'When evaluating the SELECT statement, MySQL evaluates the FROM clause first and then the SELECT clause.'"
  },
  {
    id: "pool-tf-32",
    category: "Module 4",
    statement: "In MySQL, the semicolon (;) serves as the statement delimiter separating independent statements.",
    correctAnswer: true,
    explanation: "From Module 4, Lesson 1: 'The semicolon ; is the statement delimiter. It specifies the end of a statement. If you have two or more statements, you use the semicolon ; to separate them so that MySQL will execute each statement individually.'"
  },
  {
    id: "pool-tf-33",
    category: "Module 4",
    statement: "SQL keywords are strictly case-sensitive, so writing 'select' in lowercase will result in a fatal compilation error in MySQL.",
    correctAnswer: false,
    explanation: "From Module 4, Lesson 1: 'Since SQL is not a case-sensitive language, you can write the keywords in lowercase e.g., select and from, the code will still run.'"
  },
  {
    id: "pool-tf-34",
    category: "Module 4",
    statement: "By default, the ORDER BY clause sorts data in ascending order (ASC) if no direction option is explicitly provided.",
    correctAnswer: true,
    explanation: "From Module 4, Lesson 2: 'By default, the ORDER BY clause uses ASC if you don’t explicitly specify any option.'"
  },
  {
    id: "pool-tf-35",
    category: "Module 4",
    statement: "The ORDER BY clause is evaluated after both the FROM and SELECT clauses during query processing.",
    correctAnswer: true,
    explanation: "From Module 4, Lesson 2: 'Note that the ORDER BY clause is always evaluated after the FROM and SELECT clause.'"
  },
  {
    id: "pool-tf-36",
    category: "Module 4",
    statement: "In the SELECT statement, the WHERE clause is evaluated after the FROM clause and before the SELECT clause.",
    correctAnswer: true,
    explanation: "From Module 4, Lesson 3: 'In the SELECT statement, the WHERE clause is evaluated after the FROM clause and before the SELECT clause.'"
  },
  {
    id: "pool-tf-37",
    category: "Module 4",
    statement: "In MySQL, the AND operator has higher evaluation precedence than the OR operator.",
    correctAnswer: true,
    explanation: "From Module 4, Lesson 5: 'When you use more than one logical operator in an expression, MySQL always evaluates the OR operators after the AND operators. This is called operator precedence which determines the order of evaluation...'"
  },
  {
    id: "pool-tf-38",
    category: "Module 4",
    statement: "Executing 'SELECT 1 = 0 AND 1 / 0;' in MySQL throws an immediate division by zero exception.",
    correctAnswer: false,
    explanation: "From Module 4, Lesson 4: 'Because of short-circuit evaluation, when evaluating '1 = 0 AND 1 / 0', 1=0 is false, so MySQL stops evaluating and returns 0 without evaluating 1 / 0.'"
  },
  {
    id: "pool-tf-39",
    category: "Module 4",
    statement: "Executing 'SELECT 1 = 1 OR 1 / 0;' returns 1 in MySQL due to short-circuit evaluation of the OR operator.",
    correctAnswer: true,
    explanation: "From Module 4, Lesson 5: 'Because the expression 1 = 1 always returns true, MySQL does not evaluate the 1 / 0. If it did, it would issue an error because of the division by zero error.'"
  },
  {
    id: "pool-tf-40",
    category: "Module 4",
    statement: "The expression 'true OR false AND false' evaluates to 0 (false) in MySQL.",
    correctAnswer: false,
    explanation: "From Module 4, Lesson 5: 'SELECT true OR false AND false; Result: 1. AND has precedence over OR, so false AND false is false, and true OR false evaluates to true (1).'"
  },
  {
    id: "pool-tf-41",
    category: "Module 4",
    statement: "In MySQL LIKE pattern matching, the underscore (_) matches any sequence of zero or more characters.",
    correctAnswer: false,
    explanation: "From Module 4, Lesson 3: 'The % wildcard matches any string of zero or more characters while the _ wildcard matches any single character.'"
  },
  {
    id: "pool-tf-42",
    category: "Module 5",
    statement: "If no rows between joined tables satisfy the join condition, an INNER JOIN returns an empty result set.",
    correctAnswer: true,
    explanation: "From Module 5, Lesson 1: 'In case no row between tables causes the join condition to evaluate to TRUE, the INNER JOIN returns an empty result set.'"
  },
  {
    id: "pool-tf-43",
    category: "Module 5",
    statement: "The USING clause can only be used in a join when the joined columns in both tables have the exact same column name.",
    correctAnswer: true,
    explanation: "From Module 5, Lesson 1: 'Because the joined columns of both tables have the same name productline, you can use the USING syntax...'"
  },
  {
    id: "pool-tf-44",
    category: "Module 5",
    statement: "A LEFT JOIN returns all rows from the right table, filling unmatched left columns with NULL.",
    correctAnswer: false,
    explanation: "From Module 5, Lesson 2: 'LEFT JOIN returns all rows from the left table... In case the row from the left table does not match with any row from the right table, it uses NULL for all the columns of the row from the right table.'"
  },
  {
    id: "pool-tf-45",
    category: "Module 5",
    statement: "To find unmatched rows in the left table using a LEFT JOIN, you can append a WHERE clause checking if the right table's key IS NULL.",
    correctAnswer: true,
    explanation: "From Module 5, Lesson 2: 'To find members who are not the committee members, you add a WHERE clause and IS NULL operator as follows: ... WHERE c.committee_id IS NULL;'"
  },
  {
    id: "pool-tf-46",
    category: "Module 5",
    statement: "RIGHT OUTER JOIN is an official synonym for RIGHT JOIN in relational database SQL.",
    correctAnswer: true,
    explanation: "From Module 5, Lesson 3: 'Note that the RIGHT OUTER JOIN is a synonym for RIGHT JOIN.'"
  },
  {
    id: "pool-tf-47",
    category: "Module 5",
    statement: "A CROSS JOIN produces the Cartesian product of two tables, combining every row of the first table with every row of the second table.",
    correctAnswer: true,
    explanation: "From Module 3, Lesson 1: 'CROSS JOIN - Returns the Cartesian product of the two tables, combining all rows from the first table with all rows from the second table.'"
  },
  {
    id: "pool-tf-48",
    category: "Front Matter",
    statement: "Under the PUP Institutional Learning Outcomes, Critical and Creative Thinking emphasizes graduates using rational and reflective thinking to push boundaries.",
    correctAnswer: true,
    explanation: "From Institutional Learning Outcomes (ILOs): 'Critical and Creative Thinking. Graduates use their rational and reflective thinking as well as innovative abilities to life situations in order to push boundaries, realize possibilities...'"
  },
  {
    id: "pool-tf-49",
    category: "Front Matter",
    statement: "In the grading system for COMP 008, Major Exams account for 60% of the periodic grade while Class Standing accounts for 40%.",
    correctAnswer: false,
    explanation: "From Grading System: 'Class Standing 60 %, Major Exams 40 %, Periodic Grade 100 %.'"
  },
  {
    id: "pool-tf-50",
    category: "Front Matter",
    statement: "The BSIT program prepares students with primary competencies in systems analysis and design, applications development, database administration, network administration, and systems maintenance.",
    correctAnswer: true,
    explanation: "From BSIT Program Description: 'The program prepares students to become IT professionals with primary competencies in the areas of systems analysis and design, applications development, database administration, network administration, and systems implementation and maintenance.'"
  },
  {
    id: "pool-tf-51",
    category: "Module 1",
    statement: "In relational database schema design, a domain defines the constraints on what values can belong to an attribute.",
    correctAnswer: true,
    explanation: "From Module 1, Lesson 3: 'Each table segment has a trait that includes various qualities. The assortment of these qualities addresses the space of that trait.'"
  },
  {
    id: "pool-tf-52",
    category: "Module 2",
    statement: "The YEAR data type in SQL can support a 4-digit range from 1901 to 2155.",
    correctAnswer: true,
    explanation: "From Module 2, Lesson 2: 'Depending on the database management system, the YEAR data type typically supports a range from 1901 to 2155 in a 4-digit format...'"
  },
  {
    id: "pool-tf-53",
    category: "Module 2",
    statement: "The TIMESTAMP data type is virtually identical to DATETIME, except it includes general time zone information.",
    correctAnswer: true,
    explanation: "From Module 2, Lesson 2: 'TIMESTAMP: Used for date and time values, often with time zone information. Notwithstanding, the thing that matters is that we likewise have information about the general time added to the date and time.'"
  },
  {
    id: "pool-tf-54",
    category: "Module 3",
    statement: "In MySQL, the command 'mysql -u username -p' is executed directly inside the SQL query editor to create tables.",
    correctAnswer: false,
    explanation: "From Module 3, Lesson 2: 'mysql -u username -p' is run from the operating system command line interface to connect to the MySQL server before entering SQL statements."
  },
  {
    id: "pool-tf-55",
    category: "Module 4",
    statement: "The BETWEEN operator in SQL excludes the lower and upper boundary values from the evaluated range.",
    correctAnswer: false,
    explanation: "From Module 4, Lesson 3: 'The BETWEEN operator returns TRUE if a value is in a range of values... officeCode BETWEEN 1 AND 3 including office codes 1, 2, and 3.'"
  }
];

// Major Practical Lab Exam (Part 4)
const labExam = {
  title: "Part 4: Major Practical Relational Joins Laboratory Examination",
  scenario: "See the following six tables: offices, employees, customers, payments, orders, and orderdetails.",
  instructions: [
    "Write a SQL query that produces the exact sample output shown below.",
    "You will use: LEFT JOIN, INNER JOIN, WHERE, and ORDER BY.",
    "The result set must contain exactly 7 columns in order: customerName, country, orderNumber, status, salesRepLastName, officeCity, and officeCountry.",
    "Strict grading is enforced against the exact target dataset. No hints or solutions are provided."
  ],
  erdSchema: {
    tables: [
      {
        tableName: "offices",
        primaryKey: "officeCode",
        columns: [
          { name: "officeCode", type: "VARCHAR(10)", isPk: true },
          { name: "city", type: "VARCHAR(50)" },
          { name: "phone", type: "VARCHAR(50)" },
          { name: "addressLine1", type: "VARCHAR(50)" },
          { name: "country", type: "VARCHAR(50)" }
        ]
      },
      {
        tableName: "employees",
        primaryKey: "employeeNumber",
        foreignKeys: [
          { column: "officeCode", referencesTable: "offices", referencesColumn: "officeCode" }
        ],
        columns: [
          { name: "employeeNumber", type: "INT", isPk: true },
          { name: "lastName", type: "VARCHAR(50)" },
          { name: "firstName", type: "VARCHAR(50)" },
          { name: "jobTitle", type: "VARCHAR(50)" },
          { name: "officeCode", type: "VARCHAR(10)", isFk: true }
        ]
      },
      {
        tableName: "customers",
        primaryKey: "customerNumber",
        foreignKeys: [
          { column: "salesRepEmployeeNumber", referencesTable: "employees", referencesColumn: "employeeNumber" }
        ],
        columns: [
          { name: "customerNumber", type: "INT", isPk: true },
          { name: "customerName", type: "VARCHAR(50)" },
          { name: "contactLastName", type: "VARCHAR(50)" },
          { name: "city", type: "VARCHAR(50)" },
          { name: "country", type: "VARCHAR(50)" },
          { name: "salesRepEmployeeNumber", type: "INT", isFk: true }
        ]
      },
      {
        tableName: "orders",
        primaryKey: "orderNumber",
        foreignKeys: [
          { column: "customerNumber", referencesTable: "customers", referencesColumn: "customerNumber" }
        ],
        columns: [
          { name: "orderNumber", type: "INT", isPk: true },
          { name: "orderDate", type: "DATE" },
          { name: "status", type: "VARCHAR(15)" },
          { name: "customerNumber", type: "INT", isFk: true }
        ]
      },
      {
        tableName: "productlines",
        primaryKey: "productLine",
        columns: [
          { name: "productLine", type: "VARCHAR(50)", isPk: true },
          { name: "textDescription", type: "VARCHAR(4000)" }
        ]
      },
      {
        tableName: "products",
        primaryKey: "productCode",
        foreignKeys: [
          { column: "productLine", referencesTable: "productlines", referencesColumn: "productLine" }
        ],
        columns: [
          { name: "productCode", type: "VARCHAR(15)", isPk: true },
          { name: "productName", type: "VARCHAR(70)" },
          { name: "productLine", type: "VARCHAR(50)", isFk: true },
          { name: "buyPrice", type: "DECIMAL(10,2)" }
        ]
      }
    ],
    relationships: [
      { from: "employees.officeCode", to: "offices.officeCode", type: "Many-to-One" },
      { from: "customers.salesRepEmployeeNumber", to: "employees.employeeNumber", type: "Many-to-One" },
      { from: "orders.customerNumber", to: "customers.customerNumber", type: "Many-to-One" },
      { from: "products.productLine", to: "productlines.productLine", type: "Many-to-One" }
    ]
  },
  requiredClauses: ["LEFT JOIN", "INNER JOIN", "WHERE", "ORDER BY"],
  requiredColumns: [
    "customerName",
    "country",
    "orderNumber",
    "status",
    "salesRepLastName",
    "officeCity",
    "officeCountry"
  ],
  asciiOutput: `+------------------------------+---------+-------------+---------+------------------+---------------+---------------+
| customerName                 | country | orderNumber | status  | salesRepLastName | officeCity    | officeCountry |
+------------------------------+---------+-------------+---------+------------------+---------------+---------------+
| Atelier graphique            | France  | 10298       | Shipped | Hernandez        | Paris         | France        |
| Atelier graphique            | France  | 10123       | Shipped | Hernandez        | Paris         | France        |
| La Rochelle Gifts            | France  | 10275       | Shipped | Hernandez        | Paris         | France        |
| Land of Toys Inc.            | USA     | NULL        | NULL    | Vanauf           | NYC           | USA           |
| Mini Caravy                  | France  | 10103       | Shipped | Hernandez        | Paris         | France        |
| Mini Gifts Distributors Ltd. | USA     | NULL        | NULL    | Jennings         | San Francisco | USA           |
| Signal Gift Stores           | USA     | 10278       | Shipped | Jennings         | San Francisco | USA           |
| Signal Gift Stores           | USA     | 10124       | Shipped | Jennings         | San Francisco | USA           |
| Vitachrome Inc.              | USA     | 10324       | Shipped | Patterson        | Boston        | USA           |
+------------------------------+---------+-------------+---------+------------------+---------------+---------------+
9 rows in set (0.01 sec)`,
  sampleOutputGrid: [
    {
      customerName: "Atelier graphique",
      country: "France",
      orderNumber: 10298,
      status: "Shipped",
      salesRepLastName: "Hernandez",
      officeCity: "Paris",
      officeCountry: "France"
    },
    {
      customerName: "Atelier graphique",
      country: "France",
      orderNumber: 10123,
      status: "Shipped",
      salesRepLastName: "Hernandez",
      officeCity: "Paris",
      officeCountry: "France"
    },
    {
      customerName: "La Rochelle Gifts",
      country: "France",
      orderNumber: 10275,
      status: "Shipped",
      salesRepLastName: "Hernandez",
      officeCity: "Paris",
      officeCountry: "France"
    },
    {
      customerName: "Land of Toys Inc.",
      country: "USA",
      orderNumber: null,
      status: null,
      salesRepLastName: "Vanauf",
      officeCity: "NYC",
      officeCountry: "USA"
    },
    {
      customerName: "Mini Caravy",
      country: "France",
      orderNumber: 10103,
      status: "Shipped",
      salesRepLastName: "Hernandez",
      officeCity: "Paris",
      officeCountry: "France"
    },
    {
      customerName: "Mini Gifts Distributors Ltd.",
      country: "USA",
      orderNumber: null,
      status: null,
      salesRepLastName: "Jennings",
      officeCity: "San Francisco",
      officeCountry: "USA"
    },
    {
      customerName: "Signal Gift Stores",
      country: "USA",
      orderNumber: 10278,
      status: "Shipped",
      salesRepLastName: "Jennings",
      officeCity: "San Francisco",
      officeCountry: "USA"
    },
    {
      customerName: "Signal Gift Stores",
      country: "USA",
      orderNumber: 10124,
      status: "Shipped",
      salesRepLastName: "Jennings",
      officeCity: "San Francisco",
      officeCountry: "USA"
    },
    {
      customerName: "Vitachrome Inc.",
      country: "USA",
      orderNumber: 10324,
      status: "Shipped",
      salesRepLastName: "Patterson",
      officeCity: "Boston",
      officeCountry: "USA"
    }
  ],
  canonicalQuery: `SELECT 
  c.customerName,
  c.country,
  o.orderNumber,
  o.status,
  e.lastName AS salesRepLastName,
  off.city AS officeCity,
  off.country AS officeCountry
FROM customers c
LEFT JOIN orders o ON c.customerNumber = o.customerNumber
INNER JOIN employees e ON c.salesRepEmployeeNumber = e.employeeNumber
INNER JOIN offices off ON e.officeCode = off.officeCode
WHERE c.country = 'USA' OR c.country = 'France'
ORDER BY c.customerName ASC, o.orderNumber DESC;`
};

const fullPool = {
  mcq: mcqPool,
  identification: identificationPool,
  trueOrFalse: tfPool,
  labExam: labExam
};

console.log(`Pool counts: MCQ = ${mcqPool.length}, ID = ${identificationPool.length}, T/F = ${tfPool.length}`);
console.log(`Total questions in master pool = ${mcqPool.length + identificationPool.length + tfPool.length}`);

// Generate file content
const fileContent = `// EXAM_POOL Master Question Bank
// Total questions: ${mcqPool.length + identificationPool.length + tfPool.length} items (95 MCQs, 55 Identification, 55 True/False)
// Strictly verbatim adherence to Prof. Florencio V. Contreras Jr. learning material.

export const EXAM_POOL = ${JSON.stringify(fullPool, null, 2)};
`;

fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log('Successfully wrote exam pool to:', targetPath);
