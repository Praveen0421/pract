let body = document.querySelector('body');
body.style.backgroundColor="blue";
let btn = document.querySelector('.btn');
let btn1 = document.querySelector('.btn1')
function changetoRed() {
  body.style.backgroundColor="red";
}
var vallu= false;

function changetoBlack() {
  body.style.backgroundColor="black";
}
btn1.innerHTML='ok'

btn1.addEventListener('click',()=>{
  if (vallu == true) {
    let btn = document.querySelector('.btn');
    btn.innerHTML="black"
    btn.addEventListener('click',changetoBlack)
  }
  else if (vallu == false) {
    let btn = document.querySelector('.btn');
    btn.innerHTML="red"
    btn.addEventListener('click',changetoRed)
  }
});


