async function printCountries(country) {

    const card = document.createElement('div')
    card.classList.add('country')

    const countryName = country.name.common
    const name = document.createElement('h2')
    name.textContent = countryName

    const flagLink = country.flags.svg
    const flag = document.createElement('img')
    flag.src = flagLink
    flag.alt = countryName

    const main = document.getElementById('countries')
    card.append(name, flag)
    main.appendChild(card)
}

async function getCountries () {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json()

    console.log(countries[22])

    countries.forEach(printCountries)
}

getCountries()