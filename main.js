

function toggleDarkMode() {
    var bodyElement = document.getElementById("main-background"); 
    // target the body element
    var darkModeButtonElement = document.getElementById("dark-mode-btn"); 
    //target the dark mode button


    // if in dark mode, change it to light mode
// if background is black, change background to white

if (bodyElement.style.background === "black") {
    bodyElement.style.background = "#FFFFFF"; //set background to white
    darkModeButtonElement.innerHTML = " Dark Mode";
}

//if background is white, change background to black
 else { 
    bodyElement.style.background = "black"; //set background to black
    darkModeButtonElement.innerHTML = "Light Mode";
    document.body.style.color ="FFFFFF";
    

 }
}
