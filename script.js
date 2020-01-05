let box = document.getElementById('box'),
    box1 = document.getElementsByClassName("box"),
    btn = document.getElementsByTagName('button'),
    heart = document.querySelectorAll(".heart");
    circle = document.querySelectorAll(".circle");

    wrapper = document.querySelector('.wrapper');
console.log(box);
console.log(btn);
console.log(heart[1]);
//document.body.style.background='black';
//setTimeout(function(){document.body.style.background='';}, 3000);
//()=>document.body.style.background='';
box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';


heart[0].style.backgroundColor = 'red';
heart[1].style.backgroundColor = 'yellow';
heart[2].style.backgroundColor = 'green';
//for (let i = 0;i<3; i++){
  //  heart[i].style.backgroundColor = 'red';
//}
  heart.forEach((element,a,b) => {
  console.log(element);    
  element.style.backgroundColor = 'green';
  element.style.borderRadius = '93%';
  console.log(element);    
  });
  let div1 = document.createElement('div');
  let text = document.createTextNode("привеееттт");
  div1.classList.add('black');
  div1.appendChild(text);
  //div1.innerHTML = '<h1>Привет</h1>';
  div1.textContent = '<h1>Привет</h1>';
//wrapper.appendChild(div1);
document.body.insertBefore(div1, circle[1]);
wrapper.insertBefore(div1, heart[1]);
document.body.removeChild(circle[2]);
document.body.replaceChild(btn[1], circle[1]);
  console.log(wrapper);  
  
