const input = document.getElementById('font-size-control');
console.log(input);

const span = document.getElementById('text');


input.addEventListener('input', () => {
  span.style.fontSize = input.value + 'px'
})