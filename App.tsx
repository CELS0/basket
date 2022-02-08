import React from 'react';
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background/Background';
import { DataListProvider } from './src/hooks/dataList';
import { Home } from './src/screens/Home/Home';

export default function App() {
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <DataListProvider>
        <Home />
      </DataListProvider>
    </Background>
  );
};
