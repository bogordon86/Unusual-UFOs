// Get references to the table body, input fields, and button.

var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");

// Add event listener for search button
$searchBtn.addEventListener("click", handleSearchButtonClick);

var filteredTable = dataSet;

function renderTable() {
	$tbody.innerHTML = "";
	for (var i = 0; i < filteredTable.length; i++) {
		var event = filteredTable[i];
		var fields = Object.keys(event);
		//create new row in the table body and set index
		var $row = $tbody.insertRow(i)
		for (var j = 0; j < fields.length; j++) {
		// for every field, create new cell & set inner text to current value at current state's field 
			var field = fields[j];
			var $cell = $row.insertCell(j);
			$cell.innerText = event[field];
		}
	}
}
//Format search by removing leading & trailing whitespace, & set to lowercase
function handleSearchButtonClick() {
	var filterDate = $dateInput.value.trim();
	var filterCity = $cityInput.value.trim().toLowerCase();
	var filterState = $stateInput.value.trim().toLowerCase();
	var filterCountry = $countryInput.value.trim().toLowerCase();
	var filterShape = $shapeInput.value.trim().toLowerCase();
//Set filteredTable to an array of all data where the fields match the filter
	filteredTable = dataSet.filter(function (event) {
		var eventDate = event.datetime;
		var eventCity = event.city.toLowerCase();
		var eventState = event.state.toLowerCase();
		var eventCountry = event.country.toLowerCase();
		var eventShape = event.shape.toLowerCase();
		
		if
			((eventDate === filterDate || filterDate == "")
            && (eventCity === filterCity || filterCity == "")
            && (eventState === filterState || filterState == "")
            && (eventCountry === filterCountry || filterCountry == "")
            && (eventShape === filterShape || filterShape == ""))
			{
            return true;
		}
            return false;
    });
		
	renderTable();
}

// Provides the initial render of the page on opening
renderTable();
	