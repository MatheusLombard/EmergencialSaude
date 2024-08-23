import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Inputs } from '../../components/inputs/index';
import { Buttons } from '../../components/buttons/index';
import { Voltar } from '../../components/voltar/index';

export function Login({ navigation }: { navigation: any }) {
  function voltar(){
    navigation.navigate('Welcome')
  }
  function entrar(){
    navigation.navigate('Home')
  }
 return (
   <SafeAreaView style={styles.container}>
    <StatusBar
      style='light'
      animated={true}
      backgroundColor="#6D050F"
      hidden={true}
    />
    <Voltar
    voltar={voltar}
    />
    <View style={{alignItems: "center"}}>
    <View style={styles.sectionLogin}>
      <Text style={styles.enunciado}>Digite seu CPF para entrar na sua conta</Text>
      <Inputs
        label="Informe seu CPF: "
        placeholder="Exp: 123.456.789-10"
        maxLength={14}
      />
    </View>
    </View>
    <View style={styles.viewButtonEntrar}>
      <Buttons
        text = "Entrar"
        action = {entrar}
      />
    </View>
   </SafeAreaView>
  );
}