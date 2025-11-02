{
  //    getter and setter
  {
    //    access modifiers
    class BankAccount {
      name: string;
      readonly id: number;
      private _balance: number;
      constructor(name: string, id: number, balance: number) {
        this.name = name;
        this.id = id;
        this._balance = balance;
      }

      set Deposit(amount: number) {
        this._balance += amount;
      }
      get Balance(): number {
        return this._balance;
      }
    }

    const myAccount = new BankAccount("Alice", 1, 1000);
    myAccount.Deposit = 500;
    console.log(myAccount.Balance);
  }
}
