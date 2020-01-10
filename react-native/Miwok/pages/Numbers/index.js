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
        },
        {
          miwokTranslation: 'otiiko',
          defaultTranslation: 'two',
          image: require('../../assets/images/number_two.png'),
        },
        {
          miwokTranslation: 'tolookosu',
          defaultTranslation: 'three',
          image: require('../../assets/images/number_three.png'),
        },
        {
          miwokTranslation: 'oyyisa',
          defaultTranslation: 'four',
          image: require('../../assets/images/number_four.png'),
        },
        {
          miwokTranslation: 'massokka',
          defaultTranslation: 'five',
          image: require('../../assets/images/number_five.png'),
        },
        {
          miwokTranslation: 'temmokka',
          defaultTranslation: 'six',
          image: require('../../assets/images/number_six.png'),
        },
        {
          miwokTranslation: 'kenekaku',
          defaultTranslation: 'seven',
          image: require('../../assets/images/number_seven.png'),
        },
        {
          miwokTranslation: 'kawinta',
          defaultTranslation: 'eight',
          image: require('../../assets/images/number_eight.png'),
        },
        {
          miwokTranslation: 'luttiwo’e',
          defaultTranslation: 'nine',
          image: require('../../assets/images/number_nine.png'),
        },
        {
          miwokTranslation: 'luttina’aacha',
          defaultTranslation: 'ten',
          image: require('../../assets/images/number_ten.png'),
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
