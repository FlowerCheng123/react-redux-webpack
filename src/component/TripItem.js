/**
 * Created by Flower on 07/03/2016.
 */
import React, { Component, PropTypes } from 'react'
import Util from '../services/util' ;


export default class TripItem extends Component {

    render () {
    	const { item } = this.props;
        return (
        	<div className="col-xs-8 col-xs-offset-2 panel panel-default ">
			   <div className="trip-item panel-body">
			      <a href="javascript:void(0)" className="thumbnail trips-img pull-left">
			         <img src={ item.images[0] } className="img-rounded"
			         alt="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1467516206&di=61255c5381005938150cbf9d0f2b39c4&src=http://pic2.16pic.com/00/20/02/16pic_2002642_b.jpg" />
			      </a>
			      <h3>{item.title} &nbsp;&nbsp;
			                {item.tags.map((tag, i) =>
                                <span className="tagSpan" key={i}>{tag}</span>
                            )}</h3>
			      <p>{item.address}&nbsp;&nbsp;&nbsp;( {item.location.lat}°, {item.location.lng}°)</p>
			      <p>{item.description}</p>
			      <p>{Util.dateTransfer( item.creationdate )}</p>
			   </div>
			</div>
        )
    }
}