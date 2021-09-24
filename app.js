 const startBtn= document.querySelector('#start');
 const screens = document.querySelectorAll('.screen');
 const timeList = document.querySelector('#time-list');
 let time = 0,
      score = 0;

 const timeEl = document.querySelector('#time');
 const board = document.querySelector('#board');
 const colors = ['#f4b6c2 ','#ead5dc','#6497b1', '#009688','#ee4035', 'black','#63ace5'];


 startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
 });

 timeList.addEventListener('click' , event => {
   if (event.target.classList.contains('time-btn')) {
   time = parseInt(event.target.getAttribute('data-time'));
   screens[1].classList.add('up');
   startGame();
   }
 });

 board.addEventListener('click', event => {
   if(event.target.classList.contains('circle')) {
      score++
      event.target.remove();
      createRendomCircle();
   }
 });
 

 function startGame(){
   setInterval(decreaseTime,1000);
   createRendomCircle();
   setTime(time);
 }

 function decreaseTime(){
   if(time === 0){
  finishGame();
   }else {
    let current = --time;
    if(current < 10){
      current = `0${current}`;
    }
    setTime(current);
   }
    
 }

 function setTime(value){
  timeEl.innerHTML = `00:${value}`;
 }

 function finishGame(){
   timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Your scope:<spane class = "primary"> ${score}</spane></h1>`
 }

 function createRendomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(10,60);
  const {height,width} = board.getBoundingClientRect()
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.style.background=getRandomColor();
  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`

  board.append(circle);
 }

 function getRandomNumber(min,max) {
   return Math.round(Math.random() * (max- min) + min);

 }

 

 function getRandomColor(){

  return colors[Math.floor(Math.random() * colors.length)];
  }
