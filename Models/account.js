class Account{
  constructor(name){
    this.name = name;
    this.debitLedger = [];
    this.creditLedger = [];
  }
  // Account object, integer/float
  credit(account,amount){
    this.creditLedger.push(amount);
    account.debitLedger.push(amount);
  }
}
