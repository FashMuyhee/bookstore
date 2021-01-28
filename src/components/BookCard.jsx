import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet, Image} from 'react-native';
import {Text, Colors} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

const BookCard = ({data}) => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{display: 'flex', flexDirection: 'row'}}
      horizontal
      bounces
      showsHorizontalScrollIndicator={false}>
      {data.slice(5, 15).map((item, key) => {
        return (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate('book', {
                isbn: item.isbn13,
              })
            }
            key={key}>
            <View style={styles.movieListCard}>
              <View style={{height: '78%'}}>
                <Image
                  source={{uri: item.image}}
                  // source={item.image}
                  style={{width: '100%', height: '100%'}}
                />
              </View>
              <Text style={{fontSize: 17, textTransform: 'capitalize'}}>
                {item.title}
              </Text>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 18,
                  textTransform: 'capitalize',
                }}>
                {item.author}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </ScrollView>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  movieListCard: {
    backgroundColor: Colors.white,
    height: 250,
    marginRight: 10,
    width: 150,
  },
});
