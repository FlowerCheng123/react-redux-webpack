/**
 * Created by Flower on 07/02/2016.
 */
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'


export default class Header extends Component {

    componentDidMount() {

    }
    render () {
        return (
        	<div className="container-fluid trip-nav">
		      <div className="navbar-header">
		        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu">
		          <span className="icon-bar"></span>
		          <span className="icon-bar"></span>
		          <span className="icon-bar"></span>
		        </button>
		        <a href="/" className="navbar-brand"><div className="footer-image logo"></div></a>
		      </div>
		      <div className="collapse navbar-collapse" id="main-menu">
		        <ul className="nav navbar-nav ">
		          <li><Link to="/trips">trips</Link></li>
		           <li><Link to="/search">search</Link></li>
		           <li><Link to="/manager">manager</Link></li>
		        </ul>
		      </div>
		    </div>
        )
    }
}