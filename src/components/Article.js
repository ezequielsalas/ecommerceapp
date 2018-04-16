import React, { Component } from 'react';
import '../App.css';

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
    
    <img  src={this.props.img} />
    <h2>{this.props.name}</h2>
    <h2>${this.props.price}</h2>
    <button className="center" onClick={this.handleSubmit}>Buy</button>
    
    </div>
  )};
}

export default Article;