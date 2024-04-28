const { Schema, model } = require('mongoose');

//Define User schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: { //using regex to match email validation
        type: String,
        required: true,
        unique: true,
        match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

// Virtual that retrieves the friend count
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

//Initializes User model
const User = model('User', userSchema);

module.exports = User;
