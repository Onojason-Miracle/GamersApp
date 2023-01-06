let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  //   slides.style.height="30px";
  //   let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  slides[slideIndex - 1].style.display = "block";
  //   dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function getGames() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((products) => {
      showProducts(products);
    });
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "035e149df1mshffa5663be898195p1f2832jsn458805313f20",
    "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
  },
};

fetch("https://rawg-video-games-database.p.rapidapi.com/games", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
