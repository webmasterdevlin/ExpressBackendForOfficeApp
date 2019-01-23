const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/department.controller");

// GET: /api/departments
router.get("/departments", departmentController.retrieveDepartments);

// GET: /api/departments/{id}
router.get("/departments/:id", departmentController.retrieveOneDepartment);

// POST: /api/departments
router.post("/departments", departmentController.saveDepartment);

// DELETE: /api/departments/{id}
router.delete("/departments/:id", departmentController.removeDepartment);

// PUT: /api/departments/{id}
router.put("/departments/:id", departmentController.updateDepartment);

module.exports = router;
