import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import Space from '../components/Space.js';
import Icon from '../components/Icon';
import FamilyImport from '../components/FamilyImport';
import UseComponent from '../components/UseComponent';

const Detail = ({ route, navigation }) => {
  const { family, name } = route.params;

  return (
    <View style={styles.container}>
      <View style={{ padding: 20 }}>
        <Space>
          <Text style={styles.title}>
            Name: <Text style={styles.textName}>{name}</Text>
          </Text>
        </Space>

        <Space>
          <Text style={styles.title}>Icon:</Text>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Icon family={family} name={name} size={40} color="#33691E" />
          </View>
        </Space>

        <Space>
          <Text style={styles.title}>Import:</Text>
          <FamilyImport family={family} />
        </Space>

        <Space>
          <Text style={styles.title}>Use:</Text>
          <UseComponent family={family} name={name} />
        </Space>

        <Button
          mode="contained"
          onPress={() => navigation.goBack()}
          style={{ borderRadius: 10 }}>
          Back
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Platform.OS === 'web' ? 30 : 10,
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#7B1FA2',
    backgroundColor: 'rgba(243, 229, 245,0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#7B1FA2',
  },
  textName: {
    color: '#33691E',
  },
});

export default Detail;
