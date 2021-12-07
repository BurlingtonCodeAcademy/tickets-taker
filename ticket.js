/*---------------DOM Scripting---------------*/

let userName = document.getElementById('userName');
let ticket = document.getElementById('ticket-btn');
let stub = document.getElementById('ticketOrder');

/*-------------Event Listener---------------*/

ticket.addEventListener('click', (evt) => {
  evt.preventDefault();
  ticketTaker();
});

/*---------------Globals--------------*/
//starts count at 0
let count = 0;

/*---------------Function Block-------------*/

function ticketTaker() {
  // increments count to assign order number on user submit
  count++;
  //creates an h3 element
  let ticketStub = document.createElement('h3');
  //assigns the user and their order number to the h3
  ticketStub.textContent = `${userName.value} : ${count}`;
  //prints it in the order container
  stub.appendChild(ticketStub);
  // catch all to limit count size
  if (count === 25) {
    //disables the button upon 25 submissions
    ticket.disabled = true;
    //alerts the user the list is no longer populating
    alert(
      'We are practicing social distancing so we will only be taking 25 customers at a time'
    );
  }
}
