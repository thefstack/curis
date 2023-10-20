import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <Wrapper>
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid" alt="Sample image"/>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form method='post' action='/patientlogin'>
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" />
                </div>
      
                
                <div className="form-outline mb-3">
                  <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" autoComplete='off'/>
                </div>
      
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" autoComplete='off'/>
                  </div>
                  <Link to="#!" className="text-body">Forgot password?</Link>
                </div>
      
                <div className="text-center text-lg-start mt-4 pt-2">
                  <input type="submit" className="btn btn-primary btn-lg"
                    style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}} value="Login"/>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register"
                      className="link-danger">Register</Link></p>
                </div>
      
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
  )
}

const Wrapper=styled.section`
padding:100px 10px;

.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}
.h-custom {
height: calc(100% - 73px);
}
@media (max-width: 450px) {
.h-custom {
height: 100%;
}
}
`;


export default Login
