// Write your "projects" router here!
const express = require('express');
const Project = require('./projects-model');
const { handleError, validateProjectId, validateNewProject } = require('../middleware/middleware');
const router = express.Router();

router.get('/', (req, res, next) => {
    Project.get()
      .then(projects => res.json(projects))
      .catch(next);
});

router.get('/:id', validateProjectId, (req, res) => {
    res.json(req.project);
});

router.post('/', validateNewProject, (req, res, next) => {
  Project.insert(req.project)
    .then(res.json(req.project))
    .catch(next);
});

router.use(handleError);

module.exports = router;