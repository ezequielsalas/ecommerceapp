import React, { Component } from 'react';
import './App.css';
import ArticleList from './components/ArticleList'
import ShopingCar from './components/ShopingCar'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { articlesSelected: [] 
    ,articles : [{"name":"SmartPhone","price":700, "img":"https://d3d71ba2asa5oz.cloudfront.net/12015576/images/iphone%207%20plus%20gold%20generic%20front_41117.jpg"}
    ,{"name":"Tesla Roadster","price":40000, "img":"https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/media/assets/submodel/8616.jpg"}
    ,{"name":"Laptop","price":3000, "img":"https://assets.pcmag.com/media/images/339392-apple-macbook-pro-15-inch-2013.jpg?width=1000&height=758"}
    ]}

    this.selectArticle = this.selectArticle.bind(this);
    this.addArticle = this.addArticle.bind(this);
  }

  selectArticle =(article) =>{
    const articleFound = this.state.articlesSelected.filter(art => art.name === article.name);
    if (articleFound.length){
      return;
    }

    this.setState(prevState => ({
      articlesSelected: prevState.articlesSelected.concat(article)
    }));
  }

  removeArticle =(articleName)=>{
    const list = this.state.articlesSelected.filter(art => art.name !== articleName);
     this.setState(prevState => ({
      articlesSelected: list
    }));
  }

  addArticle =(article)=>{
      const articleFound = this.state.articles.filter(art => art.name === article.name);
    if (articleFound.length){
      return;
    }

    this.setState(prevState => ({
      articles: prevState.articles.concat(article)
    }));
  }

  render(){
    return (
     <div>
       <ul className="navigation">
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
      </ul>
      <div className="container">
      <ArticleList articles={this.state.articles} selectArticle={this.selectArticle} addArticle={this.addArticle}/>
      <ShopingCar articlesSelected={this.state.articlesSelected} removeArticle={this.removeArticle}/>
      </div>
     </div>
      );
  }
};

export default App;
