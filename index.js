// Problem 01 — Book Collection Manager
// Difficulty: Medium
// Description
// Create an object that manages a collection of book titles. Use array methods to add and remove books, and object methods to organize the behavior.
// Starting Structure
// const library = {
//   name: "Frontend Library",
//   books: [],
// };
// Requirements
// Add the following methods to library:
// addBook(title)
// Reject an empty title by returning "Invalid book title".
// Otherwise, add the title using push().
// Return the updated number of books.
// removeLastBook()
// Return "Library is empty" if there are no books.
// Otherwise, remove and return the last book using pop().
// getLastBook()
// Return the last book without removing it.
// Return "Library is empty" if there are no books.
// getSummary()
// Return a string in this format: "Frontend Library has 2 books."
// ---------------------------------------------------------------------------
// const library = {
//   name: "Frontend Library",
//   books: [],
// };
// function addBook(title) {
//     if(title === ""){
//         return "Invalid book title";
//     }
//     else{
//         library.books.push(title);
//         return library.books.length;
//     }
// }
// function removeLastBook(){
// if(library.books.length === 0){
//     return "Library is empty";
//     }
// else{
//     return library.books.pop();
//     }
// }
// function getLastBook(){
//     if(library.books.length === 0){
//         return "Library is empty";
//     }
//     else{
//         return library.books[library.books.length - 1];
//     }
// }
// function getSummary(){
//     return `${library.name} has ${library.books.length} books.`;
// }
// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem 02 — Employee Salary Calculator
// Difficulty: Medium
// Description
// Create an employee object and functions that calculate the employee’s salary after a bonus and a deduction.
// Starting Data
// const employee = {
//   name: "Mona",
//   baseSalary: 10000,
//   bonusPercentage: 10,
//   deduction: 500,
// };
// Requirements
// Create a function declaration named calculateBonus(baseSalary, percentage) that returns the bonus amount.
// Create a function expression stored in calculateNetSalary that accepts an employee object and returns:
// Base Salary + Bonus − Deduction
// Create an arrow function named getSalaryStatus(netSalary) that returns:
// "High" if the salary is at least 15,000.
// "Medium" if it is at least 8,000 and below 15,000.
// "Low" if it is below 8,000.
// Add a regular method named getReport() to the employee object. It must use the functions above and return the report.
// Assume all inputs are valid numbers.
// ---------------------------------------------------------------------------
// const employee = {
//   name: "Mona",
//   baseSalary: 10000,
//   bonusPercentage: 10,
//   deduction: 500,
// };
// function calculateBonus(baseSalary, percentage){
//     return (baseSalary * percentage) / 100;
// }
// function calculateNetSalary(employee){
//     const bonus = calculateBonus(employee.baseSalary, employee.bonusPercentage);
//     return employee.baseSalary + bonus - employee.deduction;
// }
// const getSalaryStatus = (netSalary) => {
//     if (netSalary >= 15000) {
//         return "High";
//     }
//     else if (netSalary >= 8000 && netSalary < 15000) {
//         return "Medium";
//     }
//     else {
//         return "Low";
//     }
// };
// function getReport(){
// const netSalary = calculateNetSalary(employee);
// const salaryStatus = getSalaryStatus(netSalary);
// return `Employee: ${employee.name}, Net Salary: ${netSalary}, Status: ${salaryStatus}`;
// }
// getReport();
// console.log(getReport());
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem 03 — Bank Account with Undo
// Difficulty: Hard
// Description
// Create a function that produces independent bank account objects. Each account must support deposits, withdrawals, and undoing the last successful transaction.
// Required Function
// function createBankAccount(owner, initialBalance) {
//   // Return a new account object.
// }
// Assume owner is a non-empty string and initialBalance is a non-negative number.
// Account Properties
// owner
// balance
// transactions: an initially empty array.
// Required Methods
// deposit(amount)
// Reject non-number values, NaN, and amounts less than or equal to zero.
// Return "Invalid amount" when rejected.
// Otherwise, increase the balance, record the transaction, and return the new balance.
// withdraw(amount)
// Apply the same amount validation.
// Return "Insufficient balance" if the amount exceeds the current balance.
// Otherwise, decrease the balance, record the transaction, and return the new balance.
// getLastTransaction()
// Return the last transaction without removing it.
// Return "No transactions" if the history is empty.
// undoLastTransaction()
// Remove the last transaction using pop().
// Restore the balance to its value before that transaction.
// Return the restored balance.
// Return "No transactions to undo" if the history is empty.
// getSummary()
// Return the owner, current balance, and transaction count as a formatted string.
// Transaction Structure
// {
//   type: "deposit",
//   amount: 200,
//   balanceBefore: 1000,
//   balanceAfter: 1200
// }
// Rules
// Record only successful deposits and withdrawals.
// Invalid operations must not change the balance or transaction history.
// Undo must not create a new transaction.
// Each account must have its own transaction array.
// Keep the calculations inside functions and methods; use console.log() outside them to display results.
// -------------------------------------------------------------------------
// function createBankAccount(owner, initialBalance) {
//     const account = {
//         owner: owner,
//         balance: initialBalance,
//         transactions: [],

//         deposit(amount) {
//             if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
//                 return "Invalid amount";
//             }

//             const balanceBefore = this.balance;
//             this.balance += amount;

//             this.transactions.push({
//                 type: "deposit",
//                 amount: amount,
//                 balanceBefore: balanceBefore,
//                 balanceAfter: this.balance
//             });

//             return this.balance;
//         },

//         withdraw(amount) {
//             if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
//                 return "Invalid amount";
//             }

//             if (amount > this.balance) {
//                 return "Insufficient balance";
//             }

//             const balanceBefore = this.balance;
//             this.balance -= amount;

//             this.transactions.push({
//                 type: "withdraw",
//                 amount: amount,
//                 balanceBefore: balanceBefore,
//                 balanceAfter: this.balance
//             });

//             return this.balance;
//         },

//         getLastTransaction() {
//             if (this.transactions.length === 0) {
//                 return "No transactions";
//             }

//             return this.transactions[this.transactions.length - 1];
//         },

//         undoLastTransaction() {
//             if (this.transactions.length === 0) {
//                 return "No transactions to undo";
//             }

//             const lastTransaction = this.transactions.pop();
//             this.balance = lastTransaction.balanceBefore;

//             return this.balance;
//         },

//         getSummary() {
//             return `Owner: ${this.owner}, Balance: ${this.balance}, Transactions: ${this.transactions.length}`;
//         }
//     };

//     return account;
// }
