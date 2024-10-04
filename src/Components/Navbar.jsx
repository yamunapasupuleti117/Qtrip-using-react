import React,{Component} from "react";

export default class Navbar extends Component{
    render(){
        return(
            <>
             <nav> 
            <span>QTrip
            </span>

                <ul>
                    <li>Home</li>
                    <li>Reservations</li>
                    <li id="col">Login Here</li>
                    <li><button>Register</button></li>
                </ul>
            </nav>
            </>
        )
    }
}