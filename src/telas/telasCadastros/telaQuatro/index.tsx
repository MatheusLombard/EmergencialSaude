import { ScrollView, Text, View } from 'react-native';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Buttons } from '../../../components/buttons';
import { Check } from '../../../components/checkbox';
import React, { useState } from 'react';
import { Inputs } from '../../../components/inputs';

export function CadastroQuatro({navigation} : { navigation : any}) {
const [inputLabel, setnputLabel] = useState(['Pedro', 'Yuri', 'Pedro', 'Yuri','Pedro']);




function anterior(){
    navigation.navigate('CadastroTres')
    }
function proximo(){
    navigation.navigate('TelaInicial')
}
    
 return (
 
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={{flex: 1, justifyContent: 'space-evenly'}}>
            <View>
                <Text>FICHA MÉDICA</Text>
            </View>
            <View>
                <Text>Está acabando! Responda algumas perguntas para prevenção</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.areaInputOutros}>
                {inputLabel.map((label, index) => (
                <Inputs key={index} label={label} maxLength={50} placeholder='vamoooooo' />
                ))}
            </ScrollView>
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