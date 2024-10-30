import PropTypes from 'prop-types'

// Aplicar desestructuración para recuperar los valores de las props enviadas por el padre
// Asignar un valor por defecto a las props por si el padre no los envía
export const PrimerComponente = ({ titulo, subtitulo = "Subtitulo por defecto", numero }) => {
    return (
        <>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            <p>{numero + 1}</p>
        </>
    )
}

// Se marca las props que el padre debe enviar de forma obligatoria y el tipo de dato de las mismas
PrimerComponente.propTypes = {
    titulo: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired
}