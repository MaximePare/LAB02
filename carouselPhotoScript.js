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
    Image.src = "Images/"+ numberImage +".jpg";
}
window.setInterval(function carouselWithTimer(){
    var image = document.getElementById('img');
    numberImage = numberImage + numberClick;
    if(numberImage > total){
        numberImage = 1;
    }
    if(numberImage < 1){
        numberImage = total;
    }
    Image.src = "Images/"+ numberImage +".jpg";
},50);