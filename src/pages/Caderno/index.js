import React, { Component } from 'react';
import CadernoContainer from '../../containers/Caderno'
class Caderno extends Component{
    state = {
        conteudo: localStorage.getItem('caderno')
    }
    
    
    handleConteudo=(event)=>{
        this.setState({conteudo:event.target.value})
    }

    salvar = () => {
        localStorage.setItem('caderno', this.state.conteudo)
    } 

    render(){
        return (
            <CadernoContainer
                conteudo={this.state.conteudo}
                salvar={this.salvar}
                handleConteudo={this.handleConteudo}
            />
        )
    }
}
export default Caderno