// Dora Wu's Final Project: Second Page
const canvas = document.getElementById('turtle');
const context = canvas.getContext('2d');

let width;
let height;

let pxScale = window.devicePixelRatio;

let video = document.querySelector('video');

function setup() {
     width = canvas.width;
     height = canvas.height;

     canvas.style.width = width + 'px';
     canvas.style.height = height + 'px';

     canvas.width = width * pxScale;
     canvas.height = height * pxScale;

     context.scale(pxScale, pxScale);

     video.play();
}

let imgScale = 10;

function draw() {
     context.drawImage(video, 0, 0, 1250 / (imgScale * pxScale), 685  / (imgScale * pxScale));

     let imageData = context.getImageData(0, 0, width/imgScale, height/imgScale);
     let data = imageData.data;

     context.clearRect(0, 0, width, height);

     for (let y = 0; y < imageData.height; y++) { 
          for (let x = 0; x < imageData.width; x++) {
               let index = (x + y * imageData.width) * 4; 
               let r = data[index + 0]; 
               let g = data[index + 1]; 
               let b = data[index + 2]; 
               let a = data[index + 3]; 

               context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ', 1)';
               context.save();
               context.fillRect(x * imgScale, y * imgScale, 3, 10);
               context.fill();
               context.restore();
          }
     }
     requestAnimationFrame(draw);
}

setup();
video.addEventListener('play', draw);