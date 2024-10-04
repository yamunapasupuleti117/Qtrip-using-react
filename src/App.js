import React,{Component}  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Components/Style.css'
import Final from "./Components/Final";
import Benguluru from "./Pages/Benguluru";
import NiaboytownDiv from "./Pages/NiaboytownDiv";
import Goa from "./Pages/Goa/Goa"
import Kolkata from "./Pages/Kolkata/Kolkata"
import Singapore from "./Pages/Singapore/Singapore"
import Malaysia from "./Pages/Malaysia/Malayasia"
import Bankok from "./Pages/Bankok/Bankok";
import Newyork from "./Pages/Newyork/Newyork";
import Paris from "./Pages/Paris/Paris";
import Fortjon from "./Pages/Fortjon";
import Wooddaux from "./Pages/Wooddaux"
import Harbour from "./Pages/Harbour";
import Perthby from "./Pages/Goa/Perthby";
import Nesbridge from "./Pages/Goa/Nesbridge";
import Stonelumhawk from "./Pages/Stonelumhawk";
import LaAnrncast from "./Pages/La Anrncast";
import FortShilbluff from "./Pages/Fort Shilbluff";
import Shiwood from "./Pages/Shiwood";
import EastVyfolk from "./Pages/East Vyfolk";
import KennticEnd from "./Pages/Goa/Kenntic End";
import PressalCreek from "./Pages/Goa/Pressal Creek";
import Thton from "./Pages/Kolkata/Thton";
import GrandRubou from "./Pages/Kolkata/Grand Rubou Du Wagten";
import NorthGelgoon from "./Pages/Kolkata/North Gelgoon";
import Vangreatshot from "./Pages/Singapore/Vangreatshot";
import PortHillslfleet from "./Pages/Singapore/Port Hillslfleet";
import NewSpriha from "./Pages/Singapore/New Spriha";
import StGosmydro from "./Pages/Malaysia/St Gosmydro";
import Sanboolburgh from "./Pages/Malaysia/Sanboolburgh";
import Nishgam from "./Pages/Bankok/Nishgam";
import Tifwales from "./Pages/Bankok/Tifwales Ferry";

export default class App extends Component{
    render(){
        return(
            <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Final/>}></Route>
                <Route path="/bengaluru" element={<Benguluru/>}></Route>
                <Route path="/goa" element={<Goa/>}></Route>
                <Route path="/kolkata" element={<Kolkata/>}></Route>
                <Route path="/singapore" element={<Singapore/>}></Route>
                <Route path="/malaysia" element={<Malaysia/>}></Route>
                <Route path="/bangkok" element={<Bankok/>}></Route>
                <Route path="/new-york" element={<Newyork/>}></Route>
                <Route path="/paris" element={<Paris/>}></Route>
                <Route path="/Niaboytown" element={<NiaboytownDiv/>}></Route>
                <Route path="/Fort Sionnnn" element={<Fortjon/>}></Route>
                <Route path="/Wooddaux" element={<Wooddaux/>}></Route>
                <Route path="/Bageorge With Nonshi Harbour" element={<Harbour/>}></Route>
                <Route path="/Perthby" element={<Perthby/>}></Route>
                <Route path="/Nesbridge" element={<Nesbridge/>}></Route>
                <Route path="/Stonelumhawk" element={<Stonelumhawk/>}></Route>
                <Route path="/La Anrncast" element={<LaAnrncast/>}></Route>
                <Route path="/Fort Shilbluff" element={<FortShilbluff/>}></Route>
                <Route path="/Shiwood" element={<Shiwood/>}></Route>
                <Route path="/East Vyfolk" element={<EastVyfolk/>}></Route>
                <Route path="/Kenntic End" element={<KennticEnd/>}></Route>
                <Route path="/Pressal Creek" element={<PressalCreek/>}></Route>
                <Route path="/Thton" element={<Thton/>}></Route>
                <Route path="/Grand Rubou Du Wagten" element={<GrandRubou/>}></Route>
                <Route path="/North Gelgoon" element={<NorthGelgoon/>}></Route>
                <Route path="/Vangreatshot" element={<Vangreatshot/>}></Route>
               <Route path="/Port Hillslfleet" element={<PortHillslfleet/>}></Route>
               <Route path="/New Spriha" element={<NewSpriha/>}></Route>
               <Route path="/St Gosmydro" element={<StGosmydro/>}></Route>
               <Route path="/Sanboolburgh" element={<Sanboolburgh/>}></Route>
               <Route path="/Nishgam-In-Haprnia" element={<Nishgam/>}></Route>
               <Route path="/Tifwales Ferry" element={<Tifwales/>}></Route>
            </Routes>
            </BrowserRouter>
            </>
        )
    }
}