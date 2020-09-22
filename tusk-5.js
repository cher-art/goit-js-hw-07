const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

console.log(nameInput);
nameInput.oninput = () => {
  if(nameInput.value === ''){
    nameOutput.textContent = 'незнакомец';
  } else {
    nameOutput.textContent = nameInput.value;
  }
}




