const item = document.querySelectorAll(".item")
console.log("Number of categories:", item.length)



const title = document.querySelectorAll('h2')
const element = document.querySelectorAll('.item ul')


title.forEach((el) => {
    console.log("Category", el.textContent)

    Array.from(element).map(elem => {
       console.log("Elements", elem.children.length)
    })


})
