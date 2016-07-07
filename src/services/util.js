/**
 * Created by Flower on 07/07/2016.
 */

export default {
	dateTransfer: function( date ){
    	if( date ){
    		return date.split('T')[0] + '   '+date.split('T')[1].split('.')[0];
    	}
	},
	isObjectValueEqual: function(a, b) {
	    // Of course, we can do it use for in 
	    // Create arrays of property names
	    var aProps = Object.getOwnPropertyNames(a);
	    var bProps = Object.getOwnPropertyNames(b);
	 
	    // If number of properties is different,
	    // objects are not equivalent
	    if (aProps.length != bProps.length) {
	        return false;
	    }
	 
	    for (var i = 0; i < aProps.length; i++) {
	        var propName = aProps[i];
	        // If values of same property are not equal,
	        // objects are not equivalent
	        if (a[propName] !== b[propName]) {
	            return false;
	        }
	    }
	    // If we made it this far, objects
	    // are considered equivalent
	    return true;
	},
	isLocation: function( tarLocale, conditionLocale){
		// console.log( 'tarLocale', tarLocale ); 
		// console.log( 'conditionLocale', conditionLocale );
		// if(!conditionLocale )  return false;
		if( conditionLocale.latFrom ){
			if( tarLocale.lat < parseInt(conditionLocale.latFrom)  ) return false;
		}
		if( conditionLocale.latTo ){
			if(  tarLocale.lat > parseInt(conditionLocale.latTo) ) return false;
		}
		if( conditionLocale.lngFrom ){
			if(  tarLocale.lng < parseInt(conditionLocale.lngFrom) ) return false;
		}
		if( conditionLocale.lngTo ){
			if(  tarLocale.lng > parseInt(conditionLocale.lngTo) ) return false;
		}
		return true;
	},
	checkDate: function(tarDate, oriDate){
		
		// console.log( 'oriDate', oriDate);
		return tarDate.split('T')[0] ==oriDate;
        
	},
	checkTags:function(tarTags, oriTags){
		Array.prototype.contains = function(element) {  
		    for (var i = 0; i < this.length; i++) {  
		        if (this[i] == element) {  
		            return true;  
		        }  
		    }  
		    return false;  
		} 
		// console.log( 'oriTags', oriTags);
		for( var i =0;i<oriTags.length;i++){
			if( !tarTags.contains(oriTags[i]) ) return false
		}
		// console.log( 'tarTags', tarTags);
		return true;

	}
}
