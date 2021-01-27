import React from 'react';
import {View, FlatList, SafeAreaView, StyleSheet, Image} from 'react-native';
import {Text, Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {Rating} from 'react-native-ratings';

const BookList = ({data}) => {
  const renderView = ({item, index}) => {
    return (
      <View key={index} style={styles.newestContainer}>
        <View style={styles.newestImage}>
          <Image source={item.img} style={{height: '100%', width: '100%'}} />
        </View>
        <View style={styles.newestText}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
            {item.title}
          </Text>
          <Text style={{color: 'grey'}}>{item.author}</Text>
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
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        renderItem={renderView}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        style={{marginTop: 10, marginBottom: 10}}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default BookList;
const styles = StyleSheet.create({
  newestContainer: {
    height: 150,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  newestImage: {
    width: '30%',
    height: 140,
    marginRight: '7%',
    backgroundColor: Colors.red500,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  newestText: {
    width: '55%',
  },
});
