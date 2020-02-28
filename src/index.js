import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Api from './Api';
import CreateApi from './CreateApi';
import Delete from './Delete';
import Update from './Update';
import  AdminUI from './AdminUI';
import TopNav from './TopNav';
import Khaadi from './Khaadi';
import Login from './Login';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Sapphire from './Sapphire';
import CreateSapphire from './CreateSapphire';



class Index extends Component{
    constructor(props) {  
        super(props);  
  
        this.state = {  
        
            edit: false
     
    }
}
componentDidMount(){
    if(sessionStorage.getItem("userData")){
        console.log("feed")
    }
    else{
        this.setState({edit: true});
    }
}
render(){
    if(this.state.edit==true){
        return(
         <Login/>
        
        );
       }

    //    if(sessionStorage.getItem("userData")){
    //        return(
    //          <div>
    //                <TopNav/>
    //                 <Router>
          
    //       <AdminUI/>
    //                 <Route exact path='/' component={Home} />   
    //                 <Route path='/update' component={Update} />
                   
    //                <Route path='/khaadi' component={Khaadi}/>
    //                <Route path='/createApi' component={CreateApi}/>
    //                <Route path='/createSapphire' component={CreateSapphire}/>
    //                <Route path='/sapphire' component={Sapphire}/>
       
    //       </Router> 
   
    //        </div>

    //        );
    //    }
       return(
        <div>
    <Login/>
         
        </div>
           
      
    
        
    );

}


}

    // <div>
    //      <TopNav/>
          
  
    //       <Router>
          
    //       <AdminUI/>
    //               <Route exact path='/' component={Home} />   
    //               <Route path='/update' component={Update} />
                  
    //               <Route path='/khaadi' component={Khaadi}/>
    //               <Route path='/createApi' component={CreateApi}/>
    //               <Route path='/createSapphire' component={CreateSapphire}/>
    //               <Route path='/sapphire' component={Sapphire}/>
      
    //      </Router> 
      
    // </div>
 


ReactDOM.render( <Index/>,document.querySelector('#root')
);
  