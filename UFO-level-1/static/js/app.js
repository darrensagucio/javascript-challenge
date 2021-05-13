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
    var country = filteredDate.map(countries => countries.country);
    var shape = filteredDate.map(shapes => shapes.shape);
    var duration = filteredDate.map(minutes => minutes.durationMinutes);
    var comment = filteredDate.map(comments => comments.comments)
    
    console.log(city);

    console.log(state[10])

    var filteredList = [];

    for (var i = 0; i < date.length; i++) {
        var filteredDict = {
            date:date[i],
            city:city[i],
            state:state[i],
            country:country[i],
            shape:shape[i],
            durationMinutes:duration[i],
            comments:comment[i]
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

    // Validate If User Date Input Is Correct 
    if (filteredList.length != 0) {
        var text = d3.select("#validation");
        text.text("");
    }

    if (filteredList.length == 0) {
        var text = d3.select("#validation");
        text.text("Invalid Date: Please Enter Date In Correct Format.");
    }

}
