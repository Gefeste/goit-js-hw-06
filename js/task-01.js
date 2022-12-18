const item = document.querySelectorAll(".item")
console.log("Number of categories:", item.length)


item.forEach((ele) => {
    console.log("Category", ele.firstElementChild.textContent)
    console.log("Elements", ele.lastElementChild.children.length)
})
