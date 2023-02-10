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


function myFunction() {
  let x = document.getElementById("menu");
  let games = document.getElementById("games");
  let topnav = document.getElementById("topnav");

  if (x.style.display === "block") {
    x.style.display = "none";
    games.style.marginTop = 0;
  } 
  else{
    x.style.display = "block";
    
    x.style.width="100%";
    topnav.style.display ="block";
    x.style.textAlign ="left";
    games.style.marginTop = "150px";
   
  }

}


function showGames(games){
  for(let i = 0; i < games.articles.length; i++){
    const gamer = games.articles[i];
    const gameItem = document.createElement("li");
    gameItem.classList.add("section-5-img4");
     gameItem.innerHTML = ` 

   <div>
   <h4 class="title">${gamer.title}</h4>

     <p class="category"><b class = "bold-li-items">By: </b>${gamer.author}</p>

     <p><b class = "bold-li-items">Time Of Publication: </b>${gamer.publishedAt}</p>

     <p class="mt-4"><b class = "bold-li-items">source: </b>${gamer.source
      .name     } </p>

     <p class="category">${gamer.content}</p>
     
     
     

     <a href="${gamer.url}" target="_blank" class = "section-5-href">Read More</a>
     
     

   

   
   </div>`;

   const gamersdiv = document.getElementById("Games-fetch");
   gameItem.classList.add("section-5-img5");
   gamersdiv.appendChild(gameItem);
  
  }
}


{/* <aside class="productImgWrapper">
  //    <div class="productLabel">
  //      Best Seller
  //    </div>
  //    <img class="productImg" src="${gamer.thumbnail}" />
  //    <button data-product='${JSON.stringify(gamer)}' class="cartbtn productCardBtn"> Add to cart</button>
  
  //  </aside> */}

const options = {
	
	headers: {
		
   'app-id'  : '63ca77d4e2a9df447b40b92e' 
	}
};

function getGames() {
  // fetch('https://maps.openweathermap.org/maps/2.0/weather/1h/{op}/{z}/{x}/{y}?appid={08eda4220994403e9bc427fac6862e49}')
  // .then((response) => response.json())
  // .then((data) => console.log(data));

  const url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2023-01-29&' +
          'sortBy=popularity&' +
          'language=en&' +
          'apiKey=30afa424321c4f94bcb6262d8f185222';

const req = new Request(url);



fetch(req)
.then((res) => res.json())
.then((articles) => {
  
  showGames(articles);
  console.log(articles)
   
    })


//   fetch("https://dummyapi.io/data/v1/user?page=1&limit=10")
 
//     .then((res) => res.json())
//     .then((products) => {
//       showGames(products);
//     });
 }



function gameAPI(){
 
}

const bttn = document.getElementById("miracle");
bttn.addEventListener("click", getGames);



getGames() ;

