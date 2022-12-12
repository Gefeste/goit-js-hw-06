const item = document.querySelectorAll(".item")
const itemLength = item.length
console.log("Number of categories:", itemLength)

const elements = document.querySelectorAll('.item ul')
// console.log(elements)



const title = document.querySelectorAll('h2')

const titleAnimals = title[0]
console.log('Category:', titleAnimals.textContent)

const firstEl = elements[0];
console.log('Elements:', firstEl.children.length)

const titleProduct = title[1]
console.log('Category:', titleProduct.textContent)

const secondEl = elements[1];
console.log('Elements:', secondEl.children.length)

const titleTech = title[2]
console.log('Category:', titleTech.textContent)

const thirdEl = elements[2];
console.log('Elements:', thirdEl.children.length)
