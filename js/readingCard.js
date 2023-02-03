const photo = document.getElementById("photo")
const photoBtn = document.getElementById("photoBtn")
const readingCardWrap = document.querySelector(".readingCardWrap")
const readingCardText = document.querySelector(".readingCardText")
const decideBtn = document.querySelector(".decideBtn")
const redoBtn = document.querySelector(".redoBtn")
const nonEditBtn = document.querySelector(".nonEditBtn")
const editBtn = document.querySelector(".editBtn")
const textEditPlace = document.querySelector(".textEditPlace")
const karutaTextEditDecide = document.querySelector(".karutaTextEditDecide")
const karutaTextEdit = document.querySelector(".karutaTextEdit")
const initialWrap = document.querySelector(".initialWrap")
const explanation = document.querySelectorAll(".explanation")
console.log(explanation);


let storage = [];

let storageNum = 0;

let memory = {}

photoBtn.addEventListener("change",(e)=>{
    const reader = new FileReader();
    reader.onload = (e) =>{
        readingCardWrap.style.backgroundImage = `url(${e.target.result})`;
        // karuta.setAttribute("src",e.target.result);
    }
    reader.readAsDataURL(e.target.files[0])

    readingCardText.style.display = "none";

    // localStorage.setItem("photo1",{img:`${e.target.files[0]}`})

    photo.style.display = "none"
    photoBtn.style.display = "none"
    decideBtn.style.display = "block"
    redoBtn.style.display = "block"
    explanation[0].classList.add("none")
    explanation[1].classList.remove("none")


    decideBtn.addEventListener("click",()=>{
        memory[storageNum] = {photo:e.target.files[0]}
        // console.log(memory);
        // localStorage.setItem(`photo${storageNum}`,{img:`${e.target.files[0]}`})
        // memory.photo = e.target.files[0]
        // console.log(memory);
        readingCardText.style.display = "block"
        readingCardWrap.style.backgroundImage = "none"
    })
})

function textNonEdit(){
    sessionStorage.setItem(`photo${storageNum}`,)
}

function decide(){
    decideBtn.style.display = "none"
    redoBtn.style.display = "none"
    nonEditBtn.style.display = "block"
    editBtn.style.display = "block"
    explanation[1].classList.add("none")
    explanation[2].classList.remove("none")
}
function textNonEdit(){
    location.href = "tentative.html"
}

function textEdit(){
    textEditPlace.style.display = "flex"
}

karutaTextEditDecide.addEventListener("click",()=>{
    textEditPlace.style.display = "none"
    readingCardText.innerText = karutaTextEdit.value
    let karutaTextEditVal = String(karutaTextEdit.value)
    let initialVal = karutaTextEditVal.slice(0,1)
    memory[storageNum] += {txt:karutaTextEditVal}
    // localStorage.setItem(`photo${storageNum}`,{txt:`${karutaTextEditVal}`})
    const dataStr = JSON.stringify(memory[storageNum]);
    sessionStorage.setItem(storageNum,dataStr)
    storageNum = storageNum+1;
    location.href = "tentative.html"
    console.log(dataStr);
})


// const reset = document.querySelector(".reset")
// reset.addEventListener("click",()=>{
//     localStorage.clear();
// })


