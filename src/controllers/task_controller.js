const Task = require('../models/task')

/**
 * task_list - Devuelve todas las tareas
 * @param {request} req - Request
 * @param {response} res - Response
 */
exports.task_list = async function (req,res){
    //Consulta a la base de datos
    const tasks = await Task.find()
    res.json(tasks)
}

/**
 * task_get_specific - Devuelve una tarea en especial
 * @param {request} req - Request
 * @param {response} res - Response
 */
exports.task_get_specific = async function (req,res){

    //Consulta un ID en específico
    const task = await Task.findById(req.params.id)
    res.json(task)
}

/**
 * task_create - Crea una tarea
 * @param {request} req - Request
 * @param {response} res - Response
 */
exports.task_create = async function (req,res){

    //Obtenemos datos del body de la request
    const { title, description} = req.body

    //Creamos nueva tarea
    const task = new Task({title,description})
    await task.save()
    
    res.json({status: 'Task Saved'})
}

/**
 * task_modify - Modifica una tarea
 * @param {request} req - Request
 * @param {response} res - Response
 */
exports.task_modify = async function (req, res){

    const { title, description} = req.body
    const newTask = {title, description}
    await Task.findByIdAndUpdate(req.params.id, newTask, {useFindAndModify: false});
    res.json({status: 'Task updated'})
}

/**
 * task_delete - Borra una tarea
 * @param {request} req - Request
 * @param {response} res - Response
 */
exports.task_delete = async function (req,res){
    await Task.findByIdAndRemove(req.params.id)
    res.json({status: 'Task deleted'})
}