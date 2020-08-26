// Business Logic

function Ticket(movieName, movieTime, viewerAge) {
  this.movieName = movieName,
  this.movieTime = movieTime,
  this.viewerAge = viewerAge,
  this.ticketCost = 10
}

Ticket.prototype.ticketCharge = function() {
  //let ticketCost = 10;
  
  if (this.movieName === "panther") { // most expensive
    this.ticketCost += 3;
  } else if (this.movieName === "batman") { // average expense
    this.ticketCost += 0;
  } else if (this.movieName === "superman") {  // least expensive
    this.ticketCost -= 2;
  };

  if (this.movieTime === "matinee") { // average expense
    this.ticketCost += 0;
  } else if (this.movieTime === "midnight") { // least expensive
    this.ticketCost -= 2;
  } else if (this.movieTime === "weekend") {  // most expensive
    this.ticketCost += 3;
  };

  if (this.viewerAge === "age1") { // average expense
    this.ticketCost += 0;
  } else if (this.viewerAge === "age2") { // most expensive
    this.ticketCost += 3;
  } else if (this.viewerAge === "age3") {  // least expensive
    this.ticketCost -= 2;
  };
  console.log("prototype ticket price: " + this.ticketCost);
  return this.ticketCost;
}

// User Interface Logic 

// function displayTicketPrice(ticketCost) {
//   $("#formOne").
//   let contactsList = $("ul#contacts");
//   let htmlForContactInfo = "";
//   ticketCost.contacts.forEach(function(contact) {
//     htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
//   });
//   contactsList.html(htmlForContactInfo);
// };
let ticket = new Ticket();

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const movieName = $("input[name='movieName']:checked").val();
    console.log("movieName: " + movieName);
    const movieTime = $("input[name='movieTime']:checked").val();
    console.log("movieTime: " + movieTime);
    const viewerAge = $("input[name='viewerAge']:checked").val();
    console.log("viewerAge: " + viewerAge);
    let ticket = new Ticket(movieName, movieTime, viewerAge); // after this
    console.log("ticket: " + ticket);
    // //ticket.ticketCharge(ticket);
    // let ticketPrice =  ticket.ticketCharge;
    // $("#ticketPriceDisplay").html(ticket.ticketCharge); 
    // console.log("ticket price: " + ticketPrice);
    // $("form#new-contact").trigger("reset");
    let ticketValues = Object.values(ticket);
    let finalPriceTicket = ticket.ticketCharge(ticketValues);
    $("#ticketPriceDisplay").text("$" + finalPriceTicket);
  });
});



// let addressBook = new AddressBook();
// let contact = new Contact("Ada", "Lovelace", "503-555-0100");
// let contact2 = new Contact("Grace", "Hopper", "503-555-0199");
// addressBook.addContact(contact);
// addressBook.addContact(contact2);