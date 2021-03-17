import React, {useState, useEffect} from 'react';
import {Text, TextInput, View} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import moment from 'moment';
import styles from './Post.module';

const TextScreen = props => {
  const [text, onChangeText] = useState(null);
  const nav = useNavigation();

  console.log(moment().format('YYYY-MM-DD hh:mm:ss a'));

  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            nav.dispatch(StackActions.popToTop());
            nav.navigate('Home', {
              text: text,
              image: '',
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
    </View>
  );
};

export default TextScreen;
