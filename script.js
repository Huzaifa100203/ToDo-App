const form = document.querySelector('form')
const inputname = document.querySelector('#username')
const inputemail = document.querySelector('#useremail')
const inputphone = document.querySelector('#userphone')
const ul = document.querySelector('ul')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const card = document.createElement("div")
    card.innerHTML = `
     <h3>Name : ${inputname.value}</h3>
     <p>Email : ${inputemail.value}</p>
     <p>Phone number : ${inputphone.value}</p>
     `
     ul.appendChild(card)
    card.style.width = "auto"
    card.style.padding = "30px"
    const dltBtn = document.createElement('button')
    dltBtn.innerText = "Delete"
    dltBtn.className = "btn btn-danger float-end"
    card.appendChild(dltBtn)
    // list = document.createElement('li')
    // list.innerText = input.value
    // ul.appendChild(list)
    // list.className = "list-group-item w-75"
    // dltBtn.addEventListener("click", (e)=>{
    //     // e.target = ul.remove()
    //     ul.remove()
    // }) this removes the whole list and does'nt allow you to add another list anymore
    // console.log(card.children)
    form.reset()
})
function DeleteTask (e)  {
     if(e.target.className.includes("btn")){
        li = e.target.parentElement
        console.log(li)
        li.remove()
     }
}
ul.addEventListener("click", DeleteTask)