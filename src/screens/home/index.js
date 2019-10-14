import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import logo from '../../images/logo.png';
import FoodBanner from '../../images/food-banner.jpg';
import ActionBarImage from '../icon/ActionBarImage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "HOME",
      headerRight: (
        <TouchableOpacity onPress={() => alert("Right Menu Clicked")}>
          <Icon name='bell' size={20} color='white'style={styles.iconButton}/>
        </TouchableOpacity>
      ),
      headerLeft: null
      // headerLeft: "none"
      // (
      //   <TouchableOpacity onPress={() => navigation.navigate("FirstPage")}>
      //     <Icon name='user-circle' size={25} color='white'style={styles.iconButton}/>
      //   </TouchableOpacity>
      // )
    };
  };

  renderHeader = () => {
    return (
      <View style={styles.header}>
        <Image source={logo} style={styles.headerLogo} />
        <Text style={styles.title}>Create your account, it's free and only takes a minute</Text>
        <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2f65bd', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}></View>
      </View>
    );
  };

  renderBody = () => {
    return(
      <View>
        <View style={{ paddingTop: 16, paddingHorizontal: 16,marginHorizontal: 16, borderRadius: 4, backgroundColor: 'white', marginBottom: 16}}>
          <View style={{ position: 'relative'}}>
            <Image source={FoodBanner} style={{ height: 170, width: '100%', borderRadius: 6 }}/>
            <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, borderRadius: 6, backgroundColor: 'black', opacity: 0.2 }} />
            <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16}}>
              <Image source={logo} style={{ width: undefined , height: undefined, resizeMode: 'contain', flex: 1 }} />
            </View>
          </View>
          <View style={{ paddingTop: 16, paddingBottom: 20}}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>LIFE IS TASTY</Text>
            <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#7a7a7a'}}>Bingung Makan Apa dan Dimana ? Cari Aja di Qraved!</Text>
            <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 5}}>
              <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Pesan Sekarang</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingTop: 16, paddingHorizontal: 16,marginHorizontal: 16, borderRadius: 4, backgroundColor: 'white', marginBottom: 16}}>
          <View style={{ position: 'relative'}}>
            <Image source={FoodBanner} style={{ height: 170, width: '100%', borderRadius: 6 }}/>
            <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, borderRadius: 6, backgroundColor: 'black', opacity: 0.2 }} />
            <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16}}>
              <Image source={logo} style={{ width: undefined , height: undefined, resizeMode: 'contain', flex: 1 }} />
            </View>
          </View>
          <View style={{ paddingTop: 16, paddingBottom: 20}}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>LIFE IS TASTY</Text>
            <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#7a7a7a'}}>Bingung Makan Apa dan Dimana ? Cari Aja di Qraved!</Text>
            <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 5}}>
              <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Pesan Sekarang</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingTop: 16, paddingHorizontal: 16,marginHorizontal: 16, borderRadius: 4, backgroundColor: 'white', marginBottom: 16}}>
          <View style={{ position: 'relative'}}>
            <Image source={FoodBanner} style={{ height: 170, width: '100%', borderRadius: 6 }}/>
            <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, borderRadius: 6, backgroundColor: 'black', opacity: 0.2 }} />
            <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16}}>
              <Image source={logo} style={{ width: undefined , height: undefined, resizeMode: 'contain', flex: 1 }} />
            </View>
          </View>
          <View style={{ paddingTop: 16, paddingBottom: 20}}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>LIFE IS TASTY</Text>
            <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#7a7a7a'}}>Bingung Makan Apa dan Dimana ? Cari Aja di Qraved!</Text>
            <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 5}}>
              <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Pesan Sekarang</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  renderBottomNavigation = () => {
    return (
      <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Icon name='home' size={20} color='white'style={{ color: 'black'}}/>
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4, color: 'black'}}>Home</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderScreen')}>
            <Icon name='book' size={20} color='white'style={{ color: 'black'}}/>
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4}}>Orders</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Icon name='info-circle' size={20} color='white'style={{ color: 'black'}}/>
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4}}>Help</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Icon name='inbox' size={20} color='white'style={{ color: 'black'}}/>
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4}}>Inbox</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Icon name='user-circle' size={20} color='white'style={{ color: 'black'}}/>
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4}}>Account</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        {this.renderHeader()}
        {this.renderBody()}
        </ScrollView>
        {this.renderBottomNavigation()}
      </View>
    );
  }
}

export default HomeScreen;

