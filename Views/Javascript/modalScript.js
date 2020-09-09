function modal(account){
  var modal = document.getElementById("modal");

  // If modal is not active
  if(modal.style.display == "" || modal.style.display == "none"){
    // Visual setup
    modal.style.display = "block";
    document.location.href = "#";
    document.body.style.overflow = "hidden";

    // Get data
    var account = JSON.parse(localStorage.getItem(account));

		// Set data into modal
		// Account title
		document.getElementById("modal-title").innerHTML = account.name;

		// Clean up
		var parent = document.getElementById("output");
		parent.innerHTML = "";


    // Create outerContainer
    var outerContainer = document.createElement("div");
    outerContainer.className = "text-center";
    outerContainer.style.display = "grid";
    outerContainer.style.gridTemplateColumns = "auto auto";



    // Create debitContainer
    var debitContainer = document.createElement("div");
    debitContainer.className = "mr-2";
    // Create debitTitle
    var debitTitle = document.createElement("h5");
    debitTitle.className = "display-4";
    debitTitle.style.fontSize = "2em";
    debitTitle.appendChild(document.createTextNode("Debit"));
    debitContainer.appendChild(debitTitle);
    // Create table
    var table = document.createElement("table");
    table.className = "table table-hover border";
    // Create thead
    var thead = document.createElement("thead");
    // Create header tr
    var tr = document.createElement("tr");
    // Create th(s)
    var ths = ["date","description","location","amount"];
    for(var j=0;j<ths.length;j++){
      var th = document.createElement("th");
      th.appendChild(document.createTextNode(ths[j]));
      tr.appendChild(th);
    }
    // Append header tr to thead
    thead.appendChild(tr);
    // Append thead to table
    table.appendChild(thead);
    // Create tbody debit
    var tbody = document.createElement("tbody");
    // Format data in cells within rows
    for(var j=0;j<account.debitLedger.length;j++){
      // Create row
      var row = document.createElement("tr");
      // Date
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(account.debitLedger[j].date));
      row.appendChild(cell);
      // Description
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(account.debitLedger[j].description));
      row.appendChild(cell);
      // Location
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(account.debitLedger[j].location));
      row.appendChild(cell);
      // Amount
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(account.debitLedger[j].amount));
      row.appendChild(cell);
      // Wrap up and append row to tbody
      tbody.appendChild(row);
    }
    table.appendChild(tbody);
    // Append table to debitContainer
    debitContainer.appendChild(table);


    // Create creditContainer
    var creditContainer = document.createElement("div");
    creditContainer.className = "ml-2";
    // Create creditTitle
    var creditTitle = document.createElement("h5");
    creditTitle.className = "display-4";
    creditTitle.style.fontSize = "2em";
    creditTitle.appendChild(document.createTextNode("Credit"));
    creditContainer.appendChild(creditTitle);
    // Create table
    var table = document.createElement("table");
    table.className = "table table-hover border";
    // Create thead
    var thead = document.createElement("thead");
    // Create header tr
    var tr = document.createElement("tr");
    // Create th(s)
    var ths = ["date","description","location","amount"];
    for(var j=0;j<ths.length;j++){
      var th = document.createElement("th");
      th.appendChild(document.createTextNode(ths[j]));
      tr.appendChild(th);
    }
    // Append header tr to thead
    thead.appendChild(tr);
    // Append thead to table
    table.appendChild(thead);
    // Create tbody
    var tbody = document.createElement("tbody");
    // Format data in cells within rows
    for(var j=0;j<account.creditLedger.length;j++){
      // Create row
      var row = document.createElement("tr");
      // Date
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(account.creditLedger[j].date));
      row.appendChild(cell);
      // Description
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(account.creditLedger[j].description));
      row.appendChild(cell);
      // Location
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(account.creditLedger[j].location));
      row.appendChild(cell);
      // Amount
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(account.creditLedger[j].amount));
      row.appendChild(cell);
      // Wrap up and append row to tbody
      tbody.appendChild(row);
    }
    table.appendChild(tbody);
    // Append table to creditContainer
    creditContainer.appendChild(table);

    // Append debitContainer to outerContainer
    outerContainer.appendChild(debitContainer);
    // Append creditContainer to outerContainer
    outerContainer.appendChild(creditContainer);
    // Append outerContainer to parent
    parent.appendChild(outerContainer);


    // Create container for creating transactions
    var functionalityContainer = document.createElement("div");
    functionalityContainer.innerHTML = `
      <div class="input-group mb-3">

        <div class="input-group-prepend">
          <span class="input-group-text">Description</span>
        </div>
        <input id="description" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">

        <div class="input-group-prepend">
          <span class="input-group-text">Location</span>
        </div>
        <input id="location" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">

        <div class="input-group-prepend">
          <span class="input-group-text">Amount</span>
        </div>
        <input id="amount" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">

        <div class="input-group-append">
          <button id="`+account.name+`" class="input-group-text text-white bg-primary" onclick="transfer(this.id)">Transfer</button>
        </div>
      </div>
    `;
    parent.appendChild(functionalityContainer);


  }
  // If modal is active
  else{
		modal.style.display = "none";
		document.body.style.overflow = "auto";
  }
}
