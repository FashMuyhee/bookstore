import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
const NavBar = ({left, right, center, bgColor, customStyles}) => {
  return (
    <View
      style={{
        ...styles.navbar,
        ...customStyles,
      }}>
      <View
        style={{...styles.navbarItem, alignItems: 'flex-start', width: '10%'}}>
        {left ? left : null}
      </View>
      <View style={{...styles.navbarItem, alignItems: 'flex-start'}}>
        {center ? center : null}
      </View>
      <View style={{...styles.navbarItem, alignItems: 'flex-end'}}>
        {right ? right : null}
      </View>
    </View>
  );
};

NavBar.prototype = {
  left: PropTypes.element,
  center: PropTypes.element,
  right: PropTypes.element,
};

export default NavBar;

const styles = StyleSheet.create({
  navbar: {
    height: 56,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    backgroundColor: '#FDFDFD',
  },
  navbarItem: {
    width: '33.33%',
  },
});
