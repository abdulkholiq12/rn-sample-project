import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ListView
} from 'react-native';
import logo from '../../images/logo.png';
import FoodBanner from '../../images/food-banner.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';


class OrderScreen extends Component {

  state = {
    data: []
  };

  componentDidMount() {
    this.getDataApi();
  }

  getDataApi = () => {
    console.log('masuk');
    // const urlFetch = fetch('	http://dummy.restapiexample.com/api/v1/employee')
    const urlFetch = fetch('https://jsonplaceholder.typicode.com/todos/1')
      urlFetch.then( res => {
        console.log('resss', res);
          if(res.status === 200)
            return res.json()   
      }).then( resJson => {
        this.handleData(resJson);
        console.log('resjson', resJson);
      })
  }

  handleData = (dataResponse) => {
    console.log('dataressss', dataResponse)
    const newData = {
      id: dataResponse.id,
      userId: dataResponse.userId,
      title: dataResponse.title
    }
    this.setState({ data: newData });
    console.log('dataNew', data)
  }
  renderHeader = () => {
    return (
      <View style={styles.header}>
        <Image source={logo} style={styles.headerLogo} />
        <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2f65bd', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}></View>
      </View>
    );
  };

  renderBody = () => {
    const { data } = this.state;
    console.log('dataaaaaa', data)
    return(
      <View>
        <View style={{ padding: 16 }}>
          <View style={{ position: 'relative' }}>
            <Image source={FoodBanner} style={{ height: 170, width: '100%', borderRadius: 6 }}/>
            <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, borderRadius: 6, backgroundColor: 'black', opacity: 0.15 }} />
            <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16}}>
              <Image source={logo} style={{ width: undefined , height: undefined, resizeMode: 'contain', flex: 1 }} />
            </View>
            <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16 }}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white'}}>{data.title} </Text>
                <Text style={{ fontSize: 12, fontWeight: '400', color: 'white'}}>Quick, before they run out!</Text>
              </View>
              <View style={{ flex: 1, paddingLeft: 12 }}>
                <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 5}}>
                  <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>GET VOUCHER</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      );
    };

  renderBottomNavigation = () => {
    return (
      <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Icon name='home' size={20} color='white'style={{ color: 'black'}}/>
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4, color: 'black'}}>Home</Text>
          </TouchableOpacity>
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
    return(
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

export default OrderScreen;
