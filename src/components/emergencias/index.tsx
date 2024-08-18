import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';

interface props{
    emergencia: string,
    value: string,
}
export function Emergencias({emergencia}: props) {
  const teste = () => {
    const valor = emergencia
    console.log('Teste', valor);
  }
 return (
   <View style={styles.areaEscolher}> 
    <TouchableOpacity style={styles.botaoAreaEscolher} onPress={teste}>
        <Text style={styles.textoBotaoAreaEscolher}>{emergencia}</Text>
    </TouchableOpacity>
   </View>
  );
}