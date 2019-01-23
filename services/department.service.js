const Department = require("../models/department.model");

function getAllFromDb() {
  return Department.find({});
}

function getById(id) {
  return Department.findById(id);
}

// This is async/await implementation
async function add(newDepartment) {
  const department = new Department({
    name: newDepartment.name,
    description: newDepartment.description,
    head: newDepartment.head,
    code: newDepartment.code
  });

  try {
    return await (rawResult = department.save());
  } catch (e) {
    throw e.message;
  }
}

async function update(id, body) {
  try {
    await Department.findOneAndUpdate({ _id: id }, body, {
      new: true
    });
  } catch (e) {
    throw e;
  }
}

async function remove(id) {
  try {
    await Department.findOneAndDelete({ _id: id });
  } catch (e) {
    throw e;
  }
}

module.exports = {
  getAllFromDb,
  getById,
  add,
  update,
  remove
};
