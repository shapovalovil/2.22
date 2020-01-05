let box = document.getElementById('box'),
    box1 = document.getElementsByClassName("box"),
    btn = document.getElementsByTagName('button'),
    heart = document.querySelectorAll(".heart");
console.log(box);
console.log(btn);
console.log(heart[1]);
document.body.style.background='black';
setTimeout(function(){document.body.style.background='';}, 3000);
//()=>document.body.style.background='';
