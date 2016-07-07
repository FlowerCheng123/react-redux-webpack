/**
 * Created by Flower on 07/03/2016.
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Trips from '../component/Trips'
import * as TripsActions from '../actions/TripsAction'


function mapStateToProps(state) {
    const { getTripsReducer } = state;
    return {
        items: getTripsReducer.items,
        currentPage: getTripsReducer.currentPage,
        // count: state.count
    }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return bindActionCreators(TripsActions, dispatch)
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Trips)

