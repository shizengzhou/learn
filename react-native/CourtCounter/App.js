import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  teamContainer: {
    flexDirection: 'row',
  },
  team: {
    flex: 1,
    justifyContent: 'center',
  },
  teamName: {
    textAlign: 'center',
    fontFamily: 'sans-serif-medium',
    fontSize: 14,
    color: '#616161',
    paddingTop: 16,
    paddingBottom: 16,
  },
  score: {
    textAlign: 'center',
    fontFamily: 'sans-serif-light',
    fontSize: 56,
    color: '#000',
    marginBottom: 24,
  },
  line: {
    width: 1,
    backgroundColor: '#aaa',
    marginTop: 16,
  },
  pointBtnContainer: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 8,
  },
  resetBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      scoreTeamA: 0,
      scoreTeamB: 0,
    };
  }

  addThreeForTeamA = () => {
    let {scoreTeamA} = this.state;
    scoreTeamA += 3;
    this.setState({
      scoreTeamA,
    });
  };

  addTwoForTeamA = () => {
    let {scoreTeamA} = this.state;
    scoreTeamA += 2;
    this.setState({
      scoreTeamA,
    });
  };

  addOneForTeamA = () => {
    let {scoreTeamA} = this.state;
    scoreTeamA += 1;
    this.setState({
      scoreTeamA,
    });
  };

  addThreeForTeamB = () => {
    let {scoreTeamB} = this.state;
    scoreTeamB += 3;
    this.setState({
      scoreTeamB,
    });
  };

  addTowForTeamB = () => {
    let {scoreTeamB} = this.state;
    scoreTeamB += 2;
    this.setState({
      scoreTeamB,
    });
  };

  addOneForTeamB = () => {
    let {scoreTeamB} = this.state;
    scoreTeamB += 1;
    this.setState({
      scoreTeamB,
    });
  };

  resetScore = () => {
    this.setState({
      scoreTeamA: 0,
      scoreTeamB: 0,
    });
  };

  render() {
    const {scoreTeamA, scoreTeamB} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.teamContainer}>
          <View style={styles.team}>
            <Text style={styles.teamName}>Team A</Text>
            <Text style={styles.score}>{scoreTeamA}</Text>
            <View style={styles.pointBtnContainer}>
              <Button
                color="#FF9800"
                title="+3 points"
                onPress={this.addThreeForTeamA}
              />
            </View>
            <View style={styles.pointBtnContainer}>
              <Button
                color="#FF9800"
                title="+2 points"
                onPress={this.addTwoForTeamA}
              />
            </View>
            <View style={styles.pointBtnContainer}>
              <Button
                color="#FF9800"
                title="free throw"
                onPress={this.addOneForTeamA}
              />
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.team}>
            <Text style={styles.teamName}>Team B</Text>
            <Text style={styles.score}>{scoreTeamB}</Text>
            <View style={styles.pointBtnContainer}>
              <Button
                color="#FF9800"
                title="+3 points"
                onPress={this.addThreeForTeamB}
              />
            </View>
            <View style={styles.pointBtnContainer}>
              <Button
                color="#FF9800"
                title="+2 points"
                onPress={this.addTowForTeamB}
              />
            </View>
            <View style={styles.pointBtnContainer}>
              <Button
                color="#FF9800"
                title="free throw"
                onPress={this.addOneForTeamB}
              />
            </View>
          </View>
        </View>
        <View style={styles.resetBtnContainer}>
          <Button color="#FF9800" title="reset" onPress={this.resetScore} />
        </View>
      </View>
    );
  }
}

export default App;
