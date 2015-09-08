var numberImage = 1;
var total = 7;

function carousel(numberClick){
    var image = document.getElementById('img');
    numberImage = numberImage + numberClick;
    if(numberImage > total){
        numberImage = 1;
    }
    if(numberImage < 1){
        numberImage = total;
    }
    image.src = "Images/"+ numberImage +".jpg";
}
window.setInterval(function carouselWithTimer() {
    var image = document.getElementById('img');
    numberImage = numberImage + 1;
    bulletChange(numberImage);
    if(numberImage > total){numberImage = 1;}
    if(numberImage < 1){numberImage = total;}
    image.src = "Images/"+ numberImage +".jpg";
},5000);

function bulletChange(numberBullet){
    var image = document.getElementById('img');
    var imageBulletClick = document.getElementById('bulletImg'+ numberBullet);
    numberImage = numberBullet;
    image.src = "Images/"+ numberImage +".jpg";
    for(i = 1; i < 8;i++){
        var imageBullet = document.getElementById('bulletImg'+ i);
        imageBullet.src = "Images/whiteBullet.png";
    }
    imageBulletClick.src = "Images/blueBullet.png";
}