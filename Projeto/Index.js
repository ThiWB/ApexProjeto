function adjustStyles() {
    const width = window.innerWidth;

    // Title adjustments
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');
    const mainInf = document.querySelector('.main-inf');

    // Set font sizes based on screen width
    if (width < 600) {
        title.style.fontSize = '3rem'; // 48px
        subtitle.style.fontSize = '1.5rem'; // 24px
        mainInf.style.width = '100%'; // Full width
        mainInf.style.paddingLeft = '1rem'; // 16px
    } else if (width < 1000) {
        title.style.fontSize = '4rem'; // 64px
        subtitle.style.fontSize = '2rem'; // 32px
        mainInf.style.width = '90%'; // Reduce width
        mainInf.style.paddingLeft = '2rem'; // 32px
    } else {
        title.style.fontSize = '5rem'; // 80px
        subtitle.style.fontSize = '2.375rem'; // 38px
        mainInf.style.width = '53.75rem'; // 860px
        mainInf.style.paddingLeft = '4.1875rem'; // 67px
    }

    // Right images adjustments
    const rightImages = document.querySelector('.right-images');
    const rightImagesDivs = rightImages.querySelectorAll('div');

    if (width < 600) {
        rightImages.style.width = '100%'; 
        rightImages.style.right = '0'; 
        rightImages.style.top = '5rem'; // 80px

        rightImagesDivs.forEach(div => {
            div.style.height = '5rem'; // 80px
        });
    } else if (width < 1000) {
        rightImages.style.width = '80%'; 
        rightImages.style.right = '1rem'; 
        rightImages.style.top = '8rem'; // 128px

        rightImagesDivs.forEach(div => {
            div.style.height = '7rem'; // 112px
        });
    } else {
        rightImages.style.width = '24.6875rem'; // 395px
        rightImages.style.right = '12.5rem'; // 200px
        rightImages.style.top = '10.5rem'; // 168px

        rightImagesDivs.forEach(div => {
            div.style.height = '9.375rem'; // 150px
        });
    }
}

// Event listener for resize
window.addEventListener('resize', adjustStyles);
adjustStyles(); // Call on load
