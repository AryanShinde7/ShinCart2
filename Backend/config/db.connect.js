import { mongoose } from "mongoose";

export const Mongodbconnect = async() =>{
    try {
        mongoose.connect(process.env.MONGO_URL)
        .then(()=>console.log(`mongodb connected`))
    } catch (error) {
        console.log(`error : ${error}`)
        process.exit(1);  // 1 means failure 0 means success

    }
}