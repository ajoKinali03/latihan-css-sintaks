let cntr = document.getElementsByClassName('container')[0];
let box2 = document.getElementsByClassName('box2')[0];
let n = 0;
cntr.addEventListener('click', function(){
    n++;
    if(n == 1){
        box2.style.animationPlayState = "paused";
    };
    if(n == 2){
        box2.style.animationPlayState = "running";
    };
    if(n >= 2){
        n *= 0;
    };
});
