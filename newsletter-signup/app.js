const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { Http2ServerRequest } = require("http2");
const { request } = require("http");
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

  const url = "https://us7.api.mailchimp.com/3.0/lists/54a4e09e03";

  const options = {
    method: "POST",
    auth: "andreas:cdf9024e8b2db2ca66ec2e49c1ac8325-us7",
  };

  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/public/success.html");
    } else {
      res.sendFile(__dirname + "/public/failure.html");
    }
    response.on("data", function(data){
      console.log(JSON.stringify(data))
    });
  });

  //request.write(jsonData);
  request.end();
});

app.post("/failure", function(req, res){
  res.redirect("/")
})

app.listen(process.env.PORT || 3000, function () {
  console.log("Server running on port 3000");
});
