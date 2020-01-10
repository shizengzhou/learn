import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const Home = props => {
  const {navigate} = props.navigation;

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={[styles.textStyle, styles.numbersBackgroundColor]}
        onPress={() => navigate('Numbers')}>
        Numbers
      </Text>
      <Text
        style={[styles.textStyle, styles.familyBackgroundColor]}
        onPress={() => navigate('FamilyMembers')}>
        Family Members
      </Text>
      <Text
        style={[styles.textStyle, styles.colorsBackgroundColor]}
        onPress={() => navigate('Colors')}>
        Colors
      </Text>
      <Text
        style={[styles.textStyle, styles.phrasesBackgroundColor]}
        onPress={() => navigate('Phrases')}>
        Phrases
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7da',
  },
  textStyle: {
    height: 88,
    textAlignVertical: 'center',
    padding: 16,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  numbersBackgroundColor: {
    backgroundColor: '#fd8e09',
  },
  familyBackgroundColor: {
    backgroundColor: '#379237',
  },
  colorsBackgroundColor: {
    backgroundColor: '#8800a0',
  },
  phrasesBackgroundColor: {
    backgroundColor: '#16afca',
  },
});

export default Home;
