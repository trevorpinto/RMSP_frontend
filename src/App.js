import image from './RMSP.png'
import './App.css';
import instance from './config';
import axios from 'axios'
import { useEffect, useState } from 'react'
import DisplayHeader from './HomePage/Header.js';
import FacultyCards from './HomePage/Card.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


/*
get response API code using useEffect
*/

function App() {
  return (

    <>
    <Router>
      <DisplayHeader/>
      <Routes>
        {/* <Route path="/categories/comp-sci-profs" element={<FacultyCards />} />*/}
          <Route path="/" element={<FacultyCards />} /> 

      </Routes>
     

    </Router>

    </>
 
  )
  // console.log(instance.defaults)
  // const testAPI = async() => {
  //   try{
  //     const response = await instance.get('');
  //     console.log(response.data);
  //   }
  //   catch(error){
  //     console.error(error);
  //   }
  // }
  // useEffect(() => {
  //   return Counter();
  // },[])

  //await getResponseFromAPI();
}

export default App;
