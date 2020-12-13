
// LOGIС SLIDER

let position = 0;
const slidesToShow = 4;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');
const btnPrev = document.querySelector('.arrows-right');
const btnNext = document.querySelector('.arrows-left');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

// BUTTON NEXT

btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
    
});

// BUTTON PREV

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
  
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
   
    setPosition();
    checkBtns();
      
  });

// POSITION SLIDER

  const setPosition = () => {
      track.style.transform = `translateX(${position}px)`;
  };

//  DISABLED OR NO BUTTONS 

  const checkBtns = () => {
      btnPrev.disabled = position === 0;
      btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  }; 

  checkBtns();