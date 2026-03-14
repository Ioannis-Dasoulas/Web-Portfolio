
document.addEventListener("DOMContentLoaded", function() {
    let pubButton = document.getElementById("pubButton");
    let proButton = document.getElementById("proButton");
    let pubDivs = document.querySelectorAll('.pubDiv');
    let proDivs = document.querySelectorAll('.proDiv');
    
    // We add console.log to debug if they are found.
    console.log('pubButton:', pubButton);
    console.log('proButton:', proButton);
    console.log('pubDivs found:', pubDivs.length);
    console.log('proDivs found:', proDivs.length);

    if (pubButton && proButton) {
        pubButton.addEventListener('click', publicationsClick);
        proButton.addEventListener('click', projectsClick);
    } else {
        console.error('Buttons not found!');
    }

    function publicationsClick(e) { 
        if(e) e.preventDefault();
        console.log('Publications clicked');
        pubButton.classList.add("active");
        proButton.classList.remove("active");

        pubDivs.forEach(function(div) {
            div.classList.remove("hideDiv");
        });
        proDivs.forEach(function(div) {
            div.classList.add("hideDiv");
        });
    }

    function projectsClick(e) { 
        if(e) e.preventDefault();
        console.log('Projects clicked');
        pubButton.classList.remove("active");
        proButton.classList.add("active");

        pubDivs.forEach(function(div) {
            div.classList.add("hideDiv");
        });
        proDivs.forEach(function(div) {
            div.classList.remove("hideDiv");
        });
    }

    // Initialize
    publicationsClick();
});
