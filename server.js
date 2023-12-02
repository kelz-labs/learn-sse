const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const intervalId = setInterval(() => {
    const date = new Date().toLocaleString();
    res.write(`Data: ${date}\n\n`);
  }, 1000);

  res.on("close", () => {
    console.log("Client closed connection");
    clearInterval(intervalId);
    res.end();
  });
});

app.listen(port, () => {
  console.log(`Server sudah jalan di port ${port}`);
});
