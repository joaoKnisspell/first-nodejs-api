import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: { type: String },
    publisher: { type: String },
    pages: { type: Number },
    price: { type: Number }
}, { versionKey: false })

const bookModel = mongoose.model("books", bookSchema)

export default bookModel
