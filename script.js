document.addEventListener("DOMContentLoaded", function() {
  const imageGrid = document.getElementById("imageGrid");

  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg"
  ];

  images.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = "images/" + image;
    imgElement.classList.add("col-4");
    imgElement.classList.add("mb-3");
    imageGrid.appendChild(imgElement);
  });
});
