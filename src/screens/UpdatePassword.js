import React, {useState} from 'react';
import "../css/style.css"
import welcome from '../images/welcome_copy.png'

const UpdatePassword = () => {
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")
    const [inpOtp, setInpOtp] = useState("")
    const handleOtp = ()=>{
        setOtp("666666")
    }
    const handleInpOtp = (e) =>{
        const regex = /^[0-9]{0,6}$/;
        if (regex.test(e.target.value)) {
            setInpOtp(e.target.value)
        }
    }
  return (
    
    <div className="container-fluid sign_up_">
      <div className="row justify-content-center" style={{height:"100vh", alignItems:"center"}} >
        <div className="col-md-6">
          <div className="card" style={{background:"rgba(255,255,255, 0.9)", backdropFilter:"blur(3px)", borderRadius:"18px"}}>
            <div className="card-body px-3 px-md-5">
              <div className='text-center'>
                <img src={welcome} className='img-fluid text-center' width={"200"} />
              </div>
              <form>
                <div className='row align-items-center mb-3'>
                    <div className='col-md-10 col-9'>
                        <div className="">
                         
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                          />
                        </div>
                    </div>
                    <div className='col-md-2 col-3'>
                        <p className='btn btn-light w-100 m-0' onClick={()=>handleOtp()}>OTP</p>
                    </div>
                </div>
                {
                    otp !=""?<div className="mb-3">
                 
                    <input
                      type="number"
                      className="form-control"
                      id="email"
                      placeholder="Enter your OTP"
                      value={inpOtp}
                      onChange={handleInpOtp}
                      maxLength="6" 
                      pattern="[0-9]*"
                      
                    />
                  </div>:""
                }

                {
                    inpOtp == otp && inpOtp !="" ? <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="email"
                      placeholder="Enter your New Password"
                    />
                  </div>:""
                }
                

                <div className='btn-grp text-center'>
                    <button type="submit" className="btn btn-primary btn-block">
                      Update
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
