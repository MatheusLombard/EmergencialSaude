import { TouchableOpacity, View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './style';
import { Voltar } from '../../components/voltar';
import { Emergencias } from '../../components/emergencias';
import { useState } from 'react';

export function TelaEscolha({ navigation } : { navigation : any}) {
    const [emergencias, setEmergencias] = useState(['Asma', 'Diabetes', 'Epilepsia', 'Doença 4',
       'Doença 5', 'Doença 6', 'Doença 7', 'Doença 8'])

  function chamarEmergencia(emergencia: string) {
    navigation.navigate('VideoDoenca', {doenca : emergencia, video : 'aaa'});
  
  }
  function voltar(){
    navigation.navigate('TelaInicial');
  }
 return (
  <SafeAreaView style={styles.container}>
      <Voltar voltar={voltar}/>
      <View  style={{alignItems: 'center'}}>
        <Image source={require('../../assets/logoLoading.png')} style={{width: 150, height: 180}}/>
      </View>
        <View style={styles.areaEmergencias}>
        <View>
          <Text style={styles.textoAreaEmergencias}>Escolha sua Emergencia:</Text>
          <View style={styles.areaEmergenciasBotoes}>
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