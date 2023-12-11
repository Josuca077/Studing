const dayjs = require('dayjs')

function birthday (date){
    const birthDay = dayjs(date)
    const today = dayjs()

    const age = today.diff(birthDay, 'year')
    const nextBD = dayjs(birthDay).add((age + 1), 'year')
    const daysTo = nextBD.diff(today, 'day') + 1

    console.log(
    `
A sua idade é: ${age} anos!
Seu Próximo aniversário é no dia: ${nextBD.format('DD/MM/YYYY')}
E ele será em: ${daysTo} dias!
    `)
}

birthday('2003-11-9')