const http = require('http');
const cron = require("node-cron")
const axios = require("axios")

console.log("Server Started")
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
async function fetchData() {
  try {
    const response = await axios.get("https://rilli-server.onrender.com")
    console.log("Request successful:", response.data)
  } catch (error) {
    console.error("Error making request:", error.message)
  }
}

cron.schedule("*/10 * * * *", function () {
  fetchData()
  console.log("running a task 10 every minute")
})
