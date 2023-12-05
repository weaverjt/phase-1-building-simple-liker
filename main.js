// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//function for setTimeout 
function pause () {document.getElementById("modal").classList.add("hidden")}

//selectors for heart containers
const heart1 = document.getElementById("heart1");
const heart2 = document.getElementById("heart2");
const heart3 = document.getElementById("heart3");
const heart4 = document.getElementById("heart4");
//hearts array
const hearts = [heart1, heart2, heart3, heart4];
//add event listener to each heart
hearts.forEach(listen);

//event listener with mimic func and .then/.catch cain
function listen (element) {
  element.addEventListener("click", function (){ 
  mimicServerCall()
  .then(response => {
    if (element.classList.contains("activated-heart")) {
      element.classList.remove("activated-heart")}
    else {element.classList.add("activated-heart")}
      console.log(response);
  })
  .catch((error) => {
    document.getElementById("modal").classList.remove("hidden")
    setTimeout(pause, 3000)
    console.log(error);    
  })
    
  });
}








//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
