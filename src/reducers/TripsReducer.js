/**
 * Created by Flower on 07/03/2016.
 */
import { GET } from '../actions/TripsAction'

const initialState = {
    items: [],
    currentPage: 0,
    count:0
}
function getTripsReducer( state= initialState,action){
	//It's a trick for get more data since I can't get more data from server side.
	var newItems = state.items;
	// for( let i = 0; i<10;i++){
		if(action.items != undefined ){
			newItems = newItems.concat(action.items)
		}
	// }
	//tricky loop ,never mind
	if(action.items == undefined && state.items.length >0){
		// for( let i = 0; i<10;i++){
			// newItems.push(state.items[0])
		// }
	}

    switch(action.type){
        case GET: return Object.assign({}, state, {
                items: newItems,
                currentPage:action.currentPage,
                count: action.count
            })
        default:return state;
    }
}

export default getTripsReducer;