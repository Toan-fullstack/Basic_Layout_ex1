const Nabtab=document.querySelectorAll('.content')
document.querySelectorAll('.tab').forEach(btn=>{
    btn.addEventListener('click',event =>{
        Nabtab.forEach(_btn=>_btn.classList.remove('active'))
        document.querySelector(`.content[data-tab='${event.currentTarget.id}']`).classList.add('active')
    })
})
