// Create accounts
var Sales = new Account("Sales");
var Cash = new Account("Cash");
var Purchases = new Account("Purchases");



function createAccount(){
  var accountName = document.getElementById("accountName").value;
  var account = new Account(accountName);
  if(localStorage.getItem(accountName)){
    alert("Account already exists.");
  }
  else{
    localStorage.setItem(accountName,JSON.stringify(account));
    alert("Account created.");
  }
}


function showAccounts(){
  // Clean up allAccounts div
  document.getElementById("allAccounts").innerHTML = "";

  for(var i=0;i<Object.keys(localStorage).length;i++){
    // Account
    var account = JSON.parse(localStorage.getItem(Object.keys(localStorage)[i]));

    // Create container
    var container = document.createElement("div");
    container.className = "border mb-5";

    // Create titel for account
    var title = document.createElement("h5");
    title.className = "display-4 text-center";
    title.style.fontSize = "2em";
    title.appendChild(document.createTextNode(Object.keys(localStorage)[i]));
    container.appendChild(title);


    // Create table
    var table = document.createElement("table");
    table.className = "table table-hover text-center";

    // Create table header
    var header = document.createElement("thead");

    // Create table header row
    var headerRow = document.createElement("tr");

    // Create table header items

    var headerItem1 = document.createElement("th");
    headerItem1.appendChild(document.createTextNode("Debit"));
    headerRow.appendChild(headerItem1);
    var headerItem2 = document.createElement("th");
    headerItem2.appendChild(document.createTextNode("Credit"));
    headerRow.appendChild(headerItem2);

    // Finish and append header elements
    header.appendChild(headerRow);
    table.appendChild(header);

    // Create table body
    var tableBody = document.createElement("tbody");
    tableBody.id = account.name;

    // Create data cells
    // Debit
    account.debitLedger = [300,400,200];
    for(var j=0;j<account.debitLedger.length;j++){

      // Populate empty cells when possible
      var tableBody_ = document.getElementById(account.name);
      if(tableBody_.children[i].children[0].innerHTML==""){
        var row = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(account.debitLedger[i]));
        row.appendChild(td1);

        var td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(""));
        row.appendChild(td2);

        tableBody.appendChild(row);
      }
    }
/*
    // Create table row
    var tableRow = document.createElement("tr");

    var dataCell1 = document.createElement("td");
    dataCell1.appendChild(document.createTextNode("100"));
    tableRow.appendChild(dataCell1);
    var dataCell2 = document.createElement("td");
    dataCell2.appendChild(document.createTextNode("200"));
    tableRow.appendChild(dataCell2);

    // Finish and append table row
    tableBody.appendChild(tableRow);
    */

    // Finish and append table body
    table.appendChild(tableBody);

    // Append table to container
    container.appendChild(table);

    // Create 'manage' button
    var button = document.createElement("button");
    button.className = "btn btn-secondary mb-2";
    button.style.display = "block";
    button.style.marginLeft = "auto";
    button.style.marginRight = "auto";
    button.innerHTML = "Manage";

    container.appendChild(button);


    // Append container
    document.getElementById("allAccounts").appendChild(container);
  }
}


















//
