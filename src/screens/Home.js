import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ClassNames } from '@emotion/react';

function Home() {
    const [locations, setLocations] = useState([
        {label:"Hyderabad"},
        {label:"Narsapur"},
        {label:"Marteru"},
        {label:"Alamuru"},
        {label:"Setarampuram"},
        {label:"Amaravathi"}
    ])
  return (
    <div>
        <div className='container'>
            <Navbar />
            <div className='bg-light px-md-5 px-2'>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={locations}
                  sx={{ width: "100%" }}
                  renderInput={(params) => <TextField {...params} label="Movie" />
                }
                />
            </div>
            <div className='bg-light'>
                <div className='row mx-md-5 mx-1'>
                    {
                        locations.map((item)=>(
                            <Locations title={item.label} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
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