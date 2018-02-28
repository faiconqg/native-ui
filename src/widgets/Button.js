import React from 'react'
import PropTypes from 'prop-types'
import { Text, Button as NativeButton } from 'native-base'
import { Theme } from '..'
import BaseComponent from './../engine/BaseComponent'

export default class Button extends BaseComponent {
  static propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    onPress: PropTypes.func
  }

  render() {
    return (
      <NativeButton
        style={{
          backgroundColor: this.props.color || Theme.colorAccent,
          alignSelf: this.resolveAlign(),
          margin: this.resolveMargin()
        }}
        block={this.props.block}
        onPress={this.props.onPress}
      >
        <Text>{this.props.label}</Text>
      </NativeButton>
    )
  }
}
