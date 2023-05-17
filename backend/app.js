
const express = require("express");
const app = express();
const cors = require("cors");
const productsRoutes = require("./controllers/productsController");


app.use(cors());
app.use(express.json());
app.use("/products", productsRoutes);


app.get("/", (req, res) => {
    res.json( {message: "Welcome to the Products App Back-end"} );
    }
);

app.get ("*", (req, res) => {

    res.status(404).json({message: "Page Not Found"});
});


module.exports = app;

