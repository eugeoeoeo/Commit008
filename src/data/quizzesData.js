// Comprehensive Verbatim Quiz Bank for each lesson (10-15 items per lesson)
// All options strictly balanced in length, style, and plausibility.

export const QUIZZES_DATA = {
  // Module 1, Lesson 1: Understanding Database
  "m1-l1": [
    {
      id: "m1-l1-q1",
      question: "According to the learning material, what is the definition of a database?",
      options: [
        "An organized collection of related data which represents some aspect of the real world and that is stored and accessed electronically.",
        "A proprietary software application designed specifically to convert flat files into visual graphical user interfaces.",
        "A sequence of algorithmic programming instructions executed continuously to process complex linear algebraic records.",
        "A collection of unstructured random files stored physically in server farm cabinets without logical schemas."
      ],
      correctAnswer: 0,
      explanation: "From Lesson 1: 'A database is an organized collection of related data which represents some aspect of the real world and that is stored and accessed electronically.'"
    },
    {
      id: "m1-l1-q2",
      question: "What is held inside what is known as an 'information word reference' (data dictionary)?",
      options: [
        "Unprocessed binary streaming data awaiting physical hard drive indexing.",
        "The compiled binary source code of user-defined database management programs.",
        "Metadata that describes the segments of a database, specifically the table, rows, sections, and constraints.",
        "Network transmission logs documenting real-time packet exchange between client and server."
      ],
      correctAnswer: 2,
      explanation: "From Lesson 1: 'The metadata is held inside what's known as an information word reference [data dictionary]. The word reference is the thing that portrays the segments of an information base, specifically the table, the lines, sections, etc.'"
    },
    {
      id: "m1-l1-q3",
      question: "Which of the following database categories is described as being the smallest and put away on the client's PC?",
      options: [
        "Personal information bases",
        "Group data sets",
        "Enterprise version data sets",
        "Network-tier repositories"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 1: 'Personal information bases are the littlest. They are put away on the client's PC and are described by a fundamental information structure.'"
    },
    {
      id: "m1-l1-q4",
      question: "According to the instructional material, an information base can be classified by examining which three attributes?",
      options: [
        "Its processing cycle speed, the operating system brand, and the query compilation rate.",
        "How enormous it is, the number of individuals needing access, and what sort of specialized gear it requires.",
        "The physical dimensions of the storage drive, the bandwidth connection, and the programming language used.",
        "Its encryption key length, the cooling mechanism employed, and the warranty duration of the hardware."
      ],
      correctAnswer: 1,
      explanation: "From Lesson 1: '...order an information base by taking a gander at three credits: how enormous it is, the number of individuals need to approach it, and what sort of specialized gear it requires.'"
    },
    {
      id: "m1-l1-q5",
      question: "In the context of a database table, what is another name for Columns?",
      options: [
        "Tuples or records",
        "Fields or attributes",
        "Data items or values",
        "Relations or schemas"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 1: 'Columns: Also known as fields or attributes. Each type of information present in the vertical position is known as columns or fields.'"
    },
    {
      id: "m1-l1-q6",
      question: "In the context of a database table, what is another name for Row?",
      options: [
        "Tuple or record",
        "Field or attribute",
        "Domain or range",
        "Segment or key"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 1: 'Row: Also known as a tuple or record. The data of each student in a horizontal position is known as row or record.'"
    },
    {
      id: "m1-l1-q7",
      question: "Which table element represents the information stored in a specific cell within a column for a particular row?",
      options: [
        "Foreign Key",
        "Data items (column values)",
        "Data Dictionary",
        "Schema constraint"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 1: 'Data items or column values are the information stored in a specific cell within a column for a particular row.'"
    },
    {
      id: "m1-l1-q8",
      question: "Which of the following statements regarding the Primary Key is TRUE according to the material?",
      options: [
        "There can be multiple primary keys in a table, and each primary key can contain null values.",
        "There can only be one primary key in a table, and it cannot be null.",
        "A primary key is solely optional and is strictly prohibited from containing integer data types.",
        "A primary key must always point to a foreign key in an external parent relational table."
      ],
      correctAnswer: 1,
      explanation: "From Lesson 1: 'It is the unique identifier for each row in a table. There can only be one primary key in a table, and it can't be null.'"
    },
    {
      id: "m1-l1-q9",
      question: "Which statement accurately describes a Foreign Key according to the text?",
      options: [
        "It is an auto-incrementing integer that must never match any other table under any circumstance.",
        "It is a column or set of columns in a table that refers to the primary key of another table, and it can be null.",
        "It is a temporary view created in memory that expires immediately after a transaction completes.",
        "It is an index created exclusively on string columns that forbids duplicate character values."
      ],
      correctAnswer: 1,
      explanation: "From Lesson 1: 'A foreign key is a column or a set of columns in a table that refers to the primary key of another table. It establishes the relationship between the table. A foreign key can be null and there can be more than one foreign key in the table.'"
    },
    {
      id: "m1-l1-q10",
      question: "Why do flat document (flat file) frameworks require programs to have their own coordination?",
      options: [
        "Because flat document frameworks do not contain metadata.",
        "Because flat files cannot be read by any modern operating system.",
        "Because flat files are restricted exclusively to storing floating point numbers.",
        "Because flat files automatically delete records whenever multiple users log in."
      ],
      correctAnswer: 0,
      explanation: "From Lesson 1: 'On a side note, you should realize that level document [flat file] frameworks don't contain metadata. This implies that the projects that handle these documents need to have some type of comparable coordination.'"
    }
  ],

  // Module 1, Lesson 2: DBMS and its Key Functions
  "m1-l2": [
    {
      id: "m1-l2-q1",
      question: "What is a Database Management System (DBMS) as defined in the instructional material?",
      options: [
        "A software system used to store, retrieve, and run queries on data, serving as an interface between an end-user and a database.",
        "A physical hardware rack equipped with dedicated cooling fans and redundant power supplies.",
        "A client-side scripting library utilized to render visual graphs and vector images in browsers.",
        "A telecommunication protocol designed to transmit encrypted text packets across wide area networks."
      ],
      correctAnswer: 0,
      explanation: "From Lesson 2: 'Database Management Systems (DBMS) is a software system used to store, retrieve, and run queries on data... A DBMS serves as an interface between an end-user and a database...'"
    },
    {
      id: "m1-l2-q2",
      question: "What database schema design technique splits a large table into smaller tables when any of its attributes have redundancy in values?",
      options: [
        "De-escalation",
        "Normalization",
        "Virtualization",
        "Serialization"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 2: 'DBMS optimizes the organization of data by following a database schema design technique called normalization, which splits a large table into smaller tables when any of its attributes have redundancy in values.'"
    },
    {
      id: "m1-l2-q3",
      question: "Transaction Management ensures transactions are processed reliably and adhere to which set of properties?",
      options: [
        "CRUD properties (Create, Read, Update, Delete)",
        "ACID properties (Atomicity, Consistency, Isolation, Durability)",
        "REST properties (Representational State Transfer)",
        "SOLID properties (Single responsibility, Open-closed, Liskov, Interface, Dependency)"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 2: 'Transaction Management: Ensures that transactions are processed reliably and adhere to ACID properties (Atomicity, Consistency, Isolation, Durability).'"
    },
    {
      id: "m1-l2-q4",
      question: "Under which key function of a DBMS does 'Schema Definition' fall?",
      options: [
        "Data Manipulation",
        "Data Definition",
        "Data Administration",
        "Data Storage and Retrieval"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 2: '1. Data Definition: Schema Definition: Defines the database structure, including tables, fields, relationships, and constraints.'"
    },
    {
      id: "m1-l2-q5",
      question: "Which DBMS function is responsible for managing user permissions to ensure only authorized users can access or modify data?",
      options: [
        "Access Control (under Data Security and Integrity)",
        "Query Processing (under Data Manipulation)",
        "Database Tuning (under Data Administration)",
        "Storage Management (under Data Storage and Retrieval)"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 2: '3. Data Security and Integrity: Access Control: Manages user permissions to ensure only authorized users can access or modify data.'"
    },
    {
      id: "m1-l2-q6",
      question: "Under which DBMS function does 'Indexing' to speed up data retrieval operations belong?",
      options: [
        "Data Definition",
        "Data Storage and Retrieval",
        "Data Manipulation",
        "Data Migration"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 2: '4. Data Storage and Retrieval: Indexing: Creates indexes to speed up data retrieval operations.'"
    },
    {
      id: "m1-l2-q7",
      question: "What is the primary role of 'Database Tuning' under Data Administration?",
      options: [
        "Writing visual CSS styles to improve web page aesthetics.",
        "Optimizing database performance through techniques like indexing and query optimization.",
        "Assigning student grades based on automated multiple-choice test results.",
        "Configuring external firewall ports on consumer wireless internet routers."
      ],
      correctAnswer: 1,
      explanation: "From Lesson 2: '5. Data Administration: Database Tuning: Optimizes database performance through techniques like indexing and query optimization.'"
    },
    {
      id: "m1-l2-q8",
      question: "Which of the following is NOT one of the 5 key functions of a DBMS outlined in the text?",
      options: [
        "Data Definition",
        "Data Manipulation",
        "Data Compilation to Machine Bytecode",
        "Data Storage and Retrieval"
      ],
      correctAnswer: 2,
      explanation: "The 5 key functions listed in Lesson 2 are: Data Definition, Data Manipulation, Data Security and Integrity, Data Storage and Retrieval, and Data Administration."
    },
    {
      id: "m1-l2-q9",
      question: "What mechanism is provided under Data Storage and Retrieval to restore data in case of loss or corruption?",
      options: [
        "Backup and Recovery",
        "Access Control Lists",
        "Query Precompilation",
        "Virtual Memory Swapping"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 2: 'Backup and Recovery: Provides mechanisms to back up data and restore it in case of data loss or corruption.'"
    },
    {
      id: "m1-l2-q10",
      question: "Enforcing primary and foreign key rules to maintain data accuracy and consistency is termed:",
      options: [
        "Integrity Constraints",
        "Storage Allocations",
        "Hardware Virtualization",
        "Short-Circuit Evaluation"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 2: 'Integrity Constraints: Enforces rules to maintain data accuracy and consistency (e.g., primary keys, foreign keys).'"
    }
  ],

  // Module 1, Lesson 3: DBMS Types
  "m1-l3": [
    {
      id: "m1-l3-q1",
      question: "Who pioneered the concept of the relational database at IBM?",
      options: [
        "Donald D. Chamberlin",
        "Edgar Frank Codd",
        "Raymond F. Boyce",
        "Florencio V. Contreras Jr."
      ],
      correctAnswer: 1,
      explanation: "From Lesson 3: 'The concept of a relational database is elaborated as a pivotal development in data management, pioneered by Edgar Frank Codd from IBM.'"
    },
    {
      id: "m1-l3-q2",
      question: "Commercial adoption of relational databases began approximately a decade after Codd's initial work, significantly marked by the creation of which system?",
      options: [
        "Oracle",
        "MongoDB",
        "Redis",
        "CouchDB"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 3: 'The commercial adoption of relational databases began approximately a decade after Codd's initial work, significantly marked by the creation of Oracle.'"
    },
    {
      id: "m1-l3-q3",
      question: "In relational database structure, what is the term for the assortment of permitted values that a column/attribute can take?",
      options: [
        "Schema",
        "Domain",
        "Constraint",
        "Record"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 3: 'Domain: Each table segment has a trait that includes various qualities. The assortment of these qualities addresses the space [domain] of that trait.'"
    },
    {
      id: "m1-l3-q4",
      question: "What does the acronym 'NoSQL' stand for?",
      options: [
        "Non Operational SQL",
        "Not Only SQL",
        "New Optimized SQL",
        "Network Oriented SQL"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 3: 'NoSQL, which stands for \"Not Only SQL,\" refers to a category of database management systems that diverge from the traditional relational database management system (RDBMS) approach.'"
    },
    {
      id: "m1-l3-q5",
      question: "Which type of NoSQL database stores data as key-value pairs?",
      options: [
        "Redis and DynamoDB",
        "MongoDB and CouchDB",
        "Cassandra and HBase",
        "Neo4j and ArangoDB"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 3: 'Key-Value Stores: Stores data as key-value pairs (e.g., Redis, DynamoDB).'"
    },
    {
      id: "m1-l3-q6",
      question: "Which of the following is an example of a Graph Database according to the text?",
      options: [
        "MongoDB",
        "Neo4j",
        "Cassandra",
        "ObjectDB"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 3: 'Graph Databases: Focuses on data relationships using graph structures (e.g., Neo4j, ArangoDB).'"
    },
    {
      id: "m1-l3-q7",
      question: "How does a Hierarchical DBMS organize data?",
      options: [
        "In a graph-like structure where records have multiple parent-child relationships.",
        "In a tree-like structure where each record (node) has a single parent and multiple children.",
        "In isolated flat text files connected only through external network sockets.",
        "In unstructured binary documents without any pre-configured relational tables."
      ],
      correctAnswer: 1,
      explanation: "From Lesson 3: 'Hierarchical DBMS organizes data in a tree-like structure where each record (node) has a single parent and multiple children, resembling an organizational chart.'"
    },
    {
      id: "m1-l3-q8",
      question: "Which of the following pairs correctly matches the early DBMS model with its textbook example?",
      options: [
        "Hierarchical DBMS: IBM IMS | Network DBMS: IDMS",
        "Hierarchical DBMS: IDMS | Network DBMS: IBM IMS",
        "Hierarchical DBMS: MongoDB | Network DBMS: Redis",
        "Hierarchical DBMS: Oracle | Network DBMS: MySQL"
      ],
      correctAnswer: 0,
      explanation: "From Table 1.1 in Lesson 3: Hierarchical DBMS Example is 'IBM IMS', while Network DBMS Example is 'IDMS'."
    },
    {
      id: "m1-l3-q9",
      question: "What is an Object-Oriented Database Management System (OODBMS) designed to integrate with?",
      options: [
        "Legacy punched card tabulators from the 1950s.",
        "Object-oriented programming (OOP) languages with database technology.",
        "Purely non-procedural mathematical theorem provers.",
        "Unsynchronized distributed peer-to-peer torrent trackers."
      ],
      correctAnswer: 1,
      explanation: "From Lesson 3: 'An Object-Oriented Database Management System (OODBMS)... is designed to integrate with object-oriented programming (OOP) languages with database technology...'"
    },
    {
      id: "m1-l3-q10",
      question: "Why was the relational database structure considered revolutionary over network and hierarchical models?",
      options: [
        "It required complete rewrites of client applications whenever a column changed.",
        "The construction was simple and minimal redundancy was one of its main highlights.",
        "It discarded tables completely in favor of multi-parent graph pointer trees.",
        "It operated exclusively on 16-bit personal computer hardware without disks."
      ],
      correctAnswer: 1,
      explanation: "From Lesson 3: 'The construction was basic and negligible repetition was one of its main highlights. With the making of this new information base sort, SQL entered the stage.'"
    }
  ],

  // Module 1, Lesson 4: Advantages of Using a DBMS
  "m1-l4": [
    {
      id: "m1-l4-q1",
      question: "Which advantage of a DBMS refers to storing all data in one place rather than scattered across various files?",
      options: [
        "Centralized Data Management",
        "Horizontal Scalability",
        "Data Redundancy Amplification",
        "Decentralized Partitioning"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 4: '1. Centralized Data Management: A DBMS allows for centralized storage of data, which means all data is stored in one place rather than scattered across various files or systems.'"
    },
    {
      id: "m1-l4-q2",
      question: "What is the distinction between vertical scaling and horizontal scaling in a DBMS?",
      options: [
        "Vertical scaling scales up (hardware resources on a machine), while horizontal scaling scales out (adding nodes/systems).",
        "Vertical scaling adds more network cables, while horizontal scaling adds faster RAM clock cycles.",
        "Vertical scaling converts tables to views, while horizontal scaling converts views to triggers.",
        "Vertical scaling supports only numbers, while horizontal scaling supports only strings."
      ],
      correctAnswer: 0,
      explanation: "From Lesson 4: 'Scales up (vertical scaling) or out (horizontal scaling) based on demand.'"
    },
    {
      id: "m1-l4-q3",
      question: "Which DBMS advantage manages simultaneous access by multiple users or applications to prevent conflicts?",
      options: [
        "Concurrency Control",
        "Discretionary Access",
        "Data Redundancy",
        "Unconstrained Execution"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 4: '6. Concurrency Control: DBMS manages simultaneous access to the database by multiple users or applications to ensure data consistency.'"
    },
    {
      id: "m1-l4-q4",
      question: "How does a DBMS improve cost efficiency despite its initial setup expenses?",
      options: [
        "By eliminating the need for electricity and computer monitors.",
        "By streamlining data management and reducing operational complexities and maintenance costs over time.",
        "By converting commercial databases into proprietary hardware patents.",
        "By automatically firing all database administrators after installation."
      ],
      correctAnswer: 1,
      explanation: "From Lesson 4: '8. Cost Efficiency: Despite initial setup costs, DBMS can lead to cost savings over time by streamlining data management and reducing operational complexities.'"
    },
    {
      id: "m1-l4-q5",
      question: "Which of the following is NOT listed as one of the 8 key advantages of using a DBMS in Lesson 4?",
      options: [
        "Data Consistency and Integrity",
        "Improved Data Security",
        "Elimination of All Primary Key Constraints",
        "Backup and Recovery"
      ],
      correctAnswer: 2,
      explanation: "Elimination of primary key constraints is contrary to DBMS principles. Lesson 4 lists: Centralized Data Management, Improved Data Security, Efficient Data Retrieval, Data Consistency and Integrity, Scalability and Flexibility, Concurrency Control, Backup and Recovery, and Cost Efficiency."
    }
  ],

  // Module 2, Lesson 1: What is SQL?
  "m2-l1": [
    {
      id: "m2-l1-q1",
      question: "Who developed SQL in the early 1970s at IBM?",
      options: [
        "Donald D. Chamberlin and Raymond F. Boyce",
        "Edgar Frank Codd and Dennis Ritchie",
        "Bjarne Stroustrup and James Gosling",
        "Ken Thompson and Alan Turing"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 1: 'Developed in the early 1970s at IBM by Donald D. Chamberlin and Raymond F. Boyce, SQL became the standard for database query languages...'"
    },
    {
      id: "m2-l1-q2",
      question: "Why is SQL classified as a 'non-procedural' language?",
      options: [
        "Because it strictly requires step-by-step loops and iterative counter variables to execute instructions.",
        "Because you simply instruct it WHAT should be finished, and the DBMS determines the most efficient way to accomplish it.",
        "Because it cannot be executed on any personal computers built after the year 1990.",
        "Because it lacks any syntax for querying or extracting records from tabular schemas."
      ],
      correctAnswer: 1,
      explanation: "From Lesson 1: 'SQL, notwithstanding, is a non-procedural language, which implies that you should simply teach it what should be finished... The information base administration framework is the segment accountable for settling on the choice concerning the most productive way to deal with accomplish your objective.'"
    },
    {
      id: "m2-l1-q3",
      question: "Which of the following languages is procedural, in contrast to SQL?",
      options: [
        "Java",
        "HTML",
        "JSON",
        "XML"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 1: 'The primary thing you should know is that SQL is definitely not a procedural programming language like C, BASIC, or Java.'"
    },
    {
      id: "m2-l1-q4",
      question: "What are the two techniques for removing/extracting information from a database mentioned in the text?",
      options: [
        "Writing a direct query and running an information gatherer program.",
        "Formatting the hard drive and downloading a backup archive.",
        "Compiling assembly code and printing raw machine registers.",
        "Using paper ledger cards and photographic scanning."
      ],
      correctAnswer: 0,
      explanation: "From Lesson 1: 'There are two techniques for removing information from a data set: 1. You can compose a question straightforwardly... 2. The second technique is more unpredictable than a question. You need to run a program that goes about as an information gatherer.'"
    },
    {
      id: "m2-l1-q5",
      question: "What procedural features were added to SQL as an extension due to high demand?",
      options: [
        "Machine language interrupts and pointer dereferencing",
        "Functions and 'if' articulations (statements)",
        "CSS styling sheets and DOM manipulation hooks",
        "Hardware circuit gates and bus arbiters"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 1: 'SQL would now be able to exploit a few procedural highlights like capacities and \"if\" articulations.'"
    }
  ],

  // Module 2, Lesson 2: Data Types & Null Values
  "m2-l2": [
    {
      id: "m2-l2-q1",
      question: "What is the storage range of TINYINT when unsigned?",
      options: [
        "0 to 255",
        "-128 to 127",
        "-32768 to 32767",
        "0 to 65535"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 2: 'Specifically, TINYINT can hold integer values ranging from 0 to 255 when unsigned, and from -128 to 127 when signed.'"
    },
    {
      id: "m2-l2-q2",
      question: "In DECIMAL(p, s), what do 'p' and 's' represent?",
      options: [
        "p is precision (total number of digits) and s is scale (number of digits after decimal point).",
        "p is page count and s is sector allocation on the physical magnetic platter.",
        "p is parity bit and s is checksum offset for encrypted cryptographic transactions.",
        "p is positive limit and s is signed magnitude boundary for floating integers."
      ],
      correctAnswer: 0,
      explanation: "From Lesson 2: 'DECIMAL(p, s)/NUMERIC(p, s): Used for fixed-point numbers, where p is the precision (total number of digits) and s is the scale (number of digits after the decimal point).'"
    },
    {
      id: "m2-l2-q3",
      question: "What happens when you insert a 3-character string into a CHAR(5) column?",
      options: [
        "SQL generates a syntax truncation error and cancels the query immediately.",
        "SQL fills in the missing characters via consequently writing in void (clear) spaces.",
        "SQL automatically converts the column data type to VARCHAR(3).",
        "SQL deletes the preceding row to maintain storage balance across pages."
      ],
      correctAnswer: 1,
      explanation: "From Lesson 2: 'SQL fills in any \"missing\" characters via consequently composing in void spaces. These clear spaces have no impact on your information.'"
    },
    {
      id: "m2-l2-q4",
      question: "What is the maximum character capacity of TEXT in systems like MySQL according to the text?",
      options: [
        "Up to 255 characters",
        "Up to 65,535 characters",
        "Up to 1,000,000 characters",
        "Up to 16,777,216 characters"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 2: '...it generally allows for a substantial amount of data, often up to 65,535 characters in systems like MySQL.'"
    },
    {
      id: "m2-l2-q5",
      question: "Which data type is a Binary Large Object used for storing large binary data such as images or files?",
      options: [
        "BLOB",
        "ENUM",
        "VARBINARY",
        "TEXT"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 2: 'BINARY LARGE OBJECT or BLOB: Binary Large Object, used for large binary data such as images or files.'"
    },
    {
      id: "m2-l2-q6",
      question: "What is the exact format and total length in spaces of the DATE data type?",
      options: [
        "YYYY-MM-DD, taking 10 spaces",
        "DD/MM/YYYY, taking 8 spaces",
        "MM-DD-YYYY, taking 12 spaces",
        "YYYY/MM, taking 7 spaces"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 2: 'Finally, you should remember that the complete length of the date is truth be told ten spaces because the qualities are isolated by a scramble, as so: 1990-12-03.'"
    },
    {
      id: "m2-l2-q7",
      question: "How does ENUM differ from SET in SQL?",
      options: [
        "ENUM allows only ONE value from a predefined list, while SET can store MULTIPLE values from the list.",
        "ENUM stores floating point numbers, while SET stores binary strings.",
        "ENUM can be indexed, whereas SET is strictly disallowed from having primary keys.",
        "ENUM is case-sensitive, while SET automatically converts text to lowercase ASCII."
      ],
      correctAnswer: 0,
      explanation: "From Lesson 2: 'ENUM: ...stores a single value from a list... while SET can store multiple values, useful for tags or attributes.'"
    },
    {
      id: "m2-l2-q8",
      question: "Is a Null value in SQL equivalent to zero (0) or an empty string?",
      options: [
        "Yes, in all SQL standards, NULL is strictly equal to the number 0.",
        "Yes, whenever a text cell is empty, it evaluates as equal to NULL using the '=' operator.",
        "No, a null value is not equivalent to zero, an empty string, or any default value; it is a distinct marker indicating the lack of a value.",
        "No, except when the column is defined with the AUTO_INCREMENT attribute."
      ],
      correctAnswer: 2,
      explanation: "From Lesson 2: 'Unlike other data types, a null value is not equivalent to zero, an empty string, or any other default value; it is a distinct marker indicating the lack of a value.'"
    },
    {
      id: "m2-l2-q9",
      question: "Which operators MUST be used to test for null values in SQL queries?",
      options: [
        "= NULL and != NULL",
        "IS NULL and IS NOT NULL",
        "== NULL and <> NULL",
        "LIKE NULL and NOT LIKE NULL"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 2: 'For example, standard comparison operators like = or != do not work with null values. Instead, SQL provides specific operators such as IS NULL and IS NOT NULL to check for null values.'"
    },
    {
      id: "m2-l2-q10",
      question: "In the textbook's 4 illustrations of Null, why were Boromir's wages set to invalid/null in the Gondor work table?",
      options: [
        "Because he was an android machine and wages were inapplicable.",
        "Because his wage ($999,999.99) was out-of-reach for a NUMERIC data type defined with precision 8 and scale 2.",
        "Because Gondor had not yet been discovered by space astronomers.",
        "Because his contract had not yet been signed in the future."
      ],
      correctAnswer: 1,
      explanation: "From Lesson 2: 'In the last situation we have out-of-reach esteem. Suppose we have a work table with Boromir... We need to set his wages to invalid since we determined a NUMERIC information type with an exactness of 8 and a size of 2... Since the worth is out of reach, it's set to invalid.'"
    }
  ],

  // Module 2, Lesson 3: MySQL Monitor
  "m2-l3": [
    {
      id: "m2-l3-q1",
      question: "What command connects to the MySQL server from the command line interface as administrator?",
      options: [
        "mysql -u username -p",
        "connect mysql --admin",
        "open mysql -login root",
        "sqlserver start -user admin"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 3: 'Follow these steps to start out the monitor and hook up with your MySQL server because the MySQL administrator... by typewriting this from the command line: mysql -u username -p'"
    },
    {
      id: "m2-l3-q2",
      question: "Which command is used to select or switch to an active database in MySQL Monitor?",
      options: [
        "CHOOSE database_name;",
        "USE Databasename;",
        "SELECT DATABASE database_name;",
        "OPEN Databasename;"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 3: 'USE Databasename: this will be used to opt for data among the MySQL work area.'"
    },
    {
      id: "m2-l3-q3",
      question: "Which command presents attributes, types, key data, defaults, and NULL permission for a specific table?",
      options: [
        "SHOW DATABASES;",
        "SHOW COLUMNS FROM tablename;",
        "SHOW USERS FROM tablename;",
        "SHOW STATUS LIKE tablename;"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 3: 'SHOW COLUMNS FROM tablename: Shows the attributes, types of attributes, key data, whether or not or not NULL is allowable, defaults, and various knowledge for a table.'"
    },
    {
      id: "m2-l3-q4",
      question: "What does the command 'SHOW TABLES;' do?",
      options: [
        "Creates a backup of all table rows to local disk storage.",
        "Shows the tables among the data once a database has been chosen with the USE command.",
        "Displays the active network connections to the MySQL server.",
        "Deletes all corrupt indices across all schema catalogs."
      ],
      correctAnswer: 1,
      explanation: "From Lesson 3: 'SHOW TABLES: Shows the tables among the data once a piece of information has been chosen with the use command.'"
    },
    {
      id: "m2-l3-q5",
      question: "What is the purpose of the '\\G' modifier at the end of a SHOW TABLE STATUS statement?",
      options: [
        "Reports output details in a vertical row-by-row layout instead of horizontal grid.",
        "Executes the query asynchronously in the background.",
        "Encrypts the output using global public key infrastructure.",
        "Cancels the statement without returning any performance data."
      ],
      correctAnswer: 0,
      explanation: "From Lesson 3: 'SHOW TABLE standing LIKE tablename\\G: Reports details of the MySQL software system performance and statistics.'"
    }
  ],

  // Module 3, Lesson 1: CRUD & Other SQL Statements
  "m3-l1": [
    {
      id: "m3-l1-q1",
      question: "What happens if you execute an UPDATE statement without specifying a WHERE clause?",
      options: [
        "MySQL aborts the statement with an error.",
        "Only the very first row of the table is modified.",
        "All rows in the table will be updated.",
        "A duplicate copy of the table is created in memory."
      ],
      correctAnswer: 2,
      explanation: "From Lesson 1: 'WHERE: Specifies which rows should be updated based on a condition. If omitted, all rows in the table will be updated.'"
    },
    {
      id: "m3-l1-q2",
      question: "What happens if the WHERE clause is omitted in a DELETE statement?",
      options: [
        "The table structure is dropped from the database schema.",
        "All records in the table will be deleted.",
        "Only records containing NULL values are removed.",
        "The operation is safely ignored without changing any rows."
      ],
      correctAnswer: 1,
      explanation: "From Lesson 1: 'If the WHERE clause is omitted, all records in the table will be deleted. Therefore, it is crucial to use the WHERE clause to specify the condition for deletion to avoid removing all data from the table.'"
    },
    {
      id: "m3-l1-q3",
      question: "What is the fundamental difference between DROP and DELETE in SQL?",
      options: [
        "DELETE permanently destroys the table schema, while DROP only empties rows.",
        "DROP eliminates whole database construction components like tables or databases permanently, while DELETE only removes records/rows.",
        "DROP is a DML statement, while DELETE is a DDL statement.",
        "DROP can be undone with ROLLBACK, whereas DELETE is completely irreversible."
      ],
      correctAnswer: 1,
      explanation: "From Lesson 1: 'Similar to DELETE, this assertion eliminates whole information base construction components like tables or even the data set itself. Remember that utilizing the DELETE proclamation won't erase a table or data set. That assertion is simply used to eliminate information, not constructions.'"
    },
    {
      id: "m3-l1-q4",
      question: "Which ALTER TABLE clause is used to change the data type of an existing column in MySQL?",
      options: [
        "ALTER TABLE table_name UPDATE COLUMN col_name datatype;",
        "ALTER TABLE table_name MODIFY COLUMN column_name datatype;",
        "ALTER TABLE table_name CHANGE TYPE col_name datatype;",
        "ALTER TABLE table_name RESET COLUMN col_name datatype;"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 1: 'ALTER TABLE table_name MODIFY COLUMN column_name datatype; For example: ALTER TABLE customers MODIFY COLUMN email VARCHAR(150);'"
    },
    {
      id: "m3-l1-q5",
      question: "Which type of JOIN returns the Cartesian product of two tables, combining all rows of the first table with all rows of the second?",
      options: [
        "INNER JOIN",
        "CROSS JOIN",
        "LEFT JOIN",
        "NATURAL JOIN"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 1: 'CROSS JOIN - Returns the Cartesian product of the two tables, combining all rows from the first table with all rows from the second table.'"
    }
  ],

  // Module 3, Lesson 2: Creating Database
  "m3-l2": [
    {
      id: "m3-l2-q1",
      question: "What is a key difference between building a database in visual tools like MS Access versus writing 'raw' SQL?",
      options: [
        "Raw SQL provides visual drag-and-drop relationship builders automatically.",
        "Raw SQL does not give visual warnings or auto-corrections; you must know syntax inside-out to prevent bugs.",
        "Access requires compiling queries into binary C libraries prior to execution.",
        "Raw SQL only operates on databases that contain fewer than one hundred rows."
      ],
      correctAnswer: 1,
      explanation: "From Lesson 2: '\"Raw\" SQL doesn't give you any of these highlights. Hence, you need to get familiar with the standards well and know the grammar inside and out to keep away from application slamming bugs that will stop down your creation.'"
    },
    {
      id: "m3-l2-q2",
      question: "Which command verifies the structure, data types, and keys of a newly created table?",
      options: [
        "DESCRIBE employees;",
        "VERIFY TABLE employees;",
        "CHECK SCHEMA employees;",
        "INSPECT COLUMNS employees;"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 2: 'Describe the structure of a table: DESCRIBE employees;'"
    },
    {
      id: "m3-l2-q3",
      question: "In MySQL, which column modifier automatically generates a unique sequential identifier for new rows?",
      options: [
        "IDENTITY_INSERT",
        "AUTO_INCREMENT",
        "SEQUENCE_GEN",
        "SERIAL_NUMBER"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 2: 'CREATE TABLE employees ( employee_id INT AUTO_INCREMENT PRIMARY KEY, ... );'"
    }
  ],

  // Module 3, Lesson 3: SQL Command Types
  "m3-l3": [
    {
      id: "m3-l3-q1",
      question: "Which category of SQL commands consists of CREATE, ALTER, DROP, and TRUNCATE?",
      options: [
        "DML (Data Manipulation Language)",
        "DDL (Data Definition Language)",
        "DCL (Data Control Language)",
        "DQL (Data Query Language)"
      ],
      correctAnswer: 1,
      explanation: "From Lesson 3: '1. DDL - Data Definition Language: DDL consists of SQL commands that can be used for defining, altering and deleting database structures such as tables, indexes and schemas.'"
    },
    {
      id: "m3-l3-q2",
      question: "Which category does the SELECT command belong to?",
      options: [
        "DQL (Data Query Language)",
        "DCL (Data Control Language)",
        "TCL (Transaction Control Language)",
        "DDL (Data Definition Language)"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 3: '2. DQL - Data Query Language: DQL is used to fetch data from the database. The main command is SELECT...'"
    },
    {
      id: "m3-l3-q3",
      question: "Are terms like FROM, WHERE, GROUP BY, HAVING, and ORDER BY separate SQL commands?",
      options: [
        "Yes, each one is an independent DQL command in the ANSI standard.",
        "No, they are clauses of the SELECT command, not separate commands.",
        "Yes, they belong to the DML classification.",
        "No, they are special DCL security statements."
      ],
      correctAnswer: 1,
      explanation: "From Lesson 3 Note: 'Note: DQL has only one command, SELECT. Other terms like FROM, WHERE, GROUP BY, HAVING, ORDER BY, DISTINCT and LIMIT are clauses of SELECT, not separate commands.'"
    },
    {
      id: "m3-l3-q4",
      question: "Which category includes commands such as GRANT and REVOKE?",
      options: [
        "DCL (Data Control Language)",
        "DML (Data Manipulation Language)",
        "DDL (Data Definition Language)",
        "DQL (Data Query Language)"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 3: '4. DCL - Data Control Language: DCL includes commands such as GRANT and REVOKE which mainly deal with the rights, permissions and other controls of the database system.'"
    },
    {
      id: "m3-l3-q5",
      question: "Which category do INSERT, UPDATE, and DELETE belong to?",
      options: [
        "DML (Data Manipulation Language)",
        "DDL (Data Definition Language)",
        "DCL (Data Control Language)",
        "DQL (Data Query Language)"
      ],
      correctAnswer: 0,
      explanation: "From Lesson 3: '3. DML - Data Manipulation Language: DML commands are used to manipulate the data stored in database tables. With DML, you can insert new records, update existing ones, delete unwanted data or retrieve information.'"
    }
  ],

  // Module 4, Lesson 1: MySQL Select Statement
  "m4-l1": [
    {
      id: "m4-l1-q1",
      question: "When evaluating a SELECT statement, in what order does MySQL evaluate the clauses?",
      options: [
        "MySQL evaluates the SELECT clause first and then the FROM clause.",
        "MySQL evaluates the FROM clause first and then the SELECT clause.",
        "MySQL evaluates both clauses simultaneously using parallel threads.",
        "MySQL evaluates clauses alphabetically based on keyword spelling."
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 1: 'When evaluating the SELECT statement, MySQL evaluates the FROM clause first and then the SELECT clause.'"
    },
    {
      id: "m4-l1-q2",
      question: "What is the role of the semicolon (;) in MySQL statements?",
      options: [
        "It acts as a comment marker that disables remaining code.",
        "It is the statement delimiter specifying the end of a statement.",
        "It serves as a wildcard matching single alphanumeric characters.",
        "It forces MySQL to execute the query as a background daemon."
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 1: 'The semicolon ; is the statement delimiter. It specifies the end of a statement. If you have two or more statements, you use the semicolon ; to separate them so that MySQL will execute each statement individually.'"
    },
    {
      id: "m4-l1-q3",
      question: "Is SQL a case-sensitive language with respect to keywords like SELECT and FROM?",
      options: [
        "Yes, SQL will throw a syntax error if keywords are written in lowercase.",
        "No, SQL is not a case-sensitive language; lowercase keywords like 'select' and 'from' will still run.",
        "Yes, keywords must be written in camelCase according to MySQL standards.",
        "No, except when querying tables stored in the InnoDB storage engine."
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 1: 'Since SQL is not a case-sensitive language, you can write the keywords in lowercase e.g., select and from, the code will still run.'"
    }
  ],

  // Module 4, Lesson 2: ORDER BY
  "m4-l2": [
    {
      id: "m4-l2-q1",
      question: "What is the default sorting direction in the ORDER BY clause if neither ASC nor DESC is specified?",
      options: [
        "DESC (descending)",
        "ASC (ascending)",
        "Random order based on disk index creation date",
        "Alphabetical descending by primary key"
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 2: 'By default, the ORDER BY clause uses ASC if you don't explicitly specify any option.'"
    },
    {
      id: "m4-l2-q2",
      question: "In what order is the ORDER BY clause evaluated relative to FROM and SELECT?",
      options: [
        "ORDER BY is always evaluated before the FROM clause.",
        "ORDER BY is always evaluated between the FROM and SELECT clauses.",
        "ORDER BY is always evaluated after the FROM and SELECT clause.",
        "ORDER BY is evaluated strictly at compile time before table locks are acquired."
      ],
      correctAnswer: 2,
      explanation: "From Module 4, Lesson 2: 'Note that the ORDER BY clause is always evaluated after the FROM and SELECT clause.'"
    },
    {
      id: "m4-l2-q3",
      question: "In multi-column sorting: 'ORDER BY contactLastName DESC, contactFirstName ASC;', what happens?",
      options: [
        "The entire result set is sorted by contactFirstName first, ignoring contactLastName.",
        "First, the result set is sorted by contactLastName descending; ties are then sorted by contactFirstName ascending.",
        "Both columns are sorted independently into two distinct result set tables.",
        "The query produces a syntax error because mixed ASC and DESC sort orders are disallowed."
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 2: 'In this example, the ORDER BY clause sorts the result set by the last name in descending order first and then sorts the sorted result set by the first name in ascending order to produce the final result set.'"
    }
  ],

  // Module 4, Lesson 3: WHERE Clause
  "m4-l3": [
    {
      id: "m4-l3-q1",
      question: "In a SELECT statement, when is the WHERE clause evaluated?",
      options: [
        "Evaluated after the FROM clause and before the SELECT clause.",
        "Evaluated after the SELECT clause and after the ORDER BY clause.",
        "Evaluated first before any database tables are opened.",
        "Evaluated after the result set is printed to the client screen."
      ],
      correctAnswer: 0,
      explanation: "From Module 4, Lesson 3: 'In the SELECT statement, the WHERE clause is evaluated after the FROM clause and before the SELECT clause.'"
    },
    {
      id: "m4-l3-q2",
      question: "What is a 'predicate' in MySQL?",
      options: [
        "A numeric scalar value stored in the master binary transaction log.",
        "A Boolean expression that evaluates to TRUE, FALSE, or UNKNOWN.",
        "A system stored procedure used to rebuild corrupt B-tree indexes.",
        "A character string delimiter that terminates an active client connection."
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 3: 'In MySQL, a predicate is a Boolean expression that evaluates to TRUE, FALSE, or UNKNOWN.'"
    },
    {
      id: "m4-l3-q3",
      question: "In the LIKE operator, what is the meaning of the '%' and '_' wildcards?",
      options: [
        "'%' matches zero or more characters; '_' matches any single character.",
        "'%' matches exactly one character; '_' matches any string of numbers.",
        "'%' matches whitespace; '_' matches punctuation symbols.",
        "'%' matches uppercase letters; '_' matches lowercase letters."
      ],
      correctAnswer: 0,
      explanation: "From Module 4, Lesson 3: 'The % wildcard matches any string of zero or more characters while the _ wildcard matches any single character.'"
    },
    {
      id: "m4-l3-q4",
      question: "Is the range in the BETWEEN operator inclusive or exclusive?",
      options: [
        "Exclusive of both the low and high boundaries.",
        "Inclusive of both the low and high boundaries.",
        "Inclusive of the low boundary, but exclusive of the high boundary.",
        "Exclusive of the low boundary, but inclusive of the high boundary."
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 3: 'It selects only employees whose officeCode is between 1 and 3, including office codes 1, 2, and 3.'"
    }
  ],

  // Module 4, Lesson 4 & 5: AND/OR & Precedence
  "m4-l4": [
    {
      id: "m4-l4-q1",
      question: "What is short-circuit evaluation in MySQL boolean expressions?",
      options: [
        "MySQL terminates the connection whenever a syntax error occurs.",
        "MySQL stops evaluating the remaining parts of the expression whenever it can determine the result.",
        "MySQL skips primary key verification when executing bulk inserts.",
        "MySQL automatically optimizes table indexes during system idle time."
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 4: 'When evaluating an expression that has the AND operator, MySQL stops evaluating the remaining parts of the expression whenever it can determine the result. This function is called short-circuit evaluation.'"
    },
    {
      id: "m4-l4-q2",
      question: "What does the statement 'SELECT 1 = 0 AND 1 / 0;' return in MySQL?",
      options: [
        "An error: Division by zero exception.",
        "0 (false) without an error because 1 = 0 evaluates to false first.",
        "1 (true) because 1 / 0 evaluates to positive infinity.",
        "NULL because division by zero converts all booleans to invalid."
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 4: 'SELECT 1 = 0 AND 1 / 0 ; Result: 0. MySQL stops evaluating because 1 = 0 is false.'"
    },
    {
      id: "m4-l4-q3",
      question: "Under what condition does the AND operator return true?",
      options: [
        "When at least one of the expressions is true.",
        "Only if both (all) boolean expressions evaluate to true.",
        "When one expression is false and the other is null.",
        "Whenever the query contains an ORDER BY clause."
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 4: 'The AND operator is a logical operator that combines two or more Boolean expressions and returns true only if both expressions evaluate to true.'"
    }
  ],

  // Module 4, Lesson 5: OR Operator & Precedence
  "m4-l5": [
    {
      id: "m4-l5-q1",
      question: "When evaluating expressions containing both AND and OR operators without parentheses, which operator has higher precedence?",
      options: [
        "OR has higher precedence and is evaluated before AND.",
        "AND has higher precedence and is evaluated before OR.",
        "Both have identical precedence and are evaluated strictly from right to left.",
        "Precedence is determined dynamically based on CPU clock speed."
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 5: 'When you use more than one logical operator in an expression, MySQL always evaluates the OR operators after the AND operators. This is called operator precedence which determines the order of evaluation of the operators. MySQL evaluates the operator with higher precedence first.'"
    },
    {
      id: "m4-l5-q2",
      question: "What does the query 'SELECT true OR false AND false;' return in MySQL?",
      options: [
        "0 (false)",
        "1 (true)",
        "NULL",
        "Syntax error: ambiguous operator chain"
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 5: 'First, MySQL evaluates the AND operator, therefore the expression false AND false returns false. Second, MySQL evaluates the OR operator hence the expression true OR false returns true [1].'"
    },
    {
      id: "m4-l5-q3",
      question: "What does 'SELECT 1 = 1 OR 1 / 0;' return due to MySQL OR short-circuit evaluation?",
      options: [
        "Division by zero error",
        "0",
        "1",
        "NULL"
      ],
      correctAnswer: 2,
      explanation: "From Module 4, Lesson 5: 'Because the expression 1 = 1 always returns true, MySQL does not evaluate the 1 / 0... Result: 1.'"
    },
    {
      id: "m4-l5-q4",
      question: "How can a developer force MySQL to evaluate an OR condition before an AND condition?",
      options: [
        "By placing parentheses around the OR expression.",
        "By typing the OR keyword in all capital letters.",
        "By adding the keyword FORCE OR after the WHERE clause.",
        "By placing a semicolon between the two expressions."
      ],
      correctAnswer: 0,
      explanation: "From Module 4, Lesson 5: 'WHERE (country = 'USA' OR country = 'France') AND creditlimit > 100000; Parentheses group the OR condition so it evaluates first.'"
    }
  ],

  // Module 5, Lesson 1: Inner Join
  "m5-l1": [
    {
      id: "m5-l1-q1",
      question: "When does an INNER JOIN include a row in the result set?",
      options: [
        "Whenever the left table has data, regardless of matches in the right table.",
        "Only when rows from both tables cause the join condition to evaluate to TRUE.",
        "Whenever at least one of the tables contains a primary key index.",
        "Whenever the right table contains null values in its foreign key column."
      ],
      correctAnswer: 1,
      explanation: "From Module 5, Lesson 1: 'If rows from both tables cause the join condition to evaluate to TRUE, the INNER JOIN creates a new row whose columns contain all columns of rows from the tables and includes this new row in the result set. Otherwise, the INNER JOIN just ignores the rows.'"
    },
    {
      id: "m5-l1-q2",
      question: "When can you use the 'USING(column_name)' syntax instead of the 'ON' clause in an INNER JOIN?",
      options: [
        "When the tables are stored in two different database management engines.",
        "When the joined columns in both tables have the exact same name.",
        "When joining more than ten tables in a single query.",
        "When the joined columns have different names but identical data types."
      ],
      correctAnswer: 1,
      explanation: "From Module 5, Lesson 1: 'Because the joined columns of both tables have the same name productline, you can use the USING syntax... The query returns the same result set. However, the USING syntax is much shorter and cleaner.'"
    }
  ],

  // Module 5, Lesson 2: Left Join
  "m5-l2": [
    {
      id: "m5-l2-q1",
      question: "What values appear for right table columns in a LEFT JOIN when a row from the left table has no matching row in the right table?",
      options: [
        "Zero (0)",
        "Empty string ('')",
        "NULL",
        "The query skips the row and returns nothing."
      ],
      correctAnswer: 2,
      explanation: "From Module 5, Lesson 2: 'In case there is no matching rows from the right table found, NULLs are used for columns of the row from the right table in the final result set.'"
    },
    {
      id: "m5-l2-q2",
      question: "Which query pattern correctly identifies rows in the left table that have NO matching rows in the right table?",
      options: [
        "LEFT JOIN with WHERE right_table.key IS NULL",
        "INNER JOIN with WHERE right_table.key IS NOT NULL",
        "RIGHT JOIN with WHERE left_table.key = 0",
        "CROSS JOIN with WHERE right_table.key = ''"
      ],
      correctAnswer: 0,
      explanation: "From Module 5, Lesson 2: 'To find members who are not the committee members, you add a WHERE clause and IS NULL operator as follows: ... WHERE c.committee_id IS NULL;'"
    }
  ],

  // Module 5, Lesson 3: Right Join & Full Outer Join
  "m5-l3": [
    {
      id: "m5-l3-q1",
      question: "Which of the following is a synonym for RIGHT JOIN in MySQL?",
      options: [
        "RIGHT INNER JOIN",
        "RIGHT OUTER JOIN",
        "NATURAL RIGHT JOIN",
        "FULL RIGHT JOIN"
      ],
      correctAnswer: 1,
      explanation: "From Module 5, Lesson 3: 'Note that the RIGHT OUTER JOIN is a synonym for RIGHT JOIN'"
    },
    {
      id: "m5-l3-q2",
      question: "How is a FULL OUTER JOIN achieved in MySQL?",
      options: [
        "By using the native keyword `FULL OUTER JOIN t2 ON condition`.",
        "By combining a LEFT JOIN and a RIGHT JOIN using the UNION operator.",
        "By enabling the `mysql_full_join_plugin` in MySQL configuration.",
        "By nesting two CROSS JOIN clauses inside a subquery."
      ],
      correctAnswer: 1,
      explanation: "From Module 5 Summary & Joins guide: MySQL does not natively support FULL OUTER JOIN syntax; it is achieved using a UNION of LEFT JOIN and RIGHT JOIN."
    }
  ]
};
