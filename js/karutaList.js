const karutaListWrap = document.querySelector(".karutaListWrap")
console.log(karutaListWrap);

// const dataStr = JSON.stringify(memory);
// sessionStorage.setItem(0,dataStr)

window.addEventListener("load",()=>{
    if(sessionStorage.getItem(0) == null){
        console.log("non");
    }else{
        // const dataStr = JSON.stringify(memory);
        for(let i = 0; i < sessionStorage.length; i++){
            const karutaEle = sessionStorage.getItem(i);
            console.log(i);
            const karutaObj = JSON.parse(karutaEle);
            console.log(karutaObj);
            const newEle = document.createElement("div")
            const newImgEle = document.createElement("img")
            newEle.setAttribute("class","karutaListWrap__ele")
            newImgEle.setAttribute("src",`./img/${karutaObj.photo}`)
            // karutaListWrap.innerHTML += `
            // <div class="karutaListWrap__ele"></div>
            // `
            newEle.appendChild(newImgEle)
            karutaListWrap.insertBefore(newEle,karutaListWrap.firstChild)
            const karutaListWrapEle = document.querySelector(".karutaListWrap__ele")
            // console.log(karutaListWrapEle);
            // karutaListWrapEle.style.backgroundImage = karutaObj[0].photo;
        }
    }
})