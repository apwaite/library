## Library App

## Short Description

A simple Library app that allows the user to add and view the books they're reading.

[Link to Restaurant Page](https://apwaite.github.io/library/)

## Instructions

The user simply clicks the "+ Add New Book" button where they're asked to enter the book title, author, total number of pages and whether they've read the book. From this form overlay the user can choose to close the form, clear the form or add the book details they've entered; if the user chooses to add the book it's displayed on a card where the user can toggle the read status between "Read" and "Unread" or optionally remove the book altogether. Books that are added to the library are stored using the localStorage feature which ensures books entered by the user persist even after the page has been refreshed or the browser window is closed.

## Features

1. This app makes use of localStorage to persistently store data across browser sessions.

2. Originally implemented using an ES5 constructor function to create new instances of the Book object. This was then refactored to use the more easily identifiable ES6 Class keyword.

## Challenges

The development of this project brought with it a number of new concepts, each presenting varying degrees of challenge. This was the first time I had used a constructor function (and later a class) to instansiate new objects in a project. Creating the class/constructor function itself was a relatively straightforward task after I identified the values I wanted to initialise, but I did run into my first complication trying to figure out how to store these instansiated objects. I eventually figured out the best way to do this was to push these instansiated objects into an array where they could later be read. From there I went on to add a render function that would loop through my array, and create a new card for each book object in the array.

Once I was able to add book objects and render test data as cards, I went on to create an add new book button and form so that the user could enter their own details instead of using test data; this presented a couple of additional challenges including an issue where the user could still interact with the generated cards, and another issue that was a limitation of the drop-down menu I was attempting to use. I solved this first issue by creating a new section div with a class of add-book, inside the body tag but after the main content of the app. I had this new section take up the entirety of the viewport but left it transparent so that the user would be unable to interact with any elements behind it; I proceeded to center a div inside of this transparent section and created the form that would take the user data, before finally adding event listeners to both the add new book button and a close icon to the top corner of the form that toggled the display styling between none and flex, which disabled and enabled the transparent add-book class section. I noticed the second issue when attempting to add a drop-down box so that the user could select whether or not they had read a book or not. Initially I was looking to set the values as a boolean of true or false, but when attempting to add the logic that would change the book between read and unread later on I realised the options were being read as string values and not boolean. I attempted to find a good solution to this issue but eventually overcame this difficulty by changing the option from boolean to the strings "Read" and "Unread", checking for these instead.

The final issues I came across were both the deletion of cards, where I needed a way to identify which card belonged to which entry, and the implementation of localStorage which I had not used before. The solution I devised for card deletion was to add a new id field based off the index of the book entry in the myLibrary array; using this id I was able to add an id tag using template literals when creating and inserting the card HTML, while simultaneously allowing me to select the appriopriate book and update its read status using a button alongside a click event. The localStorage problem was complex at first but once I read the MDN documentation thoroughly I realised it was a simple case of using a conditional to check whether the array existed in localStorage already, add a load event to the window object to peform that check and to retrieve the JSON before render if necessary. At this point all that was left to do was to create a function that would set the new data in localStorage during each change/update/render that occured.
