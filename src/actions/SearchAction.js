/**
 * Created by Flower on 07/03/2016.
 */
import Http from "../services/http"
import Const from '../services/const'
import Util from '../services/util'

export const SEARCH="Search_Trip"
export const TAGS="Tags"
export const ALL ="All_Trips"

function search(data){
    return {
        type:SEARCH,
        chooseItems: data,
    }
}

function tags(data){
    return {
        type:TAGS,
        tags: data,
    }
}
function allTrips(data){
    return {
        type:ALL,
        items: data,
    }
}

// function selectedTrips(data){
//     return {
//         type:ALL,
//         chooseItems: data,
//     }
// }
export function getAllTrips(){
    const apiName = 'trips';
    var url = Const.HOST+Const.api[apiName].url;
    return (dispatch,getState) => {
        return Http.send( apiName, {body:{}, url: url})
            .then(response=>response.json())
            .then(function(json){
                return dispatch(allTrips(json.data ))
            } )
    }
}

/**depreciate**/
// export function searchTrip(tripObj){
//     const apiName = 'searchTrip';
//     var url = Const.HOST+Const.api[apiName].url+'/'+(page-1)*10+'/'+(page)*10;
//     return (dispatch,getState) => {
//         return Http.send( apiName, {body:{}, url: url})
//             .then(function(response){
//                 console.log('response',response)
//                 if( response.status == '204' ){
//                     return {};
//                 }else{
//                     return response.json();
//                 }
//             })
//             .then(function(json){
//                  console.log('json',json)
//                 return dispatch(trips(json.data, page ))
//             } )
//     }
// }
export function getTags(){
    const apiName = 'tags';
    var url = Const.HOST+Const.api[apiName].url;
    return (dispatch,getState) => {
        return Http.send( apiName, {body:{}, url: url})
            .then(response => response.json())
            .then( json => dispatch(tags(json.data )) )
    }
}
export function searchTrip(trips, condition){
    var newArray = [];
    function matchCondition( trip, condition){
        var tempCondition = condition.commonParam;
        var tempTrip = Object.assign({}, trip);
        var tempTrip2 = Object.assign({}, tempTrip);
        var newTrip = Object.assign(tempTrip, tempCondition);
        // console.log( 'condition.tags', condition.tags);
        console.log( 'tempTrip', tempTrip);

        // console.log( 'nnneeeeeee', Util.isObjectValueEqual(newTrip, tempTrip) );
        // console.log( 'trippppppp', tempTrip);
        // if( !condition.location )
        if( Util.isObjectValueEqual(tempTrip2, tempTrip) && (!condition.location||Util.isLocation(tempTrip.location, condition.location) ) && (!condition.creationdate|| Util.checkDate(tempTrip.creationdate,condition.creationdate) ) && (!condition.tags || Util.checkTags(tempTrip.tags,condition.tags)) ){
            return true;
        }else{
            return false;
        }
    }
    trips.map(function(x, i){
            if( matchCondition( x, condition ) ){
                
                newArray.push(x);
               
            }
            console.log( 'dfjsofjosjfsodfjosfosfjos', trips[i]);
    })
    

    return (dispatch,getState) => {
        return dispatch(search(newArray ))
    }
}