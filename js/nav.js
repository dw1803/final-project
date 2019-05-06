// Dora Wu's Final Project: Navigation Page
const stars = document.getElementById('stars');
let position = 0;
let animation = requestAnimationFrame(skate);

function skate() {
     animation = requestAnimationFrame(skate);

     if (position < 1300) { 
          position += 2; 
          stars.style.left = position + 'px';
     } else {
          position = -1300;
     }
}

function stopAnimation() {
     cancelAnimationFrame(animation); 
}

function startAnimation() {
     cancelAnimationFrame(animation); 
     animation = requestAnimationFrame(skate);
}

document.querySelectorAll('button')[0].addEventListener('click', stopAnimation);
document.querySelectorAll('button')[1].addEventListener('click', startAnimation);
