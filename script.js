//select elements
var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = dayjs().format("dddd, MMMM D");

//main funtion
function schedulePlan(){

//now time
var nowTime = dayjs().format("h");
console.log(nowTime);



  $(".time-block").each(function () {
    var currentHour = parseInt($(this).attr("value"));
    console.log(this);
    //each: for each element have the same class or id ,,check if(no need to add any effect like click) the function applies on it then add or remove class
    //parseInt ignores the string in the element and gets only the num
    //Added a value attribute to each time block in html..and getting this value and compare it with the actual time

    // PAST, PRESENT OR FUTURE
    if (currentHour < nowTime) {
      //value < time,show past
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (currentHour > nowTime) {
      //value > time, show future
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else {
      $(this).removeClass("future"); //value = time, show present
      $(this).removeClass("past");
      $(this).addClass("present");
    }
  });


// When user clicks on save button the entry in schedule is saved to local storage.
 $(".saveBtn").on("click", function () {
   //on attaches one or more of the selected element..it takes the events then the action..the saveBtn is the child selector
   var time = $(this).siblings(".hour").text(); //attaches the button with it's sibling the hour
   var textEntry = $(this).siblings(".description").val(); //attaches the button with it's sibling the textarea
   alert("Your plan is saved!");
   localStorage.setItem(time, textEntry); //The setItem() add the key to the storage, get keyname (time), and value (textentry)
 });

  //When page is refreshed the input schedule persist.
  function refreshPage() {
    $(".hour").each(function () {
      var currentTime = $(this).text();
      var returnEntry = localStorage.getItem(currentTime); //The getItem takes a key name, and return that key's value, or null if the key does not exist, in the given Storage object.

      if (currentTime !== null) {
        $(this).siblings(".description").val(returnEntry);
      }
    });
  }

  refreshPage();

}
schedulePlan();




