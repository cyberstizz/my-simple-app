import { registerRootComponent } from 'expo';
import React from 'react';
import InitialScreen from './src/screens/InitialScreen';

export default function App() {
  return <InitialScreen />;
}

registerRootComponent(App);
