// A központi kép forrásai
const mainImages = [
    "main-image1.jpg", // 1. kép
    "main-image2.jpg", // 2. kép
    "main-image3.jpg", // 3. kép
    "main-image4.jpg"  // 4. kép
];

let currentImageIndex = 0; // Kezdő kép indexe

// A kép váltakoztatása
function changeMainImage() {
    const mainImage = document.getElementById("");
    currentImageIndex = (currentImageIndex + 1) % mainImages.length; // Következő kép indexe
    mainImage.src = mainImages[currentImageIndex]; // Új kép beállítása
}

// Automatikus váltás 3 másodpercenként
setInterval(changeMainImage, 3000);
