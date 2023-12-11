const Author = require("./Author");

const josue = new Author("Josué Costa")
const post = josue.addPost("Eu gosto de banana")
post.addComment("Josua", "Eu não gosto de banana")


console.log(josue)
console.log(post)