import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ClassNames } from '@emotion/react';
import default_profile from "../images/default_profile_image.png"

function Home() {
    const [locations, setLocations] = useState([
        {label:"Hyderabad"},
        {label:"Narsapur"},
        {label:"Marteru"},
        {label:"Alamuru"},
        {label:"Setarampuram"},
        {label:"Amaravathi"}
    ])
    const [data, setData] = useState([
        {url:"https://cdn1.epicgames.com/item/ue/01%20-%20City_05_1080p_v1_1920x1080-3cec0289d8c77eccb37aa197e9e7f537?resize=1&w=1920", title:"This is the sample title", description:"No matter your exact relationship status, your soulmate gives you all sorts of warm and fuzzy feelings and you want them to know it. That's why finding new ways to show how much you care can, like sending them adorable romantic quotes about the love you feel for them, can be so meaningful."},
        {url:"https://cdn1.epicgames.com/item/ue/01%20-%20City_05_1080p_v1_1920x1080-3cec0289d8c77eccb37aa197e9e7f537?resize=1&w=1920", title:"This is the sample title", description:"No matter your exact relationship status, your soulmate gives you all sorts of warm and fuzzy feelings and you want them to know it. That's why finding new ways to show how much you care can, like sending them adorable romantic quotes about the love you feel for them, can be so meaningful."},
        {url:"https://cdn1.epicgames.com/item/ue/01%20-%20City_05_1080p_v1_1920x1080-3cec0289d8c77eccb37aa197e9e7f537?resize=1&w=1920", title:"This is the sample title", description:"No matter your exact relationship status, your soulmate gives you all sorts of warm and fuzzy feelings and you want them to know it. That's why finding new ways to show how much you care can, like sending them adorable romantic quotes about the love you feel for them, can be so meaningful."},
        {url:"https://cdn1.epicgames.com/item/ue/01%20-%20City_05_1080p_v1_1920x1080-3cec0289d8c77eccb37aa197e9e7f537?resize=1&w=1920", title:"This is the sample title", description:"No matter your exact relationship status, your soulmate gives you all sorts of warm and fuzzy feelings and you want them to know it. That's why finding new ways to show how much you care can, like sending them adorable romantic quotes about the love you feel for them, can be so meaningful."},
        {url:"https://cdn1.epicgames.com/item/ue/01%20-%20City_05_1080p_v1_1920x1080-3cec0289d8c77eccb37aa197e9e7f537?resize=1&w=1920", title:"This is the sample title", description:"No matter your exact relationship status, your soulmate gives you all sorts of warm and fuzzy feelings and you want them to know it. That's why finding new ways to show how much you care can, like sending them adorable romantic quotes about the love you feel for them, can be so meaningful."},
    ])
  return (
    <div>
        <div className='container'>
            <Navbar />
            <div className=' px-md-5 px-2'>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={locations}
                  sx={{ width: "100%" }}
                  renderInput={(params) => <TextField {...params} label="Movie" />
                }
                />
            </div>
            <div className=''>
                <div className='row mx-md-5 mx-1'>
                    {/* {
                        locations.map((item)=>(
                            <Locations title={item.label} />
                        ))
                    } */}
                    
                </div>
                <div className='m-md-5 mt-4'>
                    <div class="row row-cols-1 row-cols-md-1 g-4">
                        {
                            data.map((item)=>(
                                <Cards url={item?.url} title={item?.title} desc={item?.description} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

function Cards(props){
    const [likes, setLikes] = useState(7)
    const [report, setReport] = useState(false)
    const [email, setEmail] = useState(null)
    const [message, setMessage] = useState(null)
    const [islike, setIsLike] = useState(false)
    const handleMessage = event =>{
        setMessage(event.target.value)
    }
    console.log(message)
    return(
        <>
             <div class="col">
                <div class="card h-100">
                    <div className="card-title ms-md-5 ms-2 mt-3 d-flex align-items-center">
                        <img src={default_profile} className='img-fluid me-2' width={"30"} />
                        <h3 className='m-0 p-0'>Username</h3>
                    </div>
                  <div className='row mx-md-3'>
                    <div className='col-md-2'>
                        <img src={props.url} class="card-img-top p-2" alt="This is an image of a post" />
                    </div>
                    <div className='col-md-10'>
                        <div class="card-body">
                          <h3 class="card-title">{props.title}</h3>
                          <p class="card-text">{props.desc}</p>
                        </div>
                    </div>
                    <div className='col-12 p-3 text-center'>
                        <div className='btn_group d-flex justify-content-evenly'>
                            <div className='d-flex align-items-center'>
                                
                                {!islike?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart me-3" viewBox="0 0 16 16" style={{cursor:"pointer", color:"hotpink"}} onClick={()=>{
                                    setIsLike(!islike)
                                }}>
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg>:<>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill me-3 text-danger" viewBox="0 0 16 16" style={{cursor:"pointer"}} onClick={()=>{
                                    setIsLike(!islike)
                                }}>
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                </svg>
                                </>
                                }
                                
                                <span className='' style={{color:"hotpink"}}>{!islike? likes:likes+1}</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-view-list" viewBox="0 0 16 16" style={{cursor:"pointer"}}>
                              <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16" style={{cursor:"pointer"}}>
                                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                            </svg>
                            {!report?<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-octagon text-danger" viewBox="0 0 16 16" style={{cursor:"pointer"}}  onClick={()=>{setReport(true)}}>
                                <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square text-danger" viewBox="0 0 16 16" style={{cursor:"pointer"}} onClick={()=>{setReport(false)}}>
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                            </svg>}                            
                        </div>
                       {report && <div className='m-0 mx-md-5'>
                            <div class="my-3">
                              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                            </div>
                            <div class="mb-2">
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={handleMessage}></textarea>
                            </div>
                           {email && message && <button className='btn btn-outline-primary'>Send</button>}
                        </div>}
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
}

function Locations(props){
    return(
        <div className='col-md-2 col-6 my-md-3 my-2'>
            <div className='card p-0'>
                <div className='card-body p-2' style={{cursor:"pointer"}}>
                    <p className='m-0 p-0'>{props.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Home