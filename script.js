const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    // console.log("this is event")
    list = document.createElement('li')
    list.innerText = input.value
    ul.appendChild(list)
    list.className = "list-group-item w-75"
    const dltBtn = document.createElement('button')
    dltBtn.innerText = "Delete"
    dltBtn.className = "btn btn-danger float-end"
    list.appendChild(dltBtn)
    // dltBtn.addEventListener("click", (e)=>{
    //     // e.target = ul.remove()
    //     form.remove(ul)
    // })

    form.reset()
})
function DeleteTask (e)  {
     if(e.target.className.includes("btn")){
        li = e.target.parentElement
        li.remove()
     }
}
ul.addEventListener("click", DeleteTask)