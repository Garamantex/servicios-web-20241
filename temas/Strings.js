let fullname = 'Alexander Acosta Holguin'

console.log(fullname.length)
console.log(fullname[1])
console.log(fullname.includes('Alexander'))
console.log(fullname.indexOf('Acosta'))
console.log(fullname.startsWith('Alexander'))
console.log(fullname.endsWith('Alexander'))
console.log(fullname.slice(0 , 4 ))
console.log(fullname.slice(4))
console.log(fullname.toLocaleUpperCase)
console.log(fullname.toLocaleLowerCase)
console.log(fullname.replace('Alexander', 'orco'))
console.log(fullname.repeat(3))
console.log(fullname.trim)
console.log(fullname.split(' '))

let testName = 'alex'
firstLetter = testName[0].toUpperCase() +  testName.slice(1) 
console.log(firstLetter)

console.log(`Operardor &&`)

console.log(false && false)
console.log(false && true)
console.log(true && true)
console.log(true && false)

console.log(`Operardor ||`)

console.log(false || false)
console.log(false || true)
console.log(true || true)
console.log(true || false)

let counterOne = 10
if (counterOne > 100) {
    console.log('counter es mayor a 100')
} else {
    console.log('counter es menor a 100')
}

counterOne > 100 ? console.log('counter es mayor a 100') : console.log('counter es menor a 100')
