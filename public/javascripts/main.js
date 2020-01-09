var main = document.querySelector('.card')

var input= document.querySelector('#myInput')
var button= document.querySelector('#myButton')

button.addEventListener('click',()=>{


    fetch('https://api.github.com/users/' + input.value)
.then(data =>data.json())

.then( list => {
    
    var data = JSON.stringify(list)
    var a = JSON.parse(data)
    var image = `
    <div class="renk">
        <img class="image" src='${a.avatar_url}' alt="">
        <div class="info">
        <h4 for="">${a.login}</h4>
        <a href=${a.html_url} target="_blank"><h6 for="">${a.html_url}</h6></a>
        </div>
    </div>

    
    `
    main.insertAdjacentHTML('beforeend',image)
    console.log(JSON.parse(data))
})

})

