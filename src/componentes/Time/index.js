import Colaborador from '../Colaborador';
import './index.css';

const Time = (props) => {

    //É a mesma coisa de fazer igual foi feito no h3 e na div
    const css = {backgroundColor: props.corSecundaria}

    //Da para fazer com o operador ternario também ?true :false
    return(
       (props.colaboradores.length > 0) && <section className="time" style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="card">
                {props.colaboradores.map(col=> <Colaborador corDeFundo={props.corPrimaria}
                key={col.nome}
                nome={col.nome}
                cargo={col.cargo} 
                imagem={col.imagem}/>)}
            </div>
        </section>
        //:false ficaria nessa linha 
    )
}

export default Time;