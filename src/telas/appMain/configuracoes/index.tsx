import { View, Text, Switch, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import { Voltar } from '../../../components/voltar';
import { useState } from 'react';

export default function Configuracoes({navigation } : {navigation : any}) {
  const [isEnebled, setIsEnebled] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#000');

  const changeValue = () => {
    setIsEnebled(previousState => !previousState);
    if (isEnebled === true) {
      setBackgroundColor('#fff');
    } else {
      setBackgroundColor('#000');
    }
  }
 return (
   <SafeAreaView style={{...styles.container, backgroundColor: backgroundColor}}>
    <Voltar voltar={() => navigation.navigate('Home')}/>
    <View style={styles.areaTituloConfig}>
      <Text style={styles.tituloConfig}>CONFIGURAÇÕES</Text>
    </View>
    <View style={styles.areaOpcoesConfig}>
      <View style={styles.viewAreaOpcoesConfig}>
        <Text style={styles.opcoesConfig}>Modo claro (ou para pessoas com Tritanopia)</Text>
        <Switch 
          trackColor={{true: '#6D050F', false: '#fff' }}
          thumbColor={isEnebled ? '#ff0000' : '#ff0000'}
          onValueChange={changeValue}
          value={isEnebled}
          style={{ transform: [{ scaleX: 2.0 }, { scaleY: 1.5 }] }}
        />
        <View style={{borderWidth: 1, borderColor: 'fff', height: 10}}></View>
      </View>
      
    </View>
    
   </SafeAreaView>
  );
}