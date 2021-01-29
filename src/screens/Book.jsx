import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {ScrollContainer, NavBar} from '../components';
import {Text, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import message from '../assets/img/message.png';
import fileText from '../assets/img/file-text.png';
import {Rating} from 'react-native-ratings';
import axios from 'axios';

const Book = ({route, navigation}) => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const {isbn} = route.params;

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = () => {
    setLoading(true);
    axios
      .get(`https://api.itbook.store/1.0/books/${isbn}`)
      .then((res) => {
        setLoading(false);
        setBook(res.data);
        setRating(parseInt(res.data.rating));
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  };

  return (
    <>
      <StatusBar
        backgroundColor="#FDFDFD"
        barStyle="dark-content"
        translucent={false}
      />

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
        {loading ? (
          <ActivityIndicator color="black" size="large" />
        ) : (
          <>
            <View style={styles.product}>
              <Image
                source={{uri: book.image}}
                style={{width: 200, height: 300}}
              />
              <View style={styles.name}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {book.title}
                </Text>
                <Text
                  style={{textAlign: 'center', color: 'grey', fontSize: 18}}>
                  {book.author}
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
                  <Text style={{...styles.ratingText, color: 'grey'}}>
                    /5.0
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{fontSize: 16, color: 'grey'}}>{book.desc}</Text>
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
                {`Buy Now for ${book.price}`}
              </Button>
            </View>
          </>
        )}
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
    height: 450,
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
    marginTop: -20,
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
