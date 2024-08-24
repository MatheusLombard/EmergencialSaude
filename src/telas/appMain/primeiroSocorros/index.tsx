import React from 'react';
import { View, Text} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import YoutubeIframe from 'react-native-youtube-iframe';  
import { styles, videoHeight, videoWidth } from './styles';

type routeParamsList = {
  videoDoenca: {
    doenca: string;
    video: string;
  }
}

export function VideoDoenca({navigation} : {navigation : any}) {
  const route = useRoute<RouteProp<routeParamsList,"videoDoenca">>();
  const {doenca, video} = route.params;
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaVideo}>
        <Text style={styles.tituloAreaVideo}>PRIMEIROS SOCORROS</Text>
        <Text style={styles.criseAreaVideo}> Crise de {doenca}</Text>
        <YoutubeIframe
          height={videoHeight}
          width={videoHeight}
          videoId='0GOUF8vNqzE'
        />
      </View>
      <View style={styles.areaVoltarInicio}>
        <Text style={styles.textAreaVoltarInicio} onPress={() => navigation.navigate('Home')}>Voltar ao início</Text>
      </View>
    </SafeAreaView> 
  );
}