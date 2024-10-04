import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function Stonelumhawk(){
    let[api,setApi]=useState([])
    useEffect(()=>{
    let url=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=1921387712");
    url.then((x)=>x.json()).then((y)=>setApi([y]))
    },[])
    return(

        <>
        <div style={{margin:"100px"}}>
        {
            api.map(x=>{
                console.log(x);
                return(
                    <div key={x.id}>
                    <div style={{height:"700px", width:"900px"}} >
                    <h1>{x.name}</h1>
                    <h2>{x.subtitle}</h2>
                    <div className="cdiv">
                        <Carousel>
                        <img src={x.images[0]} alt="" style={{height:"500px", width:"900px"}}  /> 
                        <img src={x.images[1]} alt="" style={{height:"500px", width:"900px"}}  /> 
                        <img src={x.images[2]} alt="" style={{height:"500px", width:"900px"}}  />
                        </Carousel>
                    </div>
                    <hr />
                    <h3>About The Experience</h3>
                    <p>{x.content}</p>
                    </div>
                    </div>
                )
            })
        }
        </div>
     </>
    )
}