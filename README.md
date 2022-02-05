## Library App

## Short Description

A simple Library app that allows the user to add and view the books they're reading.

## Instructions

The user simply clicks the "+ Add New Book" button where they're asked to enter the book title, author, total number of pages and whether they've read the book. From this form overlay the user can choose to close the form, clear the form or add the book details they've entered; if the user chooses to add the book it's displayed on a card where the user can toggle the read status between "Read" and "Unread" or optionally remove the book altogether. Books that are added to the library are stored using the localStorage feature which ensures books entered by the user persist even after the page has been refreshed or the browser window is closed.

## Features

1. This app makes use of localStorage to persistently store data across browser sessions.

2. Originally implemented using an ES5 constructor function to create new instances of the Book object. This was then refactored to use the more easily identifiable ES6 Class keyword.

## Challenges

As usual the development of this project brought with it a number of new concepts, each presenting varying degrees of challenge. This was the first time I had used a constructor function (and later a class) to instansiate new objects in a project. Creating the class/constructor function itself was a relatively straightforward task after I identified the values I wanted to initialise, but I did run into my first complication trying to figure out how to store these instansiated objects. I eventually figured out the best way to do this was to push my test values into an array. From there I went on to add a render function that would loop through my array and create a new card for each book object in the array.

Once I was able to add book objects and render them as cards using test data, I went on to create an add new book button and form so that the user could enter their own details instead of using test data; this presented a couple of additional challenges including an issue where the user could still interact with the generated cards, and another issue that was a limitation of the drop-down menu I was attempting to use. I solved this first issue by creating a new section div with a class of add-book, inside the body tag but after the main content of the app. I had this new section take up the entirety of the viewport but left it transparent so that the user would be unable to interact with any elements behind it; I proceeded to center a div inside of this transparent section and created the form that would take the user data, before finally adding event listeners to both the add new book button and a close icon on the top corner of form that toggled the display styling between none and flex which disabled and enabled the transparent add-book class section. I noticed the second issue when attempting to add a drop-down box so that the user could select whether or not they had read a book or not. Initially I was looking to set the values as a boolean value of true or false, but when attempting to add the logic that would change the book between read and unread later I realised the options were being read as string values and not boolean. I attempted to find a good solution to this issue but eventually overcame this difficulty by changing the option from boolean values to the string "Read" and "Unread", checking for these instead.

The final issues I came across were the deletion of the cards as I needed a way to identify which card belonged to which entry and the implementation of localStorage which I had not used before.
