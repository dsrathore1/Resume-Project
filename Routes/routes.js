const Router = require("express").Router();
const userModel = require("../Model/userModel");
const upload = require("../Middleware/uploadFile");


Router.get("/", (req, res) => {
    res.render("index.ejs");
});

Router.post("/templatePage", upload.single('profileImage'), async (req, res) => {
    const user = new userModel(req.body);

    // console.log(req.file);

    await user.save().then(item => {
        res.render("template.ejs", {
            item: item
        });

    }).catch(err => {
        console.log(err)
    });
});

Router.get('/templatePage', (req, res) => {
    res.render("template.ejs");
});

module.exports = Router;