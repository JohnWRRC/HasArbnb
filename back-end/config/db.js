import "dotenv/config";
import mongoose from "mongoose";


const { MONGO_URL } = process.env;

export const conectDB = async () => {
    try{
         await mongoose.connect(MONGO_URL)
        console.log("Conectado ao MongoDB com sucesso!");
        }catch(error){
        console.log(" !!!Nao conectado Conectado ao MongoDB com sucesso!",error);
}
}

