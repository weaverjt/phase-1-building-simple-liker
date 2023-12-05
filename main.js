// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//selector for heart container
const heart = document.querySelector(".like-glyph");
//function for setTimeout 
function pause () {document.getElementById("modal").classList.add("hidden")}

//heart state true

//heart state false
function hasClass(element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}


//event listener with mimic func and .then/.catch cain
heart.addEventListener("click", function (){ 
  mimicServerCall()
  .then(response => {
    
    heart.classList.add("activated-heart")
    console.log(response);
  })
  .catch((error) => {
    document.getElementById("modal").classList.remove("hidden")
    setTimeout(pause, 3000)
    console.log(error);    
  })
    
  });
 








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
