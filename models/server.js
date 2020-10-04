const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const RequesterTask = require("./requesterTask")

app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/requesterDB", { useNewUrlParser: true })

app.get('/', (req, res) => {
    res.send()
})

app.post('/', (req, res) => {
    const taskType = req.body.checkboxRadioGroup1
    const title = req.body.title
    const description = req.body.description
    const expireDate = req.body.date
    const masterWorker = req.body.checkboxRadioGroup2
    const reward = req.body.reward
    const numberofworkers = req.body.numberofworkers

    const requesterTask = new RequesterTask({
        taskType: taskType,
        title: title,
        description: description,
        expireDate: expireDate,
        masterWorker: masterWorker,
        reward: reward,
        numberofworkers: numberofworkers
    })

    requesterTask.save((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Success")
        }
    })
})




app.listen(8080, function (request,response){
    console.log("Server is running on port 3000")
})