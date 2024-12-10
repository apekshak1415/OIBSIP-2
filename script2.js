const imageContainer = document.querySelector('.image-container');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let currentIndex = 0;

const scrollImages = (direction) => {
  const images = document.querySelectorAll('.image-container img');
  const totalImages = images.length;

  // Adjust current index
  currentIndex = (currentIndex + direction + totalImages) % totalImages;

  // Move image container
  imageContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
};

leftBtn.addEventListener('click', () => scrollImages(-1));
rightBtn.addEventListener('click', () => scrollImages(1));
