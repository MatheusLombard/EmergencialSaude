import React from 'react';
import { View, Text} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

type routeParamsList = {
  videoDoenca: {
    doenca: string;
    video: string;
  }
}

export function VideoDoenca({navigation} : {navigation : any}) {
  const route = useRoute<RouteProp<routeParamsList,"videoDoenca">>();

  
  console.log(route.params);
  return (
    <SafeAreaView>
      <Text>{route.params?.doenca}, {route.params?.video}</Text>
    </SafeAreaView> 
  );
}