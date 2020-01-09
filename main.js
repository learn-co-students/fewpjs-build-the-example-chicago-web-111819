// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorDiv = document.getElementById('modal')

// Your JavaScript code goes here!

const glyphHeart = document.getElementsByClassName('like-glyph')[0]

errorDiv.classList.add('hidden');

// document.addEventListener('DOMContentLoaded', function(){
//   errorDiv.classList.add('hidden');
// })

glyphHeart.addEventListener("click", function() {
  // console.log('clicked!')
  if (glyphHeart.innerText === EMPTY_HEART){
    glyphHeart.innerText = FULL_HEART
    glyphHeart.classList.add('activated-heart')
  } else if (glyphHeart.innerHTML === FULL_HEART) {
    glyphHeart.innerHTML = EMPTY_HEART
    glyphHeart.classList.remove('activated-heart')
  }
  // document.getElementById('modal').display = "block";

})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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

// function myFunction() {
//   var element = document.getElementById("myDIV");
//   element.classList.add("mystyle");
// }