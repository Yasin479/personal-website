// Jumps to the beginning of the page when reloaded
window.history.scrollRestoration = 'manual';

// Typing animation
const heading = "Front End Developer near Munich";
let i = 0;

const typing = () => {
  if(i < heading.length) {
    document.querySelector(".landing-heading").innerHTML += heading.charAt(i);
    i++;

    setTimeout(typing, 150);
  }
}

typing();

// Makes the button appear after the typing animation ends
var button = document.getElementById("cta-button");
button.style.opacity = 0;
button.style.visibility = 'hidden';

function appear(){
  setTimeout( () => {
    button.style.opacity = 1;
    button.style.visibility = 'visible';
  }, 5500);
}

appear();








