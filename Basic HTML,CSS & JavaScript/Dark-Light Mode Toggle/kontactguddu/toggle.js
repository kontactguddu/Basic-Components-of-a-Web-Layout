// Get DOM Elements
const toggleBtn = document.querySelector('#checkbox-mode');
const toggleText = document.querySelector('#toggle-text');
const bulb = document.querySelector('#bulb');
const body = document.querySelector('body')
const subBox = document.querySelector('#sub-box');

var toogleMode = false;



// Events
toggleBtn.addEventListener('click', lightMode);

// Custom function
function lightMode() {
    if(!toogleMode){
    toggleText.innerHTML = "Now you are in Light Mode";
    bulb.setAttribute('src', 'images/pic_bulbon.gif')
    body.style.background = "#fff";
    subBox.style.background = "#fff";
    toogleMode = true;
    } else {
        toggleText.innerHTML = "Toggle to change your Mode";
        bulb.setAttribute('src', 'images/pic_bulboff.gif');
        body.style.background = "#413737";
        subBox.style.background = "#beb4b4";
        toogleMode = false;
    }
    
  }
  
