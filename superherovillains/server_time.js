require("http")
  .createServer((inRequest, inResponse) => {
    requestModule(
      "http://worldtimeapi.org/api/timezone/America/New_York",
      function (inErr, inResp, inBody) {
        inResponse.end(`Hello from my first Node Web server: ${inBody}`);
      }
    );
  })
  .listen(80);
