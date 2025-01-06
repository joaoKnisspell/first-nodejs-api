import express from 'express'

let livros = [
    {
        id: 1,
        name: "Can't Hurt Me: Master Your Mind and Defy the Odds"
    },
    {
        id: 2,
        name: "The Psychology of Money: Timeless lessons on wealth, greed, and happiness"
    }
]

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Hello World! Minha Primeira API Node.js!")
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
})

app.get("/livros/:id", (req, res) => {
    const bookId = req.params.id
    const searchedBook = livros.filter((livro) => livro.id === Number(bookId))
    res.status(200).json(searchedBook)
})

app.post("/livros", (req, res) => {
    const newBook = req.body
    livros.push(newBook)
    res.status(201).end("Livro cadastrado com sucesso!")
})

app.put("/livros/:id", (req, res) => {
    const bookId = req.params.id
    livros = livros.map((livro) => {
        if(livro.id === Number(bookId)){
            return {
                ...livro,
                name: req.body.name
            }
        }
        return livro
    })
    res.status(200).json(livros)
})

app.delete("/livros/:id", (req, res) => {
    const bookId = Number(req.params.id)
    livros = livros.filter((livro) => livro.id !== bookId)
    res.status(200).json(livros)
})

export default app