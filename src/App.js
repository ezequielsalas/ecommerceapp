import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Article extends Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = ()=>{
    this.props.selectArticle({'name':this.props.name,'price':this.props.price});
  }

  render(){return(
    <div className='product-card'>
    
    <img src={this.props.img} />
    <h2>{this.props.name}</h2>
    <h2>${this.props.price}</h2>
    <button className="center" onClick={this.handleSubmit}>Buy</button>
    
    </div>
  )};
}

class ShopingCar extends Component{
  constructor(props){
    super(props);
  }

 
  render() {
    return(
  <div className='shopping-panel'>
  <header>
    Order summary
  </header>
  <hr/>
  
  <section>
    Item quantity <strong>{this.props.articlesSelected.length}</strong>
  </section>
  
  <div className="article-selected">

  {this.props.articlesSelected.map((articleSelected,index) =>( <article key={index}> {articleSelected.name} <button className="btn-delete" onClick={()=>this.props.removeArticle(articleSelected.name)}>X</button> </article>))}
   
  </div>

  <footer>
    <button className="center" >Checkout</button>
  </footer>
  </div>
  );
  }
}


const ArticleList = (props) =>{
  return (
    <div className="container-list">

    {props.articles.map((article, index) => (<Article key={index} name={article.name} selectArticle={props.selectArticle} price={article.price} img={article.img}/>))}
     
    </div>
    );
}

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { articlesSelected: [] };
    this.articles = [{"name":"SmartPhone","price":700, "img":"https://d3d71ba2asa5oz.cloudfront.net/12015576/images/iphone%207%20plus%20gold%20generic%20front_41117.jpg"}
    ,{"name":"Tesla Roadster","price":40000, "img":"https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/media/assets/submodel/8616.jpg"}
    ,{"name":"Laptop","price":3000, "img":"https://assets.pcmag.com/media/images/339392-apple-macbook-pro-15-inch-2013.jpg?width=1000&height=758"}
    ];

    this.selectArticle = this.selectArticle.bind(this);
  }

  selectArticle = (article) =>{
    const articleFound = this.state.articlesSelected.filter(art => art.name === article.name);
    if (articleFound.length){
      return;
    }

    this.setState(prevState => ({
      articlesSelected: prevState.articlesSelected.concat(article)
    }));
  }

  removeArticle =(articleName)=>{
    const list = this.state.articlesSelected.filter(art => art.name != articleName);
     this.setState(prevState => ({
      articlesSelected: list
    }));
  }

  render(){
    return (
     <div>
       <ul className="navigation">
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="container">
      <ArticleList articles={this.articles} selectArticle={this.selectArticle}/>
      <ShopingCar articlesSelected={this.state.articlesSelected} removeArticle={this.removeArticle}/>
      </div>
     </div>
      );
  }
};

export default App;
