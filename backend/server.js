// Dylan Churchill

const express = require("express");

const PORT = 3000;
const app = express(); 

app.get("/", (req, res) => {
    res.send("Hello From Dylan");
});

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});
