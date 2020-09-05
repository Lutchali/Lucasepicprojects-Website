console.log("Hello World");
/*Shows in the console the user choice*/
var userChoice = 0;

$( document ).ready(function() {
    console.log( "ready!" );
    setup();
});

//looks wich Buton is pressed
function setup() { 
    $('#home').click(function() {
        checkResult(00);
    })
    $('#about').click(function() {
        checkResult(01);
    })
    $('#ourTeam').click(function() {
        checkResult(02);
    })
    $('#campSites').click(function() {
        checkResult(03);
    })
    $('#missionAndVision').click(function() {
        checkResult(04);
    })
    $('#recources').click(function() {
        checkResult(05);
    })
    $('#tingsYouCanDo').click(function() {
        checkResult(06);
    })
    $('#activities').click(function() {
        checkResult(07);
    })
    $('#parks').click(function() {
        checkResult(08);
    })
    $('#shops').click(function() {
        checkResult(09);
    })
    $('#events').click(function() {
        checkResult(10);
    })
    $('#contact').click(function() {
        checkResult(11);
    })
    $('#map').click(function() {
        checkResult(12);
    })
    $('#directions').click(function() {
        checkResult(13);
    })
    $('#news').click(function() {
        checkResult(14);
    })
   
    checkResult();
}
function checkResult(userChoice) {
    console.log(userChoice)
}