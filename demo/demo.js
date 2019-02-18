const addContent = (text) => {
  var newDiv = document.createElement('div')
  newDiv.textContent = text
  document.getElementById('demo').appendChild(newDiv)
}

let Price = new PriceFormat({ prefix: 'R$ ' }) // eslint-disable-line

console.log(Price)
addContent(Price.format(0))

Price.setOptions({ prefix: 'US$ ' })
addContent(Price.format(4))

Price.setOptions({
  amount: 6,
  prefix: '',
  suffix: ' táoqueis'
})

addContent(Price.format())
