import mongoose from 'mongoose';


const Connection = async(URL)=>{
    try {
        await mongoose.connect(URL);
        console.log("Database successfully connected")
    } catch (error) {
        console.log("Error: ", error.message)
    }
    
}

export default Connection;