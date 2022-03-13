const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    email: { type: String },
    number: { type: Number },
    dob: { type: Date },
    address: { type: String },
    summary: { type: String },
    edu: { type: String },
    achievement: { type: String },
    expYears: { type: String },
    workExp: { type: String },
    skills: { type: String },
    hobbies: { type: String },
    aftp: { type: String },
    github: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
    // profileImage:{type:},
    // signatureImage:{type:}
});

const userModel = new mongoose.model("resumeData", userSchema);

module.exports = userModel;