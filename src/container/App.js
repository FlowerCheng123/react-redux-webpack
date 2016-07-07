/**
 * Created by Flower on 07/02/2016.
 */
import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import Header from '../component/Header'
// import bootstrap from 'bootstrap'


export default class App extends Component {
    render () {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}
