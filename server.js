const express = require('express')
const app = express()
const port = 3000
// require API_helper.js
const api_helper = require('./API_helper')
const cors = require('cors');


//use cors middleware
app.use(cors());

//Get Upcomming Launches
app.get('/launches', (req, res) => {
    api_helper.make_API_call('https://api.spacexdata.com/v4/launches/upcoming')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })

})

//Get specific Launch
app.get('/launch/:id', (req, res) => {
    api_helper.make_API_call(`https://api.spacexdata.com/v4/launches/${req.params.id}`)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })

})

//Get the rocket details for a launch
app.get('/rocket/:id', (req, res) => {
    api_helper.make_API_call(`https://api.spacexdata.com/v4/rockets/${req.params.id}`)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })

})

//get Payload Information
app.get('/payloads/:id', (req, res) => {
    api_helper.make_API_call(`https://api.spacexdata.com/v4/payloads/${req.params.id}`)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })

})

app.listen(port, () => console.log(`App listening on port ${port}!`))