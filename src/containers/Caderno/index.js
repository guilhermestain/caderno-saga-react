import React from 'react'
import './index.css'

const Caderno =(props)=>(
    <div className="caderno">
    <div className="title">
      <h1>Caderno SAGA</h1>
    </div>
    <div className="guilherme">
    <h2>Guilherme Stain - SBC - 4602A</h2>
      </div>
      <div > 
    <textarea id="2" className="notebook"rows="14" cols="120"  onChange={e => props.handleConteudo(e)}></textarea>
    </div>
</div>
)
export default Caderno