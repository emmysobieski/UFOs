# UFOs

# Challenge

**Project Purpose/Goals: 

Remove a static filter and button that only allowed the user to filter by date. Replace the static filter with 5 filters, so the user can filter the chart by 5 different variables, either one at a time or using multiple variables at once.  Also, if you do not enter anything, and just put enter, it clears all filters and brings you back to the original, unfiltered table.  

**Technologies used


**In the index.html file: 

Instead of Type Date, I created 5 boxes, and customized them to Filter by Date, Filter by City, Filter by State, Filter by Country, and Filter by Shape, so that it is more intuitive for the user on the website.  I also removed the code for the button.


**In java.js file:

I created a variable called filters to keep track of all of the filters.  Then I created a function to update the filters (ie if you change what you write in the box on the website, it will update the result.  Using Javascript D3, I used .select to then allow it to grab to value for any id chosen, thus if you choose a state, such as california, it would select those entries that matched based on that key value pair associated with what was entered.  If a random country not in the dataset is entered, then it returns nothing in the search.  That is the following code:


  let selector = d3.select(this);  // this needs an event listener
  
  let value = selector.property("value");
  
  let filtering = selector.attr("id");
  

Then I needed the table to listen for a value, and return the filtered data if a value was entered, AND if no value is entered than it goes back to the original chart, because I have it "delete filters" after the else. I accomplished this with the if-else function, with the if part having a value, and delete filters in the else portion.


After building the function filterTable, I use a .forEach and nested function, I have it loop through all of the filters and keep any data that matches the filter values.  Here is that code:

  Object.entries(filters).forEach(function([filtering,value]){filteredData = filteredData.filter(row => row[filtering] === value);});
  

The D3 .selectAll and .on instruct the program to listen for changes in the filters. Here is that code:

  d3.selectAll("input").on("change", updateFilters);
  

Finally, I have it rebuild the table using the filtered Data, and build the table when the page loads.

  buildTable(filteredData);
  
  buildTable(tableData);
  
