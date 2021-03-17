import React, {useState, useEffect} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {Image} from 'react-native-elements';
import {StackActions} from '@react-navigation/native';
import moment from 'moment';
import styles from './Post.module';

const ImageScreen = ({route, navigation}) => {
  const [uri, setUri] = useState('');
  const [text, onChangeText] = useState(null);

  useEffect(() => {
    setUri(route.params.data.uri);
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.dispatch(StackActions.popToTop());
            navigation.navigate('Home', {
              text: text,
              image: uri,
              time: moment()
                .utcOffset('+05:30')
                .format('YYYY-MM-DD hh:mm:ss a'),
            });
          }}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View style={styles.container}>
      <TextInput
        multiline={true}
        editable
        style={styles.multilineText}
        placeholder="Write content here"
        placeholderTextColor="#DDD"
        autoFocus={true}
        value={text}
        onChangeText={onChangeText}
      />
      <Image
        source={uri ? {uri: uri} : null}
        resizeMode="cover"
        style={{width: '100%', height: 200}}
      />
    </View>
  );
};

export default ImageScreen;
