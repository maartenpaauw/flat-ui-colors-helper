const ntc = require('ntcjs')
const slugify = require('slugify')
const turkish = require('../../palettes/turkish.json')

const variable = (color) => {
  return `$${name(color)}: ${color};`
}

const name = (color) => {
  return slugify(ntc.name(color)[1], {
    lower: true,
    remove: /[^a-zA-Z ]+$/
  })
}

turkish.palette.forEach((element) => {
  console.log(variable(element))
})

console.log('')

console.log('$palette-colors: (')

turkish.palette.forEach((element) => {
  console.log(`  "${name(element)}": $${name(element)},`)
})

console.log(');')
console.log('')
