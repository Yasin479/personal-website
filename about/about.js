// Jumps to the beginning of the page when reloaded
window.history.scrollRestoration = 'manual';

// Typing animation
const heading = "Hi, I'm Yasin";
let i = 0;

const typing = () => {
  if(i < heading.length) {
    document.querySelector(".description-heading").innerHTML += heading.charAt(i);
    i++;

    setTimeout(typing, 150);
  }
}

typing();