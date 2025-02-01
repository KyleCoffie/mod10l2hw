let balance = 0;

function deposit(amount) {
    if (amount > 0){
        balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${balance}`);
    }else {
        console.log("Deposit amount must be positive.");
    }
}

function withdraw(amount) {
    if (amount > 0 && amount <= balance) {
      balance -= amount;
      console.log(`Withdrew: $${amount}. New balance: $${balance}`);
    } else if (amount > balance) {
      console.log(`Insufficient funds. You only have $${balance} in your account.`);
    } else {
      console.log("A negative withdrawal is accutally a deposit!");
    }
  }
  function checkBalance() {
    console.log(`Current balance: $${balance}`);
  }

deposit(1230); 
withdraw(50); 
checkBalance();
// Exploring Functions in JavaScript
// Objective: The aim of this assignment is to deepen students' understanding of functions in JavaScript and their various applications in solving programming problems.

// Problem Statement: Your task is to develop a JavaScript program that simulates a simple banking system. The program should include functions to perform basic banking operations such as deposit, withdrawal, and balance inquiry.

// Task 1: Create a function to handle deposits into a bank account. Essentially, adding money to your bank account.

// Task 2: Implement a function to handle withdrawals from a bank account. Essentially, taking money out of your bank account.

// Task 3: Develop a function to check the current balance of the account. Lastly, show much much money you have left.

// Expected Outcomes:

// After completing this assignment, students should demonstrate proficiency in creating and using functions to perform specific tasks.
// Students should understand the importance of function modularity and reusability in programming.
// This assignment will enable students to apply their knowledge of functions to practical scenarios, such as banking operations, thereby enhancing their problem-solving skills.
