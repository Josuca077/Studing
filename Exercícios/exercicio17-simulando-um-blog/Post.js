const Comment = require("./Comment")

class Post {
    constructor(author, text) {
        this.author = author
        this.text = text
        this.comments = []
        this.createdAt = new Date()
    }
    addComment(name, comment) {
        this.comments.push(new Comment(name, comment))
    }
}

module.exports = Post