// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers
button.on("click", runFilterTable);
form.on("submit", runFilterTable);

function runFilterTable() {
    d3.event.preventDefault();

    var inputDateTime = d3.select("#datetime");
    var inputDateValue = inputDateTime.property("value");

    console.log(inputDateValue);

    var filteredDate = tableData.filter(dates => dates.datetime === inputDateValue);

    var date = filteredDate.map(dates => dates.datetime);
    var city = filteredDate.map(cities => cities.city);
    var state = filteredDate.map(states => states.state);
    
    console.log(city);

    console.log(state[10])

    var filteredList = [];

    for (var i = 0; i < date.length; i++) {
        var filteredDict = {
            date:date[i],
            city:city[i],
            state:state[i]
        };
        filteredList.push(filteredDict);
    }

    console.log(filteredList)

    var tbody = d3.select("tbody");

    tbody.html("");

    filteredList.forEach((ufoSighting) => {
     var row = tbody.append("tr");
     Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
     });
    });

}

