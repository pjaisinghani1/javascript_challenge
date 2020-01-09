// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var ufoTable = d3.select("table")

function ufoData(data) {

  tbody.html("")

  data.forEach(function(sightings) {
    console.log(sightings);
    
    //append rows into table
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(function([key, value]) {
      console.log(key, value);
      //cells in table 
      var td = row.append("td");
     td.html(value);
    });
  });
}
//call function to add table data from data.js 
ufoData(tableData)

  //Select the button

var filterbutton = d3.select("#filter-btn");

var dateInput = d3.select("#datetime");
//click event
function clickSelect() {
    d3.event.preventDefault();
    console.log(dateInput.property("value"));

    var filteredData = tableData.filter(sightings => 
      sightings.datetime === dateInput.property("value"));

      ufoData(filteredData);
}
dateInput.on("change", clickSelect) 
