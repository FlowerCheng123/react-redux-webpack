import React from 'react'
import ReactDOM from 'react-dom'
import Root from './container/Root'
import { browserHistory } from 'react-router'


ReactDOM.render((
  <Root history={browserHistory} />

), document.getElementById('root'))
