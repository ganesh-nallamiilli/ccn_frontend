import React, {useState} from 'react';
import welcome from '../images/welcome_copy.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
    const [email, setEmail] = useState("")
    const [otp_verify, setOtpVerify] = useState(false)
    const [id, setId] = useState(null)
    const [inpOtp, setInpOtp] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPass, setConPass] = useState(null)
    const [errmessage, setErrorMessage] = useState(null)
    const [change, setChange] = useState(true)
    const navigate = useNavigate()
    const handleOtp = async() => {
        try{

          let payload = {
            email:email
          }

          const resp = await axios.post("http://localhost:3000/api/v1/user/send_otp", payload)
          
          if (resp?.data?.meta?.status == 404){
            setErrorMessage("User not found")
          }else{
            setId(resp?.data?.data.id)
          }
          
        }catch(err){
          console.error("Error while sending otp!", err)
        }
    }
    const handleFetchOtp = async() =>{
      try{

        let payload = {
          id: id,
          otp: inpOtp
        }

        const resp = await axios.post("http://localhost:3000/api/v1/user/verify_otp", payload)

        if (resp?.data?.data?.otp_verify){
          setOtpVerify(resp?.data?.data?.otp_verify)
          localStorage.setItem("token", resp?.data?.data?.token)
          setChange(false)
        }else{
          setErrorMessage("Invalid OTP")
        }
        
      }catch(err){
        console.log("Error while verifying the otp!", err)
      }
      
    }
    const handleUpdatePassword = async() =>{
      try{

        let payload = {
          password: password
        }

        const config = {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
          }
        };

        const resp = await axios.post(`http://localhost:3000/api/v1/user/update/${id}`, payload, config)
        if (resp?.data?.id == id){
          navigate("/")
          window.location.reload()
        }
      }catch(err){
        console.log("Error while updating new password", err)
      }
    }
    const handleInpOtp = (e) =>{
        const regex = /^[0-9]{0,6}$/;
        if (regex.test(e.target.value)) {
            setInpOtp(e.target.value)
        }
        setErrorMessage(null)
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
                {
                  change?
                  <div className='row align-items-center my-3'>
                    <div className='col-md-10 col-9'>
                        <div className="">

                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e)=>{
                              setEmail(e.target.value)
                              setErrorMessage(null)
                            }}
                          />
                        </div>
                    </div>
                    <div className='col-md-2 col-3'>
                        <p className='btn btn-light w-100 m-0' onClick={()=>handleOtp()}>OTP</p>
                    </div>
                  </div>:""
                }
                
                {
                    id && change ?
                    <div className="mb-3">

                    <div className='row align-items-center mb-3'>
                      <div className='col-md-10 col-9'>
                        <div className="">
                  
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
                        </div>
                    </div>
                    <div className='col-md-2 col-3'>
                        <p className='btn btn-light w-100 m-0' onClick={()=>handleFetchOtp()}>Verify</p>
                    </div>
                  </div>
                  </div>:""
                }

                {
                    otp_verify ? <>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="email"
                          placeholder="Enter your New Password"
                          value={password}
                          onChange={(e)=>{
                            setPassword(e.target.value)
                            setErrorMessage(null)
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="email"
                          placeholder="Confirm Password"
                          value={confirmPass}
                          onChange={(e)=>{
                            setConPass(e.target.value)
                            setErrorMessage(null)
                          }}
                        />
                      </div>
                    </>:""
                }

                {
                  errmessage?
                  <div class="alert alert-danger" role="alert">
                  {errmessage}
                </div>:null
                }
                

                <div className='btn-grp text-end'>
                    <p type="submit" className="btn imp_btns_cancel me-3 btn-block" onClick={()=>{
                      navigate("/")
                      window.location.reload()
                    }}>
                      Cancel
                    </p>
                    <p type="submit" className="btn imp_btns text-light btn-block" onClick={()=>{password == confirmPass && password != null ? handleUpdatePassword():setErrorMessage("Password missmatch")}}>
                      Update
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

export default UpdatePassword;
