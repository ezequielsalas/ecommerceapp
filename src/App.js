import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


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
  <header>
    I'm the header
  </header>
  <div className="article-selected">
    <article>
      1
    </article>
    
    <article>
      2
    </article>
    
    <article>
      3
    </article>
    
  </div>

  <footer>
    I'm a footer
  </footer>
  </div>
  );
}


const ArticleList = (props) =>{
  return (
    <div className="container-list">

    {props.articles.map(article => (<Article name={article.name} price={article.price} img={article.img}/>)
                        )}
     
    </div>
    );
}

class App extends Component{
  constructor(props) {
    super(props);
    //this.state = { articles: [] };
    this.articles = [{"name":"SmartPhone","price":700, "img":"https://d3d71ba2asa5oz.cloudfront.net/12015576/images/iphone%207%20plus%20gold%20generic%20front_41117.jpg"}
    ,{"name":"Tesla Roadster","price":40000, "img":"https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/media/assets/submodel/8616.jpg"}
    ,{"name":"Laptop","price":3000, "img":"https://assets.pcmag.com/media/images/339392-apple-macbook-pro-15-inch-2013.jpg?width=1000&height=758"}
    ];
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
