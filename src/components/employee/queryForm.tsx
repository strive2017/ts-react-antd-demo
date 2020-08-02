import React, { Component } from 'react';
import {Form, Input, Select, Button} from 'antd'


import {EmployeeRequest} from '../../interface/employee'
import { get } from '../../utils/request'
import { GET_EMPLOYEE_URL } from '../../constants/urls'

const {Option} = Select;
class QueryFrom extends Component<{},EmployeeRequest>{
    state:EmployeeRequest={
        name: '',
        departmentId: undefined
    }
    componentDidMount(){
        this.queryEmployee(this.state)
    }

    handleNameChange = (e:React.FormEvent<HTMLInputElement>) => {
        this.setState({
            name: e.currentTarget.value
        })
    }
    handleDepartmentChange = (value:number)=>{
        this.setState({
            departmentId: value
        })
    }
    handelSubmit = () =>{
        this.queryEmployee(this.state)
    }
    queryEmployee(param:EmployeeRequest){
        console.log(param)
        get(GET_EMPLOYEE_URL,param).then( response =>{

        })
    }

    

    render(){
        return(
            <Form layout="inline">
                <Form.Item>
                    <Input 
                        placeholder="姓名"
                        style={{width:120}}
                        allowClear
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Select 
                        placeholder="部门"
                        style={{width:120}}
                        allowClear
                        value={this.state.departmentId}
                        onChange={this.handleDepartmentChange}
                    >
                        <Option value={1}>技术部</Option>
                        <Option value={2}>产品部</Option>
                        <Option value={3}>市场部</Option>
                        <Option value={4}>运营部</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={this.handelSubmit}>查询</Button>
                </Form.Item>
            </Form>
        )
    }
}


export default QueryFrom;