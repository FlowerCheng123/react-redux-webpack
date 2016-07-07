/**
 * Created by Flower on 07/03/2016.
 */
import React, { Component, PropTypes } from 'react'
export default class DelTrip extends Component{
	handleSubmit(e){
        console.log( 'React.findDOMNode(this.refs.keys).value.trim()', this);
	}
    componentWillReceiveProps(nextProps){
    	console.log('componentWillReceiveProps Manager', nextProps);

    }
	render(){
		console.log( 'React.findDOMNode(this.refs.keys).value.trim()', this);
		return(
	            <div className="col-sm-6 col-sm-offset-3">
			      <div className="panel panel-default text-center">
			          <div className="panel-heading font-bold text-center">Delete the trip</div>
			          <div className="panel-body">
				        <button className="btn m-b-xs w-xs btn-primary" onClick={this.props.delFun}>Delete</button>
				        <button className="btn m-b-xs w-xs btn-default" onClick={this.props.changeStatus}>Cancel</button>
				      </div>
			      </div>
			    </div>
		)
	}

}