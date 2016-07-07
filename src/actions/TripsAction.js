/**
 * Created by Flower on 07/03/2016.
 */
import Http from "../services/http"
import Const from '../services/const'

export const GET="GET_TRIPS"
export const Current_Page=0
const limit = 10;

export function trips(data, page, items){
    return {
        type:GET,
        items: data,
        currentPage: page,
        // count: items.count
    }
}
export function getTrips(page = Current_Page){
    const apiName = 'trips';
    var url = Const.HOST+Const.api[apiName].url+'/'+(page-1)*10+'/'+(page)*10;
    return (dispatch,getState) => {
        return Http.send( apiName, {body:{}, url: url})
            .then(function(response){
                console.log('response',response)
                if( response.status == '204' ){
                    return {};
                }else{
                    return response.json();
                }
            })
            .then(function(json){
                 console.log('json',json)
                return dispatch(trips(json.data, page ))
            } )
    }
}
