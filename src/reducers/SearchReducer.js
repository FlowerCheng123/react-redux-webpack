/**
 * Created by Flower on 07/03/2016.
 */
// import {combineReducers} from "redux"
import { SEARCH, TAGS, ALL } from '../actions/SearchAction'

const initialState = {
      tripObj : {},
      tags : [],
      items:[],
      chooseItems: []
}
function SearchReducer( state= initialState,action){
    console.log( 'action', state);
	// alert(action.type)
    switch(action.type){
        case SEARCH: return Object.assign({}, state, {
            chooseItems: action.chooseItems,
        })
        case TAGS: return Object.assign({}, state, {
            tags: action.tags,
        })
        case ALL: return Object.assign({}, state, {
            items: action.items,
        })
        default:return state;
    }
}

export default SearchReducer;