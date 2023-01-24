// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var formEl = $('#skills-form');
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var hour = dayjs().hour();
  console.log(hour)
  console.log(target)
  for(i=1; i<= 24; i++){
   
    var target = $('#hour-'+i);
    if(i == hour) {
      target.addClass('present')
    }else if(i<hour){
      target.addClass('past')
    }
  };
  var handleFormSubmit = function (event) {
    event.preventDefault();
  
    var nameInput = nameInputEl.val();
    var dateInput = dateInputEl.val();
  
    if (!nameInput || !dateInput) {
      console.log('You need to fill out the form!');
      return;
    }
  
    printSkills(nameInput, dateInput);
  
    nameInputEl.val('');
    dateInputEl.val('');
  };
  formEl.on('submit', handleFormSubmit);
    let sb1 = $("#saveBtn-Id-1");//sb1 is saveBtnId1
    let sb2 = $("#saveBtn-Id-2");
    let sb3 = $("#saveBtn-Id-3");
    let sb4 = $("#saveBtn-Id-4");
    let sb5 = $("#saveBtn-Id-5");
    let sb6 = $("#saveBtn-Id-6");
    let sb7 = $("#saveBtn-Id-7");
    let sb8 = $("#saveBtn-Id-8");
    let sb9 = $("#saveBtn-Id-9");

    let  td1 = $("#input-field-1");//td1 is 
    let  td2 = $("#input-field-2");
    let  td3 = $("#input-field-3");
    let  td4 = $("#input-field-4");
    let  td5 = $("#input-field-5");
    let  td6 = $("#input-field-6");
    let  td7 = $("#input-field-7");
    let  td8 = $("#input-field-8");
    let  td9 = $("#input-field-9");


    let storedInput;

    //click events for each save button 

    $(sb1).on("click", function (event) {
      event.preventDefault();
      let  td1 = $("#input-field-1").val().trim();
      localStorage.setItem("toDo1", ( td1));
    });
    let savedInput1 = (localStorage.getItem("toDo1"));
     td1.val(savedInput1);

    $(sb2).on("click", function (event) {
      event.preventDefault();
      let  td2 = $("#input-field-2").val().trim();
      localStorage.setItem("toDo2", ( td2));
    });
    let savedInput2 = (localStorage.getItem("toDo2"));
     td2.val(savedInput2);

    $(sb3).on("click", function (event) {
      event.preventDefault();
      let  td3 = $("#input-field-3").val().trim();
      localStorage.setItem("toDo3", ( td3));
    });
    let savedInput3 = (localStorage.getItem("toDo3"));
     td3.val(savedInput3);

    $(sb4).on("click", function (event) {
      event.preventDefault();
      let  td4 = $("#input-field-4").val().trim();
      localStorage.setItem("toDo4", ( td4));
    });
    let savedInput4 = (localStorage.getItem("toDo4"));
     td4.val(savedInput4);

    $(sb5).on("click", function (event) {
      event.preventDefault();
      let  td5 = $("#input-field-5").val().trim();
      localStorage.setItem("toDo5", ( td5));
    });
    let savedInput5 = (localStorage.getItem("toDo5"));
     td5.val(savedInput5);

    $(sb6).on("click", function (event) {
      event.preventDefault();
      let  td6 = $("#input-field-6").val().trim();
      localStorage.setItem("toDo6", ( td6));
    });
    let savedInput6 = (localStorage.getItem("toDo6"));
     td6.val(savedInput6);

    $(sb7).on("click", function (event) {
      event.preventDefault();
      let  td7 = $("#input-field-7").val().trim();
      localStorage.setItem("toDo7", ( td7));
    });
    let savedInput7 = (localStorage.getItem("toDo7"));
     td7.val(savedInput7);

    $(sb8).on("click", function (event) {
      event.preventDefault();
      let  td8 = $("#input-field-8").val().trim();
      localStorage.setItem("toDo8", ( td8));
    });
    let savedInput8 = (localStorage.getItem("toDo8"));
     td8.val(savedInput8);

    $(sb9).on("click", function (event) {
      event.preventDefault();
      let  td9 = $("#input-field-8").val().trim();
      localStorage.setItem("toDo9", ( td9));
    });
    let savedInput9 = (localStorage.getItem("toDo9"));
     td9.val(savedInput9);
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
