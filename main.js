//penaplikasian animasi
let n = 0;
const box1 = document.getElementsByClassName('box1')[0];
box1.addEventListener('click', function(){
  n += 1;
  
  if(n == 1){
    animasiIn(boxValue2(), boxValue3());
  };
  if(n == 2){
    animasiOut(boxValue2(), boxValue3());
  };
  if(n >= 2){
    n *= 0;
  };
});


const boxValue2 = () => {
  return document.getElementsByClassName('box2')[0];
};

const boxValue3 = () => {
  return document.getElementsByClassName('box3')[0];
};


function animasiIn(box2, box3){
  let limBox2 = 10;
  let limBox3 = 20;
  const inter = setInterval(function() {
  
    if (limBox2 >= 0) {
      box2.style.top = (limBox2 + 200) + 'px';
      box2.style.left = (limBox2 + 100) + 'px';
    };
    if (limBox3 >= 0) {
      box3.style.top = (limBox3 + 200) + 'px';
      box3.style.left = (limBox3 + 100) + 'px';
    };
  
    limBox2 -= 0.3;
    limBox3 -= 0.5;
  }, 10);
  setTimeout(function() {
    clearInterval(inter);
  }, 1000);
};


function animasiOut(box2, box3) {
  let limBox2Out = 0;
  let limBox3Out = 0;
  const inter = setInterval(function() {

    if (limBox2Out <= 10) {
      box2.style.top = (limBox2Out + 200) + 'px';
      box2.style.left = (limBox2Out + 100) + 'px';
    };
    if (limBox3Out <= 20) {
      box3.style.top = (limBox3Out + 200) + 'px';
      box3.style.left = (limBox3Out + 100) + 'px';
    };

    limBox2Out += 0.3;
    limBox3Out += 0.5;
  }, 10);
  setTimeout(function() {
    clearInterval(inter);
  }, 1000);
};




//animasi test
/*
  cara kerja:
    > ketika elemen box satu di tekan maka element di belkangnya akan bergeser kedalam sehingga menghilang atau tepat di belakang element box 1
*/
/*
const box1 = document.getElementsByClassName('box1')[0];
box1.addEventListener('click', function(){
  
  
  //kasih animasi
  //let count = 5;
  let i = 20;
  let a = 10;
  const inter = setInterval(function(){
    const box2 = document.getElementsByClassName('box2')[0];
    const box3 = document.getElementsByClassName('box3')[0];
    //let i = count * 4;
    //let a = count * 2;
    
    if(i >= 0){
      box3.style.top = (i + 200) + 'px';
      box3.style.left = (i + 100) + 'px';
    };
    if(a >= 0){
      box2.style.top = (a + 200) + 'px';
      box2.style.left = (a + 100) + 'px';
    };
    //count--;
    i -= 0.5;
    a -= 0.3;
    console.log( i, a);
  },10);
  setTimeout(function(){
    clearInterval(inter);
  }, 1000);
  
});

*/