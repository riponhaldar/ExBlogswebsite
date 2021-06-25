const navToggle = document.querySelector('.nav-toggle');
const btn = document.getElementById('btn');
const links = document.querySelector('.nav_links');

btn.addEventListener('click', function () {
  links.classList.toggle('show-links');
});

// var header = document.getElementById('myHeader');
// var sticky = header.offsetTop;

// window.onscroll = () => {
//   if (window.pageYOffset > sticky) {
//     header.classList.add('sticky');
//   } else {
//     header.classList.remove('sticky');
//   }
// };
