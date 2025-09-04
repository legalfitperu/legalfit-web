function openLightbox(imagePaths) {
    const lightboxImagesContainer = document.querySelector(".lightbox-images");
    lightboxImagesContainer.innerHTML = ''; // Limpia las imágenes anteriores

    // Crea y añade las nuevas imágenes
    imagePaths.forEach(path => {
        const img = document.createElement("img");
        img.src = path;
        lightboxImagesContainer.appendChild(img);
    });
    
    document.getElementById("lightbox-overlay").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox-overlay").style.display = "none";
}