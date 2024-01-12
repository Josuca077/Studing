async function getUsers () {
    const response = await fetch('https://api.github.com/users')
    const users = await response.json()

    console.log(users)

}

getUsers()