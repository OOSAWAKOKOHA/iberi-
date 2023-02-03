const start = document.querySelector('.start');
const loading = document.querySelector('.loading');
const startBtn = document.querySelector('.startBtn');
const tutorial = document.getElementsByTagName('section')[1];
console.log(tutorial);

let tutorialWrap = document.querySelectorAll('.tutorialWrap');
const nextBtn = document.querySelector('.nextBtn');
// let page = document.getElementsByTagName('li');


startBtn.onclick = () => {
  start.style.display = 'none';
  loading.style.display = 'flex';
  
  // loading.style.opacity = 0;


  setTimeout( () => {
    loading.style.display = 'none';
    tutorial.style.display = 'block';
  },3000);

}



let nowIndex = 0;
// let nowPage = 0;

// console.log(page);
nextBtn.onclick = () => {
  let nextIndex;
  // let nextPage;

  if( nowIndex < tutorialWrap.length - 2 ){
    nextIndex = nowIndex + 1;
    // nextPage = nowPage + 4;
  }else{
    nextIndex = 2;
    nextBtn.innerText = "はじめる";
    nextBtn.style.backgroundColor = '#FF7F29';
    nextBtn.style.boxShadow = '0 6px #CA6420';
    nextBtn.addEventListener("click",()=>{
      location.href = "index_season.html"
    })
  }

  tutorialWrap[ nowIndex ].style.display = 'none';
  tutorialWrap[ nextIndex ].style.display = 'block';
  nowIndex = nextIndex;

  // page[ nextPage ].style.color = '#70D62D';
  // page[ nowPage ].style.color = '#D0D4CD';
  // nowPage = nextPage;

}
