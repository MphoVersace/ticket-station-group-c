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
    ball.classList.toggle("active")
})