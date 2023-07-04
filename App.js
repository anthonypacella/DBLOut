import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';
import React, {useState} from 'react';
import ScoreRemaining from './components/ScoreRemaining';
import NumberButton from './components/NumberButton';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.fullContainer}>
      <ScoreRemaining style = {styles.scoreContainer} score = {171}></ScoreRemaining>
      <NumberButton number = {1} ></NumberButton>
      <NumberButton number = {2} ></NumberButton>
      <NumberButton number = {3} ></NumberButton>
      <NumberButton number = {4} ></NumberButton>
      <NumberButton number = {5} ></NumberButton>
      <NumberButton number = {6} ></NumberButton>
      <NumberButton number = {7} ></NumberButton>
      <NumberButton number = {8} ></NumberButton>
      <NumberButton number = {999} ></NumberButton>
      <NumberButton number = {0} ></NumberButton>
      <NumberButton number = {"ENTER"} ></NumberButton>

    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreContainer: {
  }
});
