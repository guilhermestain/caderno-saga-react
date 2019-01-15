import React, {Component} from 'react'
import CountContainer from '../../containers/Count'
class Count extends Component {
    state ={ 
        count:10
    }
    incrementar=()=>{
    const count=this.state.count +1
    this.setState({ count  })
    }
    decrementar=()=>{   
    const count=this.state.count -1
    this.setState({ count })
    }
render (){
    return (
        <CountContainer 
        incrementar={this.incrementar}
        decrementar={this.decrementar}
        count ={this.state.count} 
        />

    )
}
}
export default Count