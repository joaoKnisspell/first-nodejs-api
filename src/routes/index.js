import express from 'express'
import BookRoutes from './books.routes.js'
import AuthorRoutes from './author.routes.js'

const routes = (app) => {
    app.route("/", (req, res) => res.status(200).send("Curso de Node.js"))

    app.use(express.json(), BookRoutes, AuthorRoutes)
}

export default routes