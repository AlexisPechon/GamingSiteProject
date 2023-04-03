// *Author: Alexis Pechon
// *Student Number: x19358953
// *Student Email: x19358953@student.ncirl.ie
// *File: function.js
// *Date: 28/02/2023

//The purpose of the JavaScript file is to control the website's functionalities
//this is mainly used in the login section of the webite

//alert("Hello World!");

//Creates a popup that asks the user for their input
let userName = "";
let popup = prompt("Please enter your name", userName);

//If else statement that displays the name of the user they put in on the website itself
if (popup != "") {
    document.getElementById("greetings").innerHTML =
    "Welcome back " + popup + "! How are you today?";
}
else{
    document.getElementById("greetings").innerHTML =
    "Welcome back User!" + " How are you today?";
}
