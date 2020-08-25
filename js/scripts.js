// Business Logic

function Ticket(movieName, movieTime, viewerAge) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.viewerAge = viewerAge;
}

Ticket.prototype.ticketCost = function() {
  let ticketCost = 10;
  
  if (this.movieName === "panther") { // most expensive
    ticketCost += 3;
  } else if (this.movieName === "batman") { // average expense
    ticketCost += 0;
  } else if (this.movieName === "superman") {  // least expensive
    ticketCost -= 2;
  }

  if (this.movieTime === "matinee") { // average expense
    ticketCost += 0;
  } else if (this.movieTime === "midnight") { // least expensive
    ticketCost -= 2;
  } else if (this.movieTime === "weekend") {  // most expensive
    ticketCost += 3;
  }

  if (this.viewerAge === "age1") { // average expense
    ticketCost += 0;
  } else if (this.viewerAge === "age2") { // most expensive
    ticketCost += 3;
  } else if (this.viewerAge === "age3") {  // least expensive
    ticketCost -= 2;
  }

return ticketCost;
}

// User Interface Logic 


$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const movieName = $("input#new-first-name").val();
    const movieTime = $("input#new-last-name").val();
    const viewerAge = $("input#new-phone-number").val();
    let newTicket = new Ticket(movieName, movieTime, viewerAge, addresses);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
    
    //$("form#new-contact").trigger("reset"); // Alternative form reset method.
  })
})