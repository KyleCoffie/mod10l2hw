let loggedIn = true;// change loggedIn status//

let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato'];

if (loggedIn) {
    console.log("Items in your cart:");
    for (let i =0; i < cart.length; i++){
        console.log(cart[i]);
    }
} else{
    console.log("Please log in to view your cart.");
}

// Exploring Conditional Statements and Loops

// Objective: The aim of this assignment is to familiarize students with conditional statements and loops in JavaScript and enhance their problem-solving skills using these control structures.

// Problem Statement: You are tasked with creating a JavaScript program that simulates a simple online shopping experience. The program should allow users to browse products, add them to a cart, and calculate the total cost of their purchase.

// Task 1: Implement a conditional statement to check if a user is logged in. This doesn't need to be anything complex, a simple let loggedIn = true will do.

// Task 2: If they are logged in, loop over the 'cart' array below and log the list of available products to the user. If they are not logged in, tell the user they will need to log in before they can view their cart.

// let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato']

// Expected Outcomes:
// Upon completion of this assignment, students should be able to understand how to use conditional statements to control program flow based on certain conditions.
// Students should be able to implement loops to iterate through arrays and perform repetitive tasks efficiently.
// Students will gain practical experience in solving real-world problems using JavaScript control structures.