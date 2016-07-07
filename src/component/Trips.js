/**
 * Created by Flower on 07/02/2016.
 */
import TripItem from './TripItem'
import React, { Component, PropTypes } from 'react'
// import MapChart from './MapChart'

// import { Router, Route, Link, browserHistory } from 'react-router'


export default class Trips extends Component {
    componentWillMount() {
        console.log('componentWillMount Home');
        this.getTrips();
    }
    componentDidMount() {
        console.log('componentDidMount Home');
        let _self = this;
        window.onscroll = function(){
            console.log(_self.isReachBottom());
        　　if(_self.isReachBottom()){
        　　　　_self.getTrips();
        　　}
        }

    }
    
    componentWillReceiveProps(nextProps){
    	console.log('componentWillReceiveProps Home', nextProps);
 
    }
    componentDidUpdate(prevProps){
    	console.log('componentDidUpdate Home');

    }
    getTrips(page){
    	console.log('goFetch Home', this.props);
        let {getTrips,currentPage} = this.props;
        getTrips(currentPage+1);
    }

    isReachBottom(){
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    　　if(document.body){
    　　　　bodyScrollTop = document.body.scrollTop;
    　　}
    　　if(document.documentElement){
    　　　　documentScrollTop = document.documentElement.scrollTop;
    　　}
    　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;

       var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    　　if(document.body){
    　　　　bodyScrollHeight = document.body.scrollHeight;
    　　}
    　　if(document.documentElement){
    　　　　documentScrollHeight = document.documentElement.scrollHeight;
    　　}
    　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;

        var windowHeight = 0;
    　　if(document.compatMode == "CSS1Compat"){
    　　　　windowHeight = document.documentElement.clientHeight;
    　　}else{
    　　　　windowHeight = document.body.clientHeight;
    　　}

        if( scrollTop +  windowHeight ==  scrollHeight){
            return true;
        }else{
            return false;
        }

    }
    render () {
        const {items} = this.props
        return (
            <div className="container-fluid">
                { items.length > 0 &&
                        <ul>
                            {items.map((item, i) =>
                                <TripItem item={item}  key={i} />
                            )}
                        </ul>
                }
            </div>
        )
    }
}
