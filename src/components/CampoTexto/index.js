import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModify = `${props.placeholder}...`
    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModify}/>
        </div>
    )
}

export default CampoTexto;