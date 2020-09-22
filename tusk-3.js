const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list_galery = document.getElementById('gallery');
list_galery.style.listStyle = 'none'

images.forEach((elem, index) => {
  let item_galery = `<li id = "${index+=1}"> <img width ="600" src ="${elem.url}" alt=""></li>`
  list_galery.insertAdjacentHTML('beforeend', item_galery);
  const galery_item = list_galery.children[index];
  console.log(galery_item);
  console.log(list_galery);
})





