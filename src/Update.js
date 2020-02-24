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
        <div class="form-group">
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
  
<ul>  { this.state.brands.map((brands , i) => <li key={i}>{brands.name}
    <button onClick={this.delete.bind(this, brands)}>Delete</button>
    <button onClick={this.update.bind(this,brands)}>Update</button>
</li>)
}
</ul>


</div>
);
}
}
