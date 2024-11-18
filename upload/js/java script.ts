// JavaScript to handle image click effect
document.querySelectorAll('.clickable').forEach(imageContainer => {
  imageContainer.addEventListener('click', function() {
    const image = this.querySelector('img');
    const plusIcon = this.querySelector('.plus-btn');

    // Toggle the class 'open' to apply zoom effect
    image.classList.toggle('open');
    
    // Handle the plus icon appearance and disappearance
    if (image.classList.contains('open')) {
      plusIcon.style.display = 'none'; // Hide the plus icon when image is clicked
      setTimeout(() => {
        // Simulate the "envelope" effect: Zoom and move to center
        image.style.transform = "scale(2.5)";  // Full zoom
        image.style.filter = "brightness(0.5)";
      }, 200);
    } else {
      image.style.transform = "scale(1)";  // Reset zoom
      image.style.filter = "brightness(1)";
      plusIcon.style.display = 'block'; // Show the plus icon again
    }
  });
});
