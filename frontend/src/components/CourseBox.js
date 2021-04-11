import React, {useState} from 'react'
import {Radio, Collapse} from 'antd'
const {Panel}= Collapse
const courses=[
    {
        "_id": 0,
        "name": " Any",
        "array": []
    },
    {
        "_id": 1,
        "name": " $10 to $15",
        "array": [10, 15]
    },
    {
        "_id": 2,
        "name": " $15 to $20",
        "array": [15, 20]
    },
    {
        "_id": 3,
        "name": " $20 to $25",
        "array": [20, 25]
    },
    {
        "_id": 4,
        "name": " $25 to $30",
        "array": [25, 30]
    },
    {
        "_id": 5,
        "name": " > $30",
        "array": [30, 150]
    }
   
]
function CourseBox(props)
{
    const[Value, setValue]=useState('0')
    const renderCourseLists=()=>
    (   
     courses.map((value)=>(
     <Radio key={value._id} value={`${value._id}`}>{value.name}</Radio>
    ))
    )
    const onChangehandler =(event)=>
    {
        setValue(event.target.value)
        props.handleFilters(event.target.value)
    }
    return(
        <div>
          <Collapse defaultActiveKey={['0']}>
            <Panel header="Price Range " key = "1">
                <Radio.Group onChange={onChangehandler} value={Value}>

                    {renderCourseLists()}
                    
                </Radio.Group>
            </Panel>
          </Collapse>
        </div>
    )
}
export default CourseBox