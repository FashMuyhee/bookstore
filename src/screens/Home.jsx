import React from 'react';
import {StyleSheet, Image, View, StatusBar} from 'react-native';
import {NavBar, ScrollContainer, BookCard, BookList} from '../components';
import user from '../assets/img/user.png';
import Icon from 'react-native-vector-icons/Feather';
import {Text, Title} from 'react-native-paper';
import book_1 from '../assets/img/book_1.png';
import book_2 from '../assets/img/book_2.png';
import book_3 from '../assets/img/book_3.png';

const Home = () => {
  const [state, setstate] = React.useState([
    {title: 'Movie 1', id: 1, img: book_1, author: 'Feddrick Ben'},
    {title: 'Movie 2', id: 2, img: book_2, author: 'Elon Musk'},
    {title: 'Movie 3', id: 3, img: book_3, author: 'Ali baba'},
  ]);
  return (
    <>
          <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={styles.navBar}>
        <NavBar
          bgColor="white"
          left={<Image source={user} style={styles.avatar} />}
          center={
            <Text style={{fontSize: 20, fontWeight: '600'}}>Hi Dustin!</Text>
          }
          right={<Icon name="search" color="black" size={30} />}
        />
      </View>
      <ScrollContainer>
        <View style={styles.bookContainer}>
          <Text style={styles.title}>Popular Books </Text>
          <BookCard data={state} />
        </View>
        <View style={{...styles.bookContainer, height: '50%'}}>
          <Text style={styles.title}>Newest </Text>
          <BookList data={state} />
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
});
