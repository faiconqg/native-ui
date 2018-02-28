import React from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView } from 'react-native'
import BaseComponent from './../engine/BaseComponent'

export default class LinearLayout extends BaseComponent {
  static propTypes = {
    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
    center: PropTypes.bool,
    cover: PropTypes.bool,
    flex: PropTypes.number,
    gravity: PropTypes.string,
  }

  static defaultProps = {
    gravity: '',
  }

  resolveGravity = type => {
    if (this.props.center || this.props.gravity.indexOf('center') > -1) {
      return 'center'
    } else {
      if (type == 'align') {
        if (this.props.gravity.indexOf('right') > -1) {
          return 'flex-end'
        } else if (this.props.gravity.indexOf('horizontal') > -1) {
          return 'center'
        } else {
          return 'flex-start'
        }
      } else {
        if (this.props.gravity.indexOf('bottom') > -1) {
          return 'flex-end'
        } else if (this.props.gravity.indexOf('vertical') > -1) {
          return 'center'
        } else {
          return 'flex-start'
        }
      }
    }
  }

  render() {
    const style = {
      flex: this.props.flex?this.props.flex:this.props.cover?1:0,
      alignSelf: this.resolveAlign(),
      alignItems: this.resolveGravity('align'),
      justifyContent: this.resolveGravity('justify')
    }

    if (this.props.scroll) {
      return (
        <ScrollView
          contentContainerStyle={style}
        >
          {this.props.children}
        </ScrollView>
      )
    } else {
      return (
        <View
          style={style}
        >
          {this.props.children}
        </View>
      )
    }
  }
}
