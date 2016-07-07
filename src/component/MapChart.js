/**
 * Created by Flower on 07/02/2016.
 * For test d3 act
 */
import React, { Component, PropTypes } from 'react'
import Chart from "d3act"


export default class MapChart extends Component {

    componentDidMount() {
		this.state = {
            data: {
                children: [
                    { name: "Alaa", value: 1 },
                    { name: "Zaid", value: 1 },
                    { name: "Kareem", value: 2 },
                    { name: "Mahmoud", value: 1 },
                    { name: "Tariq", value: 1 },
                    { name: "Shareef", value: 1 },
                    { name: "Tom", value: 41 },
                    { name: "Forest", value: 2 },
                    { name: "John", value: 84 },
                    { name: "Alex", value: 11 },
                    { name: "Donald", value: 7 },
                    { name: "Mark", value: 29 },
                    { name: "Charles", value: 20 },
                    { name: "Quincy", value: 5 },
                    { name: "Alvan", value: 1 },
                    { name: "Don", value: 32 },
                    { name: "Hassan", value: 2 },
                    { name: "Jordan", value: 8 },
                    { name: "Michael", value: 32 },
                    { name: "Steven", value: 5 },
                    { name: "Rafael", value: 2 },
                    { name: "Rick", value: 12 },
                ]
            }
        }
    }
    render () {
    	console.log( 'this.state', this.state );
        return (
        	<Chart type={"bubble"}  diameter={500}  showTooltips={true}  data={this.state.data} />
        )
    }
}