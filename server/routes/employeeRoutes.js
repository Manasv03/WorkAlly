import { Router } from "express";
import { getEmployees,createEmployee, updateEmployee, deleteEmployee } from "../controllers/employeeController.js";

const employeesRouter= Router();

employeesRouter.get("/", getEmployees)
employeesRouter.post("/", createEmployee)
employeesRouter.put("/:id", updateEmployee)
employeesRouter.delete("/:id", deleteEmployee)