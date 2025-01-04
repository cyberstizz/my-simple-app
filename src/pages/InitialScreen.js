import React, { useState } from 'react';
import { View, Text, Picker, Button, StyleSheet } from 'react-native';

export default function InitialScreen({ navigation }) {
  const [age, setAge] = useState('18-25');
  const [income, setIncome] = useState('20000-50000');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Preferences</Text>
      <Picker selectedValue={age} onValueChange={(value) => setAge(value)}>
        <Picker.Item label="18-25" value="18-25" />
        <Picker.Item label="26-35" value="26-35" />
      </Picker>
      <Button title="Next" onPress={() => navigation.navigate('Loading')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
});
