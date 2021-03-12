// Write your "projects" router here!
const express = require('express');
const Project = require('./projects-model');
const router = express.Router();

router.get('/', (req, res) => {
    Project.get()
      .then(projects => res.json(projects))
      .catch(err => res.status(500).json({message: err.message}));
});

module.exports = router;