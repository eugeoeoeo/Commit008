// Relational Seed Databases and Schema Definitions forCOMP 008 Reviewer

export const SEED_OFFICES = [
  { officeCode: "1", city: "San Francisco", phone: "+1 650 219 4782", state: "CA", country: "USA" },
  { officeCode: "2", city: "Boston", phone: "+1 617 283 8600", state: "MA", country: "USA" },
  { officeCode: "3", city: "NYC", phone: "+1 212 555 3000", state: "NY", country: "USA" },
  { officeCode: "4", city: "Paris", phone: "+33 14 723 4404", state: "Ile-de-France", country: "France" },
  { officeCode: "5", city: "Tokyo", phone: "+81 33 224 5000", state: "Chiyoda-Ku", country: "Japan" }
];

export const SEED_EMPLOYEES = [
  { employeeNumber: 1002, lastName: "Murphy", firstName: "Diane", extension: "x5800", email: "dmurphy@classicmodelcars.com", officeCode: "1", reportsTo: null, jobTitle: "President" },
  { employeeNumber: 1056, lastName: "Patterson", firstName: "Mary", extension: "x4611", email: "mpatterso@classicmodelcars.com", officeCode: "2", reportsTo: 1002, jobTitle: "VP Sales" },
  { employeeNumber: 1076, lastName: "Firrelli", firstName: "Jeff", extension: "x9273", email: "jfirrelli@classicmodelcars.com", officeCode: "1", reportsTo: 1002, jobTitle: "VP Marketing" },
  { employeeNumber: 1143, lastName: "Bow", firstName: "Anthony", extension: "x5428", email: "abow@classicmodelcars.com", officeCode: "1", reportsTo: 1056, jobTitle: "Sales Rep" },
  { employeeNumber: 1165, lastName: "Jennings", firstName: "Leslie", extension: "x3291", email: "ljennings@classicmodelcars.com", officeCode: "1", reportsTo: 1143, jobTitle: "Sales Rep" },
  { employeeNumber: 1166, lastName: "Thompson", firstName: "Leslie", extension: "x4065", email: "lthompson@classicmodelcars.com", officeCode: "1", reportsTo: 1143, jobTitle: "Sales Rep" },
  { employeeNumber: 1188, lastName: "Firrelli", firstName: "Julie", extension: "x2173", email: "jfirrelli@classicmodelcars.com", officeCode: "2", reportsTo: 1143, jobTitle: "Sales Rep" },
  { employeeNumber: 1216, lastName: "Patterson", firstName: "Steve", extension: "x4334", email: "spatterson@classicmodelcars.com", officeCode: "2", reportsTo: 1143, jobTitle: "Sales Rep" },
  { employeeNumber: 1286, lastName: "Tseng", firstName: "Foon Yue", extension: "x2248", email: "ftseng@classicmodelcars.com", officeCode: "3", reportsTo: 1143, jobTitle: "Sales Rep" },
  { employeeNumber: 1323, lastName: "Vanauf", firstName: "George", extension: "x4102", email: "gvanauf@classicmodelcars.com", officeCode: "3", reportsTo: 1143, jobTitle: "Sales Rep" },
  { employeeNumber: 1370, lastName: "Hernandez", firstName: "Gerard", extension: "x2028", email: "ghernandez@classicmodelcars.com", officeCode: "4", reportsTo: 1102, jobTitle: "Sales Rep" },
  { employeeNumber: 1401, lastName: "Castillo", firstName: "Pamela", extension: "x2759", email: "pcastillo@classicmodelcars.com", officeCode: "4", reportsTo: 1370, jobTitle: "Sales Rep" },
  { employeeNumber: 1501, lastName: "Bott", firstName: "Larry", extension: "x2311", email: "lbott@classicmodelcars.com", officeCode: "5", reportsTo: 1143, jobTitle: "Sales Rep" },
  { employeeNumber: 1612, lastName: "Marsh", firstName: "Peter", extension: "x5832", email: "pmarsh@classicmodelcars.com", officeCode: "5", reportsTo: 1143, jobTitle: "Sales Rep" }
];

export const SEED_CUSTOMERS = [
  { customerNumber: 103, customerName: "Atelier graphique", contactLastName: "Schmitt", contactFirstName: "Carine", city: "Nantes", state: null, country: "France", creditLimit: 21000.00, salesRepEmployeeNumber: 1370 },
  { customerNumber: 112, customerName: "Signal Gift Stores", contactLastName: "King", contactFirstName: "Jean", city: "Las Vegas", state: "NV", country: "USA", creditLimit: 71800.00, salesRepEmployeeNumber: 1165 },
  { customerNumber: 114, customerName: "Australian Collectors, Co.", contactLastName: "Ferguson", contactFirstName: "Peter", city: "Melbourne", state: "Victoria", country: "Australia", creditLimit: 117300.00, salesRepEmployeeNumber: 1612 },
  { customerNumber: 119, customerName: "La Rochelle Gifts", contactLastName: "Labrune", contactFirstName: "Janine", city: "Nantes", state: null, country: "France", creditLimit: 118200.00, salesRepEmployeeNumber: 1370 },
  { customerNumber: 121, customerName: "Baane Mini Imports", contactLastName: "Bergulfsen", contactFirstName: "Jonas", city: "Stavern", state: null, country: "Norway", creditLimit: 81700.00, salesRepEmployeeNumber: 1501 },
  { customerNumber: 124, customerName: "Mini Gifts Distributors Ltd.", contactLastName: "Nelson", contactFirstName: "Susan", city: "San Rafael", state: "CA", country: "USA", creditLimit: 210500.00, salesRepEmployeeNumber: 1165 },
  { customerNumber: 125, customerName: "Havel & Zbyszek Co", contactLastName: "Piestrzeniewicz", contactFirstName: "Zbyszek", city: "Warszawa", state: null, country: "Poland", creditLimit: 0.00, salesRepEmployeeNumber: null },
  { customerNumber: 128, customerName: "Blauer See Auto, Co.", contactLastName: "Keitel", contactFirstName: "Roland", city: "Frankfurt", state: null, country: "Germany", creditLimit: 59700.00, salesRepEmployeeNumber: 1501 },
  { customerNumber: 129, customerName: "Mini Caravy", contactLastName: "Leong", contactFirstName: "Wing", city: "Strasbourg", state: null, country: "France", creditLimit: 53800.00, salesRepEmployeeNumber: 1370 },
  { customerNumber: 131, customerName: "Land of Toys Inc.", contactLastName: "Yu", contactFirstName: "Kwai", city: "NYC", state: "NY", country: "USA", creditLimit: 114900.00, salesRepEmployeeNumber: 1323 },
  { customerNumber: 148, customerName: "Vitachrome Inc.", contactLastName: "Frick", contactFirstName: "Michael", city: "NYC", state: "NY", country: "USA", creditLimit: 120000.00, salesRepEmployeeNumber: 1216 }
];

export const SEED_ORDERS = [
  { orderNumber: 10103, orderDate: "2023-01-29", status: "Shipped", customerNumber: 129 },
  { orderNumber: 10123, orderDate: "2023-05-20", status: "Shipped", customerNumber: 103 },
  { orderNumber: 10124, orderDate: "2023-05-21", status: "Shipped", customerNumber: 112 },
  { orderNumber: 10275, orderDate: "2023-07-23", status: "Shipped", customerNumber: 119 },
  { orderNumber: 10278, orderDate: "2023-08-06", status: "Shipped", customerNumber: 112 },
  { orderNumber: 10298, orderDate: "2023-09-27", status: "Shipped", customerNumber: 103 },
  { orderNumber: 10324, orderDate: "2023-11-05", status: "Shipped", customerNumber: 148 }
];

export const SEED_PRODUCTLINES = [
  { productLine: "Classic Cars", textDescription: "Attention to detail and miniature fidelity for classic car collectors." },
  { productLine: "Motorcycles", textDescription: "Detailed diecast models of legendary street and racing motorbikes." },
  { productLine: "Planes", textDescription: "Authentic historic and modern scale aircraft models." },
  { productLine: "Ships", textDescription: "Replica wooden and composite ships from pirate schooners to battleships." }
];

export const SEED_PRODUCTS = [
  { productCode: "S10_1678", productName: "1969 Harley Davidson Ultimate Chopper", productLine: "Motorcycles", buyPrice: 48.81 },
  { productCode: "S10_1949", productName: "1952 Alpine Renault 1300", productLine: "Classic Cars", buyPrice: 98.58 },
  { productCode: "S10_2016", productName: "1996 Moto Guzzi 1100i", productLine: "Motorcycles", buyPrice: 68.99 },
  { productCode: "S10_4698", productName: "2003 Harley-Davidson Eagle Bike", productLine: "Motorcycles", buyPrice: 91.02 },
  { productCode: "S12_1099", productName: "1968 Ford Mustang", productLine: "Classic Cars", buyPrice: 95.34 },
  { productCode: "S70_3221", productName: "1999 Yamaha Speedmaster", productLine: "Motorcycles", buyPrice: 53.07 }
];

export const SEED_ORDERDETAILS = [
  { orderNumber: 10103, productCode: "S10_1949", quantityOrdered: 26, priceEach: 214.30 },
  { orderNumber: 10103, productCode: "S10_4698", quantityOrdered: 42, priceEach: 119.67 },
  { orderNumber: 10123, productCode: "S10_1678", quantityOrdered: 34, priceEach: 122.89 },
  { orderNumber: 10124, productCode: "S12_1099", quantityOrdered: 41, priceEach: 153.00 },
  { orderNumber: 10275, productCode: "S10_2016", quantityOrdered: 30, priceEach: 130.50 }
];

// Members & Committees from Module 5 Venn examples
export const SEED_MEMBERS = [
  { member_id: 1, name: "John" },
  { member_id: 2, name: "Jane" },
  { member_id: 3, name: "Mary" },
  { member_id: 4, name: "David" },
  { member_id: 5, name: "Amelia" }
];

export const SEED_COMMITTEES = [
  { committee_id: 1, name: "John" },
  { committee_id: 2, name: "Mary" },
  { committee_id: 3, name: "Lincoln" },
  { committee_id: 4, name: "Joe" }
];

// Payments table (From Prof. Contreras classicmodels schema in Image 1 & 2)
export const SEED_PAYMENTS = [
  { customerNumber: 103, checkNumber: "JM555205", paymentDate: "2023-06-05", amount: 14571.44 },
  { customerNumber: 103, checkNumber: "OM314933", paymentDate: "2023-10-18", amount: 1676.14 },
  { customerNumber: 103, checkNumber: "AB661578", paymentDate: "2023-11-20", amount: 9415.13 },
  { customerNumber: 112, checkNumber: "HQ336336", paymentDate: "2023-06-06", amount: 6066.78 },
  { customerNumber: 112, checkNumber: "ND299001", paymentDate: "2023-08-20", amount: 32641.98 },
  { customerNumber: 114, checkNumber: "GG31455",  paymentDate: "2023-05-20", amount: 45864.03 },
  { customerNumber: 114, checkNumber: "MA765515", paymentDate: "2023-12-15", amount: 82261.22 },
  { customerNumber: 119, checkNumber: "LN373720", paymentDate: "2023-08-08", amount: 47924.19 },
  { customerNumber: 121, checkNumber: "DB933704", paymentDate: "2023-10-28", amount: 34638.14 },
  { customerNumber: 128, checkNumber: "FA865824", paymentDate: "2023-11-03", amount: 10549.01 },
  { customerNumber: 148, checkNumber: "KM172892", paymentDate: "2023-12-26", amount: 41016.90 }
];
