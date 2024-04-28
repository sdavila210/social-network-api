const { Schema } = require('mongoose');

// Define Reaction schema
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function (createdAt) { // using getter method to format timestamp
            return new Date(createdAt).toDateString();
        }
    }
},
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = reactionSchema;