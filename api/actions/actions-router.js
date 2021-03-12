// Write your "actions" router here!
const express = require('express');
const Action = require('./actions-model');
const router = express.Router();
const { handleError } = require('../middleware/middleware');

router.get('/', (req, res, next) => {
    Action.get()
      .then(actions => res.json(actions))
      .catch(next);
});

router.use(handleError);

module.exports = router;