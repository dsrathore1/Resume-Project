const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

//! All packages get from local folders
const connectDB = require("./DB/connectDB");
const mainRoutes = require('./Routes/routes');

const app = express(); //! Initiate the app by calling express function

dotenv.config({ path: "config.env" }); //! Config env file/hide informative data in env file
const PORT = process.env.PORT || 4000; //! It will call PORT from env file or it will call from localhost


//! Parse request to the json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); //! Setting up template engine.

app.use(express.static("Assets")); //! Make Static middleware of assets.
app.use(mainRoutes); //! Calling all routes.

connectDB(); //! Connecting to the database.

//! Listening the PORT
app.listen(PORT, () => {
    console.log(`Your site is live on http://localhost:${PORT}`);
});