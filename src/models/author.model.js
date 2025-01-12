import mongoose from 'mongoose'

const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String },
})

const authorModel = mongoose.model("authors", authorSchema)

export default authorModel;