const multer = require("multer");

const store = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads/Images');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + '--' + file.originalname)
    }
});

let upload = multer({
    storage: store,
    limits: {
        fileSize: 1024 * 1024 * 3
    }
});

module.exports = upload;