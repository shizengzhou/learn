import React, {Component} from 'react';
import {SafeAreaView, FlatList, View, StyleSheet} from 'react-native';
import WordItem from '../../components/WordItem';

class Numbers extends Component {
  constructor() {
    super();
    this.state = {
      words: [
        {
          miwokTranslation: 'lutti',
          defaultTranslation: 'one',
          image: require('../../assets/images/number_one.png'),
          audio: 'number_one.mp3',
        },
        {
          miwokTranslation: 'otiiko',
          defaultTranslation: 'two',
          image: require('../../assets/images/number_two.png'),
          audio: 'number_two.mp3',
        },
        {
          miwokTranslation: 'tolookosu',
          defaultTranslation: 'three',
          image: require('../../assets/images/number_three.png'),
          audio: 'number_three.mp3',
        },
        {
          miwokTranslation: 'oyyisa',
          defaultTranslation: 'four',
          image: require('../../assets/images/number_four.png'),
          audio: 'number_four.mp3',
        },
        {
          miwokTranslation: 'massokka',
          defaultTranslation: 'five',
          image: require('../../assets/images/number_five.png'),
          audio: 'number_five.mp3',
        },
        {
          miwokTranslation: 'temmokka',
          defaultTranslation: 'six',
          image: require('../../assets/images/number_six.png'),
          audio: 'number_six.mp3',
        },
        {
          miwokTranslation: 'kenekaku',
          defaultTranslation: 'seven',
          image: require('../../assets/images/number_seven.png'),
          audio: 'number_seven.mp3',
        },
        {
          miwokTranslation: 'kawinta',
          defaultTranslation: 'eight',
          image: require('../../assets/images/number_eight.png'),
          audio: 'number_eight.mp3',
        },
        {
          miwokTranslation: 'luttiwo’e',
          defaultTranslation: 'nine',
          image: require('../../assets/images/number_nine.png'),
          audio: 'number_nine.mp3',
        },
        {
          miwokTranslation: 'luttina’aacha',
          defaultTranslation: 'ten',
          image: require('../../assets/images/number_ten.png'),
          audio: 'number_ten.mp3',
        },
      ],
      color: '#fd8e09',
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

export default Numbers;
