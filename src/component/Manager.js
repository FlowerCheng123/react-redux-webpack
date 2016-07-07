/**
 * Created by Flower on 07/03/2016.
 */
import React, { Component, PropTypes } from 'react'
import Util from '../services/util' ;
import TripItem from './TripItem'
import NewTrip from './NewTrip'
import DelTrip from './DelTrip'
// import { Link } from 'react-router'


export default class Manager extends Component {
    componentWillMount() {
        console.log('componentWillMount Manager');
        this.getTrips();
    }

    componentDidMount() {
        console.log('componentDidMount Manager');

    }
    
    componentWillReceiveProps(nextProps){
    	console.log('componentWillReceiveProps Manager', nextProps);

    }
    componentDidUpdate(prevProps){
    	console.log('componentDidUpdate Manager');

    }
    getTrips(page){
        let {getAllTrips} = this.props;
        getAllTrips();
        console.log('goFetch Manager', this.props);
    }
    changeStatus( index, obj ){
    	let {setStatus} = this.props;
        setStatus(index || 0);
    }

    delTrip(){
    	let {delTrip, selectedTrip} = this.props

    	var id = selectedTrip._id;
    	delTrip(id);
     	this.getTrips();
    	this.changeStatus(); 
    }
    addSubmit(){
    	let {addTrip} = this.props
    	var _title = this.refs.title.value;
    	var _description = this.refs.description.value;
    	var _address = this.refs.address.value;
    	var _tags = this.refs.tags.value;
    	var _images = this.refs.imageUrl.value;
    	var _location = { lat: this.refs.lat.value, lng:this.refs.lng.value };
    	var _username = this.refs.username.value;

    	var body = {
    		title: _title,
    		address: _address,
    		images: [_images],
    		location: _location,
    		description: _description,
    		tags: [_tags],
    		username:_username
    	}
    	addTrip(body);
    	return;

     	this.getTrips();
    	this.changeStatus();

        // alert( 'Add a trip successfully')
    }
    updateFind( obj ){
    	let {findTrip} = this.props;
    	console.log( 'update finder', this.props );
    	var _id = obj._id;
    	findTrip(_id);
    	this.changeStatus(3);
    }
    deleteFind( obj ){
    	let {findTrip} = this.props;
    	console.log( 'delete finder', this.props );
    	var _id = obj._id;
    	findTrip(_id);
    	this.changeStatus(2);
    }
    updateSubmit(){
    	let {updateTrip, selectedTrip} = this.props
    	var _title = this.refs.title.value;
    	var _description = this.refs.description.value;
    	var _address = this.refs.address.value;
    	var _tags = this.refs.tags.value;
    	var _images = this.refs.imageUrl.value;
    	var _location = { lat: this.refs.lat.value, lng:this.refs.lng.value };
    	var _username = this.refs.username.value;

    	var body = {
    		title: _title,
    		address: _address,
    		images: [_images],
    		location: _location,
    		description: _description,
    		tags: [_tags],
    		username:_username,
    	}
    	var id = selectedTrip._id;
    	updateTrip(id, body);
     	this.getTrips();
    	this.changeStatus(); 
    	// alert( 'Update a trip successfully')  	
    }

    render () {
        var  {items, opStatus, selectedTrip} = this.props;
        var tripTemp = selectedTrip;
        return (
            <div className="container-fluid">
	            <div className="bg-light lter b-b wrapper-md">
				   <h1 className="m-n font-thin h3">Manage your trips<button className="btn m-b-xs w-xs btn-info pull-right" onClick={this.changeStatus.bind(this,1)}><a className="white">New</a></button></h1>
				</div>
				<div className="wrapper-md">
				  <div className="panel panel-default">
				    <div className="panel-heading">
				      All Trips
				    </div>
				    <div className="table-responsive">
				      <table  className="table table-striped m-b-none">
				        <thead className="panel-heading">
				          <tr>
				            <th  >Title</th>
				            <th  >Create Date</th>
				            <th  >Description</th>
				            <th  >Address</th>
				            <th  >Location</th>
				            <th>Username</th>
				            <th>Tags</th>
				            <th></th>
				          </tr>
				        </thead>
				        
					{ items.length > 0 &&
	                    <tbody>
	                        {items.map((item, i) =>
	                          <tr key = {i} >
					            <td >{item.title}</td>
					            <td >{ Util.dateTransfer( item.creationdate ) }</td>
					            <td >{item.description}</td>
					            <td >{item.address}</td>
					            <td >( {item.location.lat}°, {item.location.lng}°)</td>
					            <td> {item.username}</td>
					            <td> {item.tags.map((tag,i) =>
                                    <span key={i}>{tag}&nbsp;&nbsp;</span>
					             )}</td>
					            <td><a className="" onClick={this.updateFind.bind(this,item)}>update</a>&nbsp;&nbsp;&nbsp;<a className="" onClick={this.deleteFind.bind(this, item)}>delete</a></td>
					          </tr>
	                        )}
	                    </tbody>
	                }
				        
				      </table>
				    </div>
				  </div>
				</div>
				{ opStatus == 'Add_Trip' &&
				<div className="overlay">
                    <div className="col-sm-6 col-sm-offset-3">
				      <div className="panel panel-default">
				        <div className="panel-heading font-bold text-center">New a trip <img src="/image/db-close.png" width="20" className="pull-right" onClick={this.changeStatus.bind(this)}/> </div>
				        <div className="panel-body">
				          <form role="form">
				            <div className="form-group col-xs-12">
				              <label>Title</label>
				              <input type="text" className="form-control" placeholder="Enter Trip Title" ref="title"/>
				            </div>
				            <div className="form-group col-xs-12">
				              <label>Address</label>
				              <input type="text" className="form-control" placeholder="Enter Trip Address" ref="address"/>
				            </div>
				            <div className="form-group col-xs-6">
				              <label>Lat</label>
				              <input type="text" className="form-control" placeholder="Enter Trip lat" ref="lat"/>
				            </div>
				            <div className="form-group col-xs-6">
				              <label>Lng</label>
				              <input type="text" className="form-control" placeholder="Enter Trip lng" ref="lng"/>
				            </div>
				            <div className="form-group col-xs-12">
				              <label>Description</label>
				              <input type="text" className="form-control" placeholder="Enter Trip Description" ref="description"/>
				            </div>
				            <div className="form-group col-xs-12">
				              <label>ImageUrl</label>
				              <input type="text" className="form-control" placeholder="Enter Trip ImageUrl" ref="imageUrl"/>
				            </div>
				            <div className="form-group col-xs-12">
				              <label>Tags</label>
				              <input type="text" className="form-control" placeholder="Enter Trip Tags" ref="tags" />
				            </div>
				            <div className="form-group col-xs-12">
				              <label>Username</label>
				              <input type="text" className="form-control" placeholder="Enter Trip Username" ref="username" />
				            </div>
				            
				            <button type="button" className="btn btn-sm btn-primary pull-right" onClick={this.addSubmit.bind(this)}>Submit</button>
				          </form>
				        </div>
				      </div>
				    </div>
				</div>
				}
				{ opStatus == 'Del_Trip' &&
				<div className="overlay">
		            <div className="col-sm-6 col-sm-offset-3">
				      <div className="panel panel-default text-center">
				          <div className="panel-heading font-bold text-center">Delete the trip</div>
				          <div className="panel-body">
					          <div className="form-group col-xs-12">
					              <label>Title</label>
					              <input type="text" className="form-control" placeholder="Enter Trip Title" ref="title" value={tripTemp.title}/>
					            </div>
					            <div className="form-group col-xs-12">
					              <label>Address</label>
					              <input type="text" className="form-control" placeholder="Enter Trip Address" ref="address" value={selectedTrip.address}/>
					            </div>
					            <div className="form-group col-xs-6">
					              <label>Lat</label>
					              <input type="text" className="form-control" placeholder="Enter Trip lat" ref="lat" value={selectedTrip.location.lat}/>
					            </div>
					            <div className="form-group col-xs-6">
					              <label>Lng</label>
					              <input type="text" className="form-control" placeholder="Enter Trip lng" ref="lng" value={selectedTrip.location.lng}/>
					            </div>
					            <div className="form-group col-xs-12">
					              <label>Description</label> 
					              <input type="text" className="form-control" placeholder="Enter Trip Description" ref="description" value={selectedTrip.description}/>
					            </div>
					            <div className="form-group col-xs-12">
					              <label>ImageUrl</label>
					              <input type="text" className="form-control" placeholder="Enter Trip ImageUrl" ref="imageUrl" value={selectedTrip.images[0]}/>
					            </div>
					            <div className="form-group col-xs-12">
					              <label>Tags</label>
					              <input type="text" className="form-control" placeholder="Enter Trip Tags" ref="tags" value={selectedTrip.tags}/>
					            </div>
					            <div className="form-group col-xs-12">
					              <label>Username</label>
					              <input type="text" className="form-control" placeholder="Enter Trip Username" ref="username" value={selectedTrip.username}/>
					            </div>
					        <button className="btn m-b-xs w-xs btn-primary" onClick={this.delTrip.bind(this)}>Delete</button>
					        <button className="btn m-b-xs w-xs btn-default" onClick={this.changeStatus.bind(this,0)}>Cancel</button>
					      </div>
				      </div>
				    </div>
				</div>
				}
				{ opStatus == 'Update_Trip' &&
				<div className="overlay fade-in-right-big ng-enter ">
                    <div className="col-sm-6 col-sm-offset-3">
				      <div className="panel panel-default">
				        <div className="panel-heading font-bold text-center">Update a trip <img src="/image/db-close.png" width="20" className="pull-right" onClick={this.changeStatus.bind(this)}/></div>
				        <div className="panel-body">
				          <form role="form">
				            <div className="form-group col-xs-12">
				              <label>Title</label>
				              <input type="text" className="form-control" placeholder="Enter Trip Title" ref="title" defaultValue={tripTemp.title}/>
				            </div>
				            <div className="form-group col-xs-12">
				              <label>Address</label>
				              <input type="text" className="form-control" placeholder="Enter Trip Address" ref="address" defaultValue={selectedTrip.address}/>
				            </div>
				            <div className="form-group col-xs-6">
				              <label>Lat</label>
				              <input type="text" className="form-control" placeholder="Enter Trip lat" ref="lat" defaultValue={selectedTrip.location.lat}/>
				            </div>
				            <div className="form-group col-xs-6">
				              <label>Lng</label>
				              <input type="text" className="form-control" placeholder="Enter Trip lng" ref="lng" defaultValue={selectedTrip.location.lng}/>
				            </div>
				            <div className="form-group col-xs-12">
				              <label>Description</label> 
				              <input type="text" className="form-control" placeholder="Enter Trip Description" ref="description" defaultValue={selectedTrip.description}/>
				            </div>
				            <div className="form-group col-xs-12">
				              <label>ImageUrl</label>
				              <input type="text" className="form-control" placeholder="Enter Trip ImageUrl" ref="imageUrl" defaultValue={selectedTrip.images[0]}/>
				            </div>
				            <div className="form-group col-xs-12">
				              <label>Tags</label>
				              <input type="text" className="form-control" placeholder="Enter Trip Tags" ref="tags" defaultValue={selectedTrip.tags}/>
				            </div>
				            <div className="form-group col-xs-12">
				              <label>Username</label>
				              <input type="text" className="form-control" placeholder="Enter Trip Username" ref="username" defaultValue={selectedTrip.username}/>
				            </div>
				            
				            <button type="button" className="btn btn-sm btn-primary pull-right" onClick={this.updateSubmit.bind(this)}>Submit</button>
				          </form>
				        </div>
				      </div>
				    </div>
				</div>
				}
            </div>

        )
    }
}

