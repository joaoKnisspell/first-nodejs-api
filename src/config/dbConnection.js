import mongoose from "mongoose";

async function connectToDatabase(){
    mongoose.connect(process.env.DB_STRING_CONNECTION)
    return mongoose.connection
}

export default connectToDatabase;