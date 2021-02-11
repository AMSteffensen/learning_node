const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { Http2ServerRequest } = require("http2");
const { request } = require("http");
const { endpoint, masterKey, list } = require("./config");
const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const user = `${firstName} ${lastName} ${email}`;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  url = `${endpoint}/${list}`
  console.log(url)

  const options = {
    method: "POST",
    auth: "andreas: " + masterKey,
    
  };

  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/public/success.html");
    } else {
      res.sendFile(__dirname + "/public/failure.html");
    }
    response.on("data", function (data) {
      //console.log(JSON.stringify(data));
    });
  });
    request.end();
  

  //request.write(jsonData);

  
});

app.post("/failure", function (req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server running on port 3000");
});
