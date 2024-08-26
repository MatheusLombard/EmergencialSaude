import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { useStylesTheme } from '../../styles';

export function Welcome({ navigation } : { navigation : any}) {
  const stylesTheme = useStylesTheme();
  function telaLogin(){
    navigation.navigate('Login')
  }
  function telaCadastro(){
    navigation.navigate('Cadastro')
  }
 return (
  <View style={{...stylesTheme.containerTheme, ...styles.container}}>
    <Text style={{...stylesTheme.grande ,...styles.textWelcome}}> Bem-Vindo ao Emergencial Saúde! </Text>
    <Image source={require('../../assets/logo.png')} style={styles.logo} />
    <TouchableOpacity style={styles.buttonPressCadastrar} onPress={telaCadastro}>
        <View style={{...stylesTheme.backgroundColorComponents,...styles.buttonCadastrar}}>
          <Text style={{...stylesTheme.botoes, ...styles.buttonTextCadastrar}} >CADASTRAR</Text>
        </View>
        <View style={styles.buttonCadastrarShadow}></View>
    </TouchableOpacity> 

    <TouchableOpacity>
      <Text style={{...stylesTheme.medio, ...styles.buttonEntrar}} onPress={telaLogin}>JÁ POSSUO CADASTRO</Text>
    </TouchableOpacity>
  </View>

  );
} 