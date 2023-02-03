const playerInBox = document.querySelector('.playerInBox');
const plusBtn = document.querySelector('.plusBtn');
const ok = document.querySelector('.ok');
const playerBox = document.querySelector('.playerBox');
const nameInFive = document.querySelector('.nameInFive');


playerInBox.onclick = () => {
  const playerIn = document.querySelector('.playerIn');
  const nameIn = document.querySelector('.nameIn');
  playerIn.classList.add('hidden');
  nameIn.classList.remove('hidden');
  // nameInFive.onclick = () => {
  //   plusBtn.classList.add('hidden');
  //   ok.classList.remove('hidden');
  // }
}

let i = 1;
let num = 1;
if( i <= 4 ){
  plusBtn.onclick = () => {
    playerBox.innerHTML +=
    `<p class="player">
      <img src="./img/img_peopleNumber_nameIn_icon_person01.svg" alt="" class="person person01">
      ${ nameInFive.value }
    </p>`;
    const playerIn = document.querySelector('.playerIn');
    const nameIn = document.querySelector('.nameIn');
    
    nameIn.classList.add('hidden');
    playerIn.classList.remove('hidden');
    const player = document.querySelector('.player');
    console.log(player);
  }
}else{
  nameIn.classList.add('hidden');
}


