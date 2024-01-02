function changeColour() {
    document.querySelector("div").style.backgroundColor = `hsl(${
Math.random() * 360
    },50%, 50%)`;
    console.log(Math.random() * 360);
}