// Get references to the table body, input fields, and button.

var $tbody = document.querySelector("tbody");
var $stateInput = document.querySelector("#state");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");
var $shapeInput = document.querySelector("#shape");

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

function handleSearchButtonClick() {
	var filterDate = $dateInput.value.trim().toLowerCase();
	var filterState = $stateInput.value.trim().toLowerCase();
	var filterCity = $cityInput.value.trim().toLowerCase();
	var filterCountry = $countryInput.value.trim().toLowerCase();
	var filterShape = $shapeInput.value.trim().toLowerCase();
	
	filteredTable = dataSet.filter(function(event) {
		var eventDate = event.datetime.substring(0, filterDate.length).toLowerCase();
		var eventState = event.state.substring(0, filterState.length).toLowerCase();
		var eventCity = event.city.substring(0, filterCity.length).toLowerCase();
		var eventCountry = event.country.substring(0, filterCountry.length).toLowerCase();
		var eventShape = event.shape.substring(0, filterShape.length).toLowerCase();
		
		if (eventDate === filterDate && eventState === filterState && eventCity === filterCity&& eventCountry === filterCountry && eventShape === filterShape) {
			return true;
		}
		return false;
	});
	renderTable();
}


renderTable();
	