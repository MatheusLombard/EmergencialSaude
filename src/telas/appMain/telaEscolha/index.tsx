import { TouchableOpacity, View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './style';
import { Voltar } from '../../../components/voltar';
import { Emergencias } from '../../../components/emergencias';
import { useState } from 'react';
import { useStylesTheme } from '../../../styles';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { useEmergencialContext } from '../../../hook/useEmergencialContext';

export function TelaEscolha({ navigation } : { navigation : any}) {
  const stylesTheme = useStylesTheme();
  const [emergencias, setEmergencias] = useState(['Asma', 'Diabetes', 'Epilepsia', 'Doença 4',
       'Doença 5', 'Doença 6', 'Doença 7', 'Doença 8'])

  function chamarEmergencia(emergencia: string) {
    navigation.navigate('VideoDoenca', {doenca : emergencia, video : 'aaa'});
  
  }
  function voltar(){ 
    navigation.navigate('Home');
  }


  
 return (
  <SafeAreaView style={{...stylesTheme.containerTheme}}>
      <Voltar voltar={voltar}/>
        <View style={styles.areaEmergencias}>
        <View>
          <Text style={{...stylesTheme.medio,...styles.textoAreaEmergencias}}>Escolha sua Emergencia:</Text>
          <View>
            <ScrollView>
              {emergencias.map((emergencias, index) => (
                <Emergencias emergencia={emergencias} key={index} value={emergencias} emergenciaSelecionada={chamarEmergencia}/>
              ))}
            </ScrollView>
          </View> 
        </View> 
      </View> 
  </SafeAreaView>

);}