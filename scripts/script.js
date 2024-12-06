// section 2 menu
// menu buttons
document.addEventListener('DOMContentLoaded', () => {
  // Menu buttons
  const menuItems = document.querySelectorAll('.code-menu li')

  // Content sections
  const contentContainers = document.querySelectorAll('.content-container1, .content-container2, .content-container3, .content-container4');

  menuItems.forEach(item => {
      item.addEventListener('click', () => {
          // Remove 'active-menu' class from all menu items
          menuItems.forEach(i => i.classList.remove('active-menu'))

          // Add 'active-menu' class to the clicked menu item
          item.classList.add('active-menu')

          // Get the target content container based on the data attribute
          const targetId = item.getAttribute('data-target')

          // Hide all content containers
          contentContainers.forEach(container => {
              container.style.display = 'none'
          });

          // Show the targeted content container
          if (targetId) {
              const targetContainer = document.querySelector(`.${targetId}`)
              if (targetContainer) {
                  targetContainer.style.display = 'block'
                  item.classList.add('active-menu')
              }
          }
      })
  })
})








//section-4 card stack
const cardsContainer = document.querySelector('.section-4-article-wrapper');
const cards = document.querySelectorAll('.cards');

cardsContainer.style.setProperty('--cards-count', cards.length);
cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`);

Array.from(cards).forEach((card, index) => {
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

