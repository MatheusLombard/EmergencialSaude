import { View, Text, Switch, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import { Voltar } from '../../../components/voltar';
import { useState } from 'react';

export default function Configuracoes({navigation } : {navigation : any}) {
  const [isEnebledTrita, setIsEnebledTrita] = useState(false);
  const [isEnebledProta, setIsEnebledProta] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#6D050F');

  const changeValueTrita = () => {
    setIsEnebledTrita(previousState => !previousState);
    if (isEnebledTrita === true) {
      setBackgroundColor('#6D050F');
    } else {
      setBackgroundColor('#fff');
    }
  }
  const changeValueProta = () => {
    setIsEnebledProta(previousState => !previousState);
    if (isEnebledProta === true) {
      setBackgroundColor('#6D050F');
    } else {
      setBackgroundColor('#ccc');
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
          thumbColor={isEnebledTrita ? '#ff0000' : '#ff0000'}
          value={isEnebledTrita}
          disabled={isEnebledProta ? true : false}
          onValueChange={changeValueTrita}
          style={{ transform: [{ scaleX: 2.0 }, { scaleY: 1.5 }] }}
        />
      </View>
        <View
          style={{
            marginVertical: 40,
            borderBottomColor: 'white',
            borderBottomWidth: StyleSheet.hairlineWidth}}/>
      <View style={styles.viewAreaOpcoesConfig}>
        <Text style={styles.opcoesConfig}>Protanopia (dificuldade de enxergar vermelho)   ou Deuteranopia (dificuldade de enxergar verde)</Text>
        <Switch 
          trackColor={{true: '#6D050F', false: '#fff' }}
          thumbColor={isEnebledProta ? '#ff0000' : '#ff0000'}
          disabled={isEnebledTrita ? true : false}
          value={isEnebledProta}
          onValueChange={changeValueProta}
          style={{ transform: [{ scaleX: 2.0 }, { scaleY: 1.5 }] }}
        />
      </View>
    </View>
    
   </SafeAreaView>
  );
}