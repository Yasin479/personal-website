// Jumps to the beginning of the page when reloaded
window.history.scrollRestoration = 'manual';

// Displaying the full description
// Full description Project 1
document.getElementById('card-1-plus').addEventListener
('click', () => {
  document.getElementById('logo').style.display = 'none';
  document.querySelector('.full-description').style.cssText = 'opacity: 1; visibility: visible';
});

document.querySelector('.x-btn').addEventListener
('click', () => {
    document.querySelector('.full-description').style.cssText = 'opacity: 0; visibility: hidden';
    document.getElementById('logo').style.display = 'flex';
});

// Full description Project 2
document.getElementById('card-2-plus').addEventListener
('click', () => {
  document.getElementById('logo').style.display = 'none';
  document.querySelector('.full-description').style.cssText = 'opacity: 1; visibility: visible';
});

// Full description Project 3
document.getElementById('card-3-plus').addEventListener
('click', () => {
  document.getElementById('logo').style.display = 'none';
  document.querySelector('.full-description').style.cssText = 'opacity: 1; visibility: visible';
});