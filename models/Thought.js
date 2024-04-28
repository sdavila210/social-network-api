const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Define Thought schema
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function (createdAt) { // using getter method to format timestamp
            return new Date(createdAt).toDateString();
        }
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema],
},
    {
        toJSON: {
            getters: true,
        }
    }
);

// Virtual to retrieve reaction count
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Initialize Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;