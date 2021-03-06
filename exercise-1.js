class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    // throw an exception if amount is negative

    try {
      if (amount < 0) {
        throw "Error: can't deposit a negative amount";
      }
      this.#amount += amount;
    } catch (error) {
      console.error(error);
    }
  }

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount

    try {
      if (amount < 0 || amount > this.#amount) {
        throw "Error: withdrawn amount can't be negative, nor exceed current balance";
      }
      this.#amount -= amount;
    } catch (error) {
      console.error(error);
    }
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(-500);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();
