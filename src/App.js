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

const ShopingCar =(props) =>{
  return(
  <div className='shopping-panel'>
  
  <h1>I'm a shoppingCar</h1>
  </div>
  );
}


const ArticleList = (props) =>{
  return (
    <div className="container-list">

    {props.articles.map(article => (
           <Article name="SmartPhone" price="80.20" img={tempImage}/> 
        ))}
     
    </div>
    );
}
class App extends Component{
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.articles = [1,2,3,4];
  }

  render(){
    return (
     <div>
       <ul className="navigation">
  
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="container">
      <ArticleList articles={this.articles} />
      <ShopingCar />
      </div>
     </div>
      );
  }
};

export default App;
