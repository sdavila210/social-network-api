const router = require('express').Router();
const User = require('../../models/User');

// GET route that gets all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET route that gets a single user by its _id and populated thought and friend data 
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'There was an error. Please try again' });
    }
});

// POST route that posts a new user
router.post('/', async (req, res) => {
    const { username, email } = req.body;
    if (!username || !email) {
        return res.status(400).json({ message: 'Username and email are required' });
    }

    try {
        const newUser = await User.create({ username, email });
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'There was an error. Please try again' });
    }
});

// PUT route to update user by its _id
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE route to remove user by its _id
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (deletedUser) {
            res.json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'There was an error. Please try again' });
    }
});

// POST to add a new friend to a user's friend list
router.post('/:userId/friends/:friendId', async (req, res) => {
    const { userId, friendId } = req.params;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.friends.includes(friendId)) {
            return res.status(400).json({ message: 'Friend already exists in the user friend list' });
        }
        user.friends.push(friendId);
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'There was an error. Please try again' });
    }
});

// DELETE to remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', async (req, res) => {
    const { userId, friendId } = req.params;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (!user.friends.includes(friendId)) {
            return res.status(400).json({ message: 'Friend does not exist in the user friend list' });
        }
        user.friends = user.friends.filter(friend => friend != friendId);
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'There was an error. Please try again' });
    }
});

module.exports = router;
