import React, { Component } from 'react';
 
import { View, Image } from 'react-native';
import imagelogo from '../../images/logo.png';
 
export default class ActionImageLogo extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={imagelogo}
        />
      </View>
    );
  }
}