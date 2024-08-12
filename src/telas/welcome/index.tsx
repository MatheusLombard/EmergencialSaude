import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export function Welcome({ navigation }: { navigation: any }) {
  function telaLogin(){
    navigation.navigate('Login')
  }
  function telaCadastro(){
    navigation.navigate('Cadastro')
  }
 return (
  <View style={styles.container}>
    <Text style={styles.textWelcome}> Bem-Vindo ao Emergencial Saúde! </Text>
    <Image source={require('../../assets/logo.png')} style={styles.logo} />
    <TouchableOpacity style={styles.buttonPressCadastrar} onPress={telaCadastro}>
        <View style={styles.buttonCadastrar}>
          <Text style={styles.buttonTextCadastrar} >CADASTRAR</Text>
        </View>
        <View style={styles.buttonCadastrarShadow}></View>
    </TouchableOpacity> 

    <TouchableOpacity>
      <Text style={styles.buttonEntrar} onPress={telaLogin}>JÁ POSSUO CADASTRO</Text>
    </TouchableOpacity>
  </View>

  );
} 