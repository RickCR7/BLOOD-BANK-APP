import React,{useState} from 'react';
import InputType from "./InputType";

const Form = ({formType,submitBtn,formTitle}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("Donor");
    const [name,setName] = useState("");
    const [organisationName,setOrganisationName] = useState("");
    const [hospitalName,setHospitalName] = useState("");
    const [address,setAddress] = useState("");
    const [phone,setPhone] = useState("");
  return (
    <>
      <form >
        <h1 className='text-center'>{formTitle}</h1>
        <hr />
        <div className="d-flex mb-3">
          <div className="form-check">
            <input type="radio" className="form-check-input" name="role" id ="donorradio" value={"donor"} onChange={(e)=>setRole(e.target.value)}  />
            <label htmlFor="donorRadio" className='form-check-label'>Donor</label>
          </div>
          <div className="form-check">
            <input type="radio" className="form-check-input ms-2" name="role" id ="adminradio" value={"admin"} onChange={(e)=>setRole(e.target.value)}  />
            <label htmlFor="donorRadio" className='form-check-label'>Admin</label>
          </div>
          <div className="form-check">
            <input type="radio" className="form-check-input ms-2" name="role" id ="hospitalradio" value={"hospital"} onChange={(e)=>setRole(e.target.value)}  />
            <label htmlFor="donorRadio" className='form-check-label'>Hospital</label>
          </div>
          <div className="form-check">
            <input type="radio" className="form-check-input ms-2" name="role" id ="organisationradio" value={"organisation"} onChange={(e)=>setRole(e.target.value)}  />
            <label htmlFor="organisationRadio" className='form-check-label'>Organisation</label>
          </div>
        </div>
        {/* switch statement */}
        {(()=>{
        //eslint-disable-next-line
          switch(true){
            case formType === "login":{
              return (
                <>
                  <InputType 
                  labelText={"Email"} 
                  labelFor={"forEmail"} 
                  inputType={"email"} 
                  name={'email'}
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}/>

                <InputType 
                  labelText={"Password"} 
                  labelFor={"forPassword"} 
                  inputType={"password"} 
                  name={'password'}
                  value={password}
                  onChange={(evt) => setPassword(evt.target.value)}
                />
            </>
            );
          }
          case formType === "register":{
            return (
              <>
              <InputType 
              labelText={"Email"} 
              labelFor={"forEmail"} 
              inputType={"email"} 
              name={'email'}
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
          />
          <InputType 
              labelText={"Password"} 
              labelFor={"forPassword"} 
              inputType={"password"} 
              name={'password'}
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
          />
          {(role === "admin" || role === "donor") && (
            <InputType 
            labelText={"Name"} 
            labelFor={"forName"} 
            inputType={"text"} 
            name={'name'}
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
        )}
        {(role === "organisation") &&(
          <InputType 
          labelText={"Organisation Name"} 
          labelFor={"fororganisationName"} 
          inputType={"text"} 
          name={'organisationName'}
          value={organisationName}
          onChange={(evt) => setOrganisationName(evt.target.value)}
        />
        )}
        {(role === "hospital") && (
          <InputType 
          labelText={"Hospital Name"} 
          labelFor={"forhospitalName"} 
          inputType={"text"} 
          name={'hospitalName'}
          value={hospitalName}
          onChange={(evt) => setHospitalName(evt.target.value)}
        />
        )}
          
          <InputType 
              labelText={"Address"} 
              labelFor={"forAddress"} 
              inputType={"text"} 
              name={'address'}
              value={address}
              onChange={(evt) => setAddress(evt.target.value)}
          />
          <InputType 
              labelText={"Phone"} 
              labelFor={"forPhone"} 
              inputType={"text"} 
              name={'phone'}
              value={phone}
              onChange={(evt) => setPhone(evt.target.value)}
          />
              </>
            )
          }
          }
        })()}

        <div className="d-flex">
            <button className='btn btn-primary' type='submit'>
                {submitBtn}
            </button>
        </div>
      </form>
    </>
  )
}

export default Form