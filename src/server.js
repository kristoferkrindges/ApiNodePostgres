const express = require("express");
const app = express();

const productRouter = require("./routes/productRoute");
// Connect database
const { sequelize } = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/produtos", productRouter);

sequelize.sync().then(() => {
	console.log("conectado com o banco postgres.");
});

// Porta para comunicação do servidor
app.listen(3000, () => {
	console.log("Iniciando o servidor...");
});
