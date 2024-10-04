import React,{Component} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cards from "./Cards";

export default class Final extends Component{
    render(){
        return(
            <>
            <Navbar></Navbar>
            <Cards></Cards>
            <Footer></Footer>
            </>
        )
    }
}