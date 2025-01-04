import React from 'react';
import { View, Text, Button, StyleSheet, } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Initial: undefined;
  Loading: undefined;
  Results: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Initial'>;

export default function InitialScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Initial Screen</Text>
      <Button title="Go to Loading Screen" onPress={() => navigation.navigate('Loading')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24 },
});
