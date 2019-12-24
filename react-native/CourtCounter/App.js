import React, {useState} from 'react';
import {View, Button, StyleSheet, SafeAreaView} from 'react-native';
import Team from './components/Team';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  teamContainer: {
    flexDirection: 'row',
  },
  line: {
    width: 1,
    backgroundColor: '#aaa',
    marginTop: 16,
  },
  resetBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
});

function useScore() {
  const [score, setScore] = useState(0);

  function addThree() {
    setScore(score + 3);
  }

  function addTwo() {
    setScore(score + 2);
  }

  function addOne() {
    setScore(score + 1);
  }

  function resetScore() {
    setScore(0);
  }

  return {
    score,
    addThree,
    addTwo,
    addOne,
    resetScore,
  };
}

function App() {
  const scoreTeamA = useScore();
  const scoreTeamB = useScore();

  function resetScore() {
    scoreTeamA.resetScore();
    scoreTeamB.resetScore();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.teamContainer}>
        <Team teamName="Team A" {...scoreTeamA} />
        <View style={styles.line} />
        <Team teamName="Team B" {...scoreTeamB} />
      </View>
      <View style={styles.resetBtnContainer}>
        <Button color="#FF9800" title="reset" onPress={resetScore} />
      </View>
    </SafeAreaView>
  );
}

export default App;
