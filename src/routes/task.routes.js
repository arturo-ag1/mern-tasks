const express = require('express')
const router = express.Router()

const task_controller = require('../controllers/task_controller')

// Ruta get - obtener bases de tasks
router.get('/', task_controller.task_list)

//Ruta get - obtiene una sola task
router.get('/:id', task_controller.task_get_specific)

//Ruta post - crea una task
router.post('/',task_controller.task_create)

//Ruta put - modifica una tarea
router.put('/:id', task_controller.task_modify)

//Ruta delete - elimina una tarea
router.delete('/:id', task_controller.task_delete)


module.exports = router;