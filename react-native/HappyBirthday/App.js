import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/images/androidparty.jpg')}
      />
      <Text style={[styles.text, styles.topLeft]}>Happy Birthday, Tom</Text>
      <Text style={[styles.text, styles.bottomRight]}>From, Jack</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#fff',
    fontFamily: 'sans-serif-light',
    fontSize: 36,
    padding: 20,
    position: 'absolute',
  },
  topLeft: {
    top: 0,
    left: 0,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
  },
});

export default App;
