//BACKEND LOGIC
//CONSTRUCTOR
function Customer(first, last) {
  this.firstName = first;
  this.lastName = last;
}

//CONSTRUCTOR
function Ticket(movie,time,tickets,age) {
  this.movie = movie;
  this.time = time;
  this.tickets = tickets;
  this.age = age;
}

Customer.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//PROTOTYPE FOR OUTPUT TEXT
Ticket.prototype.fullTicket = function() {
  var movie = "";
  if (this.movie === "1"){
    movie = "New Movie"
  } else if (this.movie === "2"){
    movie = "Old Movie"
  }

  var time = "";
  if (this.time === "1") {
    time = "Before 5pm"
  } else if (this.time === "2"){
    time = "After 5pm"
  }

  var age = "";
  if (this.age === "1") {
    time = "Below 18"
  } else if (this.age === "2"){
    time = "Above 18"
  }

  return movie + " " + time + " " + age;
}

//PROTOTYPE FOR TICKET PRICING
Ticket.prototype.totalPrice = function(){

  var price = 0;
  if(this.movie === "1") {
    price += 10;
  } else if (this.movie === "2") {
    price += 5;
  }

  if(this.time === "1") {
    price += 5;
  } else if (this.time === "2") {
    price += 10;
  }

  if(this.age === "1") {
    price += 5;
  } else if (this.age === "2") {
    price += 10;
  }

  return price * this.tickets;
  console.log(price*this.tickets)
}

//FRONT END LOGIC
$(document).ready(function() {
  $("form#ticketForm").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newCustomer = new Customer(inputtedFirstName, inputtedLastName);

    var inputtedTickets = parseInt($("input#numberofTickets").val());
    var inputtedMovie = $("#movie").val();
    var inputtedTime = $("#time").val();
    var inputtedAge = $("#age").val();

    var newTickets = new Ticket(inputtedMovie,inputtedTime,inputtedTickets, inputtedAge);


    $("ul#customerName").append("<li><span class='contact'>" + newCustomer.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#numberofTickets").val("");


    $(".contact").last().click(function() {
      $("h3").empty();
      $("h3").append(newTickets.fullTicket()+" "+'$'+newTickets.totalPrice());
      $("#show-ticket").show();
      $("#show-ticket h2").text(newCustomer.firstName);
      $(".first-name").text(newCustomer.firstName);
      $(".last-name").text(newCustomer.lastName);
      $(".numberofTickets").text(inputtedTickets);




    });
  });
});
