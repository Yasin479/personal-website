// Makes the arrow appear after the loading animation
var arrow = document.getElementById('arrow');
arrow.style.opacity = 0;
arrow.style.visibility = 'hidden';

function appear(){
  setTimeout( () => {
    arrow.style.opacity = 1;
    arrow.style.visibility = 'visible';
  }, 1000);
}

appear();
