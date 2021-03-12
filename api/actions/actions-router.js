// Write your "actions" router here!
const express = require('express');
const Action = require('./actions-model');
const router = express.Router();
const { handleError, validateActionId, validateNewAction } = require('../middleware/middleware');

router.get('/', (req, res, next) => {
    Action.get()
      .then(actions => res.json(actions))
      .catch(next);
});

router.get('/:id', validateActionId, (req, res) => {
  res.json(req.action);
});

router.post('/', validateNewAction, (req, res, next) => {
  Action.insert(req.action)
    .then(res.status(201).json(req.action))
    .catch(next);
});

router.put('/:id', validateActionId, validateNewAction, (req, res, next) => {
  Action.update(req.params.id, req.action)
    .then(res.status(200).json(req.action))
    .catch(next);
});

router.delete('/:id', validateActionId, (req, res, next) => {
  Action.remove(req.params.id)
   .then(res.json({ message: `action with id ${req.params.id} successfully deleted`}))
   .catch(next);
});

router.use(handleError);

module.exports = router;