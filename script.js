let notesContainer=document.querySelector('.notes-container');
let notes=document.querySelector('.input-box');

let btn=document.querySelector('button')
btn.addEventListener('click',()=>{
    let inputBox=document.createElement('p')
    let image=document.createElement('img')
    inputBox.className='input-box';
    inputBox.setAttribute('contenteditable',true)
    image.src='delete.png'
    notesContainer.appendChild(inputBox).appendChild(image)
})


notesContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove()
        updateStorage()
    }
    else if(e.target.tagName==='P'){
        notes=document.querySelector('.input-box')
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage()
            }
        })
    }
})


function updateStorage(){
    localStorage.setItem('notes',notesContainer.innerHTML)
}


function showNotes(){
    notesContainer.innerHTML=localStorage.getItem('notes')
}

showNotes()

document.addEventListener('keydown',e=>{
    if(e.key==='Enter'){
        document.execCommand('insertLineBreak')
        e.preventDefault()
    }
})

