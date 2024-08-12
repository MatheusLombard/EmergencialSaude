import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Buttons } from '../../../components/buttons';
import { Check } from '../../../components/checkbox';
import React, { useState } from 'react';

export function CadastroTres({navigation} : { navigation : any}) {
    const [nomes, setNomes] = useState(['AIDS', 'Alergia' , 'Alzheimer', 'Ansiedade','Asma', 'AVC', 'Câncer','Cardíaco',
                                        'Depressão', 'Diabetes', 'Enxaqueca', 'Epilepsia', 'Gastrite Crônica', 'Hipertensão',
                                        'Neurológico', 'Obesidade', 'Osteoporose', 'Tireóide']);


  function anterior(){
    navigation.navigate('CadastroDois')
  }
  function proximo(){
    navigation.navigate('CadastroQuatro')
  }

 return (
 
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly', width: '100%'}}>
        <View style={styles.areaTitulo}>
          <Text style={styles.tituloFicha}> FICHA MÉDICA</Text>
        </View>
        <View style={{width: '85%'}}>
          <Text style={styles.enunciadoFicha}>Marque os problemas de saúde diagnosticados:</Text>
        </View>
        <View style={{width: '100%'}}>
          <View style={styles.areaWrap}>
            {nomes.map((nome, index) => (
              <Check key={index} title={nome} />
            ))}
          </View>
        </View>
      </View>
      <View style={{width:'80%'}}>
      <View style={styles.buttonsNav}>
        <Buttons
          text='Anterior' 
          lt='&lt;'
          action={anterior}
          style={{marginTop: 15, marginBottom:25}}
          />
        <Buttons
          gt='&gt;'
          text='Próximo'
          action={proximo}
          style={{marginTop: 15, marginBottom:25}}
        />
      </View>
      <View style={styles.indice}>
        <Text style={styles.indiceText}> 3/4 </Text>
      </View>
    </View>
      </ScrollView>
    </SafeAreaView>

  );
}