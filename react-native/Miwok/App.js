import React, {Component} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Numbers from './pages/Numbers';
import FamilyMembers from './pages/FamilMembers';
import Colors from './pages/Colors';
import Phrases from './pages/Phrases';

const initialLayout = {width: Dimensions.get('window').width};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {key: 'numbers', title: 'Numbers'},
        {key: 'family', title: 'Family'},
        {key: 'colors', title: 'Colors'},
        {key: 'phrases', title: 'Phrases'},
      ],
    };
    this.renderScene = SceneMap({
      numbers: Numbers,
      family: FamilyMembers,
      colors: Colors,
      phrases: Phrases,
    });
  }

  handleIndexChange = index => {
    this.setState({
      index,
    });
  };

  renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      labelStyle={styles.label}
    />
  );

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        onIndexChange={this.handleIndexChange}
        initialLayout={initialLayout}
        renderTabBar={this.renderTabBar}
      />
    );
  }
}

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: '#fff',
  },
  tabBar: {
    backgroundColor: '#4a312a',
  },
  label: {
    fontSize: 14,
    textTransform: 'uppercase',
  },
});

export default App;
