
function transfer(accountId){
  // Get inputs
  var date = new Date();
  var description = document.getElementById("description").value;
  var location = document.getElementById("location").value;
  var amount = document.getElementById("amount").value;

  // Get account details
  // Instantiate creditor account
  var creditorAccount = JSON.parse(localStorage.getItem(accountId));
  var temp_creditorAccount = new Account(creditorAccount.name);
  temp_creditorAccount.debitLedger = creditorAccount.debitLedger;
  temp_creditorAccount.creditLedger = creditorAccount.creditLedger;

  // Instantiate debitor account
  var debitorAccount = JSON.parse(localStorage.getItem(location));
  var temp_debitorAccount = new Account(debitorAccount.name);
  temp_debitorAccount.debitLedger = debitorAccount.debitLedger;
  temp_debitorAccount.creditLedger = debitorAccount.creditLedger;

  // Make transaction
  temp_creditorAccount.credit(temp_debitorAccount,{
    date: date.getTime(),
    description: description,
    location: location,
    amount: amount
  });

  // Save new account details (both accounts, debitor and creditor)
  localStorage.setItem(temp_creditorAccount.name,JSON.stringify(temp_creditorAccount));
  localStorage.setItem(temp_debitorAccount.name,JSON.stringify(temp_debitorAccount));

  alert("Transfer has been made.");
  showAccounts();
}

function createAccount(){
  var accountName = document.getElementById("accountName").value;
  var account = new Account(accountName);
  if(localStorage.getItem(accountName)){
    alert("Account already exists.");
  }
  else{
    localStorage.setItem(accountName,JSON.stringify(account));
    alert("Account created.");
    document.getElementById("accountName").value = "";
  }
}


function showAccounts(){
  // Clean up allAccounts div
  document.getElementById("allAccounts").innerHTML = "";

  for(var i=0;i<Object.keys(localStorage).length;i++){
    // Account
    var account = JSON.parse(localStorage.getItem(Object.keys(localStorage)[i]));

    // Create outer container
    var outerContainer = document.createElement("div");
    outerContainer.className = "border mb-5";

    // Create titel for account
    var title = document.createElement("h5");
    title.className = "display-4 text-center m-3";
    title.style.fontSize = "2em";
    title.appendChild(document.createTextNode(Object.keys(localStorage)[i]));
    outerContainer.appendChild(title);

    var hr = document.createElement("hr");
    outerContainer.appendChild(hr);

    // Create inner container
    var innerContainer = document.createElement("div");
    innerContainer.className = "text-center";
    innerContainer.style.display = "grid";
    innerContainer.style.gridTemplateColumns = "auto auto";


    // Create debit container
    var debitContainer = document.createElement("div");
    debitContainer.className = "border-right";
    // Create innerTitleDebit
    var innerTitleDebit = document.createElement("p");
    innerTitleDebit.style.fontWeight = "900";
    innerTitleDebit.appendChild(document.createTextNode("Debit"));
    debitContainer.appendChild(innerTitleDebit);
    for(var j=0;j<account.debitLedger.length;j++){
      // Create paragraph to show data
      var p = document.createElement("p");
      p.className = "border-bottom";
      // Append data to paragraph
      p.appendChild(document.createTextNode(account.debitLedger[j].amount));
      // Append paragraph to container
      debitContainer.appendChild(p);
    }
    // Append debitContainer to innerContainer
    innerContainer.appendChild(debitContainer);

    // Create credit container
    var creditContainer = document.createElement("div");
    creditContainer.className = "border-left";
    // Create innerTitleCredit
    var innerTitleCredit = document.createElement("p");
    innerTitleCredit.style.fontWeight = "900";
    innerTitleCredit.appendChild(document.createTextNode("Credit"));
    creditContainer.appendChild(innerTitleCredit);
    for(var j=0;j<account.creditLedger.length;j++){
      // Create paragraph to show data
      var p = document.createElement("p");
      p.className = "border-bottom";
      // Append data to paragraph
      p.appendChild(document.createTextNode(account.creditLedger[j].amount));
      // Append paragraph to container
      creditContainer.appendChild(p);
    }
    // Append debitContainer to innerContainer
    innerContainer.appendChild(creditContainer);

    // Append innerContainer to outerContainer
    outerContainer.appendChild(innerContainer);

    // Create 'manage' button
    var button = document.createElement("button");
    button.id = account.name;
    button.className = "btn btn-secondary";
    button.style.display = "block";
    button.style.marginLeft = "auto";
    button.style.marginRight = "auto";
    button.style.marginTop = "1em";
    button.style.marginBottom = "1em";
    button.innerHTML = "Manage";
    button.addEventListener("click",function(){
      modal(this.id);
    });

    outerContainer.appendChild(button);

    // Append container
    document.getElementById("allAccounts").appendChild(outerContainer);
  }
}


















//
