import React, { Component } from 'react';
import '../App.css';

import { connect } from "react-redux";
import {deleteArticle} from "../actions/index";


const mapStateToProps = state => {
  return { articlesSelected: state.articlesSelected };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteArticle: article => dispatch(deleteArticle(article))
  };
};

class ShopingCar extends Component{
  
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

  {this.props.articlesSelected.map((articleSelected,index) =>( <article key={index}> {articleSelected.name} <button className="btn-delete" onClick={()=>this.props.deleteArticle(articleSelected.name)}>X</button> </article>))}
   
  </div>

  <footer>
    <button className="center" >Checkout</button>
  </footer>
  </div>
  );
  }
}



const VisibleShoping = connect(mapStateToProps,mapDispatchToProps)(ShopingCar);
export default VisibleShoping;