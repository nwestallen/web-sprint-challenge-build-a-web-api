const Action = require('../actions/actions-model');

const validateActionId = (req, res, next) => {
    const id = req.params.id;
    Action.get(id)
      .then(action => {
          if(!action) {
              res.status(404).json({message: `action with id ${id} not found`})
          } else {
              req.action = action
              next()
          }
      });
};

const handleError = (err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        message: err.message, //DEV only
        stack: err.stack, //DEV only
        custom: 'there was an error retrieving data from the server'
    });
};

module.exports = {
    handleError,
    validateActionId
};