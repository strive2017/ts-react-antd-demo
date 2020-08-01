import React, { Component } from 'react';
import { Button } from 'antd'
  
interface Props{
    name : string
}

interface State{
    count : number
}



class HelloClass extends Component<Props,State>{

    state : State = {
        count : 0
    }
    
    render(){
        return(
            <>
                <p>你点击了{this.state.count}次</p>
                <Button onClick={  ()=>{
                    this.setState({
                        count : this.state.count + 1
                    })
                }  }>hello {this.props.name}</Button>
            </>
        )
    }
}

export default HelloClass;