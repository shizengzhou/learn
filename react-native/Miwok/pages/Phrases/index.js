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
          audio: 'phrase_where_are_you_going.mp3',
        },
        {
          miwokTranslation: "tinnə oyaase'nə",
          defaultTranslation: 'What is your name?',
          audio: 'phrase_what_is_your_name.mp3',
        },
        {
          miwokTranslation: 'oyaaset...',
          defaultTranslation: 'My name is... ',
          audio: 'phrase_my_name_is.mp3',
        },
        {
          miwokTranslation: 'michəksəs?',
          defaultTranslation: 'How are you feeling?',
          audio: 'phrase_how_are_you_feeling.mp3',
        },
        {
          miwokTranslation: 'kuchi achit',
          defaultTranslation: 'I’m feeling good.',
          audio: 'phrase_im_feeling_good.mp3',
        },
        {
          miwokTranslation: "əənəs'aa?",
          defaultTranslation: 'Are you coming?',
          audio: 'phrase_are_you_coming.mp3',
        },
        {
          miwokTranslation: 'həə’ əənəm',
          defaultTranslation: 'Yes, I’m coming.',
          audio: 'phrase_yes_im_coming.mp3',
        },
        {
          miwokTranslation: 'əənəm',
          defaultTranslation: 'I’m coming.',
          audio: 'phrase_im_coming.mp3',
        },
        {
          miwokTranslation: 'yoowutis',
          defaultTranslation: 'Let’s go.',
          audio: 'phrase_lets_go.mp3',
        },
        {
          miwokTranslation: "ənni'nem",
          defaultTranslation: 'Come here.',
          audio: 'phrase_come_here.mp3',
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
