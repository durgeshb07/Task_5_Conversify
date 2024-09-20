import mongoose from "mongoose";


const connectToMongoDB = async () => {
    try {
       
          await mongoose.connect(process.env.MONGODB_URI);
        // await mongoose.connect("mongodb+srv://durgeshb:6uZpxIRKD4WVRCQm@cluster0.wpohk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB",error.message);
    }
    
}

export default connectToMongoDB;