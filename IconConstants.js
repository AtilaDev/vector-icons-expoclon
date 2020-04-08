import _ from 'lodash';

export const IconFamilies = {
  AntDesign: require('./glyphmaps/AntDesign.json'),
  Entypo: require('./glyphmaps/Entypo.json'),
  EvilIcons: require('./glyphmaps/EvilIcons.json'),
  Feather: require('./glyphmaps/Feather.json'),
  FontAwesome: require('./glyphmaps/FontAwesome.json'),
  Foundation: require('./glyphmaps/Foundation.json'),
  Ionicons: require('./glyphmaps/Ionicons.json'),
  MaterialIcons: require('./glyphmaps/MaterialIcons.json'),
  MaterialCommunityIcons: require('./glyphmaps/MaterialCommunityIcons.json'),
  SimpleLineIcons: require('./glyphmaps/SimpleLineIcons.json'),
  Octicons: require('./glyphmaps/Octicons.json'),
  Zocial: require('./glyphmaps/Zocial.json'),
};

export const IconsArray = _.reduce(
  Object.keys(IconFamilies),
  (arr, family) => {
    let icons = IconFamilies[family];
    Object.keys(icons).forEach((iconName) => {
      arr.push({
        name: iconName,
        value: icons[iconName],
        family,
      });
    });
    return arr;
  },
  []
);
