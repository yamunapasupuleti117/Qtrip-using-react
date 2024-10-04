import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
export default function Singapore(){

    let[api,setapi]=useState([])

    useEffect(()=>{ fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=singapore")
        .then(x=>x.json())
        .then(y=>setapi(y)) 
                },[])

    return(
        <>
        <Navbar></Navbar>
<div >

<div className="MenupartHeader">
            <h1 id="MenuName">Explore all adventures</h1>
            <p id="Menudata">Here's a list of places that you can explore in city</p>
            <div className="headposition">
                <div id="headInner">
                <p>Filters:</p>
                <input type="text" placeholder="Filter By Duration(Hours)" style={{height:"20px"}}></input>
                <p style={{color:"blue"}}>Clear</p>
                <hr></hr>
                <input type="text" placeholder="Add Category"></input>
                <p style={{color:"blue"}}>Clear</p>
                <hr></hr>
                <input type="text" placeholder="Search Adventures"></input>
                <p style={{color:"blue"}}>Clear</p>
                </div>
            </div>
            </div>
        {/* cards */}

    <div style={{height:"160vh",display:"flex",flexWrap:"wrap",paddingLeft:"100px",paddingRight:"0px",marginTop:"40px"}}>
    {api.map(x=>{
        // console.log(x)
        return(
        <div>

       <Link  to={"/"+x.name}>
       <div className="BenSubCards" style={{height:"340px",width:"290px",marginRight:"60px",boxShadow: "2px 1px 10px 1px rgba(0, 0, 0, 0.3)"}}>   
                <div style={{position:"relative"}}>
                <img src={x.image} style={{height:"200px",width:"290px"}}/>
                <button style={{width:"120px",height:"30px",color:"white",backgroundColor:"orange",position:"absolute",right:"-15px",top:"10px"}}>{x.category}</button> <br />
                </div>
                <div style={{paddingLeft:"15px",paddingRight:"15px"}}>
                <div style={{display:"flex",justifyContent:"space-between",paddingTop:"10px"}}>
                <h5>{x.name}</h5>
                <span><p>₹{x.costPerHead}</p></span>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <p>Duration</p>
                <span><p>{x.duration} Hours</p></span>
                </div>
                </div>
        </div>
       </Link>

      
 
        </div>)})}

    </div>
</div>

<Footer></Footer>

    </>
    )
}