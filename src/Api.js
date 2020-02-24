import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


export default class Api extends React.Component{

  constructor(props)
  {
  super(props); 
  this.state={
      brands: [],
      isEdit: false,
      id: ''
      }
  }

  async componentDidMount(){

  
      const url="http://localhost/php_rest_myblog/api/post/read.php";
      const response=await fetch(url);
      const data= await response.json();
     this.setState({brands:data.data});
}

update(record){
this.setState({
  isEdit: true,
  id: record.id,
  name: record.name,
  code: record.code,
  brand: record.brand,
  color: record.color,
  material: record.material,
  type: record.type,
  price: record.price,
  size_id: record.size_id,
  category_id: record.category_id
})


 
}
delete(record){
  console.log(record) 
  axios.post("http://localhost/php_rest_myblog/api/post/delete.php/", {
      id: record.id
  })
  .then(response=>{
   console.log(response)
   const newState= this.state.brands.slice();
  newState.splice(newState.indexOf(record), 1)
  this.setState({
      brands:newState
  })
  
  }).catch(error=>{
      console.log(error);
  })

}
changeHandler= e => {
  this.setState({[e.target.name]: e.target.value})
}

submitHandler = e  =>{
  e.preventDefault()
  var formData = new FormData();
  formData.append("id",this.state.id)
  formData.append("name", this.state.name);
  formData.append("code", this.state.code);
  formData.append("brand", this.state.brand);
  formData.append("color", this.state.color);
  formData.append("material",this.state.material);
  formData.append("price", this.state.price);
  formData.append("type", this.state.type);
 formData.append("size_id", this.state.size_id);
  formData.append("category_id", this.state.category_id);
  formData.append("file", this.state.file);
  const config = {
      headers: { 
          'content-type': 'multipart/form-data'
      }
  }


  axios.post('http://localhost/php_rest_myblog/api/post/update.php',formData,config)
  .then(response=>{console.log(response)})

  console.log(this.state)


}

render(){
  console.log(this.state);
  const {brands} = this.state

 if(this.state.isEdit==true){
  console.log(this.state.name)
  return(
  <form  encType="multipart/form-data">
      <div>
          <input type="number" name="id" defaultValue={this.state.id}></input>
      </div>
      <div>
                  <input type="text" name="name" defaultValue={this.state.name} onChange={this.changeHandler}/>

              </div>
              <div>
                  <input type="text" name="code" defaultValue={this.state.code}  onChange={this.changeHandler}/>
                  
              </div>
              <div>
                  <input type="text" name="brand" defaultValue={this.state.brand}  onChange={this.changeHandler}/>
                  
              </div>
              <div>
                  <input type="text" name="color" defaultValue={this.state.color}  onChange={this.changeHandler}/>
                  
              </div>
              <div>
                  <input type="text" name="material" defaultValue={this.state.material}  onChange={this.changeHandler}/>
                  
              </div>
              <div>
                  <input type="text" name="price" defaultValue={this.state.price}  onChange={this.changeHandler} />
                  
              </div>
              <div>
                  <input type="text" name="type" defaultValue={this.state.type}  onChange={this.changeHandler}/>
                  
              </div>
              <div>
                  <input type="number" name="size_id" defaultValue={this.state.size_id} onChange={this.changeHandler}/>
                  
              </div>
              <div>
                  <input type="number" name="category_id" defaultValue={this.state.category_id} onChange={this.changeHandler} />
                  
              </div>
              <div>
                  <input type="file" name="file"  onChange={(e)=>this.setState({file: e.target.files[0]})}/>
                  
              </div>
              <button onClick={this.submitHandler}>submit</button>
  </form>
  );
     
 }
  return(   
  
    <div>
    <div className="jumbotron jumbotron-fluid" style={{marginLeft: '160px', marginTop:'-350px'}}>
        <div className="container">
            
          <h1 className="display-4">Khaadi</h1>
          <hr class="my-4"></hr>
        </div>


    </div>

    <div className="jumbotron jumbotron-fluid" style={{marginLeft: '160px',  marginTop:'-20px'}}>
        <div className="container">
            
          <h1 className="display-6" style={{textAlign:'center',  letterSpacing:'2px'}}>Current Record</h1>
          <hr class="my-7"></hr>
<div>
    {this.state.brands.map((brands,id)=>
    <div className="ui link cards " style={{display: 'inline-block' ,  marginLeft: '50px'}} >
      <div className="card " >
             <div className="image">
               <img src={"http://localhost/php_rest_myblog/api/post/" + brands.image}/>
             </div>
       <div className="content" >
            <div className="header">{brands.code}</div>
                 <div className="meta">
                     <a>{brands.name}</a>
                  </div>
                 <div className="description">
                    {brands.color}
                 </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{brands.material}</li>
          <li className="list-group-item">{brands.type}</li>
          <li className="list-group-item">{brands.size_type}</li>
          <li className="list-group-item">{brands.category_name}</li>
          <li className="list-group-item" style={{textAlign: 'right', color: 'grey'}}><i className="money bill alternate icon large"></i>{brands.price}</li>
        </ul>
        <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic blue button"  onClick={this.update.bind(this, brands)}><i class="edit outline icon"></i>Edit</div>
          <div className="ui basic red button"  onClick={this.delete.bind(this, brands)} ><i class="trash alternate icon"></i>Delete</div>
        </div>
      </div>
     
      </div>
    </div> )
    }
</div> 


</div>          
</div>      
</div>
  
      



);
}


}
