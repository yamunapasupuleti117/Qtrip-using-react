import React,{Component} from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component{
    render(){
        return(
            <>
            <Link to="/bengluru"><div className="container">© QTrip 2022</div></Link>
            </>
        )
    }
}