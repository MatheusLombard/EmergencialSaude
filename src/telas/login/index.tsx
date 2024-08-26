import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Inputs } from '../../components/inputs/index';
import { Buttons } from '../../components/buttons/index';
import { Voltar } from '../../components/voltar/index';
import { useStylesTheme } from '../../styles';
import { useEmergencialContext } from '../../hook/useEmergencialContext';

export function Login({ navigation }: { navigation: any }) {
  const styleTheme = useStylesTheme();
  const { backgroundColor } = useEmergencialContext();
  function voltar(){
    navigation.navigate('Welcome')
  }
  function entrar(){
    navigation.navigate('Drawer')
  }
 return (
   <SafeAreaView style={styleTheme.containerTheme}>
    <StatusBar
      animated={true}
      backgroundColor= {backgroundColor}
      hidden={false}
    /> 
    <Voltar
    voltar={voltar}
    />
    <View style={{alignItems: "center"}}>
    <View style={styles.sectionLogin}>
      <Text style={styleTheme.medio}>Digite seu CPF para entrar na sua conta</Text>
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