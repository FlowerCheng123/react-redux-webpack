/**
 * Created by Flower on 07/02/2016.
 */
import React, { Component, PropTypes } from 'react'
export default class NewTrip extends Component{
	handleSubmit(e){
        console.log( 'React.findDOMNode(this.refs.keys).value.trim()', this);
	}
	render(){
		return(
	            <div className="col-sm-6 col-sm-offset-3">
			      <div className="panel panel-default">
			        <div className="panel-heading font-bold text-center">New a trip</div>
			        <div className="panel-body">
			          <form role="form">
			            <div className="form-group">
			              <label>Title</label>
			              <input type="text" className="form-control" placeholder="Enter Trip Title" ref="title"/>
			            </div>
			            <div className="form-group">
			              <label>Address</label>
			              <input type="text" className="form-control" placeholder="Enter Trip Address" ref="address"/>
			            </div>
			            <div className="form-group">
			              <label>Location</label>
			              <input type="text" className="form-control" placeholder="Enter Trip Location" ref="location"/>
			            </div>
			            <div className="form-group">
			              <label>Description</label>
			              <input type="text" className="form-control" placeholder="Enter Trip Description" ref="descriptipn"/>
			            </div>
			            <div className="form-group">
			              <label>ImageUrl</label>
			              <input type="text" className="form-control" placeholder="Enter Trip ImageUrl" ref="imageUrl"/>
			            </div>
			            <div className="form-group">
			              <label>Tags</label>
			              <input type="text" className="form-control" placeholder="Enter Trip Tags" ref="tags" />
			            </div>
			            
			            <button type="button" className="btn btn-sm btn-primary pull-right" onClick={this.handleSubmit}>Submit</button>
			          </form>
			        </div>
			      </div>
			    </div>
		)
	}

}