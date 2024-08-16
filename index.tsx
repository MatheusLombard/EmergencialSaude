import { ScrollView, Text, View } from 'react-native';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Buttons } from '../../../components/buttons';
import { Check } from '../../../components/checkbox';
import React, { useState } from 'react';
import { Inputs } from '../../../components/inputs';
import { Dropdown } from '../../../components/dropdown';

export function CadastroQuatro({navigation} : { navigation : any}) {
const [inputLabel, setnputLabel] = useState(['Quais medicações você usa?',
 'Quais alergias você tem?', 'Tipo de câncer(caso tenha): ','Comorbidades:',
 'Observações']);

const [options, setOptions] = useState(['matheus', 'dkajfçsdl']);

 
function anterior(){
    navigation.navigate('CadastroTres')
    }
function proximo(){
    navigation.navigate('TelaInicial')
}
    
 return (
 
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
        <View style={{justifyContent: 'center',gap: 44, flex: 1, width:'85%'}}>
            <View style={styles.viewTitulo}>
                <Text style={styles.textTitulo}>FICHA MÉDICA</Text>
            </View>
            <View style={styles.viewEnunciado}>
                <Text style={styles.textEnunciado}>Está acabando! Responda algumas perguntas para prevenção</Text>
            </View>
            <View style={{height: "53%"}}>
              <ScrollView showsVerticalScrollIndicator={false} style={styles.areaInputOutros}>
                  {inputLabel.map((label, index) => (
                  <Inputs key={index} label={label} maxLength={50} placeholder='Escreva aqui' />
                  ))}
                  <Dropdown 
                    label='Tipo Sanguíneo'
                    optionsProps={options}/>
              </ScrollView>
            </View>
        </View>

    <View style={{width:'85%'}}>
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
        <Text style={styles.indiceText}> 4/4 </Text>
      </View>
    </View>
      </ScrollView>
    </SafeAreaView>

  );
}