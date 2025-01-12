import mongoose from "mongoose";
import { authorSchema } from "../models/author.model.js"

const bookSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: { type: String },
    publisher: { type: String },
    pages: { type: Number },
    price: { type: Number },
    author: authorSchema, 
}, { versionKey: false })

const bookModel = mongoose.model("books", bookSchema)

export default bookModel
