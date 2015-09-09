/**
 * Created by Maxime on 2015-09-08.
 */


var i = -1;

var images = [
            "http://ep1.pinkbike.org/p5pb12565613/p5pb12565613.jpg",
            "http://ep1.pinkbike.org/p5pb12564280/p5pb12564280.jpg",
            "http://ep1.pinkbike.org/p5pb12564664/p5pb12564664.jpg",
            "http://ep1.pinkbike.org/p5pb12555784/p5pb12555784.jpg",
            "http://ep1.pinkbike.org/p5pb12587604/p5pb12587604.jpg",
            "http://ep1.pinkbike.org/p5pb12565615/p5pb12565615.jpg"];

var nombreImage = images.length-1;

var myVar = setInterval(function(){changeImage()},3000);

function changeImage() {
    allGreen();
    if (i < nombreImage){
        i++;
    }
    else{
        i=0;
    }
    document.getElementById("framePhoto").src = images[i];
    imageChanger();
}

function flipImage(direction){
    allGreen();
    if (direction == "gauche"){
        if(i == 0){
            i = nombreImage;
        }
        else{
            i = i-1;
        }
    }
    else{
        if(i == nombreImage){
            i = 0;
        }
        else{
            i = i+1;
        }
    }
    document.getElementById("framePhoto").src = images[i];
    imageChanger();

    //Reset du timer a 0
    resetTimer();
}


function changeAvecBullet(numeroBullet){
    allGreen();
    document.getElementById("framePhoto").src = images[numeroBullet];
    i = numeroBullet;
    imageChanger();
    resetTimer();
}

function imageChanger(){
    document.getElementById(i).src= "http://www.clker.com/cliparts/7/Q/L/g/y/j/button-orange-small-md.png";
}

function allGreen(){
    for (j = 0; j <= nombreImage; j++){
        document.getElementById(j).src= "http://l.rgbimg.com/cache1qH4LR/users/b/ba/ba1969/600/n4yMWAi.jpg";
    }
}

function resetTimer(){
    clearInterval(myVar);
    myVar = setInterval(function(){changeImage()},3000);
}
