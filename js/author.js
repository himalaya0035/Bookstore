var rellax = new Rellax('.rellax');
var authorInfoContainer = document.getElementsByClassName('authorInfoContainer')[0];
window.onscroll = ()=>{
    if (window.scrollY > 0 && window.scrollY < 20){
        authorInfoContainer.style.opacity = 0.9;
    }
    else if (window.scrollY >= 20 && window.scrollY < 40){
        authorInfoContainer.style.opacity = 0.8;
    }
    else if (window.scrollY >= 40 && window.scrollY < 60){
        authorInfoContainer.style.opacity = 0.7;
    }
    else if (window.scrollY >= 60 && window.scrollY < 80){
        authorInfoContainer.style.opacity = 0.6;
    }
    else if (window.scrollY >= 80 && window.scrollY < 100){
        authorInfoContainer.style.opacity = 0.5;
    }
    else if (window.scrollY >= 100 && window.scrollY < 120){
        authorInfoContainer.style.opacity = 0.4;
    }
    else if (window.scrollY >= 120 && window.scrollY < 140){
        authorInfoContainer.style.opacity = 0.3;
    }
    else if (window.scrollY >= 140 && window.scrollY < 160){
        authorInfoContainer.style.opacity = 0.2;
    }
    else if (window.scrollY >= 160 && window.scrollY < 170){
        authorInfoContainer.style.opacity = 0.1;
    }
    else if (window.scrollY >= 170){
        authorInfoContainer.style.opacity = 0;
    }
    else {
        authorInfoContainer.style.opacity = 1;
    }
}

