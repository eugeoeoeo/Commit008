// Complete Curriculum Data Layer strictly adhering to Florencio V. Contreras Jr.
// COMPUTER PROGRAMMING 008: DATABASE ADMINISTRATION, Polytechnic University of the Philippines (PUP), CCIS

export const COURSE_INFO = {
  courseCode: "COMP 008",
  courseTitle: "Database Administration",
  author: "FLORENCIO V. CONTRERAS JR.",
  institution: "Polytechnic University of the Philippines",
  college: "College of Computer and Information Sciences (CCIS)",
  academicUnit: "Bachelor of Science in Information Technology",
  curriculumRef: "CMO 25 series of 2015"
};

export const MODULES_DATA = [
  {
    id: "module-1",
    moduleNumber: 1,
    title: "Database Management System",
    description: "Fundamental concepts of databases, table elements, 3 database categories, DBMS key functions, database types (Relational, NoSQL, OODBMS, Hierarchical, Network), and the 8 key advantages of using a DBMS.",
    lessons: [
      {
        id: "m1-l1",
        lessonNumber: 1,
        title: "Understanding Database",
        subtitle: "Definitions, Table Components, Metadata, and Database Categories",
        learningOutcomes: [
          "Comprehend the fundamental concepts of databases, including their importance in modern computing.",
          "Identify and define the essential components and elements of a table in a database.",
          "Differentiate between personal, group, and enterprise databases based on key attributes."
        ],
        sections: [
          {
            title: "What is a Database?",
            content: `A database is an organized collection of related data which represents some aspect of the real world and that is stored and accessed electronically. Databases are designed to efficiently manage large amounts of information by providing a systematic way to store, retrieve, and manipulate data. They are used in various applications, ranging from simple personal data management to complex enterprise systems (Joe, C. 2021).

To certain people, a database refers to quite a few information things contained in a book or list. To others, it refers to a vault of organized information, or records, which can be accessed through a PC framework. In this context, a record refers to the portrayal of a thing (for example, one record for each unique customer containing names, telephone numbers, addresses, etc.).`
          },
          {
            title: "Metadata and the Data Dictionary",
            content: `A database does not contain only data; it additionally incorporates metadata, which has the purpose of characterizing the data's design inside the database. Because if you know how the information is coordinated, then you can access it, oversee it, look after it, and adjust it.

The entirety of this implies that a database is self-describing, as it contains information on the associations between the data objects. The metadata is held inside what is known as a data dictionary. The data dictionary is what describes the segments of a database, specifically the table, rows, sections, and constraints. Note that flat file systems do not contain metadata, meaning programs handling flat files must provide their own coordination.`
          },
          {
            title: "Three Categories of Databases",
            content: `Databases can be sorted in three distinct manners based on three credits: how enormous it is, the number of individuals needing access, and what sort of specialized gear it requires:

1. Personal Databases: The littlest databases. They are put away on the user's PC and are described by a fundamental information structure.
2. Group Databases: More mind-boggling/complex. Proposed to be utilized by a division or group, containing significantly more information than an individual database and accessed from various devices simultaneously.
3. Enterprise Databases: Enormous, complex, and needing the most dependable equipment/gear to be securely put away and kept up.`
          },
          {
            title: "What is a Table in a Database?",
            content: `A table is a collection of related data in an organized manner in the form of rows and columns. It is an organized arrangement of data and information in tabular form containing rows and columns, making it easier to understand and compare data (GeeksforGeeks, 2024).

In the relational model, tables are the fundamental structures that organize and save data with precision. A table is a scientific arrangement of records offered in rows and columns that improves the performance of information control and retrieval.`
          },
          {
            title: "Elements of a Table",
            content: `A table is composed of seven primary elements:

1. Columns (Fields or Attributes): Each type of information present in the vertical position is known as columns or fields. They allow us to sort and filter data in a table (e.g., ID, Name, Age, Course).
2. Row (Tuple or Record): The data of each entity in a horizontal position is known as row or record. Each record holds the total data for a specific entity (e.g., Row 1 represents student ID 1 named Minal, age 22, Course CS).
3. Column Name: Each column or field has its unique name (e.g., ID, NAME, AGE, COURSE).
4. Data Items (Column Values): The information stored in a specific cell within a column for a particular row. Every point where a row and a column cross signifies a distinct piece of data.
5. Data Types: Each column is associated with a specific data type that defines the kind of data it can store (e.g., int, varchar, char, date).
6. Primary Key: The unique identifier for each row in a table. There can only be one primary key in a table, and it CANNOT BE NULL. Each entity is uniquely identified by this key; no two rows can have the same primary key value.
7. Foreign Key: A column or set of columns in a table that refers to the primary key of another table. It establishes the relationship between tables. A foreign key CAN BE NULL, and there can be more than one foreign key in a single table.`
          }
        ],
        keyTakeaways: [
          "A database is an organized collection of related data representing the real world, stored and accessed electronically.",
          "Metadata is data about data held in the data dictionary, making a database self-describing.",
          "Databases are classified into Personal, Group, and Enterprise based on size, users, and equipment.",
          "A table consists of 7 components: Columns (fields), Rows (tuples), Column Names, Data Items, Data Types, Primary Key, and Foreign Key.",
          "Primary keys cannot be NULL and must be unique (only 1 per table); Foreign keys can be NULL and multiple foreign keys can exist in a table."
        ],
        examTips: [
          "Exam questions frequently contrast Primary Key vs Foreign Key regarding NULL acceptability: Primary Key CAN NEVER be null; Foreign Key CAN be null.",
          "Remember the three attributes used to classify databases: (1) how enormous it is (size), (2) number of people who need access, and (3) specialized gear required.",
          "Notice the synonym terms: Column = Field = Attribute; Row = Tuple = Record."
        ]
      },
      {
        id: "m1-l2",
        lessonNumber: 2,
        title: "DBMS and its Key Functions",
        subtitle: "Software Architecture, Normalization, and Core Functions",
        learningOutcomes: [
          "Understand the role of Database Management Systems (DBMS) in organizing and managing data efficiently.",
          "Identify and describe the 5 key functions of a DBMS.",
          "Explain the role of normalization in schema design and eliminating redundancy."
        ],
        sections: [
          {
            title: "DBMS Definition and Core Purpose",
            content: `Database Management Systems (DBMS) is a software system used to store, retrieve, and run queries on data. It provides a systematic and organized way of storing, managing, and retrieving data, ensuring data integrity, security, and consistency. 

A DBMS serves as an interface between an end-user and a database, allowing users to create, read, update, and delete data in the database.

DBMS manage the data, the database engine, and the database schema, allowing for data to be manipulated or extracted by users and other programs. This helps provide data security, data integrity, concurrency, and uniform data administration procedures.

DBMS optimizes the organization of data by following a database schema design technique called NORMALIZATION, which splits a large table into smaller tables when any of its attributes have redundancy in values (Friedrichsen, Lisa et al. 2021).`
          },
          {
            title: "The 5 Key Functions of a DBMS",
            content: `A DBMS entails five essential functional areas:

1. Data Definition:
   • Schema Definition: Defines the database structure, including tables, fields, relationships, and constraints.
   • Data Types: Specifies the types of data that can be stored (e.g., integers, strings, dates).

2. Data Manipulation:
   • Query Processing: Allows users to retrieve specific data using query languages like SQL.
   • Data Update: Enables insertion, modification, and deletion of data within the database.
   • Transaction Management: Ensures that transactions are processed reliably and adhere to ACID properties (Atomicity, Consistency, Isolation, Durability).

3. Data Security and Integrity:
   • Access Control: Manages user permissions to ensure only authorized users can access or modify data.
   • Integrity Constraints: Enforces rules to maintain data accuracy and consistency (e.g., primary keys, foreign keys).

4. Data Storage and Retrieval:
   • Storage Management: Handles the physical storage of data on disk drives.
   • Indexing: Creates indexes to speed up data retrieval operations.
   • Backup and Recovery: Provides mechanisms to back up data and restore it in case of data loss or corruption.

5. Data Administration:
   • Database Tuning: Optimizes database performance through techniques like indexing and query optimization.
   • Monitoring and Maintenance: Tracks database performance and performs regular maintenance tasks.`
          }
        ],
        keyTakeaways: [
          "A DBMS acts as an interface between the end-user and the database.",
          "Normalization is the schema design technique that splits large tables into smaller ones to eliminate attribute redundancy.",
          "The 5 key functions of a DBMS are: Data Definition, Data Manipulation, Data Security and Integrity, Data Storage and Retrieval, and Data Administration.",
          "Transaction management ensures transactions adhere to ACID properties: Atomicity, Consistency, Isolation, Durability."
        ],
        examTips: [
          "Expect identification questions on 'Normalization'—splitting large tables into smaller ones to reduce redundancy.",
          "Memorize the 5 key functions: Definition, Manipulation, Security & Integrity, Storage & Retrieval, Administration.",
          "Know the acronym ACID: Atomicity, Consistency, Isolation, Durability."
        ]
      },
      {
        id: "m1-l3",
        lessonNumber: 3,
        title: "DBMS Types",
        subtitle: "Hierarchical, Network, Relational (RDBMS), NoSQL, and OODBMS",
        learningOutcomes: [
          "Trace the evolution of DBMS models from Hierarchical and Network to Relational.",
          "Differentiate between RDBMS, NoSQL, and OODBMS.",
          "Analyze the structural differences between Hierarchical and Network models using comparative criteria."
        ],
        sections: [
          {
            title: "Evolution of DBMS Models",
            content: `The absolute first database models were built utilizing a hierarchy-based design. This led to issues including stiffness, difficulty to change, and maintenance problems. This prompted the development of the network-type database, whose purpose was to eliminate repetition/redundancy flaws. However, network models were profoundly complex.

A revolutionary response to these issues was offered with the development of the relational database. The construction was simple and minimal redundancy was one of its main highlights. With relational databases, SQL entered the stage and sent prior models into obscurity.`
          },
          {
            title: "1. Relational DBMS (RDBMS)",
            content: `The relational database was pioneered by Edgar Frank Codd from IBM in 1970. Commercial adoption began approximately a decade later, significantly marked by the creation of Oracle.

This advancement allowed modifications in database structures without necessitating changes in the applications relying on the database (data independence). Relational databases organize data into separate tables, known as relations, where each table consists of rows and columns. Each row is unique, and each cell contains a single value (atomicity).

Three Key Concepts of Relational Structure:
• Schema: The actual design, also known as the theoretical view or logical view. It represents the metadata describing the structure and tables.
• Domain: The collection of permitted values for a table attribute/column (e.g., for vehicle color: metallic silver, dark, pearl white, cherry red).
• Constraints: Rules that define which values can belong to an attribute, restricting users from entering improper data.

Examples of RDBMS: MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server.`
          },
          {
            title: "2. NoSQL DBMS ('Not Only SQL')",
            content: `NoSQL diverges from traditional relational systems. Designed to handle large volumes of unstructured or semi-structured data, dynamic schemas, and horizontal expansion/scalability.

Four Types of NoSQL Databases:
• Document-Oriented: Stores data as documents (e.g., MongoDB, CouchDB).
• Key-Value Stores: Stores data as key-value pairs (e.g., Redis, DynamoDB).
• Column-Family Stores: Stores data in columns rather than rows (e.g., Cassandra, HBase).
• Graph Databases: Focuses on data relationships using graph structures (e.g., Neo4j, ArangoDB).`
          },
          {
            title: "3. Object-Oriented DBMS (OODBMS)",
            content: `Supports the creation and modeling of data as objects, integrating object-oriented programming (OOP) concepts like inheritance, encapsulation, and polymorphism with database technology. Examples: ObjectDB, db4o.`
          },
          {
            title: "4. Hierarchical vs Network DBMS Comparison",
            content: `Both emerged in the early days of database technology:

• Hierarchical DBMS: Organizes data in a tree-like structure where each record (node) has a single parent and multiple children (like an organizational chart). Rigid and difficult to modify. Example: IBM IMS.
• Network DBMS: Extends the hierarchical model by allowing multiple parent-child relationships, forming a graph-like structure. Flexible for many-to-many relationships, but more complex in design and maintenance. Example: IDMS.`
          }
        ],
        keyTakeaways: [
          "Edgar Frank Codd of IBM pioneered the relational database model in 1970; Oracle led commercial adoption a decade later.",
          "Relational components: Schema (logical view/metadata), Domain (permitted values set), Constraints (rules preventing invalid data).",
          "NoSQL types: Document (MongoDB), Key-Value (Redis), Column-Family (Cassandra), Graph (Neo4j).",
          "Hierarchical (tree-like, 1 parent, IBM IMS) vs Network (graph-like, multiple parents/many-to-many, IDMS)."
        ],
        examTips: [
          "Who pioneered the relational database? Edgar Frank Codd from IBM.",
          "What does NoSQL stand for? 'Not Only SQL'.",
          "Hierarchical example: IBM IMS. Network example: IDMS.",
          "Hierarchical has a single parent-child relationship; Network supports multiple parent-child relationships."
        ]
      },
      {
        id: "m1-l4",
        lessonNumber: 4,
        title: "Advantages of Using a DBMS",
        subtitle: "The 8 Key Benefits of Modern Database Management",
        learningOutcomes: [
          "Recognize and articulate the eight primary advantages of using a DBMS.",
          "Distinguish between vertical and horizontal scalability.",
          "Explain how concurrency control prevents data conflicts during simultaneous access."
        ],
        sections: [
          {
            title: "Overview of DBMS Advantages",
            content: `Using a Database Management System (DBMS) offers several distinct advantages over traditional flat file systems that enhance data management, security, efficiency, and scalability (Friedrichsen, Lisa et al. 2021).`
          },
          {
            title: "The 8 Primary Advantages",
            content: `1. Centralized Data Management: All data is stored in one place rather than scattered across various files. Simplifies access, reduces redundancy and inconsistency, facilitates backup and recovery.
2. Improved Data Security: Built-in security measures including access control mechanisms, encryption for sensitive data, and audit trails for accountability.
3. Efficient Data Retrieval and Manipulation: Powerful query languages and indexing techniques to retrieve and manipulate data quickly; supports complex queries and ad-hoc reporting.
4. Data Consistency and Integrity: Enforces data integrity constraints to ensure accurate, consistent data and prevent anomalies.
5. Scalability and Flexibility: Handles increasing data and users without sacrificing performance. Scales up (vertical scaling) or scales out (horizontal scaling).
6. Concurrency Control: Manages simultaneous access by multiple users or applications, preventing conflicts and ensuring transaction atomicity through locking mechanisms.
7. Backup and Recovery: Regular automated backups and efficient restoration mechanisms to minimize downtime and data loss.
8. Cost Efficiency: Streamlines data management, reduces hardware and maintenance costs associated with dispersed storage, and improves operational efficiency.`
          }
        ],
        keyTakeaways: [
          "The 8 advantages are: Centralized Management, Improved Security, Efficient Retrieval/Manipulation, Consistency & Integrity, Scalability/Flexibility, Concurrency Control, Backup & Recovery, and Cost Efficiency.",
          "Scalability includes scaling up (vertical) and scaling out (horizontal).",
          "Concurrency control prevents conflicts when multiple users access the database simultaneously."
        ],
        examTips: [
          "Be prepared for multiple choice questions asking 'Which of the following is NOT an advantage of using a DBMS?'.",
          "Vertical scaling = scaling up (adding CPU/RAM to a single machine); Horizontal scaling = scaling out (adding more machines/nodes)."
        ]
      }
    ]
  },
  {
    id: "module-2",
    moduleNumber: 2,
    title: "SQL Basics",
    description: "Origins of SQL, non-procedural vs procedural languages, comprehensive data types (Numeric, Character String, Binary, Date & Time, Boolean, Misc), Null values in-depth, and MySQL Monitor commands.",
    lessons: [
      {
        id: "m2-l1",
        lessonNumber: 1,
        title: "What is SQL?",
        subtitle: "History, Characteristics, Non-procedural Paradigm, and Query Extraction",
        learningOutcomes: [
          "Define SQL and describe its history and creation at IBM.",
          "Explain the difference between non-procedural and procedural programming languages.",
          "Identify the two primary techniques for extracting data from a database."
        ],
        sections: [
          {
            title: "SQL Definition and History",
            content: `SQL, or Structured Query Language, is a standardized programming language used for managing and manipulating relational databases. 

Developed in the early 1970s at IBM by Donald D. Chamberlin and Raymond F. Boyce, SQL became the standard for database query languages due to its efficiency in handling structured data.

SQL enables users to perform a variety of operations: querying data to retrieve specific information, updating records to reflect changes, inserting new data, deleting unwanted data, creating/modifying database structures (tables, indexes), and controlling access permissions.`
          },
          {
            title: "Non-Procedural vs Procedural Languages",
            content: `SQL is definitely NOT a procedural programming language like C, BASIC, or Java.

• In a procedural language (e.g. Java, C), the programmer must specify step-by-step HOW the task can be performed using loops, orders, and algorithmic sequences.
• SQL is a non-procedural language, which means you simply tell it WHAT should be done. The DBMS itself determines the most efficient way to execute the query and retrieve the result.

Procedural Extensions: Due to demand, procedural extensions were added to SQL (e.g., PL/SQL, T-SQL) allowing functions, procedures, and IF statements.`
          },
          {
            title: "Two Techniques for Extracting Information",
            content: `There are two techniques for removing/extracting information from a database:
1. Composing a query directly: Writing an interactive SQL statement (e.g., \`SELECT * FROM EMPLOYEES WHERE Age > 40 OR Income > 90000;\`) when you need immediate data right away.
2. Running an information gatherer program: An application that gathers the information and prints it directly to screen or generates a formal report.
These two techniques can be combined for maximum flexibility.`
          }
        ],
        keyTakeaways: [
          "SQL was developed in the early 1970s at IBM by Donald D. Chamberlin and Raymond F. Boyce.",
          "SQL is non-procedural: you specify WHAT data you want, not HOW to retrieve it step-by-step.",
          "The two methods for data extraction are direct queries and information gatherer programs."
        ],
        examTips: [
          "Creator names: Donald D. Chamberlin and Raymond F. Boyce (IBM, early 1970s).",
          "SQL is non-procedural, while languages like C, Java, and BASIC are procedural."
        ]
      },
      {
        id: "m2-l2",
        lessonNumber: 2,
        title: "Data Types in SQL & Null Values",
        subtitle: "Numeric, String, Binary, Date/Time, Boolean, ENUM/SET, and Null Semantics",
        learningOutcomes: [
          "Catalog and define all fundamental data types in SQL.",
          "Distinguish between CHAR and VARCHAR, and understand fixed vs floating point numerics.",
          "Explain the precise semantics and 4 real-world scenarios of Null values."
        ],
        sections: [
          {
            title: "1. Numeric Data Types",
            content: `• INT / INTEGER: Whole numbers without decimal points. Precision is the maximum number of digits.
• SMALLINT: Smaller whole numbers; precision is limited to integer implementation.
• TINYINT: Very small whole numbers; 0 to 255 unsigned, -128 to 127 signed. Minimizes storage space.
• BIGINT: Large whole numbers (e.g. up to 9223372036854775807).
• DECIMAL(p, s) / NUMERIC(p, s): Fixed-point numbers, where p is precision (total number of digits) and s is scale (digits after decimal point). Example: DECIMAL(10, 2) stores 12345.67.
• FLOAT: Single-precision floating-point numbers. Allows specifying precision to ease migration between systems.
• REAL: Single-precision floating-point numbers where precision is controlled by hardware (32-bit vs 64-bit).
• DOUBLE: Double-precision floating-point numbers for scientific calculations.`
          },
          {
            title: "2. Character String Data Types",
            content: `• CHAR(n): Fixed-length character string of length n. If shorter text is inserted, SQL pads missing characters with trailing spaces. Default length is 1.
• VARCHAR(n): Variable-length character string with maximum length n. Does not pad with blank spaces.
• TEXT: Large blocks of variable-length text data up to 65,535 characters in MySQL.`
          },
          {
            title: "3. Binary Data Types",
            content: `• BINARY(n): Fixed-length binary data measured in bytes.
• VARBINARY(n): Variable-length binary data up to n bytes.
• BLOB (Binary Large Object): Large binary data such as images or audio files. Requires a finder to establish identity and relocate across databases.`
          },
          {
            title: "4. Date and Time Data Types",
            content: `• DATE: Format YYYY-MM-DD (10 characters, years 0001 to 9999).
• TIME: Format HH:MM:SS. Fractional seconds allowed using TIME WITHOUT TIME ZONE(x).
• DATETIME: Combined date and clock time from '1753-01-01' to '9999-12-31'.
• TIMESTAMP: Combined date and time including timezone information.
• YEAR: Stores 4-digit year (1901 to 2155) or 2-digit year (00 to 99 representing 2000-2099).`
          },
          {
            title: "5. Boolean and Miscellaneous Types",
            content: `• BOOLEAN: True/false values. Typically stored as 1 (TRUE) and 0 (FALSE).
• ENUM: Enumerated list allowing only ONE value chosen from a predefined set (e.g. ENUM('small', 'medium', 'large')).
• SET: Can store MULTIPLE values simultaneously from a predefined set, stored as a bitfield (e.g. SET('red', 'green', 'blue') storing 'red,blue').`
          },
          {
            title: "Understanding Null Values",
            content: `A Null value represents the absence of data in a column, indicating that a value is unknown, missing, or not applicable. 

CRITICAL DISTINCTIONS:
• A null value is NOT equal to zero (0).
• A null value is NOT equal to an empty string ("") or blank space.
• Standard equality operators (= or !=) DO NOT work with null values; you must use \`IS NULL\` and \`IS NOT NULL\`.
• Functions like \`COALESCE()\` and \`IFNULL()\` supply defaults for nulls.

The Four Illustrative Scenarios:
1. Unknown Real Value: Aliens column in Planets table (life may exist, but value unknown until discovered).
2. Future Value: SOLD_COPIES of an unpublished book (will exist in the future, but currently null).
3. Inapplicable Value: Sex column for android Data (he is a machine; sex does not apply).
4. Out-of-Reach Value: Boromir's wage of $999,999.99 exceeding the declared NUMERIC(8, 2) field.`
          }
        ],
        keyTakeaways: [
          "TINYINT range is 0 to 255 unsigned, -128 to 127 signed.",
          "CHAR(n) pads with trailing spaces; VARCHAR(n) stores variable length without padding.",
          "ENUM allows only 1 value from list; SET allows multiple values stored as bitfields.",
          "NULL is NOT zero and NOT empty space; it represents missing or inapplicable information.",
          "Check for null using IS NULL and IS NOT NULL, never with = NULL."
        ],
        examTips: [
          "Remember the four Null scenarios: Aliens (unknown), Unpublished book (future), Android Data (inapplicable), Boromir (out of reach).",
          "TINYINT stores 0 to 255 unsigned. TEXT holds up to 65,535 chars in MySQL.",
          "Default length of CHAR if not specified is 1."
        ]
      },
      {
        id: "m2-l3",
        lessonNumber: 3,
        title: "Introduction to MySQL Monitor",
        subtitle: "Command Line Client and Vital Administration Commands",
        learningOutcomes: [
          "Connect to MySQL server using the command-line client as administrator.",
          "Execute vital administrative and inspection commands in MySQL Monitor."
        ],
        sections: [
          {
            title: "Connecting to MySQL Monitor",
            content: `The monitoring program is named \`mysql\` and is found in the directory with other MySQL programs. 
To start the monitor and connect as the MySQL administrator (root user), execute:
\`\`\`bash
mysql -u username -p
\`\`\`
You will then be prompted to enter your password.`
          },
          {
            title: "Vital MySQL Commands",
            content: `• \`USE Databasename;\` : Selects the active database to work with.
• \`SHOW DATABASES;\` : Lists all databases accessible by the MySQL server.
• \`SHOW TABLES;\` : Lists all tables in the currently selected database.
• \`SHOW COLUMNS FROM tablename;\` : Displays attributes, types, key data, NULL permission, and default values.
• \`SHOW INDEX FROM tablename;\` : Presents details of all indexes on the table, including the primary key.
• \`SHOW TABLE STATUS LIKE 'tablename'\\G;\` : Reports performance details and table statistics in vertical format.`
          }
        ],
        keyTakeaways: [
          "Connect with `mysql -u root -p`.",
          "Use `USE database_name;` to switch databases.",
          "Inspect tables with `SHOW TABLES;` and `SHOW COLUMNS FROM table;` or `DESCRIBE table;`."
        ],
        examTips: [
          "The command to view column structures and data types is `SHOW COLUMNS FROM tablename;` or `DESCRIBE tablename;`.",
          "The `\\G` delimiter at the end of a command formats output vertically."
        ]
      }
    ]
  },
  {
    id: "module-3",
    moduleNumber: 3,
    title: "Creation of Own Database",
    subtitle: "CRUD Operations, Table Definition, and SQL Command Classifications",
    description: "CRUD operations, creating tables in Access vs raw SQL, MySQL Server creation steps, and the classification of SQL commands into DDL, DQL, DML, and DCL.",
    lessons: [
      {
        id: "m3-l1",
        lessonNumber: 1,
        title: "CRUD in SQL and Other SQL Statements",
        subtitle: "SELECT, INSERT, UPDATE, DELETE, ALTER, DROP, and JOIN",
        learningOutcomes: [
          "Demonstrate proficiency in basic to intermediate SQL statements.",
          "Explain the purpose and hazards of UPDATE and DELETE without a WHERE clause.",
          "Contrast DROP and DELETE statements."
        ],
        sections: [
          {
            title: "CRUD Overview",
            content: `CRUD stands for Create, Read, Update, and Delete. SQL statements closely resemble English and are categorized into defining, manipulating, and controlling data.`
          },
          {
            title: "Core SQL Statements",
            content: `• SELECT: Retrieves data from one or more tables. Syntax:
\`\`\`sql
SELECT column1, column2 FROM table_name;
SELECT * FROM customers;
\`\`\`

• INSERT INTO: Adds new records (rows) into a table. Syntax:
\`\`\`sql
INSERT INTO customers (first_name, last_name, email)
VALUES ('John', 'Doe', 'john.doe@example.com');
\`\`\`

• UPDATE: Modifies existing records. CRITICAL: If WHERE is omitted, ALL rows in the table are updated! Syntax:
\`\`\`sql
UPDATE Employees SET Salary = 60000 WHERE EmployeeID = 101;
\`\`\`

• DELETE: Erases records from a table. CRITICAL: If WHERE is omitted, ALL records in the table will be deleted! Syntax:
\`\`\`sql
DELETE FROM customers WHERE customer_id = 1;
\`\`\`

• CREATE: Defines new database objects.
\`\`\`sql
CREATE DATABASE my_database;
CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100)
);
\`\`\`

• ALTER: Modifies the structure of an existing table without recreating it.
\`\`\`sql
ALTER TABLE customers ADD phone_number VARCHAR(20);
ALTER TABLE customers DROP COLUMN phone_number;
ALTER TABLE customers MODIFY COLUMN email VARCHAR(150);
\`\`\`

• DROP: Irreversibly eliminates whole database objects and structures (unlike DELETE which only removes records).
\`\`\`sql
DROP TABLE customers;
DROP DATABASE my_database;
\`\`\`

• JOIN: Combines rows from two or more tables based on related columns (INNER, LEFT, RIGHT, FULL, CROSS).`
          }
        ],
        keyTakeaways: [
          "CRUD: Create (INSERT), Read (SELECT), Update (UPDATE), Delete (DELETE).",
          "Omitting WHERE in UPDATE or DELETE affects the entire table.",
          "DROP deletes the entire table structure and data permanently; DELETE only removes rows."
        ],
        examTips: [
          "Crucial distinction: DELETE removes rows from a table; DROP destroys the table structure itself.",
          "ALTER TABLE commands: ADD, DROP COLUMN, MODIFY COLUMN."
        ]
      },
      {
        id: "m3-l2",
        lessonNumber: 2,
        title: "Creating a Database with SQL",
        subtitle: "Visual Tools (MS Access) vs Raw SQL & MySQL Server Workflow",
        learningOutcomes: [
          "Compare visual database creation with raw SQL scripting.",
          "Execute the 3 steps to create and verify a database and table in MySQL."
        ],
        sections: [
          {
            title: "MS Access vs Raw SQL",
            content: `In visual tools like MS Access, users navigate a graphical UI with query grids and automated checks. 

In raw SQL, you must write the entire table definition manually:
\`\`\`sql
CREATE TABLE INHERITANCESQL (
  PropositionID INTEGER,
  FirstName CHAR(16),
  LastName CHAR(20),
  City CHAR(30),
  State CHAR(2),
  Country CHAR(25),
  Phone CHAR(15),
  Relationship CHAR(30),
  BusinessProposal CHAR(60),
  CompanyOrDonation CHAR(1)
);
\`\`\`
Raw SQL requires deep grammatical knowledge because syntax mistakes prevent execution.`
          },
          {
            title: "MySQL Database Creation Workflow",
            content: `Step 1: Connect to MySQL Server:
\`\`\`bash
mysql -u username -p
\`\`\`

Step 2: Create and Switch to Database:
\`\`\`sql
CREATE DATABASE my_database;
USE my_database;
\`\`\`

Step 3: Create Table with Constraints:
\`\`\`sql
CREATE TABLE employees (
  employee_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE,
  hire_date DATE,
  department_id INT
);
\`\`\`

Verification Commands:
\`SHOW DATABASES;\` | \`SHOW TABLES;\` | \`DESCRIBE employees;\``
          }
        ],
        keyTakeaways: [
          "Raw SQL gives ultimate control across any DBMS engine.",
          "Always select database with `USE dbname;` before creating tables.",
          "Verify table structure with `DESCRIBE table_name;`."
        ],
        examTips: [
          "The command to view column definitions is `DESCRIBE tablename;`.",
          "AUTO_INCREMENT is used in MySQL for auto-generating unique surrogate primary keys."
        ]
      },
      {
        id: "m3-l3",
        lessonNumber: 3,
        title: "Understanding SQL Command Types",
        subtitle: "DDL, DQL, DML, DCL Classification and Core Concepts",
        learningOutcomes: [
          "Categorize SQL commands into DDL, DQL, DML, and DCL.",
          "Identify clauses of SELECT vs separate commands."
        ],
        sections: [
          {
            title: "The 4 Command Classifications",
            content: `SQL commands are divided into four main categories:

1. DDL (Data Definition Language):
Commands that define, alter, and delete database structures and schemas.
• Commands: CREATE, ALTER, DROP, TRUNCATE.

2. DQL (Data Query Language):
Used to fetch data from the database. Output is returned as a result set (temporary table).
• Command: SELECT.
• Note: Clauses like FROM, WHERE, GROUP BY, HAVING, ORDER BY, DISTINCT, and LIMIT are clauses of SELECT, NOT separate commands!

3. DML (Data Manipulation Language):
Used to manipulate data stored in tables.
• Commands: INSERT, UPDATE, DELETE.

4. DCL (Data Control Language):
Manages permissions, user rights, and access controls.
• Commands: GRANT, REVOKE.
• Example: \`GRANT SELECT, UPDATE ON employees TO user_name;\``
          }
        ],
        keyTakeaways: [
          "DDL = CREATE, ALTER, DROP, TRUNCATE (structure).",
          "DQL = SELECT (query). FROM, WHERE, ORDER BY are clauses, not commands.",
          "DML = INSERT, UPDATE, DELETE (data manipulation).",
          "DCL = GRANT, REVOKE (rights/permissions)."
        ],
        examTips: [
          "Common exam trick: 'Is WHERE a DQL command?' NO, it is a CLAUSE of the SELECT command.",
          "GRANT and REVOKE belong to DCL (Data Control Language)."
        ]
      }
    ]
  },
  {
    id: "module-4",
    moduleNumber: 4,
    title: "A Revisit in MySQL Query",
    subtitle: "SELECT, ORDER BY, WHERE, AND, OR, and Operator Precedence",
    description: "Deep dive into query expressions, clause evaluation order, sorting with ORDER BY, conditional filtering with WHERE, wildcards, and Boolean logic short-circuit evaluation.",
    lessons: [
      {
        id: "m4-l1",
        lessonNumber: 1,
        title: "MySQL SELECT Statement",
        subtitle: "Syntax, Delimiters, Case-Insensitivity, and Evaluation Order",
        learningOutcomes: [
          "Write syntactically correct SELECT statements.",
          "Explain the order in which MySQL evaluates the FROM and SELECT clauses."
        ],
        sections: [
          {
            title: "Syntax and Semantics",
            content: `The SELECT statement allows you to read data from one or more tables:
\`\`\`sql
SELECT select_list
FROM table_name;
\`\`\`
• Delimiter: The semicolon (;) specifies the end of a statement.
• Case-insensitivity: SQL keywords are case-insensitive (\`SELECT\` vs \`select\`), but uppercase is conventional for readability.
• Evaluation Order: When evaluating a SELECT statement, MySQL evaluates the **FROM clause first**, and then the **SELECT clause**!`
          }
        ],
        keyTakeaways: [
          "Semicolon is the statement delimiter.",
          "MySQL evaluates FROM first, then SELECT."
        ],
        examTips: [
          "Exam question: In what order does MySQL evaluate SELECT and FROM? Answer: FROM is evaluated FIRST, then SELECT."
        ]
      },
      {
        id: "m4-l2",
        lessonNumber: 2,
        title: "MySQL ORDER BY",
        subtitle: "Sorting Result Sets, ASC vs DESC, and Multi-Column Sorting",
        learningOutcomes: [
          "Sort query results using ASC (default) and DESC.",
          "Explain multi-column sorting behavior and evaluation order."
        ],
        sections: [
          {
            title: "ORDER BY Syntax and Defaults",
            content: `Without ORDER BY, rows in the result set can appear in arbitrary order.
\`\`\`sql
SELECT select_list FROM table_name ORDER BY column1 [ASC|DESC], column2 [ASC|DESC];
\`\`\`
• ASC: Ascending order (A to Z, smallest to largest). DEFAULT if omitted.
• DESC: Descending order (Z to A, largest to smallest).

Multi-column sorting:
\`\`\`sql
ORDER BY contactLastname DESC, contactFirstname ASC;
\`\`\`
First sorts by contactLastname in descending order; ties are then sorted by contactFirstname in ascending order.

Evaluation Order: The ORDER BY clause is always evaluated **AFTER the FROM and SELECT clauses**!`
          }
        ],
        keyTakeaways: [
          "Default sorting order is ASC (ascending).",
          "Multi-column sorting sorts by the first column, then breaks ties using subsequent columns.",
          "ORDER BY evaluates after FROM and SELECT."
        ],
        examTips: [
          "If ASC or DESC is omitted, MySQL defaults to ASC.",
          "ORDER BY is evaluated after FROM and SELECT."
        ]
      },
      {
        id: "m4-l3",
        lessonNumber: 3,
        title: "MySQL WHERE Clause",
        subtitle: "Filtering Conditions, Predicates, BETWEEN, and LIKE Wildcards",
        learningOutcomes: [
          "Filter rows using the WHERE clause and logical predicates.",
          "Apply BETWEEN and pattern matching with LIKE wildcards (% and _)."
        ],
        sections: [
          {
            title: "WHERE Clause & Evaluation Order",
            content: `The WHERE clause specifies search conditions.
• Predicate: A Boolean expression evaluating to TRUE, FALSE, or UNKNOWN.
• Evaluation Order: In a SELECT statement, the WHERE clause is evaluated **AFTER the FROM clause and BEFORE the SELECT clause**!

Operators:
• Equality: \`jobtitle = 'Sales Rep'\`
• BETWEEN: Inclusive range: \`officeCode BETWEEN 1 AND 3\`
• LIKE Wildcards:
  - \`%\` matches any string of zero or more characters.
  - \`_\` matches any single character.
  - Example: \`lastName LIKE '%son'\` matches all last names ending with 'son'.`
          }
        ],
        keyTakeaways: [
          "WHERE is evaluated AFTER FROM and BEFORE SELECT.",
          "BETWEEN low AND high is inclusive.",
          "% matches zero or more characters; _ matches exactly one character."
        ],
        examTips: [
          "Evaluation order: FROM -> WHERE -> SELECT -> ORDER BY.",
          "Wildcard distinction: % = multiple/zero chars; _ = single char."
        ]
      },
      {
        id: "m4-l4",
        lessonNumber: 4,
        title: "MySQL AND Operator",
        subtitle: "Logical Conjunction, Truth Table, and Short-Circuit Evaluation",
        learningOutcomes: [
          "Combine conditions with AND operator.",
          "Explain short-circuit evaluation with division by zero examples."
        ],
        sections: [
          {
            title: "AND Operator & Short-Circuiting",
            content: `The AND operator returns TRUE only if ALL expressions evaluate to TRUE. If any expression evaluates to FALSE, it returns FALSE.

Short-Circuit Evaluation:
MySQL stops evaluating remaining expressions whenever it can determine the result.
\`\`\`sql
SELECT 1 = 0 AND 1 / 0;
\`\`\`
Result: Returns \`0\` (false) without an error because \`1 = 0\` is FALSE, so MySQL never evaluates \`1 / 0\`!`
          }
        ],
        keyTakeaways: [
          "AND requires all conditions to be TRUE.",
          "Short-circuit evaluation prevents errors in subsequent expressions when an earlier condition is FALSE."
        ],
        examTips: [
          "Why doesn't `SELECT 1 = 0 AND 1 / 0;` fail with a division by zero error? Because MySQL uses short-circuit evaluation!"
        ]
      },
      {
        id: "m4-l5",
        lessonNumber: 5,
        title: "MySQL OR Operator & Precedence",
        subtitle: "Disjunction, Operator Precedence (AND before OR), and Parentheses",
        learningOutcomes: [
          "Apply the OR operator and evaluate expressions using operator precedence.",
          "Solve complex Boolean expressions containing AND and OR."
        ],
        sections: [
          {
            title: "OR Operator & Precedence Rules",
            content: `The OR operator returns TRUE if EITHER condition is TRUE.
Like AND, OR uses short-circuit evaluation:
\`\`\`sql
SELECT 1 = 1 OR 1 / 0; -- Returns 1 (true) without error!
\`\`\`

OPERATOR PRECEDENCE:
MySQL ALWAYS evaluates **AND operators BEFORE OR operators**!
Example:
\`\`\`sql
SELECT true OR false AND false;
\`\`\`
Evaluation steps:
1. MySQL evaluates AND first: \`false AND false\` = \`false\`
2. MySQL evaluates OR second: \`true OR false\` = \`true\` (1)
Result is 1 (TRUE)!

Grouping with Parentheses:
To override default precedence, use parentheses:
\`\`\`sql
WHERE (country = 'USA' OR country = 'France') AND creditlimit > 100000;
\`\`\``
          }
        ],
        keyTakeaways: [
          "AND has higher precedence than OR and is evaluated first.",
          "`true OR false AND false` evaluates to TRUE (1).",
          "Use parentheses to force OR evaluation before AND."
        ],
        examTips: [
          "Classic PUP exam question: What does `SELECT true OR false AND false;` output? Output is 1 (TRUE).",
          "Remember: AND is evaluated before OR."
        ]
      }
    ]
  },
  {
    id: "module-5",
    moduleNumber: 5,
    title: "Understanding SQL Joins with MySQL",
    subtitle: "INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN Simulation",
    description: "Combining relational tables, foreign key linkages, USING clauses, Venn diagram logic, identifying unmatched rows, and simulating FULL OUTER JOIN in MySQL.",
    lessons: [
      {
        id: "m5-l1",
        lessonNumber: 1,
        title: "Inner Join Clause",
        subtitle: "Matching Rows, ON vs USING Syntax, and GROUP BY Aggregations",
        learningOutcomes: [
          "Execute INNER JOIN queries to combine matching rows between tables.",
          "Use the USING(column_name) syntax when join column names match."
        ],
        sections: [
          {
            title: "INNER JOIN Mechanics",
            content: `An INNER JOIN matches each row in one table with rows in other tables based on a join condition. It includes a row in the result set ONLY if rows from both tables cause the join condition to evaluate to TRUE. If no match exists, the row is ignored.

Syntax:
\`\`\`sql
SELECT select_list
FROM t1
INNER JOIN t2 ON join_condition;
\`\`\`

The USING Syntax:
When joined columns have identical names in both tables, you can replace \`ON t1.col = t2.col\` with \`USING(col)\`:
\`\`\`sql
SELECT productCode, productName, textDescription
FROM products
INNER JOIN productlines USING (productline);
\`\`\`

INNER JOIN with GROUP BY:
\`\`\`sql
SELECT orders.orderNumber, status, SUM(quantityOrdered * priceEach) AS totalSales
FROM orders
INNER JOIN orderdetails ON orders.orderNumber = orderdetails.orderNumber
GROUP BY orders.orderNumber;
\`\`\``
          }
        ],
        keyTakeaways: [
          "INNER JOIN returns only rows that have matching values in both tables.",
          "USING(col) simplifies queries when joining columns share the exact same name.",
          "INNER JOIN is commonly combined with GROUP BY and SUM/COUNT aggregates."
        ],
        examTips: [
          "When can you use the USING clause? Only when the joining columns have the identical name in both tables."
        ]
      },
      {
        id: "m5-l2",
        lessonNumber: 2,
        title: "MySQL Left Join Clause",
        subtitle: "Left Outer Joins, NULL Handling, and Finding Unmatched Rows",
        learningOutcomes: [
          "Apply LEFT JOIN to include all rows from the left table.",
          "Construct queries to find unmatched rows using IS NULL."
        ],
        sections: [
          {
            title: "LEFT JOIN Mechanics",
            content: `A LEFT JOIN selects all data starting from the left table (t1). 
• If a row from t1 matches t2 based on join condition, columns from both are combined.
• If a row from t1 has NO match in t2, the columns of t2 are filled with **NULL**.

Syntax:
\`\`\`sql
SELECT select_list FROM t1 LEFT JOIN t2 ON join_condition;
\`\`\`

Finding Unmatched Rows (Crucial Pattern!):
To find rows in the left table that have NO corresponding records in the right table, add \`WHERE right_table.id IS NULL\`:
\`\`\`sql
SELECT c.customerNumber, c.customerName, o.orderNumber
FROM customers AS c
LEFT JOIN orders AS o ON c.customerNumber = o.customerNumber
WHERE o.orderNumber IS NULL;
\`\`\`
This query returns customers who have placed zero orders!`
          }
        ],
        keyTakeaways: [
          "LEFT JOIN preserves all rows from the left table.",
          "Unmatched right table columns become NULL.",
          "Pattern to find unmatched records: `WHERE right_table.key IS NULL`."
        ],
        examTips: [
          "Finding records with NO match: Always use LEFT JOIN combined with `WHERE right_table.pk IS NULL`."
        ]
      },
      {
        id: "m5-l3",
        lessonNumber: 3,
        title: "MySQL Right Join Clause",
        subtitle: "Reversed Joins, RIGHT OUTER JOIN Synonym, and FULL OUTER JOIN in MySQL",
        learningOutcomes: [
          "Apply RIGHT JOIN to preserve all rows from the right table.",
          "Explain how FULL OUTER JOIN is achieved in MySQL using UNION."
        ],
        sections: [
          {
            title: "RIGHT JOIN Mechanics",
            content: `The RIGHT JOIN reverses table treatment: it starts selecting all data from the right table (t2) and matches rows in the left table (t1).
• If a row from t2 has no match in t1, columns from t1 will contain **NULL**.
• Note: \`RIGHT OUTER JOIN\` is a synonym for \`RIGHT JOIN\`.

Example: Finding employees who do not manage any customers:
\`\`\`sql
SELECT employeeNumber, customerNumber
FROM customers
RIGHT JOIN employees ON salesRepEmployeeNumber = employeeNumber
WHERE customerNumber IS NULL
ORDER BY employeeNumber;
\`\`\``
          },
          {
            title: "FULL OUTER JOIN in MySQL",
            content: `A FULL OUTER JOIN returns all rows when there is a match in either table. If there is no match, the missing side contains NULL.

CRITICAL MYSQL FACT:
MySQL **DOES NOT natively support** the \`FULL OUTER JOIN\` keyword!
To execute a FULL OUTER JOIN in MySQL, you combine a \`LEFT JOIN\` and a \`RIGHT JOIN\` using \`UNION\`:
\`\`\`sql
SELECT m.member_id, m.name, c.committee_id, c.name
FROM members m
LEFT JOIN committees c USING(name)
UNION
SELECT m.member_id, m.name, c.committee_id, c.name
FROM members m
RIGHT JOIN committees c USING(name);
\`\`\``
          }
        ],
        keyTakeaways: [
          "RIGHT JOIN returns all rows from the right table, filling left columns with NULL if unmatched.",
          "RIGHT OUTER JOIN is synonymous with RIGHT JOIN.",
          "MySQL lacks a native FULL OUTER JOIN statement; it is achieved using LEFT JOIN UNION RIGHT JOIN."
        ],
        examTips: [
          "High-yield exam question: Does MySQL support the FULL OUTER JOIN keyword? Answer: NO, MySQL simulates it using a UNION of LEFT JOIN and RIGHT JOIN."
        ]
      }
    ]
  }
];
