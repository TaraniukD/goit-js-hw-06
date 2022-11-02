const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsConteiner = document.querySelector('ul#ingredients')

const makeLiIngred = ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item')

    return itemEl;
});


console.log(makeLiIngred);

ingredientsConteiner.append(...makeLiIngred);