import React, {useState} from 'react';
import "../css/style.css"
import welcome from '../images/welcome_copy.png'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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
                    onChange={(e)=>{setEmail(e.target.value)}}
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
                    onChange={(e)=>{setPassword(e.target.value)}}
                    value={password}
                  />
                </div>
                
                <div className='text-end'>

                <p className=' bg-light d-inline text-secondary px-2 py-1 rounded' style={{cursor:"pointer"}}>Forgot Password</p>
                </div>

                <p className='m-0 p-0 text-center mb-4 mt-3 mt-md-0' style={{fontSize:"16px"}}>Don't have an account <span style={{color:"blue", cursor:"pointer"}}>Register</span></p>
                <div className='btn-grp text-center'>
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
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

export default Login;
