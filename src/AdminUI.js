
//import react libraries
import React, { Component } from 'react';
import Api from './Api';

// import { BrowserRouter, Route, Link, Router, browserHistory } from "react-router-dom";

import {Link} from "react-router-dom";

import { withRouter } from "react-router-dom";
import Khaadi from './Khaadi';




class AdminUI extends Component{

componentDidMount(){
}
render(){
return(


  <div>

  <div className="ui visible thin left demo vertical inverted sidebar labeled icon menu"
   style={{color: '#000000'}}> 
    <img src="adminlogo.png" alt="Avatar" style={{width: '100px', marginTop: '30px'}} />
    <h3 style={{color:'#424242'}}>Admin</h3>

    <h5 style={{marginTop:'-10px',color:'#cfd8dc'}}>Web Developer</h5>
    <hr ></hr>
    {/* <Link to="/" className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>  
   Home</Link> */}
    {/* <a className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>
      {/*  */}
    {/* Khaadi
    </a> */} 

    <Link to="/" className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>  
    Khaadi</Link>
 
    <a className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>
          {/* <i className="block layout icon" /> */}
      Alkaram
        </a>
        <a className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>
          {/* <i className="book icon" /> */}
    Nishat
        </a>
        {/* <a className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>
          Help
        </a> */}
        <a className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>
          {/* <i className="book icon" /> */}
   Sana Safinaz
        </a>
      
            <a className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>
          {/* <i className="book icon" /> */}
   Gul Ahmed
        </a>
        <Link to="/sapphire" className="item" style={{fontSize:'15px', letterSpacing:'2px', fontFamily: 'sans-serif', fontWeight:'bold'}}>  
     Sapphire</Link>
   
  
       
</div>

</div>
);

}
}

export default (AdminUI);