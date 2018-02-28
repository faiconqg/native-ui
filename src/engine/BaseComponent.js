import React from 'react'
import PropTypes from 'prop-types'

export default class BaseComponent extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    block: PropTypes.bool,
    center: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
    margin: PropTypes.number,
    form: PropTypes.bool
  }

  resolveAlign = () => {
    if (this.props.block) {
      return 'stretch'
    } else if (this.props.center) {
      return 'center'
    } else if (this.props.left) {
      return 'flex-start'
    } else if (this.props.right) {
      return 'flex-end'
    } else {
      return 'auto'
    }
  }

  resolveMargin = () => {
    if (this.props.form) {
      return 15
    } else {
      return this.props.margin
    }
  }
}
