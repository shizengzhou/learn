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
        },
        {
          miwokTranslation: 'əṭa',
          defaultTranslation: 'mother',
          image: require('../../assets/images/family_mother.png'),
        },
        {
          miwokTranslation: 'angsi',
          defaultTranslation: 'son',
          image: require('../../assets/images/family_son.png'),
        },
        {
          miwokTranslation: 'tune',
          defaultTranslation: 'daughter',
          image: require('../../assets/images/family_daughter.png'),
        },
        {
          miwokTranslation: 'taachi',
          defaultTranslation: 'older brother',
          image: require('../../assets/images/family_older_brother.png'),
        },
        {
          miwokTranslation: 'chalitti',
          defaultTranslation: 'younger brother',
          image: require('../../assets/images/family_younger_brother.png'),
        },
        {
          miwokTranslation: 'teṭe',
          defaultTranslation: 'older sister',
          image: require('../../assets/images/family_older_sister.png'),
        },
        {
          miwokTranslation: 'kolliti',
          defaultTranslation: 'younger sister',
          image: require('../../assets/images/family_younger_sister.png'),
        },
        {
          miwokTranslation: 'ama',
          defaultTranslation: 'grandmother',
          image: require('../../assets/images/family_grandmother.png'),
        },
        {
          miwokTranslation: 'paapa',
          defaultTranslation: 'grandfather',
          image: require('../../assets/images/family_grandfather.png'),
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
