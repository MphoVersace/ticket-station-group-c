const arrows = document.querySelectorAll(".arrows");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,movietext)=>{
    arrows.addEventListener("click", ()=>{
        movieLists[movietext].style.transform = translateX(${
            movieLists[movietext].computedStyleMap().get("transform")[0].x.value
        -300}px);  
    })
})