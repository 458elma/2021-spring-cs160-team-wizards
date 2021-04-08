import React, {useState} from 'react'
import {Checkbox, Collapse} from 'antd'
const {Panel}= Collapse
const tutorRequirements=[
    {
        "id":1,
        "name": "No Charge"
    },
    {
        "id":2,
        "name": "$10-$15/hr"
    },
    {
        "id":3,
        "name": "$15-$20/hr"
    },
    {
        "id":4,
        "name": "$20-$25/hr"
    },
    {
        "id":5,
        "name": "$25-$30/hr"
    }
]

function CheckBox(props)
{
    const [Checked, setChecked] = useState([])
    const handleToggle=(value)=>{
      
      const currentIndex= Checked.indexOf(value); 
      const newChecked = [...Checked];
      if(currentIndex === -1)
      {
        newChecked.push(value)
      }
      else
      {
        newChecked.splice(currentIndex,1)
      }
      setChecked(newChecked)
      props.handleFilters(newChecked)
    }

    const renderCheckBoxLists=()=>tutorRequirements.map((value, index)=>
    (
        <React.Fragment key={index}>
              <Checkbox
              onChange={()=>handleToggle(value._id)}
              type="checkbox"
              checked={Checked.indexOf(value._id) === -1 ? false : true}
              />
              <span>{value.name}</span>
            </React.Fragment>
    ))
    
    return(
        <div>
          <Collapse defaultActiveKey={['0']}>
          <Panel header= "Price Range" key = "1">
            {renderCheckBoxLists()}
          </Panel>
          </Collapse>
        </div>
    )
}

export default CheckBox