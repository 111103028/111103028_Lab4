const sounds = {
  w: new Audio('sounds/crash.mp3'),
  a: new Audio('sounds/kick-bass.mp3'),
  s: new Audio('sounds/snare.mp3'),
  d: new Audio('sounds/tom-1.mp3'),
  j: new Audio('sounds/tom-2.mp3'),
  k: new Audio('sounds/tom-3.mp3'),
  l: new Audio('sounds/tom-4.mp3')
};


function playSound(key) {

  sounds[key].play();
  

  const button = document.querySelector(`.${key}`);
  button.classList.add('pressed');
  

  setTimeout(() => {
    button.classList.remove('pressed');
  }, 100);
}

document.querySelectorAll('.drum').forEach(button => {
  button.addEventListener('click', function () {
    const key = this.classList[0];  
    playSound(key);
  });
});

// Event listener for keyboard press
document.addEventListener('keydown', function (event) {
  const key = event.key.toLowerCase(); 
  if (sounds[key]) {
    playSound(key);  
  }
});













//聲音對照
/*const sounds = {
  w: 'sounds/crash.mp3',
  a: 'sounds/kick-bass.mp3',
  s: 'sounds/snare.mp3',
  d: 'sounds/tom-1.mp3',
  j: 'sounds/tom-2.mp3',
  k: 'sounds/tom-3.mp3',
  l: 'sounds/tom-4.mp3'
};


function playSound(key){
  const sound = new Audio(sounds[key]);
  sound.play();
}


function changeButton(key){
  const buttons = document.getElementsByClassName(key);
  const button = buttons[0];
  button.classList.add('pressed');

  function removePressed(){
    button.classList.remove('pressed');
  }

  setTimeout(removePressed,100);
}

function handleClick(){
  const key = this.classList[0];
  playSound(key);
  changeButton(key);
}

function handleKeyboardDown(event){
  const key = event.key.toLowerCase();  // 獲取按下的鍵並轉為小寫
  if (sounds[key]) {  
    playSound(key);  
    changeButton(key);  
  }
}

function addButtonEventListeners() {
  document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', handleClick);  // 為每個按鈕設置點擊事件
  });
}

// 7. 設置鍵盤按下事件
function addKeyboardEventListener() {
  document.addEventListener('keydown', handleKeyboardDown);  // 為鍵盤按下事件設置監聽
}

// 8. 初始化函數
function initialize() {
  addButtonEventListeners();  // 添加按鈕點擊事件監聽
  addKeyboardEventListener();  // 添加鍵盤按下事件監聽
}

// 9. 執行初始化函數
initialize();
*/

