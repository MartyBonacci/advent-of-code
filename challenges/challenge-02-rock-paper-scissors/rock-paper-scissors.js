import { strategy } from './stategy-guide.js'

let strategyArray = strategy.split('\n').map(round => round.split(' '))
console.log(strategyArray)

let score = strategyArray.reduce((accumulator, currentValue) => {
  // A = X = rock = 1
  // B = Y = paper = 2
  // C = Z = scissors = 3
  let roundValue = currentValue[1] === 'X' ? 1 : currentValue[1] === 'Y' ? 2 : 3
  if(
    (currentValue[0] === 'A' && currentValue[1] === 'X')
  ||
    (currentValue[0] === 'B' && currentValue[1] === 'Y')
    ||
    (currentValue[0] === 'C' && currentValue[1] === 'Z')
  ){
    roundValue = roundValue + 3
  } else if (
    (currentValue[0] === 'A' && currentValue[1] === 'Y')
    ||
    (currentValue[0] === 'B' && currentValue[1] === 'Z')
    ||
    (currentValue[0] === 'C' && currentValue[1] === 'X')
  ){
    roundValue = roundValue + 6
  }
  console.log(roundValue)
  console.log(accumulator)

return accumulator + roundValue
}, 0 )

console.log(score)