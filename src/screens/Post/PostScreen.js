import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as ImagePicker from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/stack';
import styles from './Post.module';

const PostScreen = ({navigation}) => {
  const [filePath, setFilePath] = useState();
  const [fileData, setFileData] = useState();
  const [fileUri, setFileUri] = useState();

  const nav = useNavigation();

  useEffect(() => {
    nav.setOptions({
      title: '',
      headerLeft: () => (
        <HeaderBackButton
          onPress={() => {
            nav.goBack();
          }}
        />
      ),
    });
  });

  const chooseImage = () => {
    let options = {
      mediaType: 'photo',
      includeBase64: true,
    };
    ImagePicker.launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User cancelled');
      } else if (res.errorCode) {
        console.log(res.errorCode);
      } else {
        setFileData(res.base64);
        setFileUri(res.uri);
        // console.log(fileUri);
        navigation.navigate('Image', {data: res});
      }
    });
  };

  return (
    <View style={styles.postContainer}>
      <TouchableOpacity style={styles.flatButton} onPress={() => chooseImage()}>
        <Text style={{fontSize: 18}}>Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.flatButton}
        onPress={() => navigation.push('Text')}>
        <Text style={{fontSize: 18}}>Text</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostScreen;
