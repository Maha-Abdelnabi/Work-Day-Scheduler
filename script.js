//select elements
var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = dayjs().format("dddd, MMMM D");


// PAST, PRESENT OR FUTURE
var nowTime = dayjs().format("H");
console.log(nowTime);

//each: for each element have the same class or id ,,check if(no neeed to add any effect like click) the function applies on it then add or remove class

  $(".time-block").each(function () {
    var currentHour = parseInt($(this).attr("value"));
    //parseInt ignores the string in the element and gets only the num
     //Added a value attribute to each time block in html..and getting this value and compare it with the actual time

    console.log(this);

    if (currentHour < nowTime) { //value < time show past
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (currentHour > nowTime) {//value > time show future
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else {
      $(this).removeClass("future"); //value = time show present
      $(this).removeClass("past");
      $(this).addClass("present");
    }
  });




// var submitBtn = document.querySelector(".saveBtn");
// $("button").on("click", function () {
//   var time = $(this).text();
//   var textEntry = $(this).val(".description");

//   localStorage.setItem(time, textEntry);
// });

// function userEntry() {
//   $(".hour").each(function () {
//     var currentHour = $(this).text();
//     var recordEntry = localStorage.getItem(currentHour);

//     if (currentHour !== null) {
//       $(this).siblings(".description").val(recordEntry);
//     }
//   });
// }


//Assign saveBtn click listener for user input and time stamp??
// var submitBtn = document.querySelector('.saveBtn');
//     $(".saveBtn").on("click", function () {//on method attaches one or more of the selected element..it takes the events then the action..the saveBtn is the child selector
//         //get nearby values.
//         console.log(this);//this refers to button
//         var text = $(this).siblings(".description").val();
//         var time = $(this).parent().attr("id");

//            //set items in local storage.
//         localStorage.setItem(time, text);
//     });

//     function userEntry() {
//       $(".hour").each(function () {
//         var currentHour = $(this).text();
//         var recordEntry = localStorage.getItem(currentHour);

//         if (currentHour !== null) {
//           $(this).siblings(".description").val(recordEntry);
//         }
//       });
//     }
