/**
 * Created by Flower on 07/03/2016.
 */
// import {combineReducers} from "redux"
import { UPDATE, DEL, ADD, ALL, SWITCH, FIND } from '../actions/ManagerAction'

const initialState = {
    items: [],
    selectedTrip : {},
    opStatus: ALL
    // currentPage: 0,
    // count:0
}
function ManagerReducer( state= initialState,action){
    switch(action.type){
        case ALL: return Object.assign({}, state, {
            items: action.items,
        })
        case ADD: return Object.assign({}, state, {
            selectedTrip: action.selectedTrip,
        })
        case DEL: return Object.assign({}, state, {
        })
        case UPDATE: return Object.assign({}, state, {
        	selectedTrip: action.selectedTrip,
        })
        case SWITCH: return Object.assign({}, state, {
        	opStatus: action.status
        })
        case FIND: return Object.assign({}, state, {
            selectedTrip: action.selectedTrip
        })
        
        default:return state;
    }
}

export default ManagerReducer;

// import {combineReducers} from "redux"
// import getTripsReducer from "./TripsReducer"

// const rootReducer=combineReducers({
//     getTripsReducer
// })
// export default rootReducer;