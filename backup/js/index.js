let element = document.getElementsByClassName("nav-button");
element.addEventListener("load", function() {
    element.scroll();

})

function ChangeClass() {
    let element = document.getElementById("navigation");
    element.addEventListener("load", function() {
        alert("Loaded");
    })


    if (element.classList.contains("nav-collapse")) {
        element.classList.remove("nav-collapse");
        element.classList.add("nav-show");
    } else {
        element.classList.remove("nav-show");
        element.classList.add("nav-collapse");
    }
};