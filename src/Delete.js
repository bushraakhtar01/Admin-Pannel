import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


export default class Api extends React.Component{


    state={
        brand: []
        
    }
  
    async componentDidMount(){
 
    
        const url="http://localhost/php_rest_myblog/api/post/read.php";
        const response=await fetch(url);
        const data= await response.json();
       this.setState({brand:data.data});
}

delete(record){
    console.log(record) 
    axios.post("http://localhost/php_rest_myblog/api/post/delete.php/", {
        id: record.id
    })
    .then(response=>{
     console.log(response)
     const newState= this.state.brand.slice();
    newState.splice(newState.indexOf(record), 1)
    this.setState({
        brand:newState
    })
    
    }).catch(error=>{
        console.log(error);
    })

}



render(){
    console.log(this.state);
    const {brand} = this.state


    return(   
<div>
  
<ul>  { this.state.brand.map((brand , i) => <li key={i}>{brand.id}
    <button onClick={this.delete.bind(this, brand)}>Delete</button>
</li>)
}
</ul>
</div>
);
}
}
