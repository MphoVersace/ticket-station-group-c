const arrows = document.querySelectorAll(".arrows");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,movietext) => {
    const itemNumber =movielists[movietext].querySelectorAll("img").length;
    let clickCounter = 0;
    arrows.addEventListener("click", () => {
        clickCounter++;
        if(itemNumber -(4+clickCounter) >= 0) {
        movieLists[movietext].style.transform = *translateX(${
            movieLists[movietext].computedStyleMap().get("transform")[0].x.value
        -300}px)*;
        } else{
            movieLists[movIetext].style.transform = "translateX(0)";
            clickCounter = 0;
        }  
    });
});

