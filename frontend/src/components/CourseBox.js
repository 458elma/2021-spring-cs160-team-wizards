import React, {useState} from 'react'
import {Radio, Collapse} from 'antd'
const {Panel}= Collapse
const courses=[
    {
        "id":1,
        "name": "Algebra"
    },
    {
        "id":2,
        "name": "Zoology"
    },
    {
        "id":3,
        "name": "Object Oriented Program"
    },
    {
        "id":4,
        "name": "Chemistry"
    },
    {
        "id":5,
        "name": "Sociology"
    }
]

function CourseBox()
{
    const renderCourseLists=()=>
    (   
     courses.map((value)=>(
     <Radio key={value._id} value={`{value.id}`}>{value.name}</Radio>
    ))
    )
const handleChange =(event)=>
{
    
}
    return(
        <div>
          <Collapse defaultActiveKey={['0']}>
            <Panel header="Courses " key = "1">
                <Radio.Group onChange={handleChange} value>
                    {renderCourseLists()}
                </Radio.Group>
            </Panel>
          </Collapse>
        </div>
    )
}
export default CourseBox