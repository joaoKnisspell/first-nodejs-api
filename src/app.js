import express from 'express'
import connectToDatabase from './config/dbConnection.js'
import routes from './routes/index.js'

const connection = await connectToDatabase();

connection.on("error", (error) => {
    console.error(`Erro de conexão: ${error}`)
})

connection.once("open", () => {
    console.log("Conexão com o banco de dados realizada com sucesso!")
})


// router.get("/", (req, res) => {
//     res.status(200).send("Hello World! Minha Primeira API Node.js!")
// })

// router.get("/livros", (req, res) => {
//     res.status(200).json(livros)
// })

// router.get("/livros/:id", (req, res) => {
//     const bookId = req.params.id
//     const searchedBook = livros.filter((livro) => livro.id === Number(bookId))
//     res.status(200).json(searchedBook)
// })

// router.post("/livros", (req, res) => {
//     const newBook = req.body
//     livros.push(newBook)
//     res.status(201).end("Livro cadastrado com sucesso!")
// })

// router.put("/livros/:id", (req, res) => {
//     const bookId = req.params.id
//     livros = livros.map((livro) => {
//         if(livro.id === Number(bookId)){
//             return {
//                 ...livro,
//                 name: req.body.name
//             }
//         }
//         return livro
//     })
//     res.status(200).json(livros)
// })

// router.delete("/livros/:id", (req, res) => {
//     const bookId = Number(req.params.id)
//     livros = livros.filter((livro) => livro.id !== bookId)
//     res.status(200).json(livros)
// })
const app = express()
routes(app)

export default app