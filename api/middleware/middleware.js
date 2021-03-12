const Action = require('../actions/actions-model');
const Project = require('../projects/projects-model');

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
      })
      .catch(next);
};

const validateNewAction = (req, res, next) => {
    const action = req.body 
    console.log(action, 'middleware')
    if (!action) {
        res.status(400).json({message: 'must include request body'})
    } else if(!action.project_id || !action.notes || !action.description) {
        res.status(400).json({message: 'actions must include a project_id'})
    } else {
        req.action = action
        next()
    }
};

const validateProjectId = (req, res, next) => {
    const id = req.params.id;
    Project.get(id)
      .then(project => {
          if(!project) {
              res.status(404).json({message: `project with id ${id} not found`})
          } else {
              req.project = project
              next()
          }
      })
      .catch(next);
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
    validateActionId,
    validateNewAction,
    validateProjectId
};