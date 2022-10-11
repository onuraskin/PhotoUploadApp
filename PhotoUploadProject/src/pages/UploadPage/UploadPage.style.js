import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
  },
  header: {
    flex: 0.5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'space-around',
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
    flex: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 15,
  },
  icon: {
    color: 'black',
    fontSize: 25,
  },
  icon_close: {color: 'black', fontSize: 35},
  data_button: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  pickPhoto: {flex: 2, backgroundColor: 'white'},
  pickPhoto_button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    borderWidth: 1,
    marginHorizontal: 40,
  },
  imageStyle: {
    height: 300,
    width: 300,
  },
});
