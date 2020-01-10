import React, {Component} from 'react';
import {SafeAreaView, FlatList, View, StyleSheet} from 'react-native';
import WordItem from '../../components/WordItem';

class Colors extends Component {
  constructor() {
    super();
    this.state = {
      words: [
        {
          miwokTranslation: 'weṭeṭṭi',
          defaultTranslation: 'red',
          image: require('../../assets/images/color_red.png'),
        },
        {
          miwokTranslation: 'chokokki',
          defaultTranslation: 'green',
          image: require('../../assets/images/color_green.png'),
        },
        {
          miwokTranslation: 'ṭakaakki',
          defaultTranslation: 'brown',
          image: require('../../assets/images/color_brown.png'),
        },
        {
          miwokTranslation: 'ṭopoppi',
          defaultTranslation: 'gray',
          image: require('../../assets/images/color_gray.png'),
        },
        {
          miwokTranslation: 'kululli',
          defaultTranslation: 'black',
          image: require('../../assets/images/color_black.png'),
        },
        {
          miwokTranslation: 'kelelli',
          defaultTranslation: 'white',
          image: require('../../assets/images/color_white.png'),
        },
        {
          miwokTranslation: 'ṭopiisə',
          defaultTranslation: 'dusty yellow',
          image: require('../../assets/images/color_dusty_yellow.png'),
        },
        {
          miwokTranslation: 'chiwiiṭə',
          defaultTranslation: 'mustard yellow',
          image: require('../../assets/images/color_mustard_yellow.png'),
        },
      ],
      color: '#8800a0',
    };
  }

  render() {
    const {words, color} = this.state;

    return (
      <SafeAreaView>
        <FlatList
          data={words}
          renderItem={({item}) => (
            <WordItem word={item} textBackgroundColor={color} />
          )}
          keyExtractor={item => item.miwokTranslation}
          ItemSeparatorComponent={() => <View style={styles.sperator} />}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  sperator: {
    flex: 1,
    height: 1,
  },
});

export default Colors;
