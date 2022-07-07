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

const box1 = document.getElementById('Test');
const box2 = document.getElementById('Test2');

box1.onfocus = function (Testing) {
  if (box2.classList.contains('footerSubmit') == true){
    box2.classList.add('test');
    box2.classList.remove('footerSubmit');
    console.log("test pass");
  }
}

box1.onblur = function (remove) {
  if (box2.classList.contains('test')){
    box2.classList.add('footerSubmit');
    box2.classList.remove('test');
    console.log("test fail");
  }
}
