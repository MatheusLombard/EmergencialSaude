import React from 'react';
import { View, Text} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './type'; // Importe o tipo de navegação
import { SafeAreaView } from 'react-native-safe-area-context';

type VideoDoencaRouteProp = RouteProp<RootStackParamList, 'VideoDoenca'>;

export function VideoDoenca({navigation} : {navigation : any}) {
  const route = useRoute<VideoDoencaRouteProp>();
  const { doenca, video } = route.params;

  return (
    <SafeAreaView>
      <Text>{doenca}, {video}</Text>
    </SafeAreaView>
  );
}