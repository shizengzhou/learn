import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const WordItem = props => {
  const {word, textBackgroundColor} = props;
  const textContainer = (
    <View
      style={[styles.textContainer, {backgroundColor: textBackgroundColor}]}>
      <Text style={styles.miwok}>{word.miwokTranslation}</Text>
      <Text style={styles.translation}>{word.defaultTranslation}</Text>
    </View>
  );

  if (word.image) {
    return (
      <View style={styles.word}>
        <Image source={word.image} style={styles.image} />
        {textContainer}
      </View>
    );
  }

  return <View style={styles.word}>{textContainer}</View>;
};

const styles = StyleSheet.create({
  word: {
    flexDirection: 'row',
    minHeight: 88,
    backgroundColor: '#fff7da',
  },
  image: {
    width: 88,
    height: 88,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  miwok: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  translation: {
    color: '#fff',
    fontSize: 18,
  },
});

export default WordItem;
