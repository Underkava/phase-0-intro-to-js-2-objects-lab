// Write your solution in this file!
// index.js

// Function 1: Non-destructively updates the employee object
let employee = {
    name: "Samuel",
    streetAddress: "ngong road"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
// Function 2: Non-destructively updates the employee object
function updateObjectWithKeyAndValue(object, key, value) {
    return {
        ...object,
        [key]: value
    };
}
