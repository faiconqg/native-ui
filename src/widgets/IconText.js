import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class IconText extends React.Component {
  static propTypes = {
    style: PropTypes.any,
    text: PropTypes.string,
    icon: PropTypes.string,
  }

  render() {
    return (
      <View
        style={Object.assign({
          flexDirection: 'row',
          alignItems: 'center',
        }, this.props.style)}
      >
        <Ionicons
          name={this.props.icon}
          size={22}
          color="#FFFFFF"
          style={{ marginRight: 10 }}
        />
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 14,
            fontFamily: 'Roboto'
          }}
        >
          {this.props.text}
        </Text>
      </View>
    )
  }
}
