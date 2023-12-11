class Manga {
    constructor(title){
        this.title = title
        this.published = false
    }

publish(){
    this.published = true
}
}

const onePiece = new Manga("onePiece")
const naruto = new Manga("Naruto")

onePiece.publish()

console.log(onePiece)
console.log(naruto)
console.log(onePiece instanceof Array)
console.log([onePiece, naruto] instanceof Array)