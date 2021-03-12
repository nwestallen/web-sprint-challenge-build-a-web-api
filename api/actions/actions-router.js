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

router.post('/', validateNewAction, (req, res) => {
  console.log(req.body, 'actionsrouter')
  Action.insert(req.action)
    .then(res.status(201).json(req.action))
    //.catch(next)
})

router.use(handleError);

module.exports = router;