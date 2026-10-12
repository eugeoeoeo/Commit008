// Interactive Laboratory Activities for Every Lesson

export const LAB_ACTIVITIES_DATA = {
  // Module 1, Lesson 1: Understanding Database
  "m1-l1": {
    id: "lab-m1-l1",
    title: "Lab Activity 1: Inspecting Relational Schema & Tables",
    description: "Explore the students table structure, attributes, and tuple records to understand basic tabular data organization.",
    instructions: [
      "Write a query to retrieve all columns and all records from the `offices` table.",
      "Observe the columns (fields) in the vertical position and rows (tuples) in the horizontal position.",
      "Check the officeCode primary key column."
    ],
    requiredClauses: ["SELECT", "FROM"],
    starterSql: "SELECT * FROM offices;",
    expectedOutput: [
      { officeCode: "1", city: "San Francisco", phone: "+1 650 219 4782", state: "CA", country: "USA" },
      { officeCode: "2", city: "Boston", phone: "+1 617 283 8600", state: "MA", country: "USA" },
      { officeCode: "3", city: "NYC", phone: "+1 212 555 3000", state: "NY", country: "USA" },
      { officeCode: "4", city: "Paris", phone: "+33 14 723 4404", state: "Ile-de-France", country: "France" },
      { officeCode: "5", city: "Tokyo", phone: "+81 33 224 5000", state: "Chiyoda-Ku", country: "Japan" }
    ]
  },

  // Module 1, Lesson 2: DBMS Key Functions
  "m1-l2": {
    id: "lab-m1-l2",
    title: "Lab Activity 2: Data Manipulation & Integrity Queries",
    description: "Perform query processing on the employees table to experience data manipulation function.",
    instructions: [
      "Retrieve employeeNumber, lastName, firstName, and jobTitle from the `employees` table.",
      "Filter the records where jobTitle is equal to 'Sales Rep'.",
      "Notice how integrity constraints guarantee that every record contains a valid employeeNumber."
    ],
    requiredClauses: ["SELECT", "FROM", "WHERE"],
    starterSql: "SELECT employeeNumber, lastName, firstName, jobTitle FROM employees WHERE jobTitle = 'Sales Rep';",
    expectedOutput: [
      { employeeNumber: 1143, lastName: "Bow", firstName: "Anthony", jobTitle: "Sales Rep" },
      { employeeNumber: 1165, lastName: "Jennings", firstName: "Leslie", jobTitle: "Sales Rep" },
      { employeeNumber: 1166, lastName: "Thompson", firstName: "Leslie", jobTitle: "Sales Rep" },
      { employeeNumber: 1188, lastName: "Firrelli", firstName: "Julie", jobTitle: "Sales Rep" },
      { employeeNumber: 1216, lastName: "Patterson", firstName: "Steve", jobTitle: "Sales Rep" },
      { employeeNumber: 1286, lastName: "Tseng", firstName: "Foon Yue", jobTitle: "Sales Rep" },
      { employeeNumber: 1323, lastName: "Vanauf", firstName: "George", jobTitle: "Sales Rep" },
      { employeeNumber: 1370, lastName: "Hernandez", firstName: "Gerard", jobTitle: "Sales Rep" },
      { employeeNumber: 1401, lastName: "Castillo", firstName: "Pamela", jobTitle: "Sales Rep" },
      { employeeNumber: 1501, lastName: "Bott", firstName: "Larry", jobTitle: "Sales Rep" },
      { employeeNumber: 1612, lastName: "Marsh", firstName: "Peter", jobTitle: "Sales Rep" }
    ]
  },

  // Module 1, Lesson 3: DBMS Types
  "m1-l3": {
    id: "lab-m1-l3",
    title: "Lab Activity 3: Relational Entities & Foreign Key Linkages",
    description: "Experience the relational model by projecting columns and linking primary and foreign key references.",
    instructions: [
      "Select productCode, productName, and productLine from the `products` table.",
      "Verify the relationship with the productlines domain by filtering where productLine = 'Classic Cars'."
    ],
    requiredClauses: ["SELECT", "FROM", "WHERE"],
    starterSql: "SELECT productCode, productName, productLine FROM products WHERE productLine = 'Classic Cars';",
    expectedOutput: [
      { productCode: "S10_1949", productName: "1952 Alpine Renault 1300", productLine: "Classic Cars" },
      { productCode: "S12_1099", productName: "1968 Ford Mustang", productLine: "Classic Cars" }
    ]
  },

  // Module 1, Lesson 4: Advantages of DBMS
  "m1-l4": {
    id: "lab-m1-l4",
    title: "Lab Activity 4: Centralized Data Aggregation",
    description: "Experience efficient data retrieval and calculation in a centralized DBMS.",
    instructions: [
      "Calculate the count of employees in the corporation and the count of distinct job titles.",
      "Execute `SELECT COUNT(*) AS totalEmployees FROM employees;` to verify centralized calculation."
    ],
    requiredClauses: ["SELECT", "FROM"],
    starterSql: "SELECT COUNT(*) AS totalEmployees FROM employees;",
    expectedOutput: [
      { totalEmployees: 14 }
    ]
  },

  // Module 2, Lesson 1: What is SQL?
  "m2-l1": {
    id: "lab-m2-l1",
    title: "Lab Activity 5: Non-Procedural Query Extraction",
    description: "Instruct SQL WHAT to retrieve without writing loops or procedural flow control.",
    instructions: [
      "Extract customerName, city, and creditLimit from the `customers` table.",
      "Filter for customers whose creditLimit is greater than 100000.",
      "Notice that you do not define a loop counter or manual memory traversal."
    ],
    requiredClauses: ["SELECT", "FROM", "WHERE"],
    starterSql: "SELECT customerName, city, creditLimit FROM customers WHERE creditLimit > 100000;",
    expectedOutput: [
      { customerName: "Australian Collectors, Co.", city: "Melbourne", creditLimit: 117300 },
      { customerName: "La Rochelle Gifts", city: "Nantes", creditLimit: 118200 },
      { customerName: "Mini Gifts Distributors Ltd.", city: "San Rafael", creditLimit: 210500 },
      { customerName: "Land of Toys Inc.", city: "NYC", creditLimit: 114900 },
      { customerName: "Vitachrome Inc.", city: "NYC", creditLimit: 120000 }
    ]
  },

  // Module 2, Lesson 2: Data Types & Nulls
  "m2-l2": {
    id: "lab-m2-l2",
    title: "Lab Activity 6: Querying Null Values with IS NULL",
    description: "Practice the proper syntax for detecting missing/null data without using standard equality.",
    instructions: [
      "Select customerNumber, customerName, and state from the `customers` table.",
      "Retrieve ONLY the customers who have no state recorded (state is NULL).",
      "Do NOT use `state = NULL`; use `state IS NULL` as taught in Lesson 2!"
    ],
    requiredClauses: ["SELECT", "FROM", "WHERE", "IS NULL"],
    starterSql: "SELECT customerNumber, customerName, state FROM customers WHERE state IS NULL;",
    expectedOutput: [
      { customerNumber: 103, customerName: "Atelier graphique", state: null },
      { customerNumber: 119, customerName: "La Rochelle Gifts", state: null },
      { customerNumber: 121, customerName: "Baane Mini Imports", state: null },
      { customerNumber: 125, customerName: "Havel & Zbyszek Co", state: null },
      { customerNumber: 128, customerName: "Blauer See Auto, Co.", state: null },
      { customerNumber: 129, customerName: "Mini Caravy", state: null }
    ]
  },

  // Module 2, Lesson 3: MySQL Monitor
  "m2-l3": {
    id: "lab-m2-l3",
    title: "Lab Activity 7: Table Inspection & Catalog Queries",
    description: "Simulate MySQL Monitor commands by inspecting table data and schema properties.",
    instructions: [
      "Retrieve all records from the `committees` table to verify available committees in the database workspace.",
      "Run `SELECT * FROM committees;`."
    ],
    requiredClauses: ["SELECT", "FROM"],
    starterSql: "SELECT * FROM committees;",
    expectedOutput: [
      { committee_id: 1, name: "John" },
      { committee_id: 2, name: "Mary" },
      { committee_id: 3, name: "Lincoln" },
      { committee_id: 4, name: "Joe" }
    ]
  },

  // Module 3, Lesson 1: CRUD & SQL Statements
  "m3-l1": {
    id: "lab-m3-l1",
    title: "Lab Activity 8: CRUD Projection with Computed Expressions",
    description: "Practice SELECT operations and mathematical expressions on table data.",
    instructions: [
      "Select orderNumber, productCode, quantityOrdered, and priceEach from `orderdetails`.",
      "Add a calculated expression `(quantityOrdered * priceEach) AS totalItemCost`.",
      "Filter for items where quantityOrdered is greater than 30."
    ],
    requiredClauses: ["SELECT", "FROM", "WHERE"],
    starterSql: "SELECT orderNumber, productCode, quantityOrdered, priceEach, (quantityOrdered * priceEach) AS totalItemCost FROM orderdetails WHERE quantityOrdered > 30;",
    expectedOutput: [
      { orderNumber: 10103, productCode: "S10_4698", quantityOrdered: 42, priceEach: 119.67, totalItemCost: 5026.14 },
      { orderNumber: 10123, productCode: "S10_1678", quantityOrdered: 34, priceEach: 122.89, totalItemCost: 4178.26 },
      { orderNumber: 10124, productCode: "S12_1099", quantityOrdered: 41, priceEach: 153.00, totalItemCost: 6273.00 }
    ]
  },

  // Module 3, Lesson 2: Creating Database
  "m3-l2": {
    id: "lab-m3-l2",
    title: "Lab Activity 9: Verifying Table Structure & Schema",
    description: "Examine product lines and descriptions created within the database.",
    instructions: [
      "Query all columns from the `productlines` table.",
      "Observe how the productLine column functions as the primary key."
    ],
    requiredClauses: ["SELECT", "FROM"],
    starterSql: "SELECT * FROM productlines;",
    expectedOutput: [
      { productLine: "Classic Cars", textDescription: "Attention to detail and miniature fidelity for classic car collectors." },
      { productLine: "Motorcycles", textDescription: "Detailed diecast models of legendary street and racing motorbikes." },
      { productLine: "Planes", textDescription: "Authentic historic and modern scale aircraft models." },
      { productLine: "Ships", textDescription: "Replica wooden and composite ships from pirate schooners to battleships." }
    ]
  },

  // Module 3, Lesson 3: SQL Command Types
  "m3-l3": {
    id: "lab-m3-l3",
    title: "Lab Activity 10: Executing DQL with Multiple Clauses",
    description: "Combine clauses of SELECT (WHERE, ORDER BY) into a unified DQL statement.",
    instructions: [
      "Retrieve employeeNumber, lastName, and jobTitle from `employees`.",
      "Include only employees with officeCode = '1'.",
      "Sort by lastName in ascending order using ORDER BY."
    ],
    requiredClauses: ["SELECT", "FROM", "WHERE", "ORDER BY"],
    starterSql: "SELECT employeeNumber, lastName, jobTitle FROM employees WHERE officeCode = '1' ORDER BY lastName ASC;",
    expectedOutput: [
      { employeeNumber: 1143, lastName: "Bow", jobTitle: "Sales Rep" },
      { employeeNumber: 1076, lastName: "Firrelli", jobTitle: "VP Marketing" },
      { employeeNumber: 1165, lastName: "Jennings", jobTitle: "Sales Rep" },
      { employeeNumber: 1002, lastName: "Murphy", jobTitle: "President" },
      { employeeNumber: 1166, lastName: "Thompson", jobTitle: "Sales Rep" }
    ]
  },

  // Module 4, Lesson 1: MySQL SELECT
  "m4-l1": {
    id: "lab-m4-l1",
    title: "Lab Activity 11: Multi-Column SELECT Projection",
    description: "Demonstrate column projection from the employees table as illustrated in Lesson 1.",
    instructions: [
      "Write a SELECT statement to retrieve exactly three columns: lastName, firstName, and jobTitle from the `employees` table.",
      "Terminate the statement with a semicolon."
    ],
    requiredClauses: ["SELECT", "FROM"],
    starterSql: "SELECT lastName, firstName, jobTitle FROM employees;",
    expectedOutput: [
      { lastName: "Murphy", firstName: "Diane", jobTitle: "President" },
      { lastName: "Patterson", firstName: "Mary", jobTitle: "VP Sales" },
      { lastName: "Firrelli", firstName: "Jeff", jobTitle: "VP Marketing" },
      { lastName: "Bow", firstName: "Anthony", jobTitle: "Sales Rep" },
      { lastName: "Jennings", firstName: "Leslie", jobTitle: "Sales Rep" },
      { lastName: "Thompson", firstName: "Leslie", jobTitle: "Sales Rep" },
      { lastName: "Firrelli", firstName: "Julie", jobTitle: "Sales Rep" },
      { lastName: "Patterson", firstName: "Steve", jobTitle: "Sales Rep" },
      { lastName: "Tseng", firstName: "Foon Yue", jobTitle: "Sales Rep" },
      { lastName: "Vanauf", firstName: "George", jobTitle: "Sales Rep" },
      { lastName: "Hernandez", firstName: "Gerard", jobTitle: "Sales Rep" },
      { lastName: "Castillo", firstName: "Pamela", jobTitle: "Sales Rep" },
      { lastName: "Bott", firstName: "Larry", jobTitle: "Sales Rep" },
      { lastName: "Marsh", firstName: "Peter", jobTitle: "Sales Rep" }
    ]
  },

  // Module 4, Lesson 2: ORDER BY
  "m4-l2": {
    id: "lab-m4-l2",
    title: "Lab Activity 12: Multi-Column Sorting with ASC & DESC",
    description: "Sort customer records by last name descending, then first name ascending.",
    instructions: [
      "Select contactLastName and contactFirstName from `customers`.",
      "Sort by contactLastName in descending order (DESC), and then contactFirstName in ascending order (ASC)."
    ],
    requiredClauses: ["SELECT", "FROM", "ORDER BY", "DESC", "ASC"],
    starterSql: "SELECT contactLastName, contactFirstName FROM customers ORDER BY contactLastName DESC, contactFirstName ASC;",
    expectedOutput: [
      { contactLastName: "Yu", contactFirstName: "Kwai" },
      { contactLastName: "Schmitt", contactFirstName: "Carine" },
      { contactLastName: "Piestrzeniewicz", contactFirstName: "Zbyszek" },
      { contactLastName: "Nelson", contactFirstName: "Susan" },
      { contactLastName: "Leong", contactFirstName: "Wing" },
      { contactLastName: "Labrune", contactFirstName: "Janine" },
      { contactLastName: "King", contactFirstName: "Jean" },
      { contactLastName: "Keitel", contactFirstName: "Roland" },
      { contactLastName: "Frick", contactFirstName: "Michael" },
      { contactLastName: "Ferguson", contactFirstName: "Peter" },
      { contactLastName: "Bergulfsen", contactFirstName: "Jonas" }
    ]
  },

  // Module 4, Lesson 3: WHERE
  "m4-l3": {
    id: "lab-m4-l3",
    title: "Lab Activity 13: Range Filtering with BETWEEN & LIKE Wildcards",
    description: "Combine range checks and pattern matching as shown in the curriculum.",
    instructions: [
      "Select firstName, lastName, and officeCode from `employees`.",
      "Filter for employees whose officeCode is BETWEEN 1 AND 3.",
      "Sort the result by officeCode ascending."
    ],
    requiredClauses: ["SELECT", "FROM", "WHERE", "BETWEEN", "ORDER BY"],
    starterSql: "SELECT firstName, lastName, officeCode FROM employees WHERE officeCode BETWEEN '1' AND '3' ORDER BY officeCode ASC;",
    expectedOutput: [
      { firstName: "Diane", lastName: "Murphy", officeCode: "1" },
      { firstName: "Jeff", lastName: "Firrelli", officeCode: "1" },
      { firstName: "Anthony", lastName: "Bow", officeCode: "1" },
      { firstName: "Leslie", lastName: "Jennings", officeCode: "1" },
      { firstName: "Leslie", lastName: "Thompson", officeCode: "1" },
      { firstName: "Mary", lastName: "Patterson", officeCode: "2" },
      { firstName: "Julie", lastName: "Firrelli", officeCode: "2" },
      { firstName: "Steve", lastName: "Patterson", officeCode: "2" },
      { firstName: "Foon Yue", lastName: "Tseng", officeCode: "3" },
      { firstName: "George", lastName: "Vanauf", officeCode: "3" }
    ]
  },

  // Module 4, Lesson 4: AND Operator
  "m4-l4": {
    id: "lab-m4-l4",
    title: "Lab Activity 14: Compound Logic with the AND Operator",
    description: "Find customers matching both country and state criteria.",
    instructions: [
      "Select customerName, country, state from the `customers` table.",
      "Filter where country = 'USA' AND state = 'CA'."
    ],
    requiredClauses: ["SELECT", "FROM", "WHERE", "AND"],
    starterSql: "SELECT customerName, country, state FROM customers WHERE country = 'USA' AND state = 'CA';",
    expectedOutput: [
      { customerName: "Mini Gifts Distributors Ltd.", country: "USA", state: "CA" }
    ]
  },

  // Module 4, Lesson 5: OR Operator & Precedence
  "m4-l5": {
    id: "lab-m4-l5",
    title: "Lab Activity 15: Operator Precedence & Parentheses Grouping",
    description: "Filter customers by multiple countries with a credit limit threshold.",
    instructions: [
      "Retrieve customerName, country, and creditLimit from `customers`.",
      "Filter for customers where (country = 'USA' OR country = 'France') AND creditLimit > 100000.",
      "Ensure proper parenthesis grouping so the OR condition evaluates before the AND condition."
    ],
    requiredClauses: ["SELECT", "FROM", "WHERE", "OR", "AND"],
    starterSql: "SELECT customerName, country, creditLimit FROM customers WHERE (country = 'USA' OR country = 'France') AND creditLimit > 100000;",
    expectedOutput: [
      { customerName: "La Rochelle Gifts", country: "France", creditLimit: 118200 },
      { customerName: "Mini Gifts Distributors Ltd.", country: "USA", creditLimit: 210500 },
      { customerName: "Land of Toys Inc.", country: "USA", creditLimit: 114900 },
      { customerName: "Vitachrome Inc.", country: "USA", creditLimit: 120000 }
    ]
  },

  // Module 5, Lesson 1: Inner Join
  "m5-l1": {
    id: "lab-m5-l1",
    title: "Lab Activity 16: Inner Join on Related Tables",
    description: "Combine products and productlines to fetch product details along with line descriptions.",
    instructions: [
      "Select productCode, productName, and textDescription by joining `products` and `productlines` on productLine.",
      "Use `INNER JOIN` in your query."
    ],
    requiredClauses: ["SELECT", "FROM", "INNER JOIN"],
    starterSql: "SELECT p.productCode, p.productName, pl.textDescription FROM products p INNER JOIN productlines pl ON p.productLine = pl.productLine;",
    expectedOutput: [
      { productCode: "S10_1678", productName: "1969 Harley Davidson Ultimate Chopper", textDescription: "Detailed diecast models of legendary street and racing motorbikes." },
      { productCode: "S10_1949", productName: "1952 Alpine Renault 1300", textDescription: "Attention to detail and miniature fidelity for classic car collectors." },
      { productCode: "S10_2016", productName: "1996 Moto Guzzi 1100i", textDescription: "Detailed diecast models of legendary street and racing motorbikes." },
      { productCode: "S10_4698", productName: "2003 Harley-Davidson Eagle Bike", textDescription: "Detailed diecast models of legendary street and racing motorbikes." },
      { productCode: "S12_1099", productName: "1968 Ford Mustang", textDescription: "Attention to detail and miniature fidelity for classic car collectors." },
      { productCode: "S70_3221", productName: "1999 Yamaha Speedmaster", textDescription: "Detailed diecast models of legendary street and racing motorbikes." }
    ]
  },

  // Module 5, Lesson 2: Left Join
  "m5-l2": {
    id: "lab-m5-l2",
    title: "Lab Activity 17: Finding Unmatched Records with LEFT JOIN & IS NULL",
    description: "Identify customers who have never placed an order in the database.",
    instructions: [
      "Select c.customerNumber, c.customerName, and o.orderNumber by performing a LEFT JOIN from `customers` (left table) to `orders` (right table).",
      "Filter for unmatched rows using `WHERE o.orderNumber IS NULL`."
    ],
    requiredClauses: ["SELECT", "FROM", "LEFT JOIN", "WHERE", "IS NULL"],
    starterSql: "SELECT c.customerNumber, c.customerName, o.orderNumber FROM customers c LEFT JOIN orders o ON c.customerNumber = o.customerNumber WHERE o.orderNumber IS NULL;",
    expectedOutput: [
      { customerNumber: 114, customerName: "Australian Collectors, Co.", orderNumber: null },
      { customerNumber: 121, customerName: "Baane Mini Imports", orderNumber: null },
      { customerNumber: 124, customerName: "Mini Gifts Distributors Ltd.", orderNumber: null },
      { customerNumber: 125, customerName: "Havel & Zbyszek Co", orderNumber: null },
      { customerNumber: 128, customerName: "Blauer See Auto, Co.", orderNumber: null },
      { customerNumber: 131, customerName: "Land of Toys Inc.", orderNumber: null }
    ]
  },

  // Module 5, Lesson 3: Right Join & Full Outer Join
  "m5-l3": {
    id: "lab-m5-l3",
    title: "Lab Activity 18: Identifying Unassigned Employees with RIGHT JOIN",
    description: "Find sales representatives who are currently not assigned to any customer.",
    instructions: [
      "Query employeeNumber and customerNumber by joining `customers` with `employees` using a `RIGHT JOIN`.",
      "Filter where `customerNumber IS NULL` to locate employees with zero customer accounts.",
      "Sort the result by employeeNumber ascending."
    ],
    requiredClauses: ["SELECT", "FROM", "RIGHT JOIN", "WHERE", "IS NULL", "ORDER BY"],
    starterSql: "SELECT e.employeeNumber, c.customerNumber FROM customers c RIGHT JOIN employees e ON c.salesRepEmployeeNumber = e.employeeNumber WHERE c.customerNumber IS NULL ORDER BY e.employeeNumber;",
    expectedOutput: [
      { employeeNumber: 1002, customerNumber: null },
      { employeeNumber: 1056, customerNumber: null },
      { employeeNumber: 1076, customerNumber: null },
      { employeeNumber: 1143, customerNumber: null },
      { employeeNumber: 1166, customerNumber: null },
      { employeeNumber: 1188, customerNumber: null },
      { employeeNumber: 1286, customerNumber: null },
      { employeeNumber: 1401, customerNumber: null }
    ]
  }
};
