const arrows = document.querySelectorAll(".arrows");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,movietext) => {
    const itemNumber =movielists[movietext].querySelectorAll("img").length;
    let clickCounter = 0;
    arrows.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270)
        clickCounter++;
        if(itemNumber -(4+clickCounter) + (4+ratio) >= 0) {
        movieLists[movietext].style.transform = *translateX(${
            movieLists[movietext].computedStyleMap().get("transform")[0].x.value
        -300}px)*;
        } else{
            movieLists[movIetext].style.transform = "translateX(0)";
            clickCounter = 0;
        }  
    });
});

//toggle//

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,");

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
<<<<<<< HEAD
})
<<<<<<< HEAD
>>>>>>> 5ff9128f36297102aaa9ea38511a0658fa318241
=======
    ball.classList.toggle("active")
})
>>>>>>> 0355074f29ba5e815c5a469d2fe52c684d9090c7
=======


>>>>>>> 24c68bc8c061f2ac2d646ff5c0e62f88d248b90f

