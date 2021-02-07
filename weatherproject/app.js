const express = require('express')
const https = require('https');
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
    let query = req.body.cityName
    let units = "metric"
    const API_KEY = "0073631a9ef66e0049a7dcd9df8cf450"
    const API_BASE_URL = "https://api.openweathermap.org"
    const url = `${API_BASE_URL}/data/2.5/weather?q=${query}&appid=${API_KEY}&units=${units}`
    https.get(url, function(response) {

        response.on("data", function(data){
           const weatherData = JSON.parse(data)
           const temp = weatherData.main.temp
           const description = weatherData.weather[0].description
           const icon = weatherData.weather[0].icon
           
           const report = `   
           <p>The weather is currently ${description}</p>
           <h1>The temprature in ${query} is: ${temp}.</h1>
           <img src="http://openweathermap.org/img/wn/${icon}@2x.png"/>
           `
          
           res.send(report)
        })
    })
})



app.listen(3000, function() {
    console.log("Server is running on port 3000")
})