let box = document.getElementById("box")

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((BackData) => getData(BackData))

function getData(params) {
    for (const iterator of params) {
        console.log(iterator);
        let h3 = document.createElement("h3")
        let p = document.createElement("p")
        let div = document.createElement("div")

h3.innerHTML = "Nomi:" + iterator.body
p.innerHTML = "Narxi:" + iterator.id + `so'm`                  


div.classList.add('card')
div.appendChild(h3)
div.appendChild(p)

box.appendChild(div)
    }
}


















