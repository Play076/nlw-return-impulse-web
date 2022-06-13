import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LogBox, View } from 'react-native';
import { theme } from './src/theme'
import AppLoading from 'expo-app-loading';

import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium
} from '@expo-google-fonts/inter';

import Widget from './src/components/Widget';


LogBox.ignoreLogs(["expo-app-loading is deprecated in favor of expo-splash-screen"]);


export default function App() {

    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={{
                flex: 1,
                backgroundColor: theme.colors.background
              }}>
            <StatusBar
                style="light"
                backgroundColor="transparent"
                translucent
              />
            <Widget />
        </View>
      );
}
