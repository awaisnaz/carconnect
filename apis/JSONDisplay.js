import JSONFormatter from 'json-formatter-js'

var JSONData = (data, holder) => {
    const formatter = new JSONFormatter(data, 1, {theme : 'dark'});
    var divContainer = document.getElementById(holder);
    divContainer.innerHTML = "";
    divContainer.appendChild(formatter.render());
  }

//   <div id="client"></div>
// JSONData(data.value, "client");