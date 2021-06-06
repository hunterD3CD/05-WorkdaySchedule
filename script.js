// ------------------------------------ESTABLISHING VARIABLES-----------------------------------
// variable: current day
var dayE1 = $("#currentDay");
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
