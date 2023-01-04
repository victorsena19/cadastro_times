import './index.css';

function CampoTexto(props){
    //Pode ser assim ou somente placeholder = props.placeholder
    const placeholderModificada = `${props.placeholder}`;
    
    const digitado = (evento) =>{
        props.alterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label><br/>
            <input value={props.value} 
                onChange={digitado} required={props.obrigatorio} 
                placeholder={placeholderModificada}/>
        </div>
    );
}
export default CampoTexto;