import authorModel from '../models/author.model.js'

class AuthorController {

    static async getAll(req, res){
        try{
            const authorList = await authorModel.find({})
            res.status(200).json(authorList)
        }catch(err){
            res.status(500).json({ message: `HTTP Error: ${err.message}` })
        }
    }

    static async getById(req, res){
        const authorId = req.params.id;
        try{
            const searchedAuthor = await authorModel.findById(authorId)
            res.status(200).json(searchedAuthor)
        }catch(err){
            res.status(500).json({ message: `HTTP Error: ${err.message}` })
        }
    }

    static async add(req, res){
        const reqData = req.body;
        try{
            const newAuthor = await authorModel.create(reqData)
            res.status(200).json(newAuthor)
        }catch(err){
            res.status(500).json({ message: `HTTP Error: ${err.message}` })
        }
    }

    static async update(req, res){
        const authorId = req.params.id;
        const reqData = req.body;
        try{
            await authorModel.findByIdAndUpdate(authorId, reqData)
            res.status(200).json({ message: "Autor Atualizado com Sucesso!" })
        }catch(err){
            res.status(500).json({ message: `HTTP Error: ${err.message}` })
        }
    }

    static async delete(req, res){
        const authorId = req.params.id;
        try{
            await authorModel.findByIdAndDelete(authorId)
            res.status(200).json({ message: "Autor Removido com Sucesso!" })
        }catch(err){
            res.status(500).json({ message: `HTTP Error: ${err.message}` })
        }
    }

}

export default AuthorController