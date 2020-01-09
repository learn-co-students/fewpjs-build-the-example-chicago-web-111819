// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// handle on DOM elements
const errorModal = document.querySelector("#modal");
const errorMsg = document.querySelector("#modal-message");

// Hide the error modal
hideError();

let heartStates = { "♡": FULL_HEART, "♥": EMPTY_HEART };
let littleHearts = document.querySelectorAll(".like-glyph");

function littleHeartLiking(e) {
  let urls = { good: "http://localhost:3000/dogs", bad: "funnyUrl" };
  let lovingHeart = e.target;
  mimicServerCall(urls.bad)
    .then(data => {
       lovingHeart.innerText = heartStates[lovingHeart.innerText];
       lovingHeart.classList.toggle("activated-heart");
    })
    .catch(error => {
      errorModal.classList.remove("hidden");
      errorMsg.innerHTML = error.message;
      setTimeout(() => { hideError() }, 5000);
    });
}

for (let littleHeart of littleHearts) {
  littleHeart.addEventListener("click", littleHeartLiking);
}

function hideError() {
  errorModal.classList.add("hidden");
}


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
