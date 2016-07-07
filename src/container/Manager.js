/**
 * Created by Flower on 07/02/2016.
 */

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Manager from '../component/Manager'
import * as ManagerAction from '../actions/ManagerAction'


function mapStateToProps(state) {
    const { ManagerReducer } = state;
    return {
        items: ManagerReducer.items,
        selectedTrip: ManagerReducer.selectedTrip,
        opStatus: ManagerReducer.opStatus
    }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ManagerAction, dispatch)
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Manager)