
document.addEventListener('DOMContentLoaded', () => {
    const zoomContainer = document.querySelector('.render-image-container');
    const zoomImage = document.querySelector('.render-image');

    zoomContainer.addEventListener('mousemove', (e) => {
        const rect = zoomContainer.getBoundingClientRect();
        const x = e.clientX - rect.left; // X position within the container
        const y = e.clientY - rect.top;  // Y position within the container

        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        zoomImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        zoomImage.style.transform = 'scale(2)'; // Adjust the scale factor as needed
    });

    zoomContainer.addEventListener('mouseleave', () => {
        zoomImage.style.transform = 'scale(1)';
        zoomImage.style.transformOrigin = 'center center';
    });

    console.log("Asd");
});

