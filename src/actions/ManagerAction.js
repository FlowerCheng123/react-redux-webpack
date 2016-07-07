/**
 * Created by Flower on 07/03/2016.
 */
import Http from "../services/http"
import Const from '../services/const'

export const UPDATE="Update_Trip"
export const DEL ="Del_Trip"
export const ADD ="Add_Trip"
export const ALL ="All_Trips"
export const SWITCH = "Switch_status"
export const FIND = "Find_Trip"


function allTrips(data){
    return {
        type:ALL,
        items: data,
    }
}
function add(){
    return {
        type:ADD
    }
}
function del(){
    return {
        type:DEL
    }
}
function update( tripObj ){
    return {
        type:UPDATE,
        selectedTrip: tripObj
    }
}
function switchStatus( status ){
    return {
        type:SWITCH,
        status: status
    }
}
function finder(tripObj){
    return{
        type: FIND,
        selectedTrip: tripObj
    }
}



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
export function setStatus(index){
    var status = '';
    switch( index ){
        case 1: status = ADD; break;
        case 2: status = DEL; break;
        case 3: status = UPDATE; break;
        default: status = ALL; break;
    }
    return (dispatch,getState) => {
        return dispatch( switchStatus(status ))
    }
}
export function addTrip( tripObj ){
    const apiName = 'addTrip';
    var url = Const.HOST+Const.api[apiName].url;
    return (dispatch,getState) => {
        return Http.send( apiName, {body:JSON.stringify(tripObj), url: url})
            .then(response=>response.json())
            .then(function(json){
                return dispatch(add())
            } )
    }
}
export function delTrip( id ){
    const apiName = 'deleteTrip';
    var url = Const.HOST+Const.api[apiName].url+'/'+id;
    return (dispatch,getState) => {
        return Http.send( apiName, {body:{}, url: url})
            .then(response=>response.json())
            .then(function(json){
                return dispatch(del())
            } )
    }
}
export function updateTrip( id, tripObj ){
    const apiName = 'updateTrip';
    var url = Const.HOST+Const.api[apiName].url+'/'+id;
    return (dispatch,getState) => {
        return Http.send( apiName, {body:JSON.stringify(tripObj), url: url})
            .then(response=>response.json())
            .then(function(json){
                return dispatch(update(json.data))
            } )
    }
}
export function findTrip( id ){
    const apiName = 'trip';
    var url = Const.HOST+Const.api[apiName].url+'/'+id;
    return (dispatch,getState) => {
        return Http.send( apiName, {body:{}, url: url})
            .then(response=>response.json())
            .then(function(json){
                return dispatch(update(json.data))
            } )
    }
}
