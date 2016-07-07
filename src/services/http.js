/**
 * Created by Flower on 07/03/2016.
 */
import fetch from 'isomorphic-fetch'
import Const from './const'

var headers = {
	"appKey": Const.APP_KEY,
	"appSecret": Const.APP_SECRET,
	"Content-Type" : "application/json"
}

export default {
	send: function(apiName , option){
		// var _url = Const.HOST + Const.api[url].url;
		option['headers'] = headers;
		option.method = Const.api[apiName].method;
	    var promise = new Promise(function(resolve, reject){
	    	fetch( option.url, option )
	    	.then(function(data){
               console.log( 'then1', data)
               resolve(data);
	    	})
	    	.then(function(data){
               reject(new Error(data) );
	    	})
	    });
	  return promise;
	}
}

// export default class Http {
// 	constructor(url, option = {method:"GET"}) {
// 	    this.url = url;
// 	    this.option = option;
// 	 }
// 	send( url , option){
// 	    var promise = new Promise(function(resolve, reject){
// 	    	fetch( url, option = { body = '', method = 'GET', headers = {} } = {} )
// 	    	.then(function(data){
//                console.log( 'then1', data)
//                resolve(data);
// 	    	})
// 	    	.then(function(data){
//                reject(new Error(data) );
// 	    	})
// 	    });
// 	  return promise;
// 	}
// }