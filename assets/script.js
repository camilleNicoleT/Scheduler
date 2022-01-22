descriptionEl = document.querySelector(".description")
currentDayEl = document.querySelector("#currentDay")

var today = moment(); 
currentDayEl.textContent = today.format("MMM DD, YYYY");



/*InputFunction to so user can enter in tasks*/
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block

$(".description").on("click", "textarea", function() {
  console.log("text was clicked");
});
// var appointment = {};
// table.onclick = function(event) {
//   let  = event.target.closest('textarea'); 

  // if (!td) return; /

  // if (!table.contains(td)) return; /

  // highlight(td); /
};




/*SAve the information in Local storage so user can access even if they closed window
//preventdefault 
// THEN the text for that event is saved in local storage
// var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

$(".list-group").on("click", "p", function() {
//put the text into a paragraph input form
  var text = $(this)
    .text()
    .trim();
    console.log(text);
    
    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);
  
  $(this).replaceWith(textInput);

/WHEN I refresh the page
// THEN the saved events persist
var loadTasks = function() {

  tasks = JSON.parse(localStorage.getItem("tasks"));
//change event..
$(".list-group").on("change", "input[type='text']", function() {
  // get current text
  var date = $(this)
    .val()
    .trim();

  // get the parent ul's id attribute
  var status = $(this)
    .closest(".list-group")
    .attr("id")
    .replace("list-", "");


/*jquery for the color change for past/ present future/*/

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// var reminder = function(appointmentEl) {
//     // get date from task element
//     var date = $(appointmentEl).find("description").text().trim();
   
//     // convert to moment object at 5:00pm
//     var time = moment(date, "L").set("hour", 17);
    
//     // remove any old classes from element
//     $(appointmentEl).removeClass("list-group-item-warning list-group-item-danger");
  
//     // apply new class if task is near/over due date
//     if (moment().isAfter(time)) {
//       $(appointmentEl).addClass("list-group-item-danger");
//     }
//     // apply new class if appointment is near/over due date
//     if (moment().isAfter(time)) {
//       $(appointmentEl).addClass("list-group-item-danger");
//     } 
//     else if (Math.abs(moment().diff(time, "days")) <= 2) {
//       $(appointmentEl).addClass("list-group-item-warning");
//     }
//   };