var canvas, context, nextBtn, prevBtn, shuffleBtn;
var currentImageIndex = 0;
var nextImageIndex = 0;
var shuffleMode = false;
var playMode = false;
var alphaVal = 1;
var fadePhase = "out"
var xVal = 0;
var increment = 0;
var intervalObj, intervalObjEffect;
var eventFired = false;
var prevEvent = false;
var currentImg = new Image();
currentImg.src = "Images/image0.jpg";
var nextImg = new Image();
nextImg.src = "Images/image0.jpg";

var images = [{ "src": "Images/image0.jpg", "caption": "Porkbelly Ramen from Kinton" },
{ "src": "Images/image1.jpg", "caption": "Matcha Ice Cream with Red Bean Taiyaki" },
{ "src": "Images/image2.jpg", "caption": "Niagra Falls, first time visiting the falls" },  
{ "src": "Images/image3.jpg", "caption": "My Father and I in Central Park (NYC)" },
{ "src": "Images/image4.jpg", "caption": "Salmon Eggs Benedict from Friedman's" },
{ "src": "Images/image5.jpg", "caption": "Cinnamon Toast Crunch Ice Cream from KITH" },
{ "src": "Images/image6.jpg", "caption": "Mickey Mouse Mural in SoHo, NYC" },
{ "src": "Images/image7.jpg", "caption": "Tonkatsu Ramen from Koku in NYC" },
{ "src": "Images/image8.jpg", "caption": "One World Trade Center" },
{ "src": "Images/image9.jpg", "caption": "The Statue of Liberty" },
{ "src": "Images/image10.jpg", "caption": "The Vessel at Hudson Yards in NYC." },
{ "src": "Images/image11.jpg", "caption": "My 21st Birthday Filet Mignon and Lobster Tail" },
{ "src": "Images/image12.jpg", "caption": "21st Birthday Creme Brulee from Gallaghers" },
{ "src": "Images/image13.jpg", "caption": "Churro French Toast from King Taps" },
{ "src": "Images/image14.jpg", "caption": "Beef Filet Ramen from Konjiki Ramen" },
{ "src": "Images/image15.jpg", "caption": "Toronto Raptors Game 2 of NBA Finals." },
{ "src": "Images/image16.jpg", "caption": "Matchamisu from Butter Baker." },
{ "src": "Images/image17.jpg", "caption": "Fried Rice from Crown Princess" },
];


function onLoad() {
    canvas = document.getElementById('slideshowCanvas');
    context = canvas.getContext('2d');

    nextBtn = document.getElementById('nextImage');
    prevBtn = document.getElementById('prevImage');
    shuffleBtn = document.getElementById('shuffleIcon');
    playBtn = document.getElementById('playImage');
    transition = document.getElementById('selectTransition');

    nextBtn.addEventListener("click", getNextImage, false);
    prevBtn.addEventListener("click", getPrevImage, false);
    shuffleBtn.addEventListener("click", changeShuffle, false);
    playBtn.addEventListener("click", changePlay, false);
    transition.addEventListener("change", reset, false)
    drawImage();
}

function reset() {
    clearInterval(intervalObj);
    clearTimeout(intervalObjEffect);
    playMode = false;
    eventFired = false;
    prevEvent = false;
    playBtn.style.backgroundImage = 'url(Images/playbutton.png)';
    context.globalAlpha = 1;
    xVal = 0;
    prevBtn.style.display = "inline-block"
    nextBtn.style.display = "inline-block"
    playBtn.style.display = "inline-block"
    currentImg = nextImg;
    currentImageIndex = nextImageIndex;
    drawImage();

    
}

function getNextImage() {
    eventFired = true;
    if (transition.value != "None"){
        playBtn.style.display = "none"
        prevBtn.style.display = "none"
        nextBtn.style.display = "none"
    }
    getImage();
    
}

function getPrevImage() {
    prevEvent = true;
    eventFired = true;
    if (transition.value != "None"){
        playBtn.style.display = "none"
        prevBtn.style.display = "none"
        nextBtn.style.display = "none"
    }
    getImage();
}

function changeShuffle() {
    if (shuffleMode) {
        shuffleMode = false;
        shuffleBtn.style.backgroundImage = 'url(Images/shuffleIcon.png)';
        if (!playMode) {
            prevBtn.style.display = "inline-block"
            nextBtn.style.display = "inline-block"
        }

    }
    else {
        shuffleMode = true;
        shuffleBtn.style.backgroundImage = 'url(Images/noshuffleIcon.png)';
        prevBtn.style.display = "none"
        nextBtn.style.display = "none"
    }
}

function changePlay() {
    if (playMode) {
        reset();
    }
    else {
        playMode = true;
        playBtn.style.backgroundImage = 'url(Images/pauseIcon.png)';
        prevBtn.style.display = "none"
        nextBtn.style.display = "none"
        initializeInterval();
    }
}

function initializeInterval() {
    var slideshowTime = 2000;
    intervalObj = setInterval(getImage, slideshowTime);
}

function getEffect() {
    if (transition.value == "None") {
        currentImg = nextImg;
        currentImageIndex = nextImageIndex;
        if (intervalObjEffect) { clearTimeout(intervalObjEffect); }
        drawImage();
        if (eventFired) {
            reset();
        }
    }
    else if (transition.value == "Fade") {
        intervalObjEffect = setTimeout(changeEffectFade, 1);
    }
    else if (transition.value == "Slide") {
        currentImg = nextImg;
        currentImageIndex = nextImageIndex;
        intervalObjEffect = setTimeout(changeEffectSlide, 35);
    }

    

}

function changeEffectFade() {
    if (fadePhase == "out") {
        alphaVal -= 0.01
    }
    else if (fadePhase == "in") {
        alphaVal += 0.01
    }

    context.globalAlpha = alphaVal;
    context.imageSmoothingEnabled = true;
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawImage();

    if (alphaVal < 0) {
        fadePhase = "in";
        currentImg = nextImg;
        currentImageIndex = nextImageIndex;
        intervalObjEffect = setTimeout(changeEffectFade, 1);
    }
    else if (alphaVal >= 1 && fadePhase == "in") {
        alphaVal = 1;
        fadePhase = "out"

        if (eventFired) {
            reset();
        }
    }
    else {
        intervalObjEffect = setTimeout(changeEffectFade, 1);
    }


}

function changeEffectSlide() {
    xVal = canvas.width - (canvas.width / 35 * increment);
    increment++;

    context.globalAlpha = 1;
    context.imageSmoothingEnabled = true;
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawImage();

    if (xVal < 0) {
        xVal = 0;
        increment = 0;
        drawImage();
        if (eventFired) {
            reset();
        }
    }
    else {
        intervalObjEffect = setTimeout(changeEffectSlide, 35);
    }
}

function increaseIndex() {
    if (shuffleMode) {
        nextImageIndex = (Math.floor(Math.random() * 15467)) % 20;
    }
    else if (nextImageIndex == 19) {
        nextImageIndex = 0;
    }
    else { nextImageIndex++; }
}

function decreaseIndex() {
    if (shuffleMode) {
        nextImageIndex = (Math.floor(Math.random() * 15467)) % 20;
    }
    else if (nextImageIndex == 0) {
        nextImageIndex = 19;
    }
    else {
        nextImageIndex -= 1;
    }
}

function drawImage() {
    context.drawImage(currentImg, xVal, 0);
    context.font = "24pt Montserrat";
    context.fillStyle = "white";
    context.fillText(images[currentImageIndex].caption, xVal, 30);
}

function getImage() {
    if (prevEvent){
        decreaseIndex();
    }
    else{
        increaseIndex();
    }

    nextImg = new Image();
    nextImg.onload = function() {
        getEffect();
    }
    nextImg.src = images[nextImageIndex].src

}


window.addEventListener("load", onLoad, false);