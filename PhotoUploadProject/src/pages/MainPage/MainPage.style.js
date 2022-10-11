import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
  },
  header: {
    flex: 0.5,
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'space-around',
    padding: 5,
    backgroundColor: 'white',
  },
  header_text: {fontSize: 20, fontWeight: 'bold', color: 'black'},

  footer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  footer_button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
  footer_text: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  datasection: {
    flex: 8,
    backgroundColor: 'white',
  },
  data_text: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    margin: 5,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  icon_pen: {
    color: 'black',
    fontSize: 25,
  },
  data_list: {flex: 1},
});
