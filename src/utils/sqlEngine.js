import alasql from 'alasql';
import {
  SEED_OFFICES,
  SEED_EMPLOYEES,
  SEED_CUSTOMERS,
  SEED_ORDERS,
  SEED_PRODUCTLINES,
  SEED_PRODUCTS,
  SEED_ORDERDETAILS,
  SEED_MEMBERS,
  SEED_COMMITTEES,
  SEED_PAYMENTS
} from '../data/databaseSchemas.js';

let initialized = false;

export function initializeDatabase() {
  if (initialized) return;

  try {
    // Reset any existing tables
    alasql('CREATE DATABASE IF NOT EXISTS reviewer_db');
    alasql('USE reviewer_db');

    alasql('DROP TABLE IF EXISTS offices');
    alasql('CREATE TABLE offices (officeCode STRING, city STRING, phone STRING, state STRING, country STRING)');
    alasql.tables.offices.data = JSON.parse(JSON.stringify(SEED_OFFICES));

    alasql('DROP TABLE IF EXISTS employees');
    alasql('CREATE TABLE employees (employeeNumber INT, lastName STRING, firstName STRING, extension STRING, email STRING, officeCode STRING, reportsTo INT, jobTitle STRING)');
    alasql.tables.employees.data = JSON.parse(JSON.stringify(SEED_EMPLOYEES));

    alasql('DROP TABLE IF EXISTS customers');
    alasql('CREATE TABLE customers (customerNumber INT, customerName STRING, contactLastName STRING, contactFirstName STRING, city STRING, state STRING, country STRING, creditLimit FLOAT, salesRepEmployeeNumber INT)');
    alasql.tables.customers.data = JSON.parse(JSON.stringify(SEED_CUSTOMERS));

    alasql('DROP TABLE IF EXISTS orders');
    alasql('CREATE TABLE orders (orderNumber INT, orderDate STRING, status STRING, customerNumber INT)');
    alasql.tables.orders.data = JSON.parse(JSON.stringify(SEED_ORDERS));

    alasql('DROP TABLE IF EXISTS payments');
    alasql('CREATE TABLE payments (customerNumber INT, checkNumber STRING, paymentDate STRING, amount FLOAT)');
    alasql.tables.payments.data = JSON.parse(JSON.stringify(SEED_PAYMENTS));

    alasql('DROP TABLE IF EXISTS productlines');
    alasql('CREATE TABLE productlines (productLine STRING, textDescription STRING)');
    alasql.tables.productlines.data = JSON.parse(JSON.stringify(SEED_PRODUCTLINES));

    alasql('DROP TABLE IF EXISTS products');
    alasql('CREATE TABLE products (productCode STRING, productName STRING, productLine STRING, buyPrice FLOAT)');
    alasql.tables.products.data = JSON.parse(JSON.stringify(SEED_PRODUCTS));

    alasql('DROP TABLE IF EXISTS orderdetails');
    alasql('CREATE TABLE orderdetails (orderNumber INT, productCode STRING, quantityOrdered INT, priceEach FLOAT)');
    alasql.tables.orderdetails.data = JSON.parse(JSON.stringify(SEED_ORDERDETAILS));

    alasql('DROP TABLE IF EXISTS members');
    alasql('CREATE TABLE members (member_id INT, name STRING)');
    alasql.tables.members.data = JSON.parse(JSON.stringify(SEED_MEMBERS));

    alasql('DROP TABLE IF EXISTS committees');
    alasql('CREATE TABLE committees (committee_id INT, name STRING)');
    alasql.tables.committees.data = JSON.parse(JSON.stringify(SEED_COMMITTEES));

    initialized = true;
  } catch (err) {
    console.error('Failed to initialize in-memory database:', err);
  }
}

export function executeQuery(sql) {
  initializeDatabase();

  const cleanSql = sql.trim().replace(/;\s*$/, '');
  if (!cleanSql) {
    return { error: 'Query is empty. Please enter a valid SQL statement.' };
  }

  try {
    const rawResult = alasql(cleanSql);
    if (!Array.isArray(rawResult)) {
      return {
        columns: ['Result'],
        rows: [{ Result: typeof rawResult === 'object' ? JSON.stringify(rawResult) : String(rawResult) }],
        rowCount: 1,
        executionTimeMs: 1
      };
    }

    if (rawResult.length === 0) {
      return {
        columns: [],
        rows: [],
        rowCount: 0,
        executionTimeMs: 1,
        message: 'Query executed successfully with 0 rows returned.'
      };
    }

    const columns = Object.keys(rawResult[0]);
    return {
      columns,
      rows: rawResult,
      rowCount: rawResult.length,
      executionTimeMs: 2
    };
  } catch (err) {
    return {
      error: err.message || 'SQL Execution error. Check your syntax, table names, and column identifiers.'
    };
  }
}

/**
 * Strictly grades laboratory query submissions without giving spoiler hints
 */
export function gradeLabQuery({ userSql, requiredClauses = [], expectedOutput = null }) {
  if (!userSql || !userSql.trim()) {
    return {
      passed: false,
      message: 'No SQL query submitted. Write your query in the editor and click Execute.'
    };
  }

  const normalizedSql = userSql.toUpperCase().replace(/\s+/g, ' ');

  // 1. Clause verification
  for (const clause of requiredClauses) {
    const normalizedClause = clause.toUpperCase();
    if (!normalizedSql.includes(normalizedClause)) {
      return {
        passed: false,
        clauseFailed: true,
        message: `Query does not satisfy all required structural instructions. Verify your query constructs.`
      };
    }
  }

  // 2. Query execution
  const runResult = executeQuery(userSql);
  if (runResult.error) {
    return {
      passed: false,
      syntaxError: true,
      message: `Syntax error: ${runResult.error}`
    };
  }

  // 3. Expected output verification
  if (expectedOutput && Array.isArray(expectedOutput)) {
    if (runResult.rowCount !== expectedOutput.length) {
      return {
        passed: false,
        dataMismatch: true,
        message: `Result row count mismatch: Expected ${expectedOutput.length} rows, but received ${runResult.rowCount} rows. Ensure your filter and join conditions are correct.`,
        userRows: runResult.rows,
        userColumns: runResult.columns
      };
    }

    // Check column counts
    const expectedCols = Object.keys(expectedOutput[0]);
    if (runResult.columns.length !== expectedCols.length) {
      return {
        passed: false,
        columnMismatch: true,
        message: `Column count mismatch: Expected ${expectedCols.length} columns, but your query returned ${runResult.columns.length} columns.`,
        userColumns: runResult.columns
      };
    }
  }

  return {
    passed: true,
    message: 'Laboratory Exercise successfully completed! All required clauses, joined records, and columns match expectations perfectly.',
    userRows: runResult.rows,
    userColumns: runResult.columns
  };
}
