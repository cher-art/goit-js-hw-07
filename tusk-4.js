const button = {
  sub: document.querySelector('[data-action="increment"]'),
  add: document.querySelector('[data-action="decrement"]'),
  span: document.querySelector('#value')
};

let contValue = 0;
const increment = () => {
  contValue += 1;
  button.span.textContent = contValue; 
};

const decrement = () => {
  contValue -= 1;
  button.span.textContent = contValue; 
};

button.sub.addEventListener('click', increment);
button.add.addEventListener('click', decrement);