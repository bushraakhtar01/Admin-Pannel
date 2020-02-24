import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Api from './Api';
import CreateApi from './CreateApi';
import Delete from './Delete';
import Update from './Update';
import  AdminUI from './AdminUI';
import TopNav from './TopNav';
import Khaadi from './Khaadi';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Sapphire from './Sapphire';
import CreateSapphire from './CreateSapphire';



class Index extends Component{

   
    

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




// const Index=()=>{
//     return(
//         <div>

//            <Delete/>
    
           
//             </div>
//     );
// };



ReactDOM.render( <Index/>,document.querySelector('#root')
);
  