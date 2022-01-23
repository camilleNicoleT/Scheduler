var descriptionEl = document.querySelector(".description");
var currentDayEl = document.querySelector("#currentDay");
var saveButtonEl = document.querySelector("saveBtn");

// var timeEl= document.querySelector(".hour");

var today = moment(); 
currentDayEl.textContent = today.format("MMM DD, YYYY - H:MM");


//Text is saved in local storage
$(".saveBtn").click(function() {

  var currentElm = this.parentNode.parentNode;
  var textarea = currentElm.querySelector('textarea').value;
  var apptId = currentElm.querySelector('textarea').getAttribute('id');
localStorage.setItem(apptId, textarea);

var timeInt = parseInt(timeEl)
console.log(timeInt)
});


function loadAppointment() {
 
for(var i = 0; i < 10; i++){

  var apptKey = `appointment-${i}`;
  var savedTextArea = localStorage.getItem(apptKey)
  console.log(savedTextArea)

  document.getElementById(apptKey).value = savedTextArea;
}
}
loadAppointment();


var time = document.getElementsByClassName("hour");
console.log(time);
let currentHour = parseInt(moment().format('H'));

Array.from(time).forEach(hour => {
  let
    hourIdString = hour.id,
    hourTime;
  if (hourIdString) {
    hourTime = parseInt(hourIdString);
  }
  if (hourTime) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === timeHour) {
      descriptionEl.addClass(".present");
    } else if ((currentHour < hourTime) && (currentHour > hourTime - 6)) {
      descriptionEl.addClass(".future");
    } else if ((currentHour > rowHour) && (currentHour < hourTime + 6)) {
      descriptionEl.addClass (".past");
    } else {
      setColor(descriptionEl, "white");
    }
  }
});
function setColor(element, color) {
  element.style.backgroundColor = color;
}
//Time block is color-coded to indicate whether it is in the past, present, or future
// function color() {
//    get time from hour element
  
// var timeColor = $(timeEl).find("h3").text();
//   console.log(timeEl)

// if(moment().isAfter(9)){
//   assign


// }
    // var time = $(".hour").find("h3").text().trim();
       
    // // remove any old classes from element
    // $(timeEl).removeClass("past present future");
  
    // // apply new class if task is near/over due date
    // if (moment().isAfter(time)) {
    //   $(descriptionEl).addClass("past");
    // }
    // // apply new class if appointment is near/over due date
    // if (moment().isBefore(time)) {
    //   $(descriptionEl).addClass("future");
    // } 
    // else if (Math.abs(moment().diff(time, "hour")) <= 1) {
    //   $(appointmentEl).addClass("present");
    // }
  