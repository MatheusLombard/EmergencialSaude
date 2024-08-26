import { ScrollView, Text, View } from 'react-native';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Buttons } from '../../../components/buttons';
import React, { useState } from 'react';
import { Inputs } from '../../../components/inputs';
import { Dropdown } from '../../../components/dropdown';
import { useStylesTheme } from '../../../styles';

export function CadastroQuatro({navigation} : { navigation : any}) {
  const stylesTheme = useStylesTheme();
  const [inputLabel, setInputLabel] = useState(['Quais medicações você usa?', 'Quais alergias você tem?',
    'Tipo de câncer (caso tenha):', 'Comorbidades:','Observação:', 'Comorbidades:','Observação:']);
  const [tipoSanguineo, settipoSanguineo] = useState(['A+', 'A-','B+', 'B-','AB+', 'AB-','O+', 'O-']);




function anterior(){
    navigation.navigate('CadastroTres');
    }
function proximo(){
    navigation.navigate('Drawer');
}
    
 return (
 
  <SafeAreaView style={{...stylesTheme.containerTheme, alignItems: 'center'}}>
      <View style={{flex: 1, justifyContent: 'center', width: '80%', gap: 40}}>
        <View style={{alignItems: 'center'}}>
          <Text style={stylesTheme.grande}>FICHA MÉDICA</Text>
        </View>
        <View style={{width: '85%'}}>
          <Text style={stylesTheme.medio}>Está acabando! Responda algumas perguntas para prevenção</Text>
        </View>
        <View style={styles.areaInputOutros}>
          <ScrollView showsVerticalScrollIndicator={false}>
                {inputLabel.map((label, index) => (
                <Inputs key={index} label={label} maxLength={50} placeholder='Escreva aqui...' />
              ))}
              <Dropdown
                label='Tipos Sanguíneos'
                mode='dialog'
                options={tipoSanguineo}
              />
          </ScrollView>
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
        <Text style={{...stylesTheme.pequeno, textAlign: 'center'}}> 4/4 </Text>
      </View>
    </View>
    </SafeAreaView>
  );
}