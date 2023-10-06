import React, {useEffect, useState} from 'react';
import "../css/style.css"
import welcome from '../images/welcome_copy.png'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [check, setCheck] = useState(false)

    const handleLogin = async() => {
      try{
        let payload = {
          email: email,
          password: password
        }
        const resp = await axios.post("http://localhost:3000/api/v1/user/login", payload)
        const token = resp?.data?.data?.token;

        if (token) {
          localStorage.setItem("token", token);
          navigate("/");
          window.location.reload()
        }else{
          setCheck(true)
        }

        console.log(resp?.data?.meta)

      }catch(err){
        console.error("Error while user login!", err)
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
                    onChange={(e)=>{
                      setEmail(e.target.value)
                      setCheck(false)
                    }}
                  />
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
                    onChange={(e)=>{
                      setPassword(e.target.value)
                      setCheck(false)
                    }}
                    value={password}
                  />
                </div>

                {
                  check ? <div class="alert alert-danger" role="alert">
                  Invalid credientials
                </div>:""
                }
                
                <div className='text-end'>

                <Link to="/updatepassword" style={{textDecoration:"none"}}>
                  <p className=' bg-light d-inline text-secondary px-2 py-1 rounded' style={{cursor:"pointer"}}>Forgot Password</p>
                </Link>
                </div>

                <p className='m-0 p-0 text-center mb-4 mt-3 mt-md-0' style={{fontSize:"16px"}}>Don't have an account <Link to={"/signup"} style={{textDecoration:"none"}}><span style={{color:"blue", cursor:"pointer"}}>Register</span></Link></p>
                <div className='btn-grp text-center'>
                    <p type="submit" className="btn btn-primary btn-block" onClick={()=>handleLogin()}>
                      Login
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

export default Login;
