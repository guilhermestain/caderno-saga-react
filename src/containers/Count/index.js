import React from 'react'
import Button from '../../components/Button'
const Count = (props)=>(
<div>
<h1>{props.count}</h1>
<Button onClick={props.decrementar} name="-"/>
<Button onClick= {props.incrementar} name="+"/>
</div>
)

export default Count