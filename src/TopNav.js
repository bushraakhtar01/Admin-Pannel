
//import react libraries
import React, { Component } from 'react';


import Login from './Login';

class TopNav extends Component{
  constructor(props){
    super(props);
    this.state = {
        clear: false
    }
    this.logout= this.logout.bind(this);
}
logout(){
    sessionStorage.setItem("userData",'');
    sessionStorage.clear();
    this.setState({clear: true})
    
}


render(){
  if(this.state.clear){
    return(     
   <Login/>
    );
}
return(
  <nav className="navbar navbar-light " style={{backgroundColor: '#e57373'}}>
  <a className="navbar-brand" href="#">Navbar</a>
  <div style={{display:'inline-block'}}>
  <button type="button" className="ui inverted white button"  onClick={this.logout}>Logout</button>
  <img src="adminlogo.png" alt="Avatar" style={{width: '40px'}} />
  <img src="onlinelogo.png"
   alt="Avatar" style={{width: '15px',marginTop:'30px',position:'absolute',marginLeft:'-40px'}} />
    
 </div>
</nav>
 );

}
}

export default TopNav;