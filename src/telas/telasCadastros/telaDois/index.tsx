import { View, Text, StatusBar, ScrollView } from 'react-native';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Inputs } from '../../../components/inputs';
import { Buttons } from '../../../components/buttons';
import { useStylesTheme } from '../../../styles';

export function CadastroDois({navigation} : { navigation : any}) {
  const styleTheme = useStylesTheme();
  function anterior(){
    navigation.navigate('Cadastro')
  }
  function proximo(){
    navigation.navigate('CadastroTres')
  }
 return (
  <SafeAreaView style={styleTheme.containerTheme}>
  <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between',alignItems: 'center'}}>
    <StatusBar
      animated={true}
      backgroundColor="#6D050F"
      hidden={true}
    />
    <View style={{flex: 1, justifyContent: "space-evenly", alignItems: 'center', marginTop: 10}}>
      <View style={{width: '100%'}}>
        <Text style={styleTheme.medio}>Agora, informe seu endereço:</Text>
      </View>
      <View style={styles.inputGroup}>
        <View style={styles.inputGroupItens}>
          <Inputs
          label='CEP'
          placeholder='12123-123'
          maxLength={9}
          /> 
          <Inputs
            label='Endereço Comum'
            placeholder='Digite seu  Endereço'
            maxLength={50}
          />
          <View style={styles.doisInputs}>
            <View style={{width: "70%"}}>
              <Inputs
                  label='Bairro'
                  placeholder='Digite seu bairro:'
                  maxLength={50}
                  
                />
            </View>
            <View style={{width: "27%"}}>
              <Inputs
                style={{textAlign: 'center'}}
                label='Número'
                placeholder='460'
                maxLength={5}
              />
            </View>
          </View>
          <Inputs
            label='Cidade'
            placeholder='Digite sua cidade:'
            maxLength={14}
          />
          <Inputs
            label='Estado'
            placeholder='Digite seu estado:'
            maxLength={50}
          />

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
        <Text style={{...styleTheme.pequeno, textAlign: 'center'}}> 2/4 </Text>
      </View>
    </View>
  </ScrollView>
  </SafeAreaView>
  );
}