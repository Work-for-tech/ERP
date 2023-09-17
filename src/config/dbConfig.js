const mongoose = require("mongoose")
const MONGO_URI = "mongodb+srv://admin:admin@cluster1.ku5nege.mongodb.net/test"
module.exports.dbConnect = () => {
    mongoose.connect(process.env.MONGO_URI || MONGO_URI)
        .then(data => {
            console.log("db connected");
        })
        .catch(err => {
            console.log("db not connected");
        })
}