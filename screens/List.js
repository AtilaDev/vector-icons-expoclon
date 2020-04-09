import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import _ from 'lodash';
import { IconsArray } from '../IconConstants';
import ListItem from '../components/ListItem';

function App({ navigation }) {
  const [query, setQuery] = useState('');
  const [listIcons, setListIcons] = useState([]);

  const handleOnChange = () => {
    setListIcons(
      IconsArray.filter(
        (icon) =>
          icon.name.includes(query) || icon.family.toLowerCase().includes(query)
      )
    );
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search for an icon"
        onChangeText={(query) => setQuery(query)}
        value={query}
        autoCapitalize="none"
        onBlur={() => handleOnChange()}
      />

      <FlatList
        data={listIcons}
        renderItem={({ item }) => {
          return (
            <ListItem
              family={item.family}
              name={item.name}
              onPress={() =>
                navigation.push('Details', {
                  family: item.family,
                  name: item.name,
                })
              }
            />
          );
        }}
        keyExtractor={(item) => item.name + item.value.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
