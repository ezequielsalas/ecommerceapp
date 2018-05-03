import { ADD_ARTICLE,SELECTED_ARTICLE,DELETE_ARTICLE } from "../constants/action-types";


const initialState = {
  articlesSelected: [],
  articles: [{"name":"SmartPhone","price":700, "img":"https://d3d71ba2asa5oz.cloudfront.net/12015576/images/iphone%207%20plus%20gold%20generic%20front_41117.jpg"}
    ,{"name":"Tesla Roadster","price":40000, "img":"https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/media/assets/submodel/8616.jpg"}
    ,{"name":"Laptop","price":3000, "img":"https://assets.pcmag.com/media/images/339392-apple-macbook-pro-15-inch-2013.jpg?width=1000&height=758"}
    ]
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	    case ADD_ARTICLE:
	       return { ...state, articles: state.articles.concat(action.payload) };
	    case SELECTED_ARTICLE:
	       return { ...state, articlesSelected: state.articlesSelected.concat(action.payload) };
	    case DELETE_ARTICLE:
	       return { ...state, articlesSelected: state.articlesSelected.filter(art => art.name !== action.payload) };
	    default:
	      return state;
  	}
};


export default rootReducer;