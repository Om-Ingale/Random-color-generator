let btn = document.querySelector("button")

btn.addEventListener("click",function(){
    let h1 = document.querySelector("h1");
    let division = document.querySelector(".div");
    let randomColor = getrandomColor()
    h1.innerText = randomColor;    
    division.style.backgroundColor = randomColor;

})

function getrandomColor(){
    let red = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}
