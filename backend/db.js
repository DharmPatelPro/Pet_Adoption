const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://dharmpatel8160:bjdfLr6JbHesCd2p@cluster0.a5inmhu.mongodb.net/";
const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully...");
    })
}

module.exports=connectToMongo;