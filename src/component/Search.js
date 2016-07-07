/**
 * Created by Flower on 07/02/2016.
 */
import React, { Component, PropTypes } from 'react'
import TripItem from './TripItem'


export default class Search extends Component {
	componentWillMount() {
        console.log('componentWillMount Search');
        this.getTagsAndTrips()
    }

    componentDidMount() {
        console.log('componentDidMount Search');

    }
    
    componentWillReceiveProps(nextProps){
    	console.log('componentWillReceiveProps Search', nextProps);

    }
    componentDidUpdate(prevProps){
    	console.log('componentDidUpdate Search');

    }
    handleSearch(){
    	var {items, searchTrip} = this.props;
    	var _title = this.refs.title.value || '';
    	var _address = this.refs.address.value || '';
    	var _latFrom = this.refs.latFrom.value || '';
    	var _latTo = this.refs.latTo.value || '';
    	var _lngFrom = this.refs.lngFrom.value || '';
    	var _lngTo = this.refs.lngTo.value || '';
    	var _status = this.refs.status.value || '';
    	var _date = this.refs.date.value || '';
    	var _tags = this.refs.tags.value || '';
    	var condition = {
    		commonParam: {},
    		
    	};
    	if( _title ){
			condition.commonParam.title = _title;
    	}
    	if( _address ){
			condition.commonParam.address = _address;
    	}
    	if( _status ){
			condition.commonParam.status = _status;
    	}
    	if( _date ){
    		condition.creationdate = _date;
    	}
    	if( _latFrom|| _latTo || _lngFrom || _lngTo){
    		condition.location = {};
    	}
    	if(_latFrom ){
    		condition.location.latFrom = _latFrom;
    	}
    	if(_latTo ){
    		condition.location.latTo = _latTo;
    	}
    	if(_lngFrom ){
    		condition.location.lngFrom = _lngFrom;
    	}
    	if(_lngTo ){
    		condition.location.lngTo = _lngTo;
    	}
    	if( _tags ){
    		condition.tags = _tags.split('  ');
    		var arrayTemp = [];
    		for( var i = 0;i<condition.tags.length;i++){
    			if( condition.tags[i] !=  ''){
    				arrayTemp.push(condition.tags[i]);
    			}
    		}
    		condition.tags = arrayTemp;
    	}

    	searchTrip(items, condition);
    }
    getTagsAndTrips(){
    	const { getTags, getAllTrips, } = this.props;
    	getTags();
    	getAllTrips();
    }
    chooseAndDelTags(){
        console.log( 'this.refs.tagsSelection.value', this.refs.tagsSelection.value)
        this.refs.tags.value = this.refs.tags.value+this.refs.tagsSelection.value+'  ';
    }
    render () {
    	var {chooseItems} = this.props;
        return (
				<div className="col-sm-10 col-sm-offset-1">
			      <div className="panel panel-default">
			        <div className="panel-heading font-bold text-center">Search Trip</div>
			        <div className="panel-body">
			          <form role="form">
			            <div className="form-group col-sm-6">
			              <label>Title</label>
			              <input type="text" className="form-control" placeholder="Enter Trip Title" ref="title"/>
			            </div>
			            <div className="form-group col-sm-6">
			              <label>Address</label>
			              <input type="text" className="form-control" placeholder="Enter Trip Address" ref="address"/>
			            </div>
			            <div className="form-group col-sm-3">
			              <label>Lat(from)</label>
			              <input type="text" className="form-control" placeholder="Enter Trip Lat(from)" ref="latFrom"/>
			            </div>
			            <div className="form-group col-sm-3">
			              <label>Lat(to)</label>
			              <input type="text" className="form-control" placeholder="Enter Trip Lat(to)" ref="latTo"/>
			            </div>
			            <div className="form-group col-sm-3">
			              <label>Lng(from)</label>
			              <input type="text" className="form-control" placeholder="Enter Trip Lng(from)" ref="lngFrom"/>
			            </div>
			            <div className="form-group col-sm-3">
			              <label>Lng(to)</label>
			              <input type="text" className="form-control" placeholder="Enter Trip Lng(to)" ref="lngTo"/>
			            </div>
			            <div className="form-group col-sm-9">
			              <label>Tags</label>
			              <input type="text" className="form-control" placeholder="Enter Trip Tags" ref="tags" />
			            </div>
			            <div className="form-group col-sm-3">
			            <label>&nbsp;</label>
			              <select className="form-control" onChange={this.chooseAndDelTags.bind(this)} ref="tagsSelection">
			                 <option>---select---</option>
                             { this.props.tags.map( (tag,i) => 
                                <option key={i} className="m-l-md">{tag}</option>
			              	 )}
			              </select>
			            </div>
			            <div className="form-group col-sm-6">
			              <label>Status</label>
			              <input type="text" className="form-control" placeholder="Enter Trip Status" ref="status"/>
			            </div>
			            <div className="form-group col-sm-6">
			              <label>Date</label>
			              <input type="date" className="form-control" placeholder="Enter Trip Date" ref="date"/>
			            </div>
			            <div className="form-group col-sm-12">
				            <button type="button" className="btn btn-sm btn-primary pull-right" onClick={this.handleSearch.bind(this)}>Submit</button>
			            </div>
			          </form>
			        </div>
			      </div>
                { chooseItems.length > 0 &&
                    <ul>
                        {chooseItems.map((item, i) =>
                            <TripItem item={item}  key={i} />
                        )}
                    </ul>
                 }
			    </div>
        )
    }
}
