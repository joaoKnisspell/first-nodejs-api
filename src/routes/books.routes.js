import express from 'express'
import BookController from '../controllers/book.controller.js'

const routes = express.Router();

routes.get("/livros", BookController.getAll)
routes.get("/livros/:id", BookController.getById)
routes.put("/livros/:id", BookController.update)
routes.delete("/livros/:id", BookController.delete)
routes.post("/livros", BookController.add)

export default routes