import {StyleSheet} from 'react-native';
import {colors} from 'react-native-elements';

export default StyleSheet.create({
  postContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopColor: '#000',
    borderTopWidth: 1,
  },
  flatButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    width: 100,
  },
  buttonContainer: {
    backgroundColor: '#DDD',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#757575',
  },
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopColor: '#000',
    borderTopWidth: 1,
  },
  multilineText: {color: colors.grey2, fontSize: 18, padding: 30},
});
