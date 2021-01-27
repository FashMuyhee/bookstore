import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  SafeAreaView,
  FlatList,
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
        style={{marginTop: 10, marginBottom: 10}}
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
          <Text>{item.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return <ScrollCard data={data} renderView={_renderItem} />;
};

export default BookCard;

const styles = StyleSheet.create({
  progressBarFull: {
    backgroundColor: Colors.lightGreenA400,
    height: 4,
  },
  progressBarCurrent: {
    backgroundColor: Colors.redA100,
    height: 4,
    width: '40%',
    position: 'absolute',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  movieImage: {
    backgroundColor: Colors.white,
    height: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  movieListCard: {
    backgroundColor: Colors.blueA400,
    height: '20%',
    borderRadius: 10,
    marginRight: 10,
    width: 130,
  },
});
