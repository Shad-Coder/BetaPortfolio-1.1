

const btn = document.querySelector(".btn-toggle");
const sideBar = document.querySelector('#sidebar');
const parent = document.querySelector('.MapToggle')
const soparent = document.querySelector('#tre')
parent.addEventListener('click', function () {
  sideBar.classList.toggle("dis");
  sideBar.classList.toggle("frame");
  parent.classList.toggle('MapToggle1');
  soparent.classList.toggle("MapToggle2");
 
});
soparent.addEventListener('click', function () {
  sideBar.classList.toggle("dis");
  sideBar.classList.toggle("frame");
  parent.classList.toggle('MapToggle1');
  soparent.classList.toggle("MapToggle2");
})
btn.addEventListener("click", function () {

  
  document.body.classList.toggle("dark-theme");
});

