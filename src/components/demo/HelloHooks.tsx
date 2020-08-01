import React,{useState, useEffect} from 'react'
import {Button} from 'antd'

interface Props{
    name : string
}

const HelloHooks = (props:Props)=>{
    const [count, setCount] = useState(0)
    const [text, setText] = useState<string | null>(null)

    useEffect(()=>{
        if(count > 5){
            setText('你点击的太频繁了')
        }
       
    },[count])

    return(
        <>
            <p>你点击了{count}次，{text}</p>
            <Button onClick={  ()=>{
               setCount(count+1)
            }  }>hello {props.name}</Button>
        </>
    )
}

export default HelloHooks;