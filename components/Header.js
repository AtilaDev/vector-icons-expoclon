import React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = () => {
  return (
    <View style={styles.header}>
      <Appbar.Header>
        <Appbar.Content title="@expo/vector-icons directory" />
      </Appbar.Header>
    </View>
  );
};

const styles = {
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  }
};

export default Header;
