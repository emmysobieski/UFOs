// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// Build the table using a function
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr"); 
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  } 

// NEW CHALLENGE CODE -----------------------------
// Keep track of all filters
var filters = {};

// This function will replace your handleClick function
function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  // identify selector user is currently in
  let selector = d3.select(this);  // this needs an event listener
  let value = selector.property("value");
  let filtering = selector.attr("id");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (value){
    filters[filtering]=value
  }
  else {
    delete filters[filtering]
  }
 
{

// Call function to apply all filters and rebuild the table (See extra)
  filterTable();
}

function filterTable() {
  filteredData = filteredData.filter(row => row[filtering] === value)
  // Set the filteredData to the tableData

  // Loop through all of the filters and keep any data that
  // matches the filter values


  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
// Select the event and what it is listening for within each set of parenthesis
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);
}
//-----------------END CHALLENGE CODE -------------------------------

// ONLY CODE I HAVE NOT REUSED FOR CHALLENGE IS BELOW (commented out):
// New function to handle clicks for filtering data
  
    //let filteredData = tableData;
    
  