// Write your "actions" router here!
const express = require('express');
const Action = require('./actions-model');
const router = express.Router();

router.get('/', (req, res) => {
    Action.get()
      .then(actions => res.json(actions))
      .catch(err => res.status(500).json({message: err.message}));
});

module.exports = router;