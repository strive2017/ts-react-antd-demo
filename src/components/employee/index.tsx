import React, { Component } from 'react';

import QueryFrom from './queryForm'
import { Table } from 'antd';

import {employeeColumns} from './colums'


class Employee extends Component{
    render(){
        return(
            <>
                <QueryFrom/>
                <Table columns={employeeColumns} className="table"></Table>
            </>
        )
    }
}

export default Employee;