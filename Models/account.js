class Account{
  constructor(name){
    this.name = name;
    this.debitLedger = [];
    this.creditLedger = [];
  }
  // Account object, transaction object
  credit(account,transaction){
    this.creditLedger.push(transaction);
    account.debitLedger.push(transaction);
  }
}
