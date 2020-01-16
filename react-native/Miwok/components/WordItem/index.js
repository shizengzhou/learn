import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Player} from '@react-native-community/audio-toolkit';

function play(filename) {
  new Player(filename).play();
}

const WordItem = props => {
  const {word, textBackgroundColor} = props;
  const textContainer = (
    <View
      style={[styles.textContainer, {backgroundColor: textBackgroundColor}]}>
      <View style={styles.textWrapper}>
        <Text style={styles.miwok}>{word.miwokTranslation}</Text>
        <Text style={styles.translation}>{word.defaultTranslation}</Text>
      </View>
      <Image
        style={styles.playArrow}
        source={require('../../assets/images/ic_play_arrow.png')}
      />
    </View>
  );

  if (word.image) {
    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback
          onPress={() => play(word.audio)}
          useForeground={true}>
          <View style={styles.word}>
            <Image source={word.image} style={styles.image} />
            {textContainer}
          </View>
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableOpacity onPress={() => play(word.audio)}>
        <View style={styles.word}>
          <Image source={word.image} style={styles.image} />
          {textContainer}
        </View>
      </TouchableOpacity>
    );
  }

  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        onPress={() => play(word.audio)}
        useForeground={true}>
        <View style={styles.word}>{textContainer}</View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity onPress={() => play(word.audio)}>
      <View style={styles.word}>{textContainer}</View>
    </TouchableOpacity>
  );
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  textWrapper: {
    flex: 1,
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
  playArrow: {
    width: 24,
    height: 24,
  },
});

export default WordItem;
