import React from 'react';
import Form from '../../Components/Shared/Form/Form';

const Login = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner">
          <img src="./login image.jpg" alt="login-image" />
        </div>
        <div className="col-md-4 form-container">
          <Form formTitle={"Login Page"} submitBtn={"Login"} formType={"login"}/>
        </div>
      </div>
    </>
  )
}

export default Login;