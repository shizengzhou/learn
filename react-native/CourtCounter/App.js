import React, {Component} from 'react';
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

  addTwoForTeamB = () => {
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
      <SafeAreaView style={styles.container}>
        <View style={styles.teamContainer}>
          <Team
            teamName="Team A"
            score={scoreTeamA}
            addThree={this.addThreeForTeamA}
            addTwo={this.addTwoForTeamA}
            addOne={this.addOneForTeamA}
          />
          <View style={styles.line} />
          <Team
            teamName="Team B"
            score={scoreTeamB}
            addThree={this.addThreeForTeamB}
            addTwo={this.addTwoForTeamB}
            addOne={this.addOneForTeamB}
          />
        </View>
        <View style={styles.resetBtnContainer}>
          <Button color="#FF9800" title="reset" onPress={this.resetScore} />
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
