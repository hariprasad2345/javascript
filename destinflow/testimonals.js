
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carousel = document.querySelector('.testimonial-carousel');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
carousel.scrollBy({
left: carousel.offsetWidth,
behavior: 'smooth'
});
});

prevBtn.addEventListener('click', () => {
carousel.scrollBy({
left: -carousel.offsetWidth,
behavior: 'smooth'
});
});