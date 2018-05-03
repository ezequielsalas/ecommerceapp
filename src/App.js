import React, { Component } from 'react';
import './App.css';
import ArticleList from './components/ArticleList'
import ShopingCar from './components/ShopingCar'

class App extends Component{
  constructor(props) {
    super(props);
    

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


  //TODO: change this to redux
  removeArticle =(articleName)=>{
    const list = this.state.articlesSelected.filter(art => art.name !== articleName);
     this.setState(prevState => ({
      articlesSelected: list
    }));
  }

  addArticle =(article)=>{
    

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
      <ArticleList  />
      <ShopingCar />
      </div>
     </div>
      );
  }
};

/*<ArticleList articles={this.state.articles} selectArticle={this.selectArticle} addArticle={this.addArticle}/>*/
export default App;
