const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const newArray = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item')
  itemEl.textContent = ingredient
  return itemEl
})

const list = document.querySelector('#ingredients')

list.append(...newArray)