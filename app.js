let nav = document.querySelector(".nav");
let navBar = document.querySelector(".navBar");
navBar.addEventListener("click", ()=>{
    nav.classList.toggle("navShow");
    navBar.classList.toggle("toggle");
});
// navigation menu ends here

//this is the image of head section as an array
const headingImg = ["image/slide1.jpg", "image/slide2.jpg", "image/slide3.jpg", "image/slide4.jpg", "image/slide5.jpg", "image/slide6.jpg"];

let count = 0;
function myfunc (){
    if(count == headingImg.length){
        count = 0;
    }
      let imageSection = document.querySelector(".imageSection");
      imageSection.innerHTML = `
      
      <img class="slideImage animation" src="${headingImg[count]}" alt="Slide Images" />
      
      
      `
        count++;
}
setInterval(myfunc, 5000);
// heading img section ends here

//type writting starts from here
const changeText = document.querySelector(".changeText");
const cursor = document.querySelector(".cursor");
const textArray = ["Bangladesh", "China", "Brasil", "Switzerland", "USA", "The World"];

let currentArray = 0;
let currentArrayIndex = 0;

function typeWriting(){
    if( currentArrayIndex < textArray[currentArray].length){
        cursor.classList.add("straight");
        changeText.innerHTML += textArray[currentArray].charAt(currentArrayIndex);
        currentArrayIndex++;
        cursor.classList.remove("straight");
        setTimeout(typeWriting, 100);
    }else{
        setTimeout(erase, 2000);
    }
};

function erase(){
    if(currentArrayIndex >= 0){
        cursor.classList.add("straight");
        changeText.innerHTML = textArray[currentArray].substring(0, currentArrayIndex--);
        setTimeout(erase, 50);
    }else{
        cursor.classList.remove("straight");
        currentArray++;
        if(currentArray == textArray.length){
            currentArray = 0;
        }
        setTimeout(typeWriting, 2000);
    }
}
typeWriting()


// this timer section

let student = document.querySelector(".student");
let teacher = document.querySelector(".teacher");
let worker = document.querySelector(".worker");

$(document).ready(function(){
    $(".student").counterUp({
        delay: 10,
        time: 1500
    });
       
    $(".teacher").counterUp({
        delay: 10,
        time: 1500
    });
    $(".worker").counterUp({
        delay: 10,
        time: 1500
    })
 });




