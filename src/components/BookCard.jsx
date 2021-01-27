import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {Text, Colors} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const ScrollCard = ({data, renderView}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderView}
        horizontal
        initialScrollIndex={2}
        keyExtractor={(item) => item.id.toString()}
        style={{marginTop: 20, marginBottom: 20}}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const BookCard = ({data}) => {
  const navigation = useNavigation();

  const _renderItem = ({item, index}) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('book')}>
        <View key={index} style={styles.movieListCard}>
          <View style={{height: '78%'}}>
            <Image source={item.img} style={{width: '100%', height: '100%'}} />
          </View>
          <Text style={{fontSize: 25, textTransform: 'capitalize'}}>
            {item.title}
          </Text>
          <Text
            style={{color: 'grey', fontSize: 18, textTransform: 'capitalize'}}>
            {item.author}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return <ScrollCard data={data} renderView={_renderItem} />;
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
