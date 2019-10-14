import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  header: {
    marginTop: 30,
    alignItems: 'center'
  },
  headerLogo: {
    width: 105,
    height: 53
  },
  title: {
    marginTop: 13,
    color: 'white',
    fontSize: 14
  },
})

export { styles };