document.addEventListener("DOMContentLoaded", ()=>{
    let contentform = document.getElementById('github-form')
    contentform.addEventListener('submit', e => {
        e.preventDefault()
        let wordToSearch = document.getElementById('search')
        let name = wordToSearch.value.split(" ").join('')
        searchUsers(name)
    })
    
})

function searchUsers(word){
    fetch(`https://api.github.com/users/${word}`)
    .then( response => response.json())
    .then(displayinfo)
}


function displayinfo(data){
        let elem = document.getElementById('user-list')
        let li = document.createElement('li')
        li.innerHTML = `<div class= "card"> 
             <img src = "${data.avatar_url}" class = 'image-fluid' style = "width: 250px; height: 250px">
            <p> <span> Username </span> ${data.login} </p>
            <p> <span>Name</> ${data.name} </p>
            <p> <span>location</span> ${data.location} </p>
        </div> `
        elem.appendChild(li)
}


