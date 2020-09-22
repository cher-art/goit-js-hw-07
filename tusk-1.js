const totalCategories = document.querySelectorAll('.item');
console.log(`В списке ${totalCategories.length} категории.`);

totalCategories.forEach((elem, index) => {
  let h2 = document.querySelectorAll('h2');
  console.log(`Категория ${h2[index].textContent}`);
  let li = document.querySelectorAll('li.item ul')
  console.log(`Количество: ${li[index].children.length}`);
})

