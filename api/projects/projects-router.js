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
    .then(res.status(201).json(req.project))
    .catch(next);
});

router.put('/:id', validateProjectId, validateNewProject, (req, res, next) => {
  Project.update(req.params.id, req.project)
    .then(res.json(req.project))
    .catch(next);
});

router.delete('/:id', validateProjectId, (req, res, next) => {
  Project.remove(req.params.id)
    .then(res.json({message: `project with id ${req.params.id} successfully removed`}))
    .catch(next);
});

router.get('/:id/actions', validateProjectId, (req, res, next) => {
  Project.getProjectActions(req.params.id)
    .then(actions => res.json(actions))
    .catch(next);
});

router.use(handleError);

module.exports = router;