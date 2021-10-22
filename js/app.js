baguetteBox.run('.gallery', {
    buttons: true,
});

searchFilter = () => {
    let searchInput, x, imageArray;
    searchInput = document.querySelector('.search-bar');
    searchInput.value = searchInput.value;
    picType = document.querySelectorAll('a');
    imageArray = Array.from(picType);

    for (i=0; i<imageArray.length; i++) {
        x = imageArray[i].getAttribute("data-caption");
 
    
        if (x.includes(searchInput.value.toLowerCase())) {
            imageArray[i].style.display = 'block';
        } else {
            imageArray[i].style.display = 'none'; 
        }
    }
}
