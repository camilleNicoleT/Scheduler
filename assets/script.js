var descriptionEl = document.querySelector(".description");
var currentDayEl = document.querySelector("#currentDay");
var saveButtonEl = document.querySelector("saveBtn");



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
  var savedTextArea = localStorage.getItem(apptKey);
  console.log(savedTextArea);

//  $("#"+ apptKey).val() = savedTextArea;
  document.getElementById(apptKey).value = savedTextArea;
}
}
loadAppointment();

var currentTime= new Date();
var currentHour= currentTime.getHours();

var auditTime=function() {
  for(var block of $(".time-block")) {
    hour = parseInt(block.getAttribute("id"))
    console.log(hour);
    if (hour === currentHour) {
      $(block).addClass("present")
    } else if (hour < currentHour) {
      $(block).addClass("past")
    }
    else {
      $(block).addClass("future")
    }
  }
}
auditTime();


