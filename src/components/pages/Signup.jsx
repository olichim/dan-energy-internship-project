import React, { useEffect, useState } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {
  const [name,setName]= useState('')
	const [email,setEmail]= useState('')
	const[password,setPassword]= useState('')
  const[repp,setRepp]= useState('')
  const [error, setError] = useState(false);
  async function register(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      // Handle empty form fields
      console.log("Please fill in all fields");
      setError('Please fill in all fields')
      return ;
    }
      const user = {
        name,
        email,
        password,
        repp

      };
      try {

        const result = await axios.post('http://localhost:5000/api/users/register', user);

        setName('')
        setEmail('')
        setPassword('')
        setRepp('')
        console.log(result.data);
      } catch (error) {
        console.log(error);

      }
    }
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h1 classNAme="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-2">Register For the Event</h1>

              <div className="d-flex flex-row align-items-center mb-3 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100' value={name} onChange={(e)=>{setName(e.target.value)}}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-3">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-3">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-3">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password' value={repp} onChange={(e)=>{setRepp(e.target.value)}}/>
              </div>



              <MDBBtn className='mb-3' size='lg' onClick={register}>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;
