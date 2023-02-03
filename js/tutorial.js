let tutorialWrap = document.querySelectorAll('.tutorialWrap');
const btn = document.querySelector('.nextBtn');

let nowIndex = 0;

btn.onclick = () => {
  let nextIndex;

  if( nowIndex < tutorialWrap.length - 2 ){
    nextIndex = nowIndex + 1;
  }else{
    nextIndex = 1;
    btn.innerText = "はじめる";
    btn.style.backgroundColor = '#FF7F29';
    btn.style.boxShadow = '0 6px #CA6420';
    btn.addEventListener("click",()=>{
      location.href = "readingCard.html"
    })
  }

  tutorialWrap[ nowIndex ].style.display = 'none';
  tutorialWrap[ nextIndex ].style.display = 'flex';
  nowIndex = nextIndex;

}