

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

let ulList = document.querySelector('#ingredients');


const foodIngredients = ingredients.forEach(element => {
  let items = document.createElement('li');
  items.append(element)
  ulList.append(items)
});

console.log(ulList);






