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

