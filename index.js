

var score = 0;
var cross = true;

var audioplay = new Audio("gmusic.mp3");
var gover = new Audio("gover.mp3");

    setTimeout(() => {
        audioplay.play()
        audioplay.loop = true; 
    },1000);


    $(document).on("tap",function(e){
    var dino = document.querySelector(".dino");
        dino.classList.add("dinoAnimate");
    setTimeout(() => {
        dino.classList.remove("dinoAnimate");
    }, 500);
    var dino = document.querySelector(".dino");
    var clickX = e.clientX;
    if (clickX > divWidth/2){
        dino.style.left = dx + 145 + "px"
    } else {
        dino.style.left = dx - 125 + "px"
    }
})
document.onkeydown = function(e){
    console.log(e.key);

    if(e.key === "ArrowUp" || e.key === "8"||e.key === "w" ){
        var dino = document.querySelector(".dino");
        dino.classList.add("dinoAnimate");
        setTimeout(() => {
            dino.classList.remove("dinoAnimate");
        }, 500);
    };
    if(e.key === "ArrowRight" || e.key === "6"||e.key === "d"){
        var dino = document.querySelector(".dino");
        var dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left = dx + 145 + "px"
        
    };
    if(e.key === "ArrowLeft" || e.key === "4"||e.key === "a" ){
        var dino = document.querySelector(".dino");
        dino.classList.add("rev");
        var dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left = dx - 125 + "px"
    
    }else{
        dino.classList.remove("rev");
    }
};




setInterval(()=>{
    var dino = document.querySelector(".dino");
    var obstacle = document.querySelector(".obstacle");
    
    var clouds = document.querySelector(".clouds");
    var birds = document.querySelector(".birds");
    var sun = document.querySelector(".sun");
    
    var dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    var dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"));

    var ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"));
    var oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"));

    var offsetx = Math.abs(dx-ox);
    var offsety = Math.abs(dy-oy);
    console.log(offsetx,offsety)
    

        

    if(offsetx < 73 && offsety < 52){
        
        obstacle.classList.remove("obstacleAni");
        clouds.classList.remove("cloAni");
        birds.classList.remove("birAni");
        sun.classList.remove("sunAni");
        document.querySelector(".gameover").innerHTML = "Refresh to continue";

        

          
        
        
            audioplay.pause()
            gover.play()
            gover.loop = false;
        


        
    }else if(offsetx < 145 && cross){
        
        updateScore();
        cross = false;
        setTimeout(()=>{
            cross = true;
        },1000);
        setTimeout(()=>{
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue("animation-duration"));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + "s";
        },500)
        
    }

    
    
},10);


function updateScore(){
    score += 1;
    document.querySelector(".scoreCount").innerHTML = "your score : " + score;
}




