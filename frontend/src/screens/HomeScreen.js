import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Button, Carousel} from 'react-bootstrap'
import axios from 'axios'
import User from '../components/User'
import CheckBox from '../components/CheckBox'
import CourseBox from '../components/CourseBox'
import {tutorRequirements, courses} from '../components/FilterData'
import {Route} from 'react-router-dom' 
import SearchBox from '../components/SearchBox'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import physics from '../components/physics.jpeg'
import review1 from '../components/review1.jpeg'
import review2 from '../components/review2.jpeg'
import review3 from '../components/review3.jpeg'
import {listUsers} from '../actions/userActions'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const [Filters, setFilters] = useState({
        tutorRequirements:[],
        courses:[]
    })
   
    const showResults=(tempFilters)=>
    {

    }
    //handling the checkbox filter
    const handlePrice = (value) => {
        const data = courses;
        let array = [];

        for (let key in data) {

            if (data[key]._id === parseInt(value, 10)) {
                array = data[key].array;
            }
        }
        console.log('array', array)
        return array
    }

    const handleFilters = (filters, category) => {

        const newFilters = { ...Filters }

        newFilters[category] = filters

        if (category === "courses") {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues

        }

        console.log(newFilters)

        //showFilteredResults(newFilters)
        setFilters(newFilters)
    }
    
    return (
        
       <div>    


           {/* Filter  */}
        <div>
           <Row >
               <Col>
                   <CheckBox
                       list={tutorRequirements}
                       handleFilters={filters => handleFilters(filters, "tutorRequirements")}
                   />
               </Col>
               <Col >
                   <CourseBox
                       list={courses}
                       handleFilters={filters => handleFilters(filters, "courses")}
                   />
               </Col>
           </Row>
        </div>
            <br>
            </br>
            <Container>
                <Row className="justify-content-md-center">
                   <Col md="auto"><h1>Get help Today</h1></Col>
                
                </Row>
                <Row className="justify-content-md-center">
                    
                   <Col md="auto"><Route render={({history})=><SearchBox history={history} />}/></Col>
                </Row>
            </Container>
            <div>
              <h4>What to Learn Next</h4> <br />
              <h5>Recommended For You</h5>
              
              <div class="text-center" style={{backgroundColor: "#e4ebe9"}}>
              <Row>
            <img src={physics} class="rounded mx-auto d-block"/><br></br>
            <img src={physics}/>
           
               </Row>
              </div>
            </div>
            <br>
            </br>
            <div class="container" >
                
                <h5>Most Viewed Courses</h5>
                 <div class="text-center" style={{backgroundColor: "#e4ebe9"}}>
                 <Button color="#7dada0">Web Development</Button>{' '}
                 <Button color="#7dada0">Data Science</Button>{' '}
                 <Button color="#7dada0">AP Math</Button>{' '}
                 <Button color="#7dada0">Data Structure</Button>{' '}
                 <Button color="#7dada0">Statistics</Button>{' '}
                 <Button color="#7dada0">Sociology</Button>{' '}      
              </div>
<br>
</br>
<br>
</br>
<br>

</br>
<div class="text-center">
    <Carousel style={{backgroundColor: "#e4ebe9"}}  >
    <Carousel.Item interval={1000}>
        <img src={review1}/> 
    </Carousel.Item>
    <Carousel.Item interval={500}>
        <img src={review2}/>
    </Carousel.Item>
    <Carousel.Item>
        <img src={review3}/>
    </Carousel.Item>
</Carousel>
</div>
        </div>

          
        </div>
    )
}

export default HomeScreen