## Library App

## Short Description

A simple Library app that allows the user to add and view the books they're reading.

## Instructions

The user simply clicks the "+ Add New Book" button where they're asked to enter the book title, author, total number of pages and whether they've read the book. From this form overlay the user can choose to close the form, clear the form or add the book details they've entered; if the user chooses to add the book it's displayed on a card where the user can toggle the read status between "Read" and "Unread" or optionally remove the book altogether. Books that are added to the library are stored using the localStorage feature which ensures books entered by the user persist even after the page has been refreshed or the browser window is closed.

## Features

1. This app makes use of localStorage to persistently store data across browser sessions.

2. Originally implemented using an ES5 constructor function to create new instances of the Book object, this was refactored to use the more easily identifiable ES6 Class keyword.
