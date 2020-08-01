import React from 'react';

interface Props{
    name : string
}

const Hello = (props:Props) => <div>hello {props.name}</div>

export default Hello;