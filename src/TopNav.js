
//import react libraries
import React, { Component } from 'react';



class TopNav extends Component{

componentDidMount(){

}
render(){
return(
  <nav className="navbar navbar-light " style={{backgroundColor: '#e57373'}}>
  <a className="navbar-brand" href="#">Navbar</a>
  <div style={{display:'inline-block'}}>
  <img src="adminlogo.png" alt="Avatar" style={{width: '40px'}} />
  <img src="onlinelogo.png"
   alt="Avatar" style={{width: '15px',marginTop:'30px',position:'absolute',marginLeft:'-40px'}} />
 </div>
</nav>
 );

}
}

export default TopNav;