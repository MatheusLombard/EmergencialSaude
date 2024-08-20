import { TouchableOpacity, View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'; // Importar o tipo de navegação
import { styles } from './styles';

interface Props {
  emergencia: string;
  value: string;
  emergenciaSelecionada: (emergencia : string) => void;
}

export function Emergencias({ emergencia, emergenciaSelecionada }: Props) {
  return (
    <View style={styles.areaEscolher}> 
      <TouchableOpacity style={styles.botaoAreaEscolher} onPress={() => emergenciaSelecionada(emergencia)}>
          <Text style={styles.textoBotaoAreaEscolher}>{emergencia}</Text>
      </TouchableOpacity>
    </View>
  );
}