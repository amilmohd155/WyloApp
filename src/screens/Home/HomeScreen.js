import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {Card, colors} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import moment from 'moment';

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0,
    paddingBottom: 10,
    backgroundColor: '#DDD',
  },
});

const HomeScreen = ({route}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (route.params) {
      setItems([
        {
          text: route.params.text,
          image: route.params.image,
          time: route.params.time,
        },
        ...items,
      ]);
    }
    console.log(items.time);
  }, [route]);

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: colors.white}}>
      <View style={{height: 50, backgroundColor: '#FFF'}} />
      <View style={{flex: 1}}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <Card
              key={index}
              containerStyle={styles.cardContainer}
              wrapperStyle={{backgroundColor: '#FFF'}}>
              {item.image ? (
                <Card.Image
                  resizeMode="cover"
                  source={item.image ? {uri: item.image} : null}
                  style={{height: 250}}
                  PlaceholderContent={<ActivityIndicator />}
                />
              ) : null}
              <View style={{padding: 25}}>
                {item.text ? (
                  <Text style={{lineHeight: 20}}>{item.text}</Text>
                ) : null}
                <Text style={{color: '#DDD', lineHeight: 30}}>
                  {moment(item.time, 'YYYY-MM-DD hh:mm:ss a').fromNow()}
                </Text>
              </View>
            </Card>
          ))
        ) : (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 18}}>No Posts</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
