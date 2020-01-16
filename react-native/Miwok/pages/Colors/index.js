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
          audio: 'color_red.mp3',
        },
        {
          miwokTranslation: 'chokokki',
          defaultTranslation: 'green',
          image: require('../../assets/images/color_green.png'),
          audio: 'color_green.mp3',
        },
        {
          miwokTranslation: 'ṭakaakki',
          defaultTranslation: 'brown',
          image: require('../../assets/images/color_brown.png'),
          audio: 'color_brown.mp3',
        },
        {
          miwokTranslation: 'ṭopoppi',
          defaultTranslation: 'gray',
          image: require('../../assets/images/color_gray.png'),
          audio: 'color_gray.mp3',
        },
        {
          miwokTranslation: 'kululli',
          defaultTranslation: 'black',
          image: require('../../assets/images/color_black.png'),
          audio: 'color_black.mp3',
        },
        {
          miwokTranslation: 'kelelli',
          defaultTranslation: 'white',
          image: require('../../assets/images/color_white.png'),
          audio: 'color_white.mp3',
        },
        {
          miwokTranslation: 'ṭopiisə',
          defaultTranslation: 'dusty yellow',
          image: require('../../assets/images/color_dusty_yellow.png'),
          audio: 'color_dusty_yellow.mp3',
        },
        {
          miwokTranslation: 'chiwiiṭə',
          defaultTranslation: 'mustard yellow',
          image: require('../../assets/images/color_mustard_yellow.png'),
          audio: 'color_mustard_yellow.mp3',
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
