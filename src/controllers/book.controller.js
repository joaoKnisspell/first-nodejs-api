import bookModel from '../models/book.model.js'

class BookController {

    static async getAll(req, res){
        try{
            const bookList = await bookModel.find({})
            res.status(200).json(bookList)
        }catch(err){
            res.status(500).json({ message: `HTTP Error: ${err.message}` })
        }
    }

    static async getById(req, res){
        const bookId = req.params.id;
        try{
            const searchedBook = await bookModel.findById(bookId)
            res.status(200).json(searchedBook)
        }catch(err){
            res.status(500).json({ message: `HTTP Error: ${err.message}` })
        }
    }

    static async add(req, res){
        const reqData = req.body;
        try{
            const newBook = await bookModel.create(reqData)
            res.status(200).json(newBook)
        }catch(err){
            res.status(500).json({ message: `HTTP Error: ${err.message}` })
        }
    }

    static async update(req, res){
        const bookId = req.params.id;
        const reqData = req.body;
        try{
            await bookModel.findByIdAndUpdate(bookId, reqData)
            res.status(200).json({ message: "Livro Atualizado com Sucesso!" })
        }catch(err){
            res.status(500).json({ message: `HTTP Error: ${err.message}` })
        }
    }

    static async delete(req, res){
        const bookId = req.params.id;
        try{
            await bookModel.findByIdAndDelete(bookId)
            res.status(200).json({ message: "Livro Removido com Sucesso!" })
        }catch(err){
            res.status(500).json({ message: `HTTP Error: ${err.message}` })
        }
    }

}

export default BookController