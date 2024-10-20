function adaptToScreen() {
    const body = document.querySelector('body');
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');
    const mainInf = document.querySelector('.main-inf');
    const rightImages = document.querySelector('.right-images');
    const rightImageDivs = rightImages.querySelectorAll('div');
  
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 768) { // Adjust breakpoint as needed
      // Mobile view adjustments
      title.style.fontSize = '3rem';
      subtitle.style.fontSize = '1.5rem';
      mainInf.style.width = '90%';
      mainInf.style.fontSize = '1.2rem';
      rightImages.style.display = 'none'; // Hide right images on small screens
    } else {
      // Desktop view adjustments
      title.style.fontSize = '5rem';
      subtitle.style.fontSize = '2.375rem';
      mainInf.style.width = '53.75rem';
      mainInf.style.fontSize = '1.5rem';
      rightImages.style.display = 'flex'; // Show right images on larger screens
    }
  
    // Adjust right image divs based on screen width
    rightImageDivs.forEach(div => {
      const imageText = div.querySelector('.image-text');
      const image = div.querySelector('img');
  
      if (screenWidth <= 768) {
        imageText.style.fontSize = '1.5rem';
        image.style.height = '120px';
      } else {
        imageText.style.fontSize = '2.4375rem';
        image.style.height = '150px';
      }
    });
  }
  
  window.addEventListener('resize', adaptToScreen);
  adaptToScreen();