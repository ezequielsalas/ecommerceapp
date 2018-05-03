import { ADD_ARTICLE,SELECTED_ARTICLE,DELETE_ARTICLE } from "../constants/action-types";

export const addArticle = article => {
	console.log("inside");
	/*const articleFound = articles.filter(art => art.name === article.name);
    if (articleFound.length){
    	console.log("found");
      return;
    }
    console.log("Not found");
    */
	return ({ type: ADD_ARTICLE , payload: article })

};
export const selectArticle = article => ({ type: SELECTED_ARTICLE , payload: article });

export const deleteArticle = articleName => ({ type: DELETE_ARTICLE , payload: articleName });



