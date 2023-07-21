import express from "express";
const app = express();

var port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Blocumen Studios</h1>");
});

app.get("/about", (req, res) => {
    res.send("About Us");
});

app.get("/contact", (req, res) => {
    res.send("Contact Us");
});


app.listen(port, () => {
    console.log(`Server running at port ${port}...`);
});