import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Text style={styles.text}>Here are your results!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold' },
  text: { fontSize: 24, marginTop: 20 },
});
