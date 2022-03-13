const Router = require("express").Router();
const useModel = require("../Model/userModel");

Router.get("/", (req, res) => {
    res.render("index.ejs");
});

Router.post("/templatePage", (req, res) => {
    const user = new useModel(req.body);
    user.save().then(item => {
        res.json({ "message": "Data Sent", "Data": item });
    }).catch(err => { console.log(err) });
});

Router.get('/templatePage', (req, res) => {
    res.render("template.ejs");
});

Router.get('/dataPage', (req, res) => {
    res.render("dataPage.ejs");
});

module.exports = Router;