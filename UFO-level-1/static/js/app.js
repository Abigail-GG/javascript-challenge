
// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#filters");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value").trim();

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData); 
}


// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data); 

// Step 1: Loop Through `data` and console.log each ufo report object
data.forEach(function(ufoReport) {
  console.log(ufoReport);
}); 

// Step 2:  Use d3 to append one table row `tr` for each ufo report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
});

// Step 3:  Use `Object.entries` to console.log each ufo report value
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");

  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
  });
});

// Step 4: Use d3 to append 1 cell per ufo report value
// data.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");

//   Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the ufo report object
//     var cell = row.append("td");
//   });
// });

// Step 5: Use d3 to update each cell's text with

data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

