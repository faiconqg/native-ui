import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class IconButton extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    onPress: PropTypes.func,
    iconClass: PropTypes.any,
  }
  
  static defaultProps = {
    iconClass: Ionicons,
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20
        }}
      >
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 16,
            fontFamily: 'Roboto'
          }}
        >
          {this.props.label}
        </Text>
        {this.props.icon && (
          <this.props.iconClass
            name={this.props.icon}
            size={22}
            color="#FFFFFF"
            style={{ marginLeft: 10, marginBottom: -3 }}
          />
        )}
      </TouchableOpacity>
    )
  }
}
