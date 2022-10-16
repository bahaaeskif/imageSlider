let btn = document.querySelectorAll(".swap");
let offset = 1;
let nextindex = 0;
let slide = document.querySelectorAll(".slide ");
let slideArray = [...slide];


if (window.localStorage.getItem("index")){
    nextindex = window.localStorage.getItem("index");
    slide.forEach((e) => {
        e.classList.remove("active");
        slideArray[nextindex].classList.add("active");
    })
}else{
    slideArray[0].classList.add("active");
}


btn.forEach((e) => {
    e.addEventListener("click", (e) => {
        slide.forEach((e) => {
            e.classList.remove("active");
        })
        if(e.target.getAttribute("data-slide") === "next"){
            nextImage(slideArray);
        }else if (e.target.getAttribute("data-slide") === "prev"){
            prevImage(slideArray);
        }
    });  
})


function nextImage(slideArray){
    nextindex++;
    window.localStorage.setItem("index", nextindex);
    if(nextindex > slideArray.length -1){
        slideArray[0].classList.add("active");
        nextindex = 0;
    }else{
        slideArray[nextindex].classList.add("active");
    }
}


function prevImage(slideArray){
    nextindex--;
    window.localStorage.setItem("index", nextindex);
    if(nextindex < 0){
        slideArray[slideArray.length -1].classList.add("active");
        nextindex = slideArray.length -1;
    }else{
        slideArray[nextindex].classList.add("active");
    }
}


// setInterval(function (){
//     slide.forEach((e) => {
//         e.classList.remove("active");
//     })
//     nextImage(slideArray);
// }, 3000 , slideArray);