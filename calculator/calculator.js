const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result is: " + result);
});

app.post("/bmicalculator", function (req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var bmi = weight / (height ** 2);

  if (bmi < 18.5) {
    res.send("Your BMI is: " + bmi + "Wich is underweight.");
  } else if (bmi < 25) {
    res.send("Your BMI is: " + bmi + "Wich is normal.");
  } else if (bmi < 30) {
    res.send("Your BMI is: " + bmi + "Wich is overweight.");
  } else {
    res.send("Your BMI is: " + bmi + "Wich is obesee.");;
  }

  
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});

