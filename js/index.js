let pubButton = document.querySelector("#pubButton");
let proButton = document.querySelector("#proButton");
let pubDivs = document.querySelectorAll('.pubDiv');
let proDivs = document.querySelectorAll('.proDiv');

console.log(pubDivs);

publicationsClick()

function publicationsClick(){ 

    pubButton.classList.add("is-active");
    proButton.classList.remove("is-active");

    pubDivs.forEach(function(div) {
        div.classList.remove("hideDiv");
    });
    proDivs.forEach(function(div) {
        div.classList.add("hideDiv");
    });
}

function projectsClick(){ 

    pubButton.classList.remove("is-active");
    proButton.classList.add("is-active");

    pubDivs.forEach(function(div) {
        div.classList.add("hideDiv");
    });
    proDivs.forEach(function(div) {
        div.classList.remove("hideDiv");
    });
}