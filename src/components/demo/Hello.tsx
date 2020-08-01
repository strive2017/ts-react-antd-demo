import React from 'react';
import {Button} from 'antd';


interface Props{
    name : string
}

const Hello = (props:Props) => <Button>hello {props.name}</Button>

export default Hello;