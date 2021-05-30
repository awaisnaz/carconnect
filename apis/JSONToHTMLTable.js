function JSONToHTMLTable(jsonData, elementToBind) {
    //This Code gets all columns for header   and stored in array col
    var col = [];
    for (var i = 0; i < jsonData.length; i++) {
        for (var key in jsonData[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    //This Code creates HTML table
    var table = document.createElement("table");
    table.style.color = "grey";

    //This Code getsrows for header creader above.
    var tr = table.insertRow(-1);

    for (var p  = 0; p < col.length; p++) {
        var th = document.createElement("th");
        th.innerHTML = col[p];
        tr.appendChild(th);
    }

    //This Code adds data to table as rows
    for (var q = 0; q < jsonData.length; q++) {

        tr = table.insertRow(-1);

        for (var r = 0; r < col.length; r++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = jsonData[q][col[r]];
        }
    }

    //This Code gets the all columns for header
    var divContainer = document.getElementById(elementToBind);
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
  }

//   <div id="data"></div>
//   JSONToHTMLTable(contactus.value, "contactus");