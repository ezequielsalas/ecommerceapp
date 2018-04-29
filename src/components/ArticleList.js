
import '../App.css';
import Article from './Article';
import ArticleForm from './ArticleForm'
import React, { Component } from 'react';
import { connect } from "react-redux";


const mapStateToProps = state => {
  return { articles: state.articles };
};

class ArticleList extends Component{
	constructor(props){
		super(props);
		this.state={form:''};
		this.handleAdd = this.handleAdd.bind(this);
		this.clear = this.clear.bind(this);
	}
	clear =()=>{
		this.setState(
		{
			form:''
		}
			);
		}
	
	handleAdd =()=>{
		this.setState({
			form:<ArticleForm clear={this.clear} />
		});
	}
  render(){return (
    <div className="container-list">

    {this.props.articles.map((article, index) => (<Article key={index} name={article.name}  price={article.price} img={article.img}/> ))}
    {this.state.form}
    <button className="btn-add" onClick={this.handleAdd}>+</button>
     
    </div>
    );
}
}


const VisibleArticleList = connect(mapStateToProps)(ArticleList);
export default VisibleArticleList;
