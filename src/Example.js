import React, { Component } from 'react';   
import Login from "./Login";
import Khaadi from './Khaadi';
import {Redirect} from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Api from './Api';
import CreateApi from './CreateApi';
import Delete from './Delete';
import Update from './Update';
import  AdminUI from './AdminUI';
import TopNav from './TopNav';
import Home from './Home';
import Sapphire from './Sapphire';
import CreateSapphire from './CreateSapphire';


class Example extends Component {  
// constructor(props){
//     super(props);
//     this.state = {
//         clear: false
//     }
//     this.logout= this.logout.bind(this);
// }
// logout(){
//     sessionStorage.setItem("userData",'');
//     sessionStorage.clear();
//     this.setState({clear: true})
    
// }
//     render(){
//         if(this.state.clear){
//             return(     
//            <Login/>
//             );
//         }
//         return(
//                  <div>
//                      <h1>Hello world</h1>
//                      <button type="button" onClick={this.logout}>logout</button>
//                  </div>
//         );
//     }

render(){
    return(
      <div>
 <TopNav/>
 
            <Router>
  
  <AdminUI/>

            <Route exact path='/' component={Home} />   
            <Route path='/update' component={Update} />
           
           <Route path='/khaadi' component={Khaadi}/>
           <Route path='/createApi' component={CreateApi}/>
           <Route path='/createSapphire' component={CreateSapphire}/>
           <Route path='/sapphire' component={Sapphire}/>

  </Router>
      </div>
    );
}
}
export default Example;