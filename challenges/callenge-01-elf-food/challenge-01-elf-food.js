import { food } from './elf-food.js'

// let foodArray = food.split('\n\n')
// let foodByElf = foodArray.map(elf => elf.split('\n'))
// let totalFoodByElf = foodByElf.map(elf => elf.reduce((acc, cur) => acc + Number(cur), 0))
// let maxCal = Math.max(...totalFoodByElf)
// console.log(maxCal)
// totalFoodByElf.sort((a, b) => a - b)
// console.log('top 3 total ', totalFoodByElf[totalFoodByElf.length - 1] + totalFoodByElf[totalFoodByElf.length - 2] + totalFoodByElf[totalFoodByElf.length - 3])

let totalFoodByElf = food.split('\n\n').map(elf => elf.split('\n')).map(elf => elf.reduce((acc, cur) => acc + Number(cur), 0))
console.log('top elf ', Math.max(...totalFoodByElf))
console.log('top 3 total ', totalFoodByElf.sort((a, b) => a - b).slice(-3).reduce((acc, cur) => acc + Number(cur), 0))
