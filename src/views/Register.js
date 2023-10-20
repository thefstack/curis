import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import AppointmentForm from "../components/AppointmentForm"

const Register = () => {
  return (
    <Wrapper>
        <div className='form-container'>
        <form action="" >
        <TextField id="outlined-basic" label="Full Name" variant="standard" name='name' className='input-style'/>
        <TextField id="outlined-basic" label="Email" variant="standard" name='email' className='input-style'/>
        <TextField id="outlined-basic" label="Phone Number" variant="standard" name='phone' className='input-style'/>
        <TextField id="outlined-basic" label="Gender" variant="standard" name='Gender' className='input-style'/>
        
        <TextField id="outlined-basic" label="Address" variant="standard" name='Address' className='input-style'/>
        <input className='register' type="submit" value="Register"/>
        </form>
        </div>
        
    </Wrapper>
  )
}

const Wrapper=styled.section`
display:flex;
width:100%;
justify-content:center;

.register{
    width:150px;
    transform:translateX(50%);
    height:50px;
    background-color:#0074F0;
    border-radius:10px;
    font-weight:700;
    font-size:1.3rem;
}
.form-container{
    padding:50px 0;
    display:flex;
    justify-content:center;
}
form{
    display:flex;
    flex-direction:column;
    align-item:center;
    justify-content:center;
    gap:15px;
    width:100%;
}
.input-style{
    width:300px;
}


`;

export default Register
