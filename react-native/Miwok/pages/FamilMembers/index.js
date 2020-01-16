import React, {Component} from 'react';
import {SafeAreaView, FlatList, View, StyleSheet} from 'react-native';
import WordItem from '../../components/WordItem';

class FamilyMembers extends Component {
  constructor() {
    super();
    this.state = {
      words: [
        {
          miwokTranslation: 'əpə',
          defaultTranslation: 'father',
          image: require('../../assets/images/family_father.png'),
          audio: 'family_father.mp3',
        },
        {
          miwokTranslation: 'əṭa',
          defaultTranslation: 'mother',
          image: require('../../assets/images/family_mother.png'),
          audio: 'family_mother.mp3',
        },
        {
          miwokTranslation: 'angsi',
          defaultTranslation: 'son',
          image: require('../../assets/images/family_son.png'),
          audio: 'family_son.mp3',
        },
        {
          miwokTranslation: 'tune',
          defaultTranslation: 'daughter',
          image: require('../../assets/images/family_daughter.png'),
          audio: 'family_daughter.mp3',
        },
        {
          miwokTranslation: 'taachi',
          defaultTranslation: 'older brother',
          image: require('../../assets/images/family_older_brother.png'),
          audio: 'family_older_brother.mp3',
        },
        {
          miwokTranslation: 'chalitti',
          defaultTranslation: 'younger brother',
          image: require('../../assets/images/family_younger_brother.png'),
          audio: 'family_younger_brother.mp3',
        },
        {
          miwokTranslation: 'teṭe',
          defaultTranslation: 'older sister',
          image: require('../../assets/images/family_older_sister.png'),
          audio: 'family_older_sister.mp3',
        },
        {
          miwokTranslation: 'kolliti',
          defaultTranslation: 'younger sister',
          image: require('../../assets/images/family_younger_sister.png'),
          audio: 'family_younger_sister.mp3',
        },
        {
          miwokTranslation: 'ama',
          defaultTranslation: 'grandmother',
          image: require('../../assets/images/family_grandmother.png'),
          audio: 'family_grandmother.mp3',
        },
        {
          miwokTranslation: 'paapa',
          defaultTranslation: 'grandfather',
          image: require('../../assets/images/family_grandfather.png'),
          audio: 'family_grandfather.mp3',
        },
      ],
      color: '#379237',
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

export default FamilyMembers;
