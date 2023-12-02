// routes/todo.js
const express = require("express");
const router = express.Router();

const {
    viewReminder,
    setReminder,
    modifyReminder,
    deleteReminder,
    viewidReminder,

} = require("../controllers/reminderController");

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/viewReminder", viewReminder);

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/:id", viewidReminder);

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/setReminder", setReminder);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", modifyReminder);



/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", deleteReminder);

module.exports = router;