import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, Button, Subheading, Caption } from 'react-native-paper';
import Space from '../components/Space.js';

const Detail = ({ route, navigation }) => {
  const { family, name } = route.params;

  return (
    <View style={styles.container}>
      <Title>Name: {name}</Title>
      <Space>
        <Subheading>Import:</Subheading>
        <Caption>{`import { ${family} } from '@expo/vector-icons';`}</Caption>
      </Space>
      <Space>
        <Subheading>Use:</Subheading>
        <Caption>{`<${family} name="${name}" size={32} color="green" />`}</Caption>
      </Space>
      <Space>
        <Button mode="contained" onPress={() => navigation.goBack()}>
          Back
        </Button>
      </Space>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 100,
  },
});

export default Detail;
