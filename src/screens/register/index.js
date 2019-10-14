import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import logo from '../../images/logo.png';
import { styles } from './styles';

class RegisterScreen extends Component {
  renderHeader = () => {
    return (
      <View style={styles.header}>
        <Image source={logo} style={styles.headerLogo} />
        <Text style={styles.title}>Create your account, it's free and only takes a minute</Text>
      </View>
    );
  };
  onBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  } 
  renderBody = () => {
    return (
      <View style={styles.body}>
        <TextInput
          placeholder="Name"
          style={styles.boxInput}
        />
        <View style={styles.spacer} />
        <TextInput
          placeholder="Email"
          style={styles.boxInput}
        />
        <View style={styles.spacer} />
        <TextInput
          placeholder="Password"
          style={styles.boxInput}
        />
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Lupa password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.onBack}>
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderBody()}
      </View>
    );
  }
}

export default RegisterScreen;