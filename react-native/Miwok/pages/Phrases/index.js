import React, {Component} from 'react';
import {SafeAreaView, FlatList, View, StyleSheet} from 'react-native';
import WordItem from '../../components/WordItem';

class Phrases extends Component {
  constructor() {
    super();
    this.state = {
      words: [
        {
          miwokTranslation: 'minto wuksus',
          defaultTranslation: 'Where are you going?',
        },
        {
          miwokTranslation: "tinnə oyaase'nə",
          defaultTranslation: 'What is your name?',
        },
        {
          miwokTranslation: 'oyaaset...',
          defaultTranslation: 'My name is... ',
        },
        {
          miwokTranslation: 'michəksəs?',
          defaultTranslation: 'How are you feeling?',
        },
        {
          miwokTranslation: 'kuchi achit',
          defaultTranslation: 'I’m feeling good.',
        },
        {
          miwokTranslation: "əənəs'aa?",
          defaultTranslation: 'Are you coming?',
        },
        {
          miwokTranslation: 'həə’ əənəm',
          defaultTranslation: 'Yes, I’m coming.',
        },
        {
          miwokTranslation: 'əənəm',
          defaultTranslation: 'I’m coming.',
        },
        {
          miwokTranslation: 'yoowutis',
          defaultTranslation: 'Let’s go.',
        },
        {
          miwokTranslation: "ənni'nem",
          defaultTranslation: 'Come here.',
        },
      ],
      color: '#16afca',
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

export default Phrases;
