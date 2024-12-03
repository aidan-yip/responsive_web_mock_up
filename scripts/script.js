// section 2 menu
const menu = document.querySelector('.code-menu')
const menuItems = document.querySelectorAll('.code-menu li')

menuItems.forEach(item => {
    item.addEventListener('click', ()=> {
        menuItems.forEach(i => i.classList.remove('active-menu'))
        item.classList.add('active-menu')
    }) 
})





//section-4 card stack
const cardsContainer = document.querySelector('.section-4-article-wrapper');
const cards = document.querySelectorAll('.cards');

cardsContainer.style.setProperty('--cards-count', cards.length);
cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`);

Array.from(cards).forEach((card, index) => {
  const offsetTop = 20 + index * 20;
  card.style.paddingTop = `${offsetTop}px`;

  if (index === cards.length - 1) {
    return;
  }

  const toScale = 1 - (cards.length - 1 - index) * 0.005;
  const nextCard = cards[index + 1];

  const handleScroll = () => {
    const rect = nextCard.getBoundingClientRect();
    const percentageY = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight - rect.height)));

    card.style.transform = `scale(${1 - (1 - toScale) * percentageY})`;
    card.style.filter = `blur(${4 * percentageY}px)`;
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

