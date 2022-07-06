const slider = document.querySelector('.nj-items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});




// script for box hover shadow 

var box1 = document.getElementById('Test');
var box2 = document.getElementById('Test2');

// box2.classList.contains('footerSubmit')

box1.onclick = function (Testing) {
  if (box2 !== box2.classList.contains('footerSubmit')){
  console.log("test pass");
  }
  
}