import React, { Component } from 'react';
 
import { View, Image } from 'react-native';
 
export default class ActionBarImage extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{
            uri:
              'https://www.pngfind.com/pngs/m/110-1102927_create-your-profile-user-icon-white-color-hd.png',
          }}
          style={{
            width: 35,
            height: 35,
            borderRadius: 35 / 2,
            margin: 5
          }}
        />
      </View>
    );
  }
}