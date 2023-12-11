const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)

const townsCopy = towns

townsCopy.pop()

console.log(townsCopy, towns)

const townsClone = [...towns]
townsClone.pop()
townsClone.unshift('Brasil')
townsClone.push('EUA')

console.log({townsClone, towns, townsCopy})

const townsObj = {...towns}
const townsObjClone = {...townsObj}

townsObjClone.test = 'test'

console.log({townsObj, townsObjClone})