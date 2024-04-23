import mongoose from "mongoose";

export default async function connectDB(){
    await mongoose.connect(process.env.MONGODB || '').catch((err)=>{
        console.log(err)
    })
}