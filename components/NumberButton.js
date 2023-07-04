import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-paper';



export default function NumberButton( {number} ) {
  
  function buttonPressEventHandler (buttonPressed) {
    let buttonPressedValue = number;
    console.log(buttonPressedValue);
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => buttonPressEventHandler(number)} style = {styles.round} mode ="contained">{number}</Button>
    </View>
  );
}

const styles = StyleSheet.create({
    round: {
        width: 60,  
        height: 60,   
        borderRadius: 30,
    },
});