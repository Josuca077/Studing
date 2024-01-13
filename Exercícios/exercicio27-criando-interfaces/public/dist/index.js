const usersList = [];
function findUser(name) {
    let userReturn = {
        id: null,
        login: null,
        name: null,
        bio: null,
        public_repos: null,
        repos_url: null,
        repositories: null
    };
    usersList.forEach((user) => {
        if (user.login === name) {
            userReturn = user;
        }
    });
    return userReturn;
}
async function getUser(name) {
    const userReturn = await fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json());
    const repositories = await getInfo(userReturn.repos_url);
    const user = {
        id: userReturn.id,
        login: userReturn.login,
        name: userReturn.name,
        bio: userReturn.bio,
        public_repos: userReturn.public_repos,
        repos_url: userReturn.repos_url,
        repositories: repositories
    };
    if (user.id !== undefined) {
        usersList.push(user);
    }
    console.log(user);
}
async function getInfo(link) {
    const reposReturn = await fetch(link).then(response => response.json());
    const repositories = [];
    reposReturn.forEach((repos) => {
        const repository = {
            name: repos.name,
            description: repos.description,
            fork: repos.fork,
            stargazers_count: repos.stargazers_count
        };
        repositories.push(repository);
    });
    return repositories;
}
function showInfo(name) {
    const user = findUser(name);
    console.log(user);
    if (user.id !== null) {
        const repositories = user.repositories.reduce((message, repos) => {
            return (`${message}
${repos.name}`);
        }, "");
        console.log(`The repositories of ${user.name} are:${repositories}
`);
    }
    else {
        console.log("user not found");
    }
}
function listUsers() {
    const mensage = usersList.reduce((mensage, user) => {
        return (`${mensage}
${user.login}
`);
    }, "");
    console.log("Registered Users: \n" + mensage);
}
function reposSum() {
    const sum = usersList.reduce((sum, user) => {
        return sum + user.public_repos;
    }, 0);
    console.log(sum);
}
function topFive() {
    console.log(`The top 5 users with most public repositories are:

1. ${top[0]}
2. ${top[1]}
3. ${top[2]}
4. ${top[3]}
5. ${top[4]}`);
}
getUser("JosueAFCosta");
getUser("EnzinK");
listUsers();
console.log(usersList);
setTimeout(() => {
    showInfo("JosueAFCosta");
    reposSum();
}, 1000 * 3);
