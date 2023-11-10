const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("db connection successfull");
    })
    .catch((err) =>{
        console.log("issue in db connection");
        process.exit(1)
    })
}

module.exports = dbConnect