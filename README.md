---
createdDate: 2021-11-29
timeRequired: 1 Hour
topics: instruction,workshop,javascript,dom-scripting,event-listeners,forms
---

# Ticket Taking Counter

- Objective: Create a page with a form that takes a user name and assigns a number to them, and displays the list on the page

## Stories

### Directory set up

- Create a directory called ticket-taker
- cd into the directory
- create an `index.html` and a `ticket.js` file
- Set-up the html file and add an `<h1>` that says "Hello!"
- Go Live
- What do you see? If nothing, please raise hand

### Setting up the form and an area of display

- Create a `<form>`
- Inside the form, create a `<textarea`>/`<input>` and `<button>`/`<input>`
- Create an area for the order list to display

### DOM Scripting

- Once you have created the elements for the page set-up, link you ids to variable names in your js file.
  - Organization is key, especially in your js files. In this js file, you will be using DOM Scripting, Event Listeners, & functions
- `let user = document.getElementbyID("user")`
- Link the elements that will be used (i.e. where the user inputs their name, the button and the where the list will render)

### Event Listeners

- Add an event listener to the button for when the user clicks submit -`element.addEventListener()` - This will listen for the "click" and run a callback function that does some things

### Functionality

- There are many ways to approach this problem. Again, the task is to generate an list with a user's name and an assigned number in chronological order.
- This output should resemble in some fashion:
  - Bob - 1
  - G.J. - 2
  - Olivia - 3
  - Devon - 4

### Iceboxes

- Is there another way to accomplish the task? Order list? Count ++? Try it another way.
- Jazz it up! Add some css elements to the page.
- Cap the list. Stop the ability to populate after a certain amount of submissions.
