const arrows = document.querySelectorAll(".arrows");
const movielists = document.querySelectorAll(".movielist");

arrows.forEach((arrow,i)=>{
    arrow.addEventListener("click", ()=>{
        movielists[i].style.transform = translateX(${
            movielists[i].computedStyleMap().get("transform")[0].x.value
        -270}px);  
    })
})