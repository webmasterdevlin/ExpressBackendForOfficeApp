const departmentService = require("../services/department.service");
const Boom = require("boom");

// This is promise implementation
function retrieveDepartments(req, res, next) {
  departmentService
    .getAllFromDb()
    .then(departments => res.json(departments))
    .catch(err => next(err));
}

// promise
function retrieveOneDepartment(req, res, next) {
  departmentService
    .getById(req.params.id)
    .then(department => res.json(department))
    .catch(err => next(err));
}

// This is async/await implementation. A syntactic sugar on top of promise
async function saveDepartment(req, res) {
  try {
    const createdDepartment = await departmentService.add(req.body);
    res.json(createdDepartment);
  } catch (error) {
    res.status(500).json(error);
  }
}

// async/await
async function updateDepartment(req, res) {
  try {
    await departmentService.update(req.params.id, req.body);
    res.json({ updated: req.params.id });
  } catch (error) {
    res.status(500).json(error);
  }
}

// async/await
async function removeDepartment(req, res) {
  try {
    await departmentService.remove(req.params.id);
    res.json({ deleted: req.params.id });
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  retrieveDepartments,
  retrieveOneDepartment,
  saveDepartment,
  updateDepartment,
  removeDepartment
};
