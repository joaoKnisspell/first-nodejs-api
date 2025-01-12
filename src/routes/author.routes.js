import express from 'express'
import AuthorController from '../controllers/author.controller.js'

const authorRouter = express.Router()

authorRouter.get("/autores", AuthorController.getAll)
authorRouter.post("/autores", AuthorController.add)
authorRouter.get("/autores/:id", AuthorController.getById)
authorRouter.put("/autores/:id", AuthorController.update)
authorRouter.delete("/autores/:id", AuthorController.delete)

export default authorRouter