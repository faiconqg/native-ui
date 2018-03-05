import React from 'react'
import PropTypes from 'prop-types'
// import {Container, Content} from 'native-base'

export default class Page extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  fromNav = name => this.props.navigation.state.params[name]
  
  go = (target, data) => this.props.navigation.navigate(target, data)
  
  back = () => this.props.navigation.goBack()
}
