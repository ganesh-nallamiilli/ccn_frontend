import React, {useState, useEffect} from 'react';
import "../css/style.css"
import welcome from '../images/welcome_copy.png'
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirm_password, setConfirmPassword] = useState(null)
    const [selectedGender, setSelectedGender] = useState(null);
    const [respData, setRespData] = useState(null)

  const handleColumnClick = (gender) => {
    setSelectedGender(gender);
  };

  console.log(password)

  const handleCreateUser = async() =>{
    try{
      let payload = {
        name: name,
        email: email,
        password: confirm_password,
        mobile_number: phone,
        gender: selectedGender,
        user_type_id:2
      }

      const resp = await axios.post('http://localhost:3000/api/v1/user/create', payload)
      setRespData(resp?.data)
      

    }catch(err){
      console.error("Error while creating user!", err)
    }
  }

  useEffect(() => {
    if (respData !== null) {
      console.info(respData);
    }
  }, [respData]);

  return (
    
    <div className="container-fluid sign_up_">
      <div className="row justify-content-center" style={{minHeight:"100vh", alignItems:"center", maxHeight:"auto"}} >
        <div className="col-md-6">
          <div className="card" style={{background:"rgba(255,255,255, 0.9)", backdropFilter:"blur(3px)", borderRadius:"18px"}}>
            <div className="card-body">
              <div className='text-center'>
                <img src={welcome} className='img-fluid text-center' width={"200"} />
              </div>
              <form>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                  />
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Mobile Number
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        placeholder="Enter your mobile number"
                        value={phone}
                        onChange={(e)=>{setPhone(e.target.value)}}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                  <div className="mb-3 mx-3 ">
                      <label htmlFor="email" className="form-label">
                        Gender
                      </label>
                      <div className="row">
                        <div className="col-6 p-0 py-1 px-2 gender_radio" onClick={() => handleColumnClick('male')} style={{background: selectedGender == "male"?"white":"",borderRadius:"8px", cursor:"pointer"}}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              checked={selectedGender === 'male'}
                              onChange={() => {}}
                              style={{background: selectedGender=="male"?"white":"",border: selectedGender=="male"?"3px solid gray":""}}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1" style={{cursor:"pointer"}}>
                              Male
                            </label>
                          </div>
                        </div>
                        <div className="col-6 p-0 py-1 px-2 gender_radio" onClick={() => handleColumnClick('female')} style={{background: selectedGender == "female"?"white":"", borderRadius:"8px",cursor:"pointer"}}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                              checked={selectedGender === 'female'}
                              onChange={() => {}}
                              style={{background: selectedGender=="female"?"white":"",border: selectedGender=="female"?"3px solid gray":""}}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2" style={{cursor:"pointer"}}>
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                    value={password}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    onChange={(e)=>{setConfirmPassword(e.target.value)}}
                    value={confirm_password}
                    {...confirm_password!=""?{style:{border: password != confirm_password ?"2px solid red":""}}:""}
                  />
                </div>
                <p className='m-0 p-0 text-center mb-4' style={{fontSize:"16px"}}>Already have an account <span style={{color:"blue", cursor:"pointer"}}>Login</span></p>
                <div className='btn-grp text-center'>
                    <p className="btn btn-primary btn-block" onClick={()=>{confirm_password == password && name && email && selectedGender && phone && selectedGender && password ? handleCreateUser( ):alert("Please provide valid details")}}>
                      Sign Up
                    </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
