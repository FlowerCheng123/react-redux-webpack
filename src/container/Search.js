/**
 * Created by Flower on 07/03/2016.
 */

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Search from '../component/Search'
import * as SearchAction from '../actions/SearchAction'


function mapStateToProps(state) {
    const { SearchReducer } = state;
    console.log('SearchReducer', state)
    return {
    	tags: SearchReducer.tags,
    	tripObj: SearchReducer.tripObj,
    	items: SearchReducer.items,
    	chooseItems: SearchReducer.chooseItems
    }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return bindActionCreators(SearchAction, dispatch)
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Search)