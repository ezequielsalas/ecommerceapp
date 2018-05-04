import React, { Component } from 'react';
import '../App.css';
import { connect } from "react-redux";
import {selectArticle} from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    selectArticle: article => dispatch(selectArticle(article))
  };
};

const mapStateToProps = state => {
  return { articlesSelected: state.articlesSelected };
};


class Article extends Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = ()=>{
     const articleFound = this.props.articlesSelected.filter(art => art.name === this.props.name);
    if (articleFound.length){
      return;
    }
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


const VisibleArticle = connect(mapStateToProps, mapDispatchToProps)(Article);
export default VisibleArticle;