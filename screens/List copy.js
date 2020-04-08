import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
// import FlatList from 'react-native-web-lists';
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
    <View>
      <Searchbar
        placeholder="Search for an icon"
        onChangeText={(query) => setQuery(query)}
        value={query}
        autoCapitalize="none"
        onBlur={() => handleOnChange()}
      />

      <FlatList
        data={listIcons}
        renderItem={({ item }) => (
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
        )}
        keyExtractor={(item) => item.name + item.value.toString()}
      />
    </View>
  );
}

export default App;
