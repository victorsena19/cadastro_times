import React, { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../campoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './index.css'

const Formulario = (props)=>{
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const salvar = (evento)=> {
        evento.preventDefault()
      
         props.aoCadastrarColaborador({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    } 

    return(
        <section className="formulario">
            <form onSubmit={salvar}>
                <h1>Preencha os campos a baixo para criar o time de colaboradores</h1>
                <CampoTexto value={nome} 
                    alterado={valor => setNome(valor)} 
                    label = "Nome" 
                    placeholder="Digite seu nome" 
                    obrigatorio={true}/>
                <CampoTexto value={cargo} 
                    alterado={valor => setCargo(valor)} 
                    label = "Cargo" 
                    placeholder="Digite seu cargo" 
                    obrigatorio={true}/>
                <CampoTexto value={imagem} 
                    alterado={valor => setImagem(valor)} 
                    label = "Imagem" 
                    placeholder="Digite o endereço da sua imagem"/>
                <ListaSuspensa label = "Time"
                    value={time} 
                    selecionado={valor=>setTime(valor)} 
                    itens={props.time}
                    obrigatorio={true}/>
                <Botao>Criar Colaborador</Botao>
            </form>
        </section>
       
    );
}

export default Formulario;