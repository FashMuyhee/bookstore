import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableWithoutFeedback} from 'react-native';
import {ScrollContainer, NavBar} from '../components';
import {Text, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import book_2 from '../assets/img/book_2.png';
import message from '../assets/img/message.png';
import fileText from '../assets/img/file-text.png';
import {Rating} from 'react-native-ratings';

const Book = ({navigation}) => {
  const [rating, setRating] = useState(2.3);

  return (
    <>
      <View style={styles.navBar}>
        <NavBar
          bgColor="white"
          left={
            <Icon
              name="chevron-left"
              size={30}
              onPress={() => navigation.goBack()}
            />
          }
          right={
            <View
              style={{
                flexDirection: 'row',
                width: 80,
                justifyContent: 'space-between',
              }}>
              <Icon name="bookmark" color="black" size={30} />
              <Icon name="more-vertical" color="black" size={30} />
            </View>
          }
        />
      </View>
      <ScrollContainer>
        <View style={styles.product}>
          <Image source={book_2} style={{width: 230, height: 330}} />
          <View style={styles.name}>
            <Text
              style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>
              Book Name
            </Text>
            <Text style={{textAlign: 'center', color: 'grey', fontSize: 18}}>
              Fajuyi Bose
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={20}
              style={{
                flexDirection: 'row-reverse',
                alignItems: 'flex-start',
              }}
              ratingTextColor="black"
              startingValue={rating}
              isDisabled
              fractions={2}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}>
              <Text style={styles.ratingText}>{rating}</Text>
              <Text style={{...styles.ratingText, color: 'grey'}}>/5.0</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 19, color: 'grey'}}>
            A spectacular visual journey through 40 years of haute couture from
            one of the best-known and most trend-setting brands in fashion.
          </Text>
          <View style={styles.btnGrp}>
            <TouchableWithoutFeedback>
              <View style={styles.btn}>
                <Image source={fileText} />
                <Text style={{fontSize: 20}}>Preview</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={styles.btn}>
                <Image source={message} />
                <Text style={{fontSize: 20}}>Reviews</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <Button
            mode="contained"
            style={{height: 60, marginTop: 30}}
            labelStyle={{
              fontSize: 20,
              paddingVertical: 8,
            }}
            uppercase={false}>
            Buy Now for $46.77
          </Button>
        </View>
      </ScrollContainer>
    </>
  );
};

export default Book;

const styles = StyleSheet.create({
  navBar: {
    paddingHorizontal: 20,
    backgroundColor: '#FDFDFD',
  },
  product: {
    alignItems: 'center',
    height: 480,
  },
  name: {
    marginVertical: 20,
    textAlign: 'center',
  },
  ratingText: {
    fontSize: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    width: 180,
    height: 35,
  },
  btn: {
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '48%',
    elevation: 5,
    height: 40,
    borderRadius: 8,
  },
  btnGrp: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 15,
  },
});
