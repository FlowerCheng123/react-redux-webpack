/**
 * Created by Flower on 07/03/2016.
 */

import {combineReducers} from "redux"
import getTripsReducer from "./TripsReducer"
import ManagerReducer from "./ManagerReducer"
import SearchReducer from "./SearchReducer"

const rootReducer=combineReducers({
    getTripsReducer,
    ManagerReducer,
    SearchReducer
})
export default rootReducer;