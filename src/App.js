import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const tempImage = "https://d3d71ba2asa5oz.cloudfront.net/12015576/images/iphone%207%20plus%20gold%20generic%20front_41117.jpg";

const Article =(props) =>{
  return(
  <div className='product-card'>
  
  <img src={props.img} />
  <h2>{props.name}</h2>
  <h2>${props.price}</h2>
  <button className="center">Buy</button>
  
  </div>
  );
}

class App extends Component{

  render(){
    return (<Article name="SmartPhone" price="80.20" img={tempImage}/>);
  }
};

export default App;
