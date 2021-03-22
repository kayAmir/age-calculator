// this is the first project for js 
var input = prompt('What Is Your Age?');
// the data 
document.write('Your Age In Years Is: ' + input + '<br>' + '<br>');
var days = input * 365;
document.write('Your age in days is: ' + days + '<br>' + '<br>');
var hours = days * 24;
document.write('Your Age In Hours Is: ' + hours + '<br>' + '<br>');
var minutes = hours * 60;
document.write('Your Age In Minutes Is: ' + minutes + '<br>' + '<br>');
var seconds = minutes * 60;
document.write('Your Age In seconds Is: ' + seconds + '<br>' + '<br>');
// the advice
if(input > 40){
    document.write('<h3>you are about to get old enjoy your life</h3>');
}else{
    document.write('<h3>Enjoy your life and achieve your dreams because life is fast</h3>');
}