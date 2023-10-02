const buttons = document.querySelectorAll('button');
const assistMessage = document.querySelector('#card-content');
const message = document.querySelector('#content');

const promptMessage = [
  {
    text: "Here you get to access a diverse range of high-quality products, carefully curated to meet your needs."
  },
  {
    text: "This is your gateway to exciting adventures and discoveries. Click here to embark on a journey through a world of information, inspiration, and new experiences."
  },
  {
    text: "This is your lifeline to assistance and guidance. Whenever you need help or have questions, click here to access our dedicated support team."
  },
  {
    text: "Your gateway to quick access to answers. Explore our Frequently Asked Questions to find solutions to common queries and gain valuable insights."
  },
  {
    text: "Discover how to kickstart your adventure, unlock exclusive benefits, and begin your exciting journey with ease."
  }
];

buttons.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    assistMessage.innerHTML = '';
    message.innerHTML = '';

    // Create a new element for the message
    const newMessage = document.createElement('div');
    newMessage.innerHTML = `<p class="pop-message">${promptMessage[index].text}</p>`;
    newMessage.classList.add('prompt-message'); 

    // Create a new image element
    const newImage = document.createElement('img');
    newImage.src = 'walking.gif'; 
    assistMessage.appendChild(newImage);
    assistMessage.appendChild(newMessage);

    const buttonRect = button.getBoundingClientRect();
    const topPosition = buttonRect.top + buttonRect.height; 
    const leftPosition = buttonRect.left;

    newImage.style.position = 'absolute';
    newImage.style.top = `${topPosition}px`;
    newImage.style.left = `${leftPosition}px`;

    newMessage.style.position = 'absolute';
    newMessage.style.top = `${topPosition + newImage.clientHeight}px`; 
    console.log(newImage.clientHeight)
    newMessage.style.left = `${leftPosition}px`;
  });
});
