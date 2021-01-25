// Jumps to the beginning of the page when reloaded
window.history.scrollRestoration = 'manual';
// Makes the full description show up

// Full description Project 1
document.querySelector('.fa-plus').addEventListener
('click', () => {
  document.getElementById('logo').style.display = 'none';
  document.querySelector('.full-description').style.cssText = 'opacity: 1; visibility: visible';
});

document.querySelector('.x-btn').addEventListener
('click', () => {
    document.querySelector('.full-description').style.cssText = 'opacity: 0; visibility: hidden';
    document.getElementById('logo').style.display = 'flex';
});