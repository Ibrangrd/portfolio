let mode = document.querySelector("#mode");
let b = document.querySelector("body");
let curmode = "light";
mode.addEventListener("click", () => {
    if (curmode === "light") {
        curmode = "dark";
        b.style.backgroundColor = "black";
        console.log("dark");
    }
    else {
        curmode = "light";
        b.style.backgroundColor = "white";
        console.log("Light");
    }
});