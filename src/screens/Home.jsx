import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Image,
  View,
  StatusBar,
} from 'react-native';
import {NavBar, ScrollContainer, BookCard, BookList} from '../components';
import user from '../assets/img/user.png';
import Icon from 'react-native-vector-icons/Feather';
import {Text} from 'react-native-paper';
import axios from 'axios';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Context} from '../store/context';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [state] = useContext(Context);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    setLoading(true);
    axios
      .get('https://api.itbook.store/1.0/new')
      .then((res) => {
        setLoading(false);
        setBooks(res.data.books);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  };

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={styles.navBar}>
        <NavBar
          bgColor="white"
          left={<Image source={user} style={styles.avatar} />}
          center={
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
              }}>{`Hi ${state.user}!`}</Text>
          }
          right={<Icon name="search" color="black" size={30} />}
        />
      </View>
      <ScrollContainer>
        <View style={styles.bookContainer}>
          <Text style={styles.title}>Popular Books </Text>
          {loading ? (
            <SkeletonPlaceholder>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.cardPlaceholderContainer}>
                  <View style={styles.cardPlaceholderItem1} />
                  <View style={styles.cardPlaceholderItem2} />
                </View>
                <View style={styles.cardPlaceholderContainer}>
                  <View style={styles.cardPlaceholderItem1} />
                  <View style={styles.cardPlaceholderItem2} />
                </View>
              </View>
            </SkeletonPlaceholder>
          ) : (
            <BookCard data={books} />
          )}
        </View>
        <View style={{...styles.bookContainer, height: '100%'}}>
          <Text style={styles.title}>Newest </Text>
          {loading ? (
            <SkeletonPlaceholder>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.listPlaceholderContainer}>
                  <View style={styles.listPlaceholderItem1} />
                  <View>
                    <View style={styles.listPlaceholderItem2} />
                    <View style={styles.listPlaceholderItem2} />
                  </View>
                </View>
              </View>
            </SkeletonPlaceholder>
          ) : (
            <BookList data={books} />
          )}
        </View>
      </ScrollContainer>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  avatar: {width: 60, height: 60, borderRadius: 15},
  title: {
    fontSize: 40,
    fontWeight: '600',
  },
  bookContainer: {
    height: 370,
    paddingBottom: 20,
  },
  navBar: {
    padding: 20,
    backgroundColor: '#FDFDFD',
  },
  cardPlaceholderContainer: {
    height: '90%',
    width: '50%',
    flexDirection: 'column',
  },
  cardPlaceholderItem1: {
    width: 170,
    height: 200,
    marginBottom: 10,
  },
  cardPlaceholderItem2: {
    width: 170,
    height: 20,
  },
  listPlaceholderContainer: {
    height: 130,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listPlaceholderItem1: {
    width: 130,
    height: 200,
  },
  listPlaceholderItem2: {
    width: 250,
    height: 20,
    marginVertical: 10,
  },
});
