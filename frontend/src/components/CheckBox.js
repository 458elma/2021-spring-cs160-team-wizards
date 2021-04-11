import React, { useState } from 'react'
import { Checkbox, Collapse } from 'antd';

const { Panel } = Collapse
const tutorRequirements=[
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

function CheckBox(props) {

  
    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {

        const currIndex = Checked.indexOf(value);
        const tempChecked = [...Checked];

        if (currIndex === -1) {
            tempChecked.push(value)
        } else {
            tempChecked.splice(currIndex, 1)
        }

        setChecked(tempChecked)
        props.handleFilters(tempChecked)
         

    }

    //rendering the view to the browser window, getting the key and value
    const renderCheckboxLists = () => tutorRequirements.map((value, index) => (
        <React.Fragment key={index}>
            <Checkbox
                onChange={() => handleToggle(value.id)}//onchange is performed when the check is done on the name with particular id
                type="checkbox"
                checked={Checked.indexOf(value.id)===-1 ? false:true}//false if none of them are checked else true
            />
            <span>{value.name}</span>&nbsp;&nbsp;
        </React.Fragment>
    ))

    return (
        <div>
            <Collapse defaultActiveKey={['0']} >
                <Panel header="Courses" key="1">
                    {renderCheckboxLists()}
                </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox