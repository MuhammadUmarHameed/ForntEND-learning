const navBtn = document.querySelector('#nav-toggle');
const navLink = document.querySelector('#nav-links');

navBtn.addEventListener('click', function () {
  navLink.classList.toggle('show-links');
});
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear());

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
