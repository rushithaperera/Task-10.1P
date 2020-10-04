const mongoose = require("mongoose")


const RequesterTask = new mongoose.Schema({
    taskType: String,
    title: String,
    description: String,
    expireDate: Date,
    masterWorker: String,
    reward: Number,
    numberofworkers: Number
})


module.exports = mongoose.model("RequesterTask", RequesterTask)