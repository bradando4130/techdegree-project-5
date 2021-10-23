baguetteBox.run('.gallery', {
    buttons: true,
});

searchFilter = () => {
    let userInput = document.querySelector('.search-bar').value; 
    userInput = userInput.toLowerCase();
    let photoGallery = document.querySelectorAll('.gallery-item');
    
    for (i=0; i < photoGallery.length; i++) {
        if (photoGallery[i].dataset.caption.toLowerCase().includes(userInput)) {
            photoGallery[i].style.display = 'block';
        } else {
            photoGallery[i].style.display = 'none';
        }   
    } 
}
