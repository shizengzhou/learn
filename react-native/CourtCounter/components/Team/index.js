import React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';

function Team(props) {
  const {teamName, score, addThree, addTwo, addOne} = props;
  return (
    <View style={styles.team}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.pointBtnContainer}>
        <Button color="#FF9800" title="+3 points" onPress={addThree} />
      </View>
      <View style={styles.pointBtnContainer}>
        <Button color="#FF9800" title="+2 points" onPress={addTwo} />
      </View>
      <View style={styles.pointBtnContainer}>
        <Button color="#FF9800" title="free throw" onPress={addOne} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  team: {
    flex: 1,
    justifyContent: 'center',
  },
  teamName: {
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'android' ? 'sans-serif-medium' : 'PingFangSC-Medium',
    fontSize: 14,
    color: '#616161',
    paddingTop: 16,
    paddingBottom: 16,
  },
  score: {
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'android' ? 'sans-serif-light' : 'PingFangSC-Light',
    fontSize: 56,
    color: '#000',
    marginBottom: 24,
  },
  pointBtnContainer: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 8,
  },
});

export default Team;
