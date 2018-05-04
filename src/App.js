import React, { Component } from 'react';
import './App.css';
import ArticleList from './components/ArticleList'
import ShopingCar from './components/ShopingCar'

class App extends Component{
  constructor(props) {
    super(props);
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

export default App;
