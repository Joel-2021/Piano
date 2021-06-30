window.addEventListener("load",()=>{
const keys = document.querySelectorAll('.key div')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
var key_pressed= document.getElementById("key_pressed")
keys.forEach((key)=>{
    
        key.addEventListener("click",()=>{
       
        playNote(key)
        // console.log(key.dataset.note)    
})
});
document.addEventListener("keydown",(e)=>{
    if(e.repeat)return
    keys.forEach((key)=>{
        if(e.keyCode==key.dataset.key){
            playNote(key)
        }
    })
    })

function playNote(key){
    if(key.repeat)return
 noteAudio=document.getElementById(key.dataset.note)   
 noteAudio.currentTime=0;
 noteAudio.play()
 key_pressed.innerText=key.dataset.note
 key.classList.add('active')
 noteAudio.addEventListener("ended",()=>{
key_pressed.innerHTML="";

 key.classList.remove('active')
 })
}
})


// const keys = document.querySelectorAll('.key')
// const whiteKeys = document.querySelectorAll('.key.white')
// const blackKeys = document.querySelectorAll('.key.black')

// keys.forEach(key=>{
//     key.addEventListener("click",(key)=>{
//    note=document.getElementById(key.dataset.note)
// note.play()
// })});


// keys.forEach(key => {
//   key.addEventListener('click', () => playNote(key))
// })
// function playNote(key) {
//     const noteAudio = document.getElementById(key.dataset.note)
//     noteAudio.currentTime = 0
//     noteAudio.play()
//     key.classList.add('active')
//     noteAudio.addEventListener('ended', () => {
//       key.classList.remove('active')
//     })
//   }