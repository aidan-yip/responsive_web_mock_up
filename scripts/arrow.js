const slideLeft = document.getElementById('Slideleft');
const slideRight = document.getElementById('slideRight');
const cardsContainer = document.querySelector('.testimonial-cards');

// Scroll the container 50% of its width to the right or left
slideLeft.addEventListener('click', () => {
  cardsContainer.scrollBy({
    left: -cardsContainer.offsetWidth / 2,
    behavior: 'smooth'
  });
});

slideRight.addEventListener('click', () => {
  cardsContainer.scrollBy({
    left: cardsContainer.offsetWidth / 2,
    behavior: 'smooth'
  });
});
