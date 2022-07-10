# Welcome to this simple pond management app
------------------------------
## What functions does it have?

The application allows you to store data about fish and other species you observe. In the form of a simple table with ease, you can monitor their quantity and update the status. Using the built-in sort selector, you can quickly find the data you are interested in. The top bar will allow you to search for the phrase you are interested in. The bottom panel allows you to add more species
--------------------------------

## Application structure
React was used to build the application. The public part contains a default JSON file showing the basic data that could be imported. The HTML part remained unchanged. The main part of the application is src. Index.css contains styles for all components and index.js is the link for the components. App.js has the main logical part of the application. It also downloads data, sets index number for new record, and transforms it. Her children are HeadBar.js Table.js and AddNew.js.The HeadBar component contains a set of buttons for sorting and a search bar in Filter.js. The Table.js component is designed to display tables with consecutive records as well as delete and edit buttons. Individual records are closed in the Fish.js component. The last component is AddNew.js where you can add a new record using inputs
----------------------------------

## To do
```
-Completing the filtering function (it has a functional component that collects a value, you must provide the contents of the table in the form of a string and search by comparing the string with the state of the component)

 -Create an editing function (the button prepared for editing transfers to the console what record will be edited. You need to prepare a form containing 3 inputs and giving an index from the App component)

-Prepare the final styling (current styling is temporary) using className and include everything in index.css
```
-----------------------------------

## What is already working?
```
-Getting data in the form of JSON from the endpoint (by default it is a file in the public folder but it can also be a link in a const API.

-Performing the sort function by the order of addition (by the index number), by Amount and alphabetically

-Displaying records in the table with a set of edit (to create) and delete (works) buttons

-Adding new items to the table and checking if the name consists of more than 2 characters, given an amount greater than 0 and a description with at least 10 characters
```