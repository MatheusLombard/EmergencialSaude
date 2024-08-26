import React from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export function Sair({ navigation }: { navigation: any }) {
  useFocusEffect(
    React.useCallback(() => {
      // Navegar para "Welcome" toda vez que a tela ganhar foco
      navigation.navigate('Welcome');
    }, [])
  );

  return (
    <View>
      <Text>Saindo...</Text>
    </View>
  );
}
