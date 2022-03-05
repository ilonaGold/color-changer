const body = document.body;
document.getElementById("btn").addEventListener("click", changeColor);

function changeColor() {
    fetch('https://apis.scrimba.com/hexcolors?count=1').then(res => res.json())
    .then(data =>{
        body.style.setProperty("background-color", data.colors[0].value);
    })
}


