// ------------------------------------ESTABLISHING VARIABLES-----------------------------------
// variable: current day
var dayE1 = $("#currentDay");
var timeE1 = $("#currentTime");
// variable: description for each time
var div9 = $("#div9");
var div10 = $("#div10");
var div11 = $("#div11");
var div12 = $("#div12");
var div13 = $("#div13");
var div14 = $("#div14");
var div15 = $("#div15");
var div16 = $("#div16");
var div17 = $("#div17");
// variable: save buttons
var btn9 = $("#btn9");
var btn10 = $("#btn10");
var btn11 = $("#btn11");
var btn12 = $("#btn12");
var btn13 = $("#btn13");
var btn14 = $("#btn14");
var btn15 = $("#btn15");
var btn16 = $("#btn16");
var btn17 = $("#btn17");
var btnClear = $("#btnClear");
// variable: current time
var timeNow = parseInt(moment().format("HH"));
// console.log(timeNow);

// ------------------------------------SAVING TO LOCAL STORAGE-----------------------------------
btn9.click(function () {
  localStorage.setItem("input9", div9.val());
});

btn10.click(function () {
  localStorage.setItem("input10", div10.val());
});

btn11.click(function () {
  localStorage.setItem("input11", div11.val());
});

btn12.click(function () {
  localStorage.setItem("input12", div12.val());
});

btn13.click(function () {
  localStorage.setItem("input13", div13.val());
});

btn14.click(function () {
  localStorage.setItem("input14", div14.val());
});

btn15.click(function () {
  localStorage.setItem("input15", div15.val());
});

btn16.click(function () {
  localStorage.setItem("input16", div16.val());
});

btn17.click(function () {
  localStorage.setItem("input17", div17.val());
});
// ------------------------------------RETRIEVING FROM LOCAL STORAGE---------------------------------------------
div9.val(localStorage.getItem("input9"));
div10.val(localStorage.getItem("input10"));
div11.val(localStorage.getItem("input11"));
div12.val(localStorage.getItem("input12"));
div13.val(localStorage.getItem("input13"));
div14.val(localStorage.getItem("input14"));
div15.val(localStorage.getItem("input15"));
div16.val(localStorage.getItem("input16"));
div17.val(localStorage.getItem("input17"));

// ------------------------------------CLEAR THE LOCAL STORAGE-------------------------------------------------
function clear() {
  localStorage.clear();
}
btnClear.click(function () {
  clear();
});

// ------------------------------------CURRENT TIME: run the time--------------------------------------------------------------
function clock() {
  dayE1.text(moment().format("dddd MMM Do YY"));
  timeE1.text(moment().format("hh:mm:ss a"));
}
clock();
setInterval(clock, 1000);

// ------------------------------------CHECKING THE TIME: past, present, future----------------------------------
function checkTime() {
  // 9
  if (parseInt(div9.attr("data-hour")) > timeNow) {
    div9.addClass("future");
  } else if (parseInt(div9.attr("data-hour")) === timeNow) {
    div9.addClass("present");
  } else {
    div9.addClass("past");
  }
  // 10
  if (parseInt(div10.attr("data-hour")) > timeNow) {
    div10.addClass("future");
  } else if (parseInt(div10.attr("data-hour")) === timeNow) {
    div10.addClass("present");
  } else {
    div10.addClass("past");
  }
  // 11
  if (parseInt(div11.attr("data-hour")) > timeNow) {
    div11.addClass("future");
  } else if (parseInt(div11.attr("data-hour")) === timeNow) {
    div11.addClass("present");
  } else {
    div11.addClass("past");
  }
  // 12
  if (parseInt(div12.attr("data-hour")) > timeNow) {
    div12.addClass("future");
  } else if (parseInt(div12.attr("data-hour")) === timeNow) {
    div12.addClass("present");
  } else {
    div12.addClass("past");
  }
  // 13
  if (parseInt(div13.attr("data-hour")) > timeNow) {
    div13.addClass("future");
  } else if (parseInt(div13.attr("data-hour")) === timeNow) {
    div13.addClass("present");
  } else {
    div13.addClass("past");
  }
  // 14
  if (parseInt(div14.attr("data-hour")) > timeNow) {
    div14.addClass("future");
  } else if (parseInt(div14.attr("data-hour")) === timeNow) {
    div14.addClass("present");
  } else {
    div14.addClass("past");
  }
  // 15
  if (parseInt(div15.attr("data-hour")) > timeNow) {
    div15.addClass("future");
  } else if (parseInt(div15.attr("data-hour")) === timeNow) {
    div15.addClass("present");
  } else {
    div15.addClass("past");
  }
  // 16
  if (parseInt(div16.attr("data-hour")) > timeNow) {
    div16.addClass("future");
  } else if (parseInt(div16.attr("data-hour")) === timeNow) {
    div16.addClass("present");
  } else {
    div16.addClass("past");
  }
  // 17
  if (parseInt(div17.attr("data-hour")) > timeNow) {
    div17.addClass("future");
  } else if (parseInt(div17.attr("data-hour")) === timeNow) {
    div17.addClass("present");
  } else {
    div17.addClass("past");
  }
}
// run the function
checkTime();
