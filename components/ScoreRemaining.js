import { StyleSheet, Text, View } from 'react-native';
import React, {useState, Component} from 'react';

export default function ScoreRemaining( {score} ) {

  return (
    <View style={styles.container}>
      <Text style={[styles.white, styles.largeText]}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  largeText: {
    fontSize: 80,
  },
  white: {
    color: 'white'
  }
});