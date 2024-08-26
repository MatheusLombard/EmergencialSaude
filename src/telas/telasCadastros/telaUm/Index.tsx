import { View, Text, StatusBar, ScrollView } from 'react-native';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Voltar } from '../../../components/voltar';
import { Inputs } from '../../../components/inputs';
import { Buttons } from '../../../components/buttons';
import { Dropdown } from '../../../components/dropdown';
import { useState } from 'react';
import { useStylesTheme } from '../../../styles';
import { useEmergencialContext } from '../../../hook/useEmergencialContext';


export function Cadastro({navigation} : { navigation : any}) {
  const { backgroundColor } = useEmergencialContext();
  const stylesTheme = useStylesTheme();
  const [sexo, setSexo] = useState(['Masculino', 'feminino']);

  function voltar(){
    navigation.navigate('Welcome')
  }
  function proximo(){
    navigation.navigate('CadastroDois')
  }
 return (
  <SafeAreaView style={stylesTheme.containerTheme}>
    <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
    <StatusBar
      animated={true}
      backgroundColor= {backgroundColor}
      hidden={true}
      />
    <Voltar
      voltar={voltar}
    />
    <View style={{flex: 1,alignItems: 'center', justifyContent: "space-evenly",gap: 10}  }>
      <View style={{alignItems: 'center',width: "90%"}}>
        <Text style={stylesTheme.medio}>Para começar, faremos sua ficha:</Text>
      </View>

      <View style={{display: 'flex', justifyContent: 'center', width: "80%"}}>
        <Inputs
          label='Nome Completo'
          placeholder='Digite seu nome completo'
          maxLength={50}
        />
        <View style={styles.doisInputs}>
          <View style={{width: "70%"}}>
            <Dropdown
              label='Sexo'
              mode='dropdown'
              options={sexo}
            />
          </View>
          <View style={{width: "25%"}}>
            <Inputs
              style={{textAlign: 'center'}}
              label='Idade'
              placeholder='XX'
              maxLength={3}
            />
          </View>
        </View> 
        <Inputs
          label='CPF'
          placeholder='Ex: 123.456.789-10'
          maxLength={14}
        />
        <Inputs
          label='Telefone Pessoal'
          placeholder='Ex: (99) 99999-9999'
          maxLength={50}
        />
        <Inputs
          label='Telefone Emergencia'
          placeholder='Ex: (99) 99999-9999'
          maxLength={50}
        />
      </View>
    </View>
    
    <View>
      <View style={styles.viewButtonEntrar }>
        <Buttons
          text='Próximo'
          gt='&gt;'
          action={proximo}
          style={{marginTop: 15, marginBottom:25}}
        />
      </View>
      <View style={styles.indice}>
        <Text style={{...stylesTheme.pequeno, textAlign: 'center'}}> 1/4 </Text>
      </View>
    </View>
    </ScrollView>
  </SafeAreaView>
  ); 
}