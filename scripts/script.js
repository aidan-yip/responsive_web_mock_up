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
