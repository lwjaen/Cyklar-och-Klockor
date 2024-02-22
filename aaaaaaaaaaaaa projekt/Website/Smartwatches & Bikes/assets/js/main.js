
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
// Add a click to the navigation button
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// Add a click to the close button
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Selects elements with 'nav__link'
const navLink = document.querySelectorAll('.nav__link')

// This handels link clicks
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('show-menu')
}
// Adds event listener to navigation links
navLink.forEach(n => n.addEventListener('click', linkAction))

// Handels header scrolling effects 
function scrollHeader(){
    const header = document.getElementById('header')
    
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

// Add a scroll event listener to the window
window.addEventListener('scroll', scrollHeader)

// Controlls the toggle items
const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

// Selects elements with 'nav__link'
const sections = document.querySelectorAll('section[id]')

// Controlls the aktiv links
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
              
        // Check if the link is updated and in viewport
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
// Tracks the aktiv link and adds event listener.
window.addEventListener('scroll', scrollActive)


// Showes and hides scroll
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    
    // Showes the scroll when going down
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
// Event listener get added to scroll-to-to button.
window.addEventListener('scroll', scrollUp)



const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')




themeButton.addEventListener('click', () => {
   
    
    themeButton.classList.toggle(iconTheme)
    // Store the current icon choice in local storage
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//ScrollReveal configuration for animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

// Apply ScrollReveal animation to various elements
sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay: 500})
sr.reveal(`.home__social`, {delay: 600})
sr.reveal(`.about__img, .contact__box`,{origin: 'left'})
sr.reveal(`.about__data, .contact__form`,{origin: 'right'})
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`,{interval: 100})