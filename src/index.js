const detail = document.querySelector("div#spice-blend-details")
const image = document.querySelector("img.detail-image")
const title = document.querySelector("h2.title")
const list = document.querySelector("ul.ingredients-list")
const blendsURL = "http://localhost:3000/spiceblends"

const updateForm = document.querySelector("form#update-form")
const ingredientForm = document.querySelector("form#ingredient-form")

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
    updateForm.dataset.id = blend.id
}

updateForm.addEventListener('submit', event => {
    event.preventDefault()
    
    const title = event.target.title.value

    fetch(`${blendsURL}/${updateForm.dataset.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
    
        },
        body: JSON.stringify({title})
    })
    .then(response => response.json())
    .then(patchedBlend => title.textContent = patchedBlend.title)
    updateForm.reset()
})
    
