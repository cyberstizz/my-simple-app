import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      navigation.navigate('Results');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24 },
});
