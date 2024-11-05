import { useState } from "react"

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            // Se agrega un elemento al final del input que se está modificando
            ...formState,
            [name]: value
        })
    }

    return {
        ...formState,
        formState,
        onInputChange,
    }
}