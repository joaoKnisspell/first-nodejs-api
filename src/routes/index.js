import express from 'express'
import BookRoutes from './books.routes.js'

const routes = (app) => {
    app.route("/", (req, res) => res.status(200).send("Curso de Node.js"))

    app.use(express.json(), BookRoutes)
}

export default routes