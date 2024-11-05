import { useReducer } from "react"
import { useForm } from "../hooks/useForm"

const initialState = [{
    // con new Date.getTime() no se va a repetir el id
    id: new Date().getTime(),
    tarea: 'Explicar Reducers',
    finalizada: false
}]

const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TAREAS] Agregar Tarea':
            return [...state, action.payload]
            break

        case '[TAREAS] Finalizar Tarea':
            return state.map(tarea => {
                if (tarea.id === action.payload) {
                    return {
                        ...tarea, finalizada: !tarea.finalizada
                    }
                }
                return tarea
            })
            break

        case '[TAREAS] Borrar Tarea':
            return state.filter(tarea => tarea.id !== action.payload)
            break

        case '[TAREAS] Borrar Tareas':
            return []
            break

        default:
            return state;
    }
}

export const ListaTareas = () => {

    const { tarea, formState, onInputChange } = useForm({ tarea: '' })

    // Ingresar useR y seleccionar useReducerSnippet
    const [tareasState, dispatch] = useReducer(tareaReducer, initialState)

    // Con las siguientes funciones enviamos las acciones
    const agregarTarea = (event) => {
        event.preventDefault()

        if (formState.tarea === '')
            return

        const nuevaTarea = formState.tarea.trim()
        const payload = {
            id: new Date().getTime(),
            tarea: nuevaTarea,
            finalizada: false
        }
        const accion = {
            type: '[TAREAS] Agregar Tarea',
            payload: payload
        }
        dispatch(accion)
    }

    const finalizarTarea = ({ id }) => {
        const accion = {
            type: '[TAREAS] Finalizar Tarea',
            payload: id
        }
        dispatch(accion)
    }

    const borrarTarea = ({ id }) => {
        const accion = {
            type: '[TAREAS] Borrar Tarea',
            payload: id
        }
        dispatch(accion)
    }

    const borrarTareas = () => {
        const accion = {
            type: '[TAREAS] Borrar Tareas',
            payload: {}
        }
        dispatch(accion)
    }

    return (
        <>
            <form onSubmit={agregarTarea}>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="tarea"
                        placeholder="Ingresa una nueva tarea"
                        value={tarea}
                        onChange={onInputChange}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary">
                    Submit
                </button>

                <button
                    type="button"
                    onClick={borrarTareas}
                    className="btn btn-danger">
                    Borrar las Tareas
                </button>

            </form>
            <hr />

            <ul className="list-group">
                {tareasState.map(item => {
                    return (
                        <li key={item.id} className="list-group-item d-flex justify-content-between">

                            <div className="d-flex align-items-center">
                                {item.tarea}
                            </div>

                            <div className="d-flex align-items-center">
                                <input
                                    type="checkbox"
                                    value={item.finalizada}
                                    onChange={() => finalizarTarea(item)}
                                    className="form-check-input"
                                />
                                <button
                                    onClick={() => borrarTarea(item)}
                                    className="btn btn-danger">
                                    🗑
                                </button>
                            </div>

                        </li>
                    )
                })}
            </ul>

        </>
    )
}
