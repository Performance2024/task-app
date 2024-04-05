const express = require("express");
const request = require("request");
const cors = require("cors");
const app = express();

const PORT = 3000; // Utilisez un port qui ne conflict pas avec celui de Angular
const API_BASE_URL = "https://echelon-io-test.onrender.com"; // Remplacez par l'URL de base de votre API
app.use(cors());

app.use("/api", (req, res) => {
  const url = `${API_BASE_URL}${req.url}`;
  req.pipe(request(url)).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Serveur proxy démarré sur le port ${PORT}`);
});
