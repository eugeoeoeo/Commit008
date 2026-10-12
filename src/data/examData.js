// 100-Item Practice Exam & Major Laboratory Exam
// Strictly verbatim adherence to Florencio V. Contreras Jr. instructional material.
// Part 1: 40 MCQs (balanced distractors)
// Part 2: 30 Identification Items (verbatim definitions)
// Part 3: 30 True or False Items
// Part 4: Major Laboratory Examination (5-6 tables ERD with relationship lines, 6-8 columns output, required clauses, NO hints)

export const EXAM_DATA = {
  // PART 1: 40 Multiple Choice Questions
  mcq: [
    {
      id: "exam-mcq-1",
      number: 1,
      question: "According to the instructional material, who pioneered the concept of the relational database at IBM in 1970?",
      options: [
        "Donald D. Chamberlin",
        "Edgar Frank Codd",
        "Raymond F. Boyce",
        "Florencio V. Contreras Jr."
      ],
      correctAnswer: 1,
      explanation: "From Module 1, Lesson 3: 'The concept of a relational database is elaborated as a pivotal development in data management, pioneered by Edgar Frank Codd from IBM.'"
    },
    {
      id: "exam-mcq-2",
      number: 2,
      question: "Who developed SQL in the early 1970s at IBM?",
      options: [
        "Edgar Frank Codd and Peter Chen",
        "Donald D. Chamberlin and Raymond F. Boyce",
        "Dennis Ritchie and Ken Thompson",
        "Bjarne Stroustrup and James Gosling"
      ],
      correctAnswer: 1,
      explanation: "From Module 2, Lesson 1: 'Developed in the early 1970s at IBM by Donald D. Chamberlin and Raymond F. Boyce, SQL became the standard for database query languages...'"
    },
    {
      id: "exam-mcq-3",
      number: 3,
      question: "What is the definition of a database in the instructional material?",
      options: [
        "An organized collection of related data which represents some aspect of the real world and that is stored and accessed electronically.",
        "A proprietary software application that renders interactive HTML5 graphs and client-side charts.",
        "A sequence of precompiled binary instructions executed repeatedly through an infinite CPU cycle.",
        "A hardware filing cabinet stored in a temperature-controlled university server room."
      ],
      correctAnswer: 0,
      explanation: "From Module 1, Lesson 1: 'A database is an organized collection of related data which represents some aspect of the real world and that is stored and accessed electronically.'"
    },
    {
      id: "exam-mcq-4",
      number: 4,
      question: "Which of the following database categories is described as being the smallest and put away on the client's PC?",
      options: [
        "Personal information bases",
        "Group data sets",
        "Enterprise version data sets",
        "Distributed cloud repositories"
      ],
      correctAnswer: 0,
      explanation: "From Module 1, Lesson 1: 'Personal information bases are the littlest. They are put away on the client's PC and are described by a fundamental information structure.'"
    },
    {
      id: "exam-mcq-5",
      number: 5,
      question: "What schema design technique splits a large table into smaller tables when any of its attributes have redundancy in values?",
      options: [
        "Virtualization",
        "Normalization",
        "Serialization",
        "Centralization"
      ],
      correctAnswer: 1,
      explanation: "From Module 1, Lesson 2: 'DBMS optimizes the organization of data by following a database schema design technique called normalization, which splits a large table into smaller tables when any of its attributes have redundancy in values.'"
    },
    {
      id: "exam-mcq-6",
      number: 6,
      question: "Which statement is true regarding the Primary Key in a relational table?",
      options: [
        "There can be multiple primary keys in a table, and it can be null.",
        "There can only be one primary key in a table, and it can't be null.",
        "A primary key can only be created on columns of type VARCHAR.",
        "A primary key is identical in behavior to a foreign key in every execution."
      ],
      correctAnswer: 1,
      explanation: "From Module 1, Lesson 1: 'There can only be one primary key in a table, and it can't be null.'"
    },
    {
      id: "exam-mcq-7",
      number: 7,
      question: "Which statement is true regarding a Foreign Key in a relational table?",
      options: [
        "It can never be null and there can only be one foreign key in a table.",
        "It refers to the primary key of another table, can be null, and there can be more than one in a table.",
        "It automatically indexes all columns and prevents any new rows from being added.",
        "It must always match the primary key of the very same table."
      ],
      correctAnswer: 1,
      explanation: "From Module 1, Lesson 1: 'A foreign key is a column or a set of columns in a table that refers to the primary key of another table... A foreign key can be null and there can be more than one foreign key in the table.'"
    },
    {
      id: "exam-mcq-8",
      number: 8,
      question: "Why is SQL described as a non-procedural language compared to Java or C?",
      options: [
        "Because it compiles directly into hardware microcode before running.",
        "Because you instruct it what should be finished, and the DBMS determines the most efficient way to achieve it.",
        "Because it cannot perform any arithmetic operations on numeric columns.",
        "Because it was developed before microprocessors were invented."
      ],
      correctAnswer: 1,
      explanation: "From Module 2, Lesson 1: 'SQL, notwithstanding, is a non-procedural language, which implies that you should simply teach it what should be finished... The information base administration framework is the segment accountable for settling on the choice concerning the most productive way to deal with accomplish your objective.'"
    },
    {
      id: "exam-mcq-9",
      number: 9,
      question: "What is the storage range of TINYINT when unsigned?",
      options: [
        "-128 to 127",
        "0 to 255",
        "0 to 65535",
        "-32768 to 32767"
      ],
      correctAnswer: 1,
      explanation: "From Module 2, Lesson 2: 'Specifically, TINYINT can hold integer values ranging from 0 to 255 when unsigned, and from -128 to 127 when signed.'"
    },
    {
      id: "exam-mcq-10",
      number: 10,
      question: "What is the default length of CHAR if the length n is not decided/specified?",
      options: [
        "One (1)",
        "Ten (10)",
        "Two hundred fifty-five (255)",
        "Zero (0)"
      ],
      correctAnswer: 0,
      explanation: "From Module 2, Lesson 2: 'Remember that if you don't decide the number of characters, the default is set to one.'"
    },
    {
      id: "exam-mcq-11",
      number: 11,
      question: "How does CHAR differ from VARCHAR when storing strings with fewer characters than the declared maximum?",
      options: [
        "CHAR throws a runtime exception, while VARCHAR converts characters to ASCII integers.",
        "CHAR fills in missing characters via void (clear) spaces, whereas VARCHAR does not pad spaces.",
        "CHAR doubles the storage footprint, while VARCHAR encrypts the trailing bytes.",
        "CHAR converts all text to uppercase, while VARCHAR preserves casing."
      ],
      correctAnswer: 1,
      explanation: "From Module 2, Lesson 2: 'SQL fills in any \"missing\" characters via consequently composing in void spaces... CHARACTER VARYING or VARCHAR(n) ... permits you to build up a scope of characters ... and hence keep away from the vacant spaces.'"
    },
    {
      id: "exam-mcq-12",
      number: 12,
      question: "What is the character capacity of the TEXT data type in systems like MySQL according to the text?",
      options: [
        "Up to 255 characters",
        "Up to 65,535 characters",
        "Up to 16,777,215 characters",
        "Up to 4,294,967,295 characters"
      ],
      correctAnswer: 1,
      explanation: "From Module 2, Lesson 2: '...it generally allows for a substantial amount of data, often up to 65,535 characters in systems like MySQL.'"
    },
    {
      id: "exam-mcq-13",
      number: 13,
      question: "Which data type is used for large binary data such as images or audio files, and requires a finder to establish identity when relocating?",
      options: [
        "VARCHAR",
        "BLOB (Binary Large Object)",
        "DECIMAL",
        "ENUM"
      ],
      correctAnswer: 1,
      explanation: "From Module 2, Lesson 2: 'BINARY LARGE OBJECT or BLOB: Binary Large Object, used for large binary data such as images or files... you can't relocate a parallel huge article information type starting with one data set then onto the next without utilizing a finder.'"
    },
    {
      id: "exam-mcq-14",
      number: 14,
      question: "What is the complete length in spaces of the DATE data type (format YYYY-MM-DD)?",
      options: [
        "Eight (8) spaces",
        "Ten (10) spaces",
        "Twelve (12) spaces",
        "Fourteen (14) spaces"
      ],
      correctAnswer: 1,
      explanation: "From Module 2, Lesson 2: 'Finally, you should remember that the complete length of the date is truth be told ten spaces because the qualities are isolated by a scramble, as so: 1990-12-03.'"
    },
    {
      id: "exam-mcq-15",
      number: 15,
      question: "How does ENUM differ from SET in SQL?",
      options: [
        "ENUM stores floating points; SET stores whole integers.",
        "ENUM allows only one value chosen from a list; SET can store multiple values simultaneously.",
        "ENUM is unbounded; SET is restricted to exactly three elements.",
        "ENUM stores binary images; SET stores character text strings."
      ],
      correctAnswer: 1,
      explanation: "From Module 2, Lesson 2: 'ENUM stores a single value from a list... while SET can store multiple values, useful for tags or attributes.'"
    },
    {
      id: "exam-mcq-16",
      number: 16,
      question: "Which of the following is true regarding Null values in SQL?",
      options: [
        "A null value is strictly equal to zero (0).",
        "A null value is strictly equal to an empty string ('').",
        "A null value indicates the absence of data, is not equal to zero or an empty string, and must be tested using IS NULL.",
        "A null value can be evaluated for equality using the standard = comparison operator."
      ],
      correctAnswer: 2,
      explanation: "From Module 2, Lesson 2: 'Unlike other data types, a null value is not equivalent to zero, an empty string, or any other default value; it is a distinct marker indicating the lack of a value... specific operators such as IS NULL and IS NOT NULL to check for null values.'"
    },
    {
      id: "exam-mcq-17",
      number: 17,
      question: "Which command in MySQL Monitor displays the attributes, types, key data, and NULL permission for a specific table?",
      options: [
        "SHOW DATABASES;",
        "SHOW COLUMNS FROM tablename;",
        "SHOW USERS FROM tablename;",
        "SHOW STATUS tablename;"
      ],
      correctAnswer: 1,
      explanation: "From Module 2, Lesson 3: 'SHOW COLUMNS FROM tablename: Shows the attributes, types of attributes, key data, whether or not or not NULL is allowable, defaults, and various knowledge for a table.'"
    },
    {
      id: "exam-mcq-18",
      number: 18,
      question: "What is the consequence of executing an UPDATE statement without a WHERE clause?",
      options: [
        "MySQL aborts the execution with an error.",
        "Only the active cursor row is updated.",
        "All rows in the table will be updated.",
        "The table columns are dropped permanently."
      ],
      correctAnswer: 2,
      explanation: "From Module 3, Lesson 1: 'WHERE: Specifies which rows should be updated based on a condition. If omitted, all rows in the table will be updated.'"
    },
    {
      id: "exam-mcq-19",
      number: 19,
      question: "What is the critical distinction between DROP and DELETE in SQL?",
      options: [
        "DELETE destroys table structures permanently; DROP only deletes rows.",
        "DROP eliminates whole database construction components like tables or databases; DELETE simply removes information/rows, not constructions.",
        "DROP works exclusively on views; DELETE works exclusively on indexes.",
        "DROP requires a WHERE clause; DELETE forbids the WHERE clause."
      ],
      correctAnswer: 1,
      explanation: "From Module 3, Lesson 1: 'Remember that utilizing the DELETE proclamation won't erase a table or data set. That assertion is simply used to eliminate information, not constructions. DROP deletes existing database objects such as tables, views, indexes, databases...'"
    },
    {
      id: "exam-mcq-20",
      number: 20,
      question: "Which category of SQL commands does the SELECT command belong to?",
      options: [
        "DDL (Data Definition Language)",
        "DQL (Data Query Language)",
        "DML (Data Manipulation Language)",
        "DCL (Data Control Language)"
      ],
      correctAnswer: 1,
      explanation: "From Module 3, Lesson 3: '2. DQL - Data Query Language: DQL is used to fetch data from the database. The main command is SELECT...'"
    },
    {
      id: "exam-mcq-21",
      number: 21,
      question: "Which of the following are categorized under DDL (Data Definition Language)?",
      options: [
        "SELECT, WHERE, FROM",
        "INSERT, UPDATE, DELETE",
        "CREATE, ALTER, DROP, TRUNCATE",
        "GRANT, REVOKE"
      ],
      correctAnswer: 2,
      explanation: "From Module 3, Lesson 3: 'DDL (Data Definition Language) consists of SQL commands that can be used for defining, altering and deleting database structures... CREATE, ALTER, DROP, TRUNCATE.'"
    },
    {
      id: "exam-mcq-22",
      number: 22,
      question: "Which category do GRANT and REVOKE belong to?",
      options: [
        "DCL (Data Control Language)",
        "DQL (Data Query Language)",
        "DML (Data Manipulation Language)",
        "TCL (Transaction Control Language)"
      ],
      correctAnswer: 0,
      explanation: "From Module 3, Lesson 3: '4. DCL - Data Control Language: DCL includes commands such as GRANT and REVOKE which mainly deal with the rights, permissions and other controls of the database system.'"
    },
    {
      id: "exam-mcq-23",
      number: 23,
      question: "When evaluating a SELECT statement, in what order does MySQL evaluate the clauses?",
      options: [
        "MySQL evaluates SELECT first, then FROM.",
        "MySQL evaluates FROM first, then SELECT.",
        "MySQL evaluates both simultaneously.",
        "MySQL evaluates ORDER BY before FROM."
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 1: 'When evaluating the SELECT statement, MySQL evaluates the FROM clause first and then the SELECT clause.'"
    },
    {
      id: "exam-mcq-24",
      number: 24,
      question: "In MySQL, what is the default sorting direction in an ORDER BY clause if not explicitly specified?",
      options: [
        "DESC",
        "ASC",
        "RANDOM",
        "INDEX_ORDER"
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 2: 'By default, the ORDER BY clause uses ASC if you don't explicitly specify any option.'"
    },
    {
      id: "exam-mcq-25",
      number: 25,
      question: "In what order is the ORDER BY clause evaluated in a query?",
      options: [
        "Always before the FROM clause",
        "Always after the FROM and SELECT clause",
        "Between the FROM and WHERE clauses",
        "Immediately before table indexing"
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 2: 'Note that the ORDER BY clause is always evaluated after the FROM and SELECT clause.'"
    },
    {
      id: "exam-mcq-26",
      number: 26,
      question: "In what order is the WHERE clause evaluated relative to FROM and SELECT?",
      options: [
        "Evaluated after the FROM clause and before the SELECT clause.",
        "Evaluated after the SELECT clause and after the ORDER BY clause.",
        "Evaluated before the FROM clause is parsed.",
        "Evaluated simultaneously with the client response."
      ],
      correctAnswer: 0,
      explanation: "From Module 4, Lesson 3: 'In the SELECT statement, the WHERE clause is evaluated after the FROM clause and before the SELECT clause.'"
    },
    {
      id: "exam-mcq-27",
      number: 27,
      question: "In the LIKE operator, what does the '%' wildcard match?",
      options: [
        "Exactly one single character",
        "Any string of zero or more characters",
        "Any single digit from 0 to 9",
        "Whitespace characters only"
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 3: 'The % wildcard matches any string of zero or more characters while the _ wildcard matches any single character.'"
    },
    {
      id: "exam-mcq-28",
      number: 28,
      question: "In the LIKE operator, what does the '_' wildcard match?",
      options: [
        "Any string of zero or more characters",
        "Any single character",
        "Punctuation characters only",
        "Trailing blank spaces"
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 3: '...while the _ wildcard matches any single character.'"
    },
    {
      id: "exam-mcq-29",
      number: 29,
      question: "What is short-circuit evaluation in MySQL boolean expressions?",
      options: [
        "Terminating a query when memory is full.",
        "Stopping evaluation of remaining parts of an expression whenever the result can already be determined.",
        "Skipping index scans when queries have no WHERE clause.",
        "Executing expressions in reverse chronological order."
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 4: 'When evaluating an expression that has the AND operator, MySQL stops evaluating the remaining parts of the expression whenever it can determine the result. This function is called short-circuit evaluation.'"
    },
    {
      id: "exam-mcq-30",
      number: 30,
      question: "What does the query 'SELECT 1 = 0 AND 1 / 0;' return in MySQL?",
      options: [
        "Division by zero error",
        "0",
        "1",
        "NULL"
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 4: 'SELECT 1 = 0 AND 1 / 0; Result: 0 (because 1=0 is false, MySQL stops evaluating).'"
    },
    {
      id: "exam-mcq-31",
      number: 31,
      question: "What does the query 'SELECT 1 = 1 OR 1 / 0;' return in MySQL?",
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
      id: "exam-mcq-32",
      number: 32,
      question: "In operator precedence, which logical operator does MySQL evaluate first when expressions contain both AND and OR without parentheses?",
      options: [
        "MySQL evaluates OR before AND.",
        "MySQL evaluates AND before OR.",
        "MySQL evaluates them strictly left to right.",
        "MySQL evaluates based on alphabetical order of column names."
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 5: 'MySQL always evaluates the OR operators after the AND operators. This is called operator precedence... MySQL evaluates the operator with higher precedence first.'"
    },
    {
      id: "exam-mcq-33",
      number: 33,
      question: "What is the result of 'SELECT true OR false AND false;' in MySQL?",
      options: [
        "0 (false)",
        "1 (true)",
        "NULL",
        "Compilation error"
      ],
      correctAnswer: 1,
      explanation: "From Module 4, Lesson 5: 'First, MySQL evaluates the AND operator (false AND false = false). Second, MySQL evaluates the OR operator (true OR false = true -> 1).'"
    },
    {
      id: "exam-mcq-34",
      number: 34,
      question: "When can you use the USING clause instead of ON in a JOIN statement?",
      options: [
        "When the tables are stored in different database engines.",
        "When the joined columns in both tables have the exact same name.",
        "When joining more than three tables.",
        "When the join condition involves inequalities (< or >)."
      ],
      correctAnswer: 1,
      explanation: "From Module 5, Lesson 1: 'Because the joined columns of both tables have the same name productline, you can use the USING syntax...'"
    },
    {
      id: "exam-mcq-35",
      number: 35,
      question: "What does a LEFT JOIN produce for right table columns when there is no matching row in the right table?",
      options: [
        "Zero (0)",
        "Empty string ('')",
        "NULL",
        "Default auto-increment integer"
      ],
      correctAnswer: 2,
      explanation: "From Module 5, Lesson 2: 'In case there is no matching rows from the right table found, NULLs are used for columns of the row from the right table in the final result set.'"
    },
    {
      id: "exam-mcq-36",
      number: 36,
      question: "Which query pattern finds rows in the left table that have NO matching rows in the right table?",
      options: [
        "LEFT JOIN with WHERE right_table.key IS NULL",
        "INNER JOIN with WHERE right_table.key IS NOT NULL",
        "RIGHT JOIN with WHERE left_table.key > 0",
        "CROSS JOIN with WHERE right_table.key IS NOT NULL"
      ],
      correctAnswer: 0,
      explanation: "From Module 5, Lesson 2: 'Generally, this query pattern can find rows in the left table that does not have corresponding rows in the right table... WHERE c.committee_id IS NULL;'"
    },
    {
      id: "exam-mcq-37",
      number: 37,
      question: "Which of the following is a synonym for RIGHT JOIN according to the text?",
      options: [
        "RIGHT INNER JOIN",
        "RIGHT OUTER JOIN",
        "NATURAL RIGHT JOIN",
        "COMPLETE RIGHT JOIN"
      ],
      correctAnswer: 1,
      explanation: "From Module 5, Lesson 3: 'Note that the RIGHT OUTER JOIN is a synonym for RIGHT JOIN'"
    },
    {
      id: "exam-mcq-38",
      number: 38,
      question: "How is a FULL OUTER JOIN achieved in MySQL?",
      options: [
        "Using the native MySQL keyword `FULL OUTER JOIN`.",
        "Using a UNION of a LEFT JOIN and a RIGHT JOIN.",
        "By setting the server configuration flag `enable_outer_join=true`.",
        "Using an INNER JOIN with a HAVING clause."
      ],
      correctAnswer: 1,
      explanation: "From Module 5 Summary & Joins guide: MySQL does not natively support FULL OUTER JOIN syntax; it is achieved using a UNION of LEFT JOIN and RIGHT JOIN."
    },
    {
      id: "exam-mcq-39",
      number: 39,
      question: "Which early DBMS model organizes data in a graph-like structure allowing multiple parent-child relationships?",
      options: [
        "Hierarchical DBMS",
        "Network DBMS",
        "Relational DBMS",
        "Flat File System"
      ],
      correctAnswer: 1,
      explanation: "From Module 1, Lesson 3: 'Network DBMS, on the other hand, extends the hierarchical model by allowing multiple parent-child relationships, forming a graph-like structure.'"
    },
    {
      id: "exam-mcq-40",
      number: 40,
      question: "What is an example of a Document-Oriented NoSQL database mentioned in the text?",
      options: [
        "MongoDB and CouchDB",
        "Redis and DynamoDB",
        "Cassandra and HBase",
        "Neo4j and ArangoDB"
      ],
      correctAnswer: 0,
      explanation: "From Module 1, Lesson 3: 'Document-Oriented: Stores data as documents (e.g., MongoDB, CouchDB).'"
    }
  ],

  // PART 2: 30 Identification Items (Exact verbatim concepts)
  identification: [
    {
      id: "exam-id-1",
      number: 41,
      question: "The standardized programming language developed in the early 1970s at IBM used for managing and manipulating relational databases.",
      correctAnswer: "SQL",
      acceptedAnswers: ["sql", "structured query language", "SQL"],
      explanation: "From Module 2, Lesson 1: 'SQL, or Structured Query Language, is a standardized programming language used for managing and manipulating relational databases.'"
    },
    {
      id: "exam-id-2",
      number: 42,
      question: "The database pioneer from IBM who introduced the relational database model in 1970.",
      correctAnswer: "Edgar Frank Codd",
      acceptedAnswers: ["edgar frank codd", "edgar f codd", "e.f. codd", "ef codd", "codd"],
      explanation: "From Module 1, Lesson 3: '...pioneered by Edgar Frank Codd from IBM.'"
    },
    {
      id: "exam-id-3",
      number: 43,
      question: "The two individuals at IBM who developed SQL in the early 1970s.",
      correctAnswer: "Donald D. Chamberlin and Raymond F. Boyce",
      acceptedAnswers: ["donald d. chamberlin and raymond f. boyce", "donald chamberlin and raymond boyce", "chamberlin and boyce"],
      explanation: "From Module 2, Lesson 1: 'Developed in the early 1970s at IBM by Donald D. Chamberlin and Raymond F. Boyce...'"
    },
    {
      id: "exam-id-4",
      number: 44,
      question: "The schema design technique that splits a large table into smaller tables when any of its attributes have redundancy in values.",
      correctAnswer: "Normalization",
      acceptedAnswers: ["normalization", "normalisation"],
      explanation: "From Module 1, Lesson 2: '...following a database schema design technique called normalization...'"
    },
    {
      id: "exam-id-5",
      number: 45,
      question: "The unique identifier for each row in a table that cannot be null.",
      correctAnswer: "Primary Key",
      acceptedAnswers: ["primary key", "pk"],
      explanation: "From Module 1, Lesson 1: 'Primary Key: It is the unique identifier for each row in a table. There can only be one primary key in a table, and it can't be null.'"
    },
    {
      id: "exam-id-6",
      number: 46,
      question: "A column or set of columns in a table that refers to the primary key of another table, establishing a relationship.",
      correctAnswer: "Foreign Key",
      acceptedAnswers: ["foreign key", "fk"],
      explanation: "From Module 1, Lesson 1: 'Foreign Key: A foreign key is a column or a set of columns in a table that refers to the primary key of another table.'"
    },
    {
      id: "exam-id-7",
      number: 47,
      question: "The repository where metadata is held that describes the segments of a database, tables, rows, and constraints.",
      correctAnswer: "Data Dictionary",
      acceptedAnswers: ["data dictionary", "information word reference"],
      explanation: "From Module 1, Lesson 1: 'The metadata is held inside what's known as an information word reference [data dictionary].'"
    },
    {
      id: "exam-id-8",
      number: 48,
      question: "The category of database management systems that stands for 'Not Only SQL'.",
      correctAnswer: "NoSQL",
      acceptedAnswers: ["nosql", "not only sql"],
      explanation: "From Module 1, Lesson 3: 'NoSQL, which stands for \"Not Only SQL\"...'"
    },
    {
      id: "exam-id-9",
      number: 49,
      question: "The early DBMS model that organizes data in a tree-like structure with a single parent and multiple children, exemplified by IBM IMS.",
      correctAnswer: "Hierarchical DBMS",
      acceptedAnswers: ["hierarchical dbms", "hierarchical database", "hierarchical"],
      explanation: "From Module 1, Lesson 3: 'Hierarchical DBMS organizes data in a tree-like structure where each record (node) has a single parent and multiple children...'"
    },
    {
      id: "exam-id-10",
      number: 50,
      question: "The early DBMS model that allows multiple parent-child relationships forming a graph-like structure, exemplified by IDMS.",
      correctAnswer: "Network DBMS",
      acceptedAnswers: ["network dbms", "network database", "network"],
      explanation: "From Module 1, Lesson 3: 'Network DBMS, on the other hand, extends the hierarchical model by allowing multiple parent-child relationships, forming a graph-like structure.'"
    },
    {
      id: "exam-id-11",
      number: 51,
      question: "The four properties ensured by Transaction Management in a DBMS.",
      correctAnswer: "ACID",
      acceptedAnswers: ["acid", "acid properties", "atomicity, consistency, isolation, durability"],
      explanation: "From Module 1, Lesson 2: '...ensures that transactions are processed reliably and adhere to ACID properties (Atomicity, Consistency, Isolation, Durability).'"
    },
    {
      id: "exam-id-12",
      number: 52,
      question: "In relational theory, what is another term for a horizontal row in a table?",
      correctAnswer: "Tuple",
      acceptedAnswers: ["tuple", "record", "tuple or record"],
      explanation: "From Module 1, Lesson 1: 'Row: Also known as a tuple or record.'"
    },
    {
      id: "exam-id-13",
      number: 53,
      question: "In relational theory, what is another term for a vertical column in a table?",
      correctAnswer: "Field",
      acceptedAnswers: ["field", "attribute", "field or attribute", "fields", "attributes"],
      explanation: "From Module 1, Lesson 1: 'Columns: Also known as fields or attributes.'"
    },
    {
      id: "exam-id-14",
      number: 54,
      question: "The assortment of permitted values that a column or trait can have in a relational table.",
      correctAnswer: "Domain",
      acceptedAnswers: ["domain"],
      explanation: "From Module 1, Lesson 3: 'Domain: Each table segment has a trait that includes various qualities. The assortment of these qualities addresses the space [domain] of that trait.'"
    },
    {
      id: "exam-id-15",
      number: 55,
      question: "The distinct marker in SQL indicating the absence of data, which is neither zero nor an empty string.",
      correctAnswer: "Null",
      acceptedAnswers: ["null", "null value", "null values"],
      explanation: "From Module 2, Lesson 2: 'Null values in SQL represent the absence of data in a column... a distinct marker indicating the lack of a value.'"
    },
    {
      id: "exam-id-16",
      number: 56,
      question: "The fixed-length character string data type that automatically pads missing characters with void spaces.",
      correctAnswer: "CHAR",
      acceptedAnswers: ["char", "character"],
      explanation: "From Module 2, Lesson 2: 'CHARACTER or CHAR(n): Fixed-length character string with a length of n characters... SQL fills in any \"missing\" characters via consequently composing in void spaces.'"
    },
    {
      id: "exam-id-17",
      number: 57,
      question: "The variable-length character string data type that does not pad missing characters with spaces.",
      correctAnswer: "VARCHAR",
      acceptedAnswers: ["varchar", "character varying"],
      explanation: "From Module 2, Lesson 2: 'CHARACTER VARYING or VARCHAR(n): Variable-length character string... keep away from the vacant spaces.'"
    },
    {
      id: "exam-id-18",
      number: 58,
      question: "The binary data type used for storing large multimedia objects such as images or audio files.",
      correctAnswer: "BLOB",
      acceptedAnswers: ["blob", "binary large object"],
      explanation: "From Module 2, Lesson 2: 'BINARY LARGE OBJECT or BLOB: Binary Large Object, used for large binary data such as images or files.'"
    },
    {
      id: "exam-id-19",
      number: 59,
      question: "The specialized data type in SQL designed to store one single value chosen from a predefined list of permitted values.",
      correctAnswer: "ENUM",
      acceptedAnswers: ["enum", "enumerated"],
      explanation: "From Module 2, Lesson 2: 'ENUM: Enumerated type, a string object with a value chosen from a list of permitted values.'"
    },
    {
      id: "exam-id-20",
      number: 60,
      question: "The specialized data type that can store multiple values simultaneously from a predefined list, stored internally as a bitfield.",
      correctAnswer: "SET",
      acceptedAnswers: ["set"],
      explanation: "From Module 2, Lesson 2: 'SET: Similar to ENUM, but can store multiple values from a list of permitted values... stored as a single bit within a bitfield.'"
    },
    {
      id: "exam-id-21",
      number: 61,
      question: "The character used in MySQL as a statement delimiter to specify the end of an individual statement.",
      correctAnswer: ";",
      acceptedAnswers: [";", "semicolon", "; (semicolon)"],
      explanation: "From Module 4, Lesson 1: 'The semicolon ; is the statement delimiter. It specifies the end of a statement.'"
    },
    {
      id: "exam-id-22",
      number: 62,
      question: "The category of SQL commands responsible for defining, altering, and dropping database structures like tables and schemas.",
      correctAnswer: "DDL",
      acceptedAnswers: ["ddl", "data definition language"],
      explanation: "From Module 3, Lesson 3: 'DDL (Data Definition Language) consists of SQL commands that can be used for defining, altering and deleting database structures...'"
    },
    {
      id: "exam-id-23",
      number: 63,
      question: "The single command that constitutes DQL (Data Query Language).",
      correctAnswer: "SELECT",
      acceptedAnswers: ["select"],
      explanation: "From Module 3, Lesson 3: 'Note: DQL has only one command, SELECT.'"
    },
    {
      id: "exam-id-24",
      number: 64,
      question: "The category of SQL commands that includes INSERT, UPDATE, and DELETE used to manipulate stored data.",
      correctAnswer: "DML",
      acceptedAnswers: ["dml", "data manipulation language"],
      explanation: "From Module 3, Lesson 3: 'DML commands are used to manipulate the data stored in database tables... insert new records, update existing ones, delete unwanted data...'"
    },
    {
      id: "exam-id-25",
      number: 65,
      question: "The category of SQL commands that includes GRANT and REVOKE for controlling user rights and permissions.",
      correctAnswer: "DCL",
      acceptedAnswers: ["dcl", "data control language"],
      explanation: "From Module 3, Lesson 3: 'DCL (Data Control Language) includes commands such as GRANT and REVOKE...'"
    },
    {
      id: "exam-id-26",
      number: 66,
      question: "The clause added to a SELECT statement to sort the retrieved result set in ascending or descending order.",
      correctAnswer: "ORDER BY",
      acceptedAnswers: ["order by", "order by clause"],
      explanation: "From Module 4, Lesson 2: 'To sort the result set, you add the ORDER BY clause to the SELECT statement.'"
    },
    {
      id: "exam-id-27",
      number: 67,
      question: "The clause in a SELECT statement used to specify search conditions and filter rows.",
      correctAnswer: "WHERE",
      acceptedAnswers: ["where", "where clause"],
      explanation: "From Module 4, Lesson 3: 'The WHERE clause allows you to specify a search condition for the rows returned by a query.'"
    },
    {
      id: "exam-id-28",
      number: 68,
      question: "The feature where MySQL stops evaluating remaining boolean conditions whenever the final result can already be determined.",
      correctAnswer: "Short-circuit evaluation",
      acceptedAnswers: ["short-circuit evaluation", "short circuit evaluation", "short circuit"],
      explanation: "From Module 4, Lesson 4: '...MySQL stops evaluating the remaining parts of the expression whenever it can determine the result. This function is called short-circuit evaluation.'"
    },
    {
      id: "exam-id-29",
      number: 69,
      question: "The clause that can replace the ON join condition when the joining columns share the exact same name in both tables.",
      correctAnswer: "USING",
      acceptedAnswers: ["using", "using clause", "using()"],
      explanation: "From Module 5, Lesson 1: 'Because the joined columns of both tables have the same name productline, you can use the USING syntax...'"
    },
    {
      id: "exam-id-30",
      number: 70,
      question: "The operator used in MySQL to achieve a FULL OUTER JOIN by combining a LEFT JOIN and a RIGHT JOIN.",
      correctAnswer: "UNION",
      acceptedAnswers: ["union", "union operator"],
      explanation: "From Module 5 Summary & Joins guide: FULL OUTER JOIN in MySQL is achieved using a UNION of LEFT JOIN and RIGHT JOIN."
    }
  ],

  // PART 3: 30 True or False Items
  trueOrFalse: [
    {
      id: "exam-tf-1",
      number: 71,
      statement: "SQL is a procedural programming language like C, BASIC, or Java.",
      correctAnswer: false,
      explanation: "False. SQL is non-procedural: you specify WHAT data you want, not HOW to retrieve it step-by-step."
    },
    {
      id: "exam-tf-2",
      number: 72,
      statement: "A Primary Key can contain NULL values as long as they are distinct.",
      correctAnswer: false,
      explanation: "False. The material explicitly states: 'There can only be one primary key in a table, and it can't be null.'"
    },
    {
      id: "exam-tf-3",
      number: 73,
      statement: "A Foreign Key in a table can be null.",
      correctAnswer: true,
      explanation: "True. From Module 1, Lesson 1: 'A foreign key can be null and there can be more than one foreign key in the table.'"
    },
    {
      id: "exam-tf-4",
      number: 74,
      statement: "Flat document (flat file) frameworks do not contain metadata.",
      correctAnswer: true,
      explanation: "True. From Module 1, Lesson 1: 'On a side note, you should realize that level document [flat file] frameworks don't contain metadata.'"
    },
    {
      id: "exam-tf-5",
      number: 75,
      statement: "Normalization is a database schema design technique that splits a large table into smaller tables when any of its attributes have redundancy in values.",
      correctAnswer: true,
      explanation: "True. From Module 1, Lesson 2: verbatim definition of normalization."
    },
    {
      id: "exam-tf-6",
      number: 76,
      statement: "Commercial adoption of relational databases began approximately a decade after Edgar Frank Codd's initial work, significantly marked by the creation of Oracle.",
      correctAnswer: true,
      explanation: "True. Verbatim statement from Module 1, Lesson 3."
    },
    {
      id: "exam-tf-7",
      number: 77,
      statement: "Hierarchical DBMS allows multiple parent-child relationships forming a graph-like structure.",
      correctAnswer: false,
      explanation: "False. Hierarchical DBMS has a single parent-child relationship (tree-like); Network DBMS allows multiple parent-child relationships (graph-like)."
    },
    {
      id: "exam-tf-8",
      number: 78,
      statement: "IBM IMS is an example of a Hierarchical DBMS, while IDMS is an example of a Network DBMS.",
      correctAnswer: true,
      explanation: "True. Verbatim from Table 1.1 in Module 1, Lesson 3."
    },
    {
      id: "exam-tf-9",
      number: 79,
      statement: "NoSQL stands for 'No SQL Allowed'.",
      correctAnswer: false,
      explanation: "False. NoSQL stands for 'Not Only SQL'."
    },
    {
      id: "exam-tf-10",
      number: 80,
      statement: "Redis and DynamoDB are categorized as Key-Value Stores in NoSQL databases.",
      correctAnswer: true,
      explanation: "True. Verbatim from Module 1, Lesson 3."
    },
    {
      id: "exam-tf-11",
      number: 81,
      statement: "TINYINT can hold integer values ranging from 0 to 255 when unsigned.",
      correctAnswer: true,
      explanation: "True. Verbatim from Module 2, Lesson 2."
    },
    {
      id: "exam-tf-12",
      number: 82,
      statement: "If you do not specify the length n for CHAR(n), SQL sets the default length to 10.",
      correctAnswer: false,
      explanation: "False. If not specified, the default length of CHAR is set to 1."
    },
    {
      id: "exam-tf-13",
      number: 83,
      statement: "Unlike CHAR, VARCHAR(n) avoids storing vacant clear spaces when strings are shorter than the maximum length.",
      correctAnswer: true,
      explanation: "True. Verbatim from Module 2, Lesson 2."
    },
    {
      id: "exam-tf-14",
      number: 84,
      statement: "In SQL, a null value is mathematically equivalent to zero (0).",
      correctAnswer: false,
      explanation: "False. A null value indicates the absence of data and is NOT equivalent to zero or an empty string."
    },
    {
      id: "exam-tf-15",
      number: 85,
      statement: "Standard equality operators like '=' and '!=' work correctly when checking for NULL values.",
      correctAnswer: false,
      explanation: "False. Equality operators do NOT work with nulls; IS NULL or IS NOT NULL must be used."
    },
    {
      id: "exam-tf-16",
      number: 86,
      statement: "The ENUM data type can store multiple values simultaneously from a permitted list of values.",
      correctAnswer: false,
      explanation: "False. ENUM stores only a single value from the list; SET can store multiple values."
    },
    {
      id: "exam-tf-17",
      number: 87,
      statement: "The DATE data type has a complete length of ten spaces and follows the format YYYY-MM-DD.",
      correctAnswer: true,
      explanation: "True. Verbatim from Module 2, Lesson 2."
    },
    {
      id: "exam-tf-18",
      number: 88,
      statement: "Omitting the WHERE clause in an UPDATE statement modifies only the first record of the table.",
      correctAnswer: false,
      explanation: "False. If WHERE is omitted, ALL rows in the table will be updated."
    },
    {
      id: "exam-tf-19",
      number: 89,
      statement: "Executing the DELETE statement permanently drops the table structure from the database schema.",
      correctAnswer: false,
      explanation: "False. DELETE removes records/rows, not table constructions. DROP removes the table structure."
    },
    {
      id: "exam-tf-20",
      number: 90,
      statement: "Clauses like FROM, WHERE, GROUP BY, and ORDER BY are independent DQL commands.",
      correctAnswer: false,
      explanation: "False. DQL has only one command: SELECT. FROM, WHERE, GROUP BY, and ORDER BY are clauses of SELECT."
    },
    {
      id: "exam-tf-21",
      number: 91,
      statement: "GRANT and REVOKE belong to DCL (Data Control Language).",
      correctAnswer: true,
      explanation: "True. Verbatim from Module 3, Lesson 3."
    },
    {
      id: "exam-tf-22",
      number: 92,
      statement: "When evaluating a SELECT statement, MySQL evaluates the SELECT clause before the FROM clause.",
      correctAnswer: false,
      explanation: "False. MySQL evaluates the FROM clause first and then the SELECT clause."
    },
    {
      id: "exam-tf-23",
      number: 93,
      statement: "SQL keywords are case-insensitive; writing 'select' and 'from' in lowercase will still run.",
      correctAnswer: true,
      explanation: "True. Verbatim from Module 4, Lesson 1."
    },
    {
      id: "exam-tf-24",
      number: 94,
      statement: "The ORDER BY clause is always evaluated after the FROM and SELECT clauses.",
      correctAnswer: true,
      explanation: "True. Verbatim from Module 4, Lesson 2."
    },
    {
      id: "exam-tf-25",
      number: 95,
      statement: "In the LIKE operator, the % wildcard matches any string of zero or more characters, while _ matches any single character.",
      correctAnswer: true,
      explanation: "True. Verbatim from Module 4, Lesson 3."
    },
    {
      id: "exam-tf-26",
      number: 96,
      statement: "In MySQL, 'SELECT 1 = 0 AND 1 / 0;' causes a division by zero runtime crash.",
      correctAnswer: false,
      explanation: "False. Due to short-circuit evaluation, MySQL evaluates 1=0 (false) and immediately returns 0 without evaluating 1/0."
    },
    {
      id: "exam-tf-27",
      number: 97,
      statement: "MySQL always evaluates OR operators before AND operators when evaluating expressions.",
      correctAnswer: false,
      explanation: "False. MySQL always evaluates AND operators before OR operators due to operator precedence."
    },
    {
      id: "exam-tf-28",
      number: 98,
      statement: "The expression 'SELECT true OR false AND false;' evaluates to 1 (true) in MySQL.",
      correctAnswer: true,
      explanation: "True. (false AND false) evaluates to false first; then (true OR false) evaluates to true (1)."
    },
    {
      id: "exam-tf-29",
      number: 99,
      statement: "RIGHT OUTER JOIN is a synonym for RIGHT JOIN in MySQL.",
      correctAnswer: true,
      explanation: "True. Verbatim from Module 5, Lesson 3."
    },
    {
      id: "exam-tf-30",
      number: 100,
      statement: "MySQL has native syntax support for the FULL OUTER JOIN keyword.",
      correctAnswer: false,
      explanation: "False. MySQL does NOT natively support FULL OUTER JOIN; it must be simulated using a UNION of LEFT JOIN and RIGHT JOIN."
    }
  ],

  // PART 4: Major SQL Laboratory Examination
  labExam: {
    id: "major-lab-exam",
    title: "Major Practical Laboratory Examination: Enterprise Relational Joins",
    timeLimitMinutes: 45,
    scenario: "You are the Database Administrator for a multinational distribution corporation. The management team requires an integrated sales and operations report connecting customer orders, assigned sales representatives, office locations, product lines, and order statuses.",
    erdSchema: {
      schemaName: "EnterpriseClassicModels",
      description: "6 interconnected tables with strict primary/foreign key integrity lines.",
      tables: [
        {
          tableName: "offices",
          primaryKey: "officeCode",
          columns: [
            { name: "officeCode", type: "VARCHAR(10)", isPk: true },
            { name: "city", type: "VARCHAR(50)" },
            { name: "phone", type: "VARCHAR(50)" },
            { name: "state", type: "VARCHAR(50)" },
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
    scenario: "See the following six tables: offices, employees, customers, payments, orders, and orderdetails.",
    instructions: [
      "Write a SQL query that produces the exact sample output shown below.",
      "You will use: LEFT JOIN, INNER JOIN, WHERE, and ORDER BY.",
      "The result set must contain exactly 7 columns in order: customerName, country, orderNumber, status, salesRepLastName, officeCity, and officeCountry.",
      "Strict grading is enforced against the exact target dataset. No hints or solutions are provided."
    ],
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
  }
};
