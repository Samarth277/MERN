import mongoose from 'mongoose'

const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log('connected to mongoDB Database ${conn.connection,host}');
    } catch (error) {
        console.log('error in MongoDB');
    }
}


export default connectDB;