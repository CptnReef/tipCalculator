const h1 = document.querySelector('h1') // selects the h1 tag
h1.innerHTML = 'Tip Calculator' // Changes the text content of the tag

const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const peopleInput = document.querySelector('#input-people')
const displayTip = document.querySelector('#display-tip')
const displayTotal = document.querySelector('#display-total')

billInput.addEventListener('input', handleBill)

function handleBill(e) {
  const percent = parseInt(tipInput.value)
  const tip = parseInt(billInput.value) * percent / 100
  const total = parseInt(billInput.value) + tip
  const people = parseInt(peopleInput.value) * total

  displayTip.innerHTML = tip
  displayTotal.innerHTML = total
  displayTip.innerHTML = people
  
}
