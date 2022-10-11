import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './MainPage.style';
import {useDispatch, useSelector} from 'react-redux';
import {
  ADD_SESSION,
  incrementSession,
  cleanList,
} from '../../Store/actions/Actions';
import {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const MainPage = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.session);
  const createSession = () => {
    dispatch(incrementSession());
  };
  const navigateToUpload = id => {
    navigation.navigate('UploadPage', {id});
  };
  const x = data.length;
  console.log(x);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>UPLOADED PHOTO SESSİONS</Text>
      </View>
      <View style={styles.datasection}>
        <FlatList
          style={styles.data_list}
          keyExtractor={item => item.id}
          data={data}
          renderItem={({item}) => (
            <Text style={styles.data_text}>
              {item.name}
              <TouchableOpacity onPress={() => navigateToUpload(item.id)}>
                <Icon name="pen" style={styles.icon_pen} />
              </TouchableOpacity>
            </Text>
          )}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footer_button} onPress={createSession}>
          <Text style={styles.footer_text}>
            <Icon name="image-plus" style={styles.icon_pen} />
            Create a Session
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainPage;
