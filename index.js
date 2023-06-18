/* Event Listeners */



/*
function addingEventListener() {
//creating element that is mapped to the id button in index.html
const input = document.getElementById('button');

//Syntax: element.addEventListener(event, function, useCapture);
//event is mapped from index.html
//clickAlert function is in this file
input.addEventListener('click', function() {
    console.log('I was clicked!');
  });

//function executed by the event listener
/*function clickAlert() {
    alert('I was clicked!');
  }

}
*/


function addingEventListener() {
    const input = document.getElementById("button");
    input.addEventListener("click", function () {
      alert("I was clicked!");
    });
  }









