const detail = document.querySelector("div#spice-blend-details")
const image = document.querySelector("img.detail-image")
const title = document.querySelector("h2.title")
const list = document.querySelector("ul.ingredients-list")
const blendsURL = "http://localhost:3000/spiceblends"

fetch(`${blendsURL}/1`)
    .then(response => response.json())
    .then(blend => getBlendDetail(blend))

function getBlendDetail(blend){
    
    image.src = blend.image
    image.alt = blend.title

    title.textContent = blend.title

    blend.ingredients.forEach(ingredient => {
        const li = document.createElement('li')
        li.textContent = ingredient.name
        list.append(li)
    })
}