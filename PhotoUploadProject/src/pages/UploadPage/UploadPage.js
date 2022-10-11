import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import styles from './UploadPage.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchCamera} from 'react-native-image-picker';
import {savePhoto, deletePhoto} from '../../Store/actions/Actions';
import {useDispatch, useSelector} from 'react-redux';

const UploadPage = props => {
  const dispatch = useDispatch();
  const id = props.route.params.id;
  console.log(id);
  const data = useSelector(state => state.session);

  const [cameraPhoto, setCameraPhoto] = useState();
  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };
  const OpenCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera();
      setCameraPhoto(result.assets[0].uri);
    }
  };
  const sendReducer = () => {
    dispatch(savePhoto(id, cameraPhoto));
  };
  const deletePic = () => {
    dispatch(deletePhoto(id));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Uploaded Documents</Text>
      </View>
      <View style={styles.datasection}>
        <TouchableOpacity style={styles.data_button} onPress={deletePic}>
          <Icon name="close-box" style={styles.icon_close} />
        </TouchableOpacity>
        <Image style={styles.imageStyle} source={{uri: data[id].image}} />
      </View>
      <View style={styles.pickPhoto}>
        <TouchableOpacity style={styles.pickPhoto_button} onPress={OpenCamera}>
          <Text style={styles.footer_text}>
            <Icon name="image-plus" style={styles.icon} />
            Add Photo
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footer_button} onPress={sendReducer}>
          <Text style={styles.footer_text}>
            <Icon name="check" style={styles.icon} />
            Complate Session
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadPage;
