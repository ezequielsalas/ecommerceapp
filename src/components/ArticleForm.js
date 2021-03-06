import React, { Component } from 'react';
import '../App.css';
import {addArticle} from "../actions/index";
import { connect } from "react-redux";


const mapStateToProps = state =>{
  return { articles: state.articles };
}
const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};
class ArticleForm extends Component{
  constructor(props) {
    super(props);
     this.handleChange = this.handleChange.bind(this);
   
  }
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    
    this.props.addArticle({name:this.state.name,price:this.state.price,img:this.state.url});
    this.props.clear();
  }
  render(){return(
    <div className='form-add-article'>
    
   <form onSubmit={this.handleSubmit}>

   <label>Name</label>
   <input name="name" type="text" required onChange={this.handleChange}/>
  <label>Price</label>
   <input name="price" type="number" required onChange={this.handleChange}/>
   <label>Image url:</label>
   <input name="url" type="text" required onChange={this.handleChange}/>
   <button type="submit">Save</button>
   </form>
    
    </div>
  )};
}


const VisibleArticleForm = connect(mapStateToProps, mapDispatchToProps)(ArticleForm);
export default VisibleArticleForm;