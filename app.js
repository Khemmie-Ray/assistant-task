const productBtn = document.querySelector('#product')
const exploreBtn = document.querySelector('#explore')
const supportBtn = document.querySelector('#support')
const faqsBtn = document.querySelector('#faqs')
const getStartedBtn = document.querySelector('#get-started')
const assistMessage = document.querySelector('#card-content')

productBtn.addEventListener('click', () => {
    assistMessage.innerHTML = `<div><p>Just dey play</p></div>`
    console.log('clicked')
})