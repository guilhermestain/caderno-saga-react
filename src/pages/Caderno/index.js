import React, { Component } from 'react';
import CadernoContainer from '../../containers/Caderno'
class Caderno extends Component{
    state={
        conteudo:null
    }
    handleConteudo=(text)=>{
    this.setState({conteudo:text.target.value})
    }
    render(){
        return (
            <CadernoContainer
            handleConteudo={this.handleConteudo}
            />
        )
    }
}
export default Caderno