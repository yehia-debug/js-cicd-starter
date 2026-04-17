const app = require("./app");

const PORT = process.env.PORT ||3000;       // Define the port number for the server to listen on, using an environment variable or defaulting to 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});