import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {Rating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';

const BookList = ({data}) => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data.map((item, key) => {
        return (
          <TouchableWithoutFeedback
            key={key}
            onPress={() =>
              navigation.navigate('book', {
                isbn: item.isbn13,
              })
            }>
            <View style={styles.newestContainer}>
              <View style={styles.newestImage}>
                <Image
                  source={{uri: item.image}}
                  // source={item.image}
                  style={{height: 150, width: 120}}
                  accessibilityLabel="images"
                />
              </View>
              <View style={styles.newestText}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
                  {item.title}
                </Text>
                {/* <Text style={{color: 'grey'}}>{item.author}</Text> */}
                <View
                  style={{
                    marginTop: '10%',
                    width: '50%',
                  }}>
                  <Rating
                    type="star"
                    ratingCount={5}
                    imageSize={20}
                    style={{alignSelf: 'flex-start'}}
                  />
                </View>
              </View>
              <View>
                <Icon name="bookmark" size={20} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </ScrollView>
  );
};

export default BookList;
const styles = StyleSheet.create({
  newestContainer: {
    height: 150,
    width: '100%',
    flexDirection: 'row',
    // marginBottom:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  newestImage: {
    width: '30%',
    height: 150,
    marginRight: '2%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  newestText: {
    width: '55%',
    marginRight: 10,
    // borderColor: 'red',
    // borderWidth: 1,
  },
});
