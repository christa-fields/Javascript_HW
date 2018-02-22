// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $searchBtn = document.querySelector("#search");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");


// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredData to dataSet initially
var filteredData = dataSet;

// renderTable renders the filteredData to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredData.length; i++) {
      // Get get the current Data object and its fields
      var data = filteredData[i];
      var fields = Object.keys(data);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the filteredData object, create a new cell at set its inner text to be the current value at the current filteredData's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = data[field];
      }
    }
  }


/*
function handleSearchButtonClick() {
// Format the user's search by removing leading and trailing whitespace, lowercase the string
var filterDate = $dateInput.value.trim().toLowerCase();

// Set filteredAddresses to an array of all addresses whose "state" matches the filter
filteredData = dataSet.filter(function(data) {
    var datetime = data.datetime.toLowerCase();

    // If true, add the data to the filteredData, otherwise don't add it to filteredData
    return datetime === filterDate;
});
renderTable();
}

// Render the table for the first time on page load
renderTable();
*/


function handleSearchButtonClick() {
    
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterDate = $dateInput.value.trim().toLowerCase();
    var filterCity = $cityInput.value.trim().toLowerCase();
    var filterState = $stateInput.value.trim().toLowerCase();
    var filterCountry = $countryInput.value.trim().toLowerCase();
    var filterShape = $shapeInput.value.trim().toLowerCase();
    

    // Set filteredData to an array of all data whose "----" matches the filter
    filteredData = dataSet.filter(function(data) {

        if(filterDate && filterDate != data['datetime']) {return false} 
        if(filterCity && filterCity != data['city']) {return false}         
        if(filterState && filterState != data['state']) {return false}         
        if(filterCountry && filterCountry != data['country']) {return false}         
        if(filterShape && filterShape != data['shape']) {return false}         
        return true
    });
    renderTable();
    }

// Render the table for the first time on page load
renderTable();


//Pagination
$(document).ready(function() {
    $('#alientable').dataTable( {
      "language": {
        "search": "Search comments:"
       }
    } );
  });

