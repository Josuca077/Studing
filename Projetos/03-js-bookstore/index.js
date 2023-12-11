const App = require("./App");

const app = new App()

app.createAuthor('J. R. R. Tolkien', 'British', '...')
app.createAuthor('Rick Riordan', 'American', '...')

const authors = app.getAuthors()

app.createBook('O Hobbit', '...', 'fantasy', 300, authors[0], '...', 19.99, 100)
app.createBook('A Sociedade do Anel', '...', 'fantasy', 400, authors[0], '...', 24.99, 100)
app.createBook('O Ladrão de Raios', '...', 'fantasy', 500, authors[1], '...', 24.99, 100)
app.createBook('A Pirâmide Vermelha', '...', 'fantasy', 600, authors[1], '...', 24.99, 100)

const books = app.getBooks()

app.createUser('Josué Costa', 'josuecosta077@gmail.com', '12345678')

const users = app.getUsers()

app.showDatabase()

const items = [
    {
        product: books[0],
        quantity: 3
    },
    {
        product: books[1],
        quantity: 5
    },
    {
        product: books[3],
        quantity: 7
    }
]

app.createOrder(items, users[0])

app.showDatabase()