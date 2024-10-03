import {useState} from "react";
import './App.css';

function App() {

   let [products, setProducts] = useState([]);

    let gettingDataFromServer = async ()=>{
    let reqOptions={
      method:"GET",
    }

     let JSONData = await fetch("https://fakestoreapi.com/products",reqOptions);

     let JSOData = await JSONData.json();
     setProducts(JSOData);
     console.log(JSOData);

    }

  
  return (
    <div>
    <div className="App">
       <button type="button" onClick={()=>{
        gettingDataFromServer();
       }}>Get</button>

      <div className="productContainer">
       {products.map((ele,i)=>{
        return<div className="productDiv">
          <h1>{ele.title}</h1>
          <img className="imgDiv" src={ele.image}></img>
          </div>
       })}
       </div>

       

    </div>
    </div>
  );
}

export default App;
