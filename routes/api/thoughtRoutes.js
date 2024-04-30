const router = require('express').Router();
const User = require('../../models/User');
const Thought = require('../../models/Thought');

// GET all thoughts
router.get('/', async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (error) {
        res.status(500).json({ message: 'There was an error. Please try again' });
    }
});

// GET a single thought by its _id
router.get('/:id', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
    } catch (error) {
        res.status(500).json({ message: 'There was an error. Please try again' });
    }
});

// POST a new thought
router.post('/', async (req, res) => {
    const thought = new Thought({
        thoughtText: req.body.thoughtText,
        username: req.body.username
    });

    try {
        const savedThought = await thought.save();
        const user = await User.findById(req.body.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.thoughts.push(savedThought._id);
        await user.save();
        res.status(200).json(savedThought);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT route to update a thought by its _id
router.put('/:id', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        thought.thoughtText = req.body.thoughtText;
        thought.username = req.body.username;
        const updatedThought = await thought.save();
        res.json(updatedThought);
    } catch (error) {
        res.status(400).json({ message: 'There was an error. Please try again' });
    }
});

// DELETE route to remove a thought by its _id

router.delete('/:id', async (req, res) => {
    try {
        const deletedThought = await Thought.findByIdAndDelete(req.params.id);
        if (!deletedThought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.json({ message: 'Thought deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;