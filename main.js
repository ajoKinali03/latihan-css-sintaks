//animasi test
/*
  cara kerja:
    > ketika elemen box satu di tekan maka element di belkangnya akan bergeser kedalam sehingga menghilang atau tepat di belakang element box 1
*/

const box1 = document.getElementsByClassName('box1')[0];
box1.addEventListener('click', function(){
  const box2 = document.getElementsByClassName('box2')[0];
  const box3 = document.getElementsByClassName('box3')[0];
  box2.style.top = '200px';
  box2.style.left = '100px';
  box3.style.top = '200px';
  box3.style.left = '100px';
  
  
});