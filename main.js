//animasi test
/*
  cara kerja:
    > ketika elemen box satu di tekan maka element di belkangnya akan bergeser kedalam sehingga menghilang atau tepat di belakang element box 1
*/

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
  },5);
  setTimeout(function(){
    clearInterval(inter);
  }, 500);
  
});