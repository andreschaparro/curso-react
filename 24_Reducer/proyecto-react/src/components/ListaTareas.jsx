// Un reducer recibe un estado inicial, una acción a realizar, y devuelve un nuevo estado
// No puede ejecutar código asincróno
// Se lo utiliza para gestionar los estados de forma centralizada
// A continuación, se implementa un reducer de forma incompleta en JS

const initialState = [{
    id: 1,
    tarea: 'Explicar Reducers',
    finalizada: false
}]

const tareaNueva = {
    id: 2,
    tarea: 'Explicar useReducer',
    finalizada: false
}

const tareaEditada = {
    id: 1,
    tarea: 'Explicar Reducers',
    finalizada: true
}

const agregarTarea = {
    type: '[TAREAS] Agregar Tarea',
    payload: tareaNueva
}

const editarTarea = {
    type: '[TAREAS] Editar Tarea',
    payload: tareaEditada
}

const eliminarTarea = {
    type: '[TAREAS] Eliminar Tarea',
}

const borrarTareas = {
    type: '[TAREAS] Borrar Tareas',
}

const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TAREAS] Agregar Tarea':
            return [...state, action.payload]
            break
        case '[TAREAS] Editar Tarea':
            // Hace lo necesario para editar una tarea
            break
        case '[TAREAS] Eliminar Tarea':
            // Hace lo necesario para eliminar una tarea
            break
        case '[TAREAS] Borrar Tareas':
            return []
            break
        default:
            return state;
            break
    }
}

console.log(tareaReducer(initialState, agregarTarea))

export const ListaTareas = () => {
    return (
        <>
        </>
    )
}
