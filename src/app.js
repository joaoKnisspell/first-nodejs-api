import express from 'express'

const livros = [
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

app.get("/", (req, res) => {
    res.status(200).send("Hello World! Minha Primeira API Node.js!")
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
})

export default app