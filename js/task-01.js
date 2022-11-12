const totalItemEl = document.querySelectorAll('.item');
console.log('Number of categories:', totalItemEl.length);

totalItemEl.forEach(function(ItemEl) {

   const titleNameEl = ItemEl.firstElementChild
   console.log('Category:', titleNameEl.textContent);

   const titleItemLengthEl = ItemEl.lastElementChild.querySelectorAll('li');
   console.log('Elements:', titleItemLengthEl.length);
   
});



