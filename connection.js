import mongoose from 'mongoose';

async function Connection(){
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/DemoDB1"); 
        console.log("MongoDB is connected at port 27017");
    }catch(err){
        console.log("MongoDB connection error: "+err);
    }
    
}

export default Connection;