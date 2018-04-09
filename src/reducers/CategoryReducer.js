import {
	LOAD_CATEGORIES,
	SELECT_POST,
SELECT_CATEGORY
 } from '../actions';
 
 
 function categories (state  = initialCategoriesState , action){
	  debugger;
	switch (action.type) {
        case LOAD_CATEGORIES:
            let {categories, category} = action;
            return {
                categories,
                currentCategory: category
            };
        case SELECT_POST:
	        ({category} = action);
            return {
                ...state,
                currentCategory: category
            };
        case SELECT_CATEGORY:
            return {
                ...state,
                currentCategory: action.category
            }
        default:
            return state;
    }
	 
	   
 }
  
 const initialCategoriesState = {
    currentCategory: null,
    categories: []
}

export default categories;
