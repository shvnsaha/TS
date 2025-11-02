{
  //    access modifiers
  class BankAccount {
    name: string;
    readonly id: number;
    private _balance: number;
    protected bankName: string = "ABC Bank";
    constructor(name: string, id: number, balance: number) {
      this.name = name;
      this.id = id;
      this._balance = balance;
    }
    addDeposit(amount: number): void {
      this._balance += amount;
      console.log(`Deposited ${amount}. New balance is ${this._balance}`);
    }
    getBalance(): number {
      return this._balance;
    }
  }

  class SavingsAccount extends BankAccount {
    test() {
      return this.bankName;
    }
  }

  const myAccount = new BankAccount("Alice", 1, 1000);
  myAccount.addDeposit(500);

  const myAccount2 = new SavingsAccount("Bob", 2, 2000);
  console.log(myAccount2.test());
}
