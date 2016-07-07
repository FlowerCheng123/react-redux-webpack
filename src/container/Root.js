/**
 * Created by Flower on 07/02/2016.
 */
import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from './App'
import Trips from './Trips'
import Search from './Search'
import Manager from './Manager'
import NotMatch from './NotMatch'

import {Provider} from "react-redux"
import configureStore from "../store/configureStore"
// import Http from "../services/http"
// import chai from 'chai'
// var q = Http.send( 'trips', {body:{}});
// q.then(function(result){
//     console.log('mmmmmmmm', result);
// })
// console.log("Http", Http( '/abc'));


const store =configureStore();
// const expect = chai.expect;
// var a = {};
// expect(a).to.be.an('object');
// console.log('aaaa',expect(a).to.be.an('object'));


export default class Root extends Component {
    render () {
        return (
            <Provider store={store} key="provider">
                <Router history={this.props.history}>
                    <Route path="/" component={App}>
                          <IndexRoute component={Trips} />
                          <Route path="trips" component={Trips}/>
                          <Route path="search" component={Search}>
                          </Route>
                          <Route path="manager" component={Manager}/>
                          <Route path="*" component={NotMatch}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}
Root.propTypes = {
    history: PropTypes.object.isRequired
}