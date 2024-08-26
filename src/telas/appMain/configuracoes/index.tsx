import { View, Text, Switch, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import { Voltar } from '../../../components/voltar';
import { useState } from 'react';
import { useEmergencialContext } from '../../../hook/useEmergencialContext';
import { useStylesTheme } from '../../../styles';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';

export default function Configuracoes({navigation } : {navigation : any}) {
  const stylesTheme = useStylesTheme();
  const [isEnebledTrita, setIsEnebledTrita] = useState(false);
  const [isEnebledProta, setIsEnebledProta] = useState(false);
  const {backgroundColor ,setBackgroundColor, 
    setColorComponentsText, setBackgroundColorComponents,
    setColorText
  } = useEmergencialContext();

  useFocusEffect(
    React.useCallback(() => {
      // Navegar para "Welcome" toda vez que a tela ganhar foco
      if (backgroundColor === '#6D050F' ){
        setIsEnebledTrita(false);
        setIsEnebledProta(false);
      }
      if (backgroundColor === '#FFF'){
        setIsEnebledProta(false);
        setIsEnebledTrita(true);
      } else if (backgroundColor === '#FFFFFE' ){
        setIsEnebledProta(true);
        setIsEnebledTrita(false);
      }
    }, [backgroundColor])
  );
  const changeValueTrita = () => {
    setIsEnebledTrita(previousState => !previousState);
    if (isEnebledTrita === true) {
      setBackgroundColor('#6D050F');
      setColorText('#fff');
      setColorComponentsText('#fff');
      setBackgroundColorComponents('#E23C4C');
    } else {
      setBackgroundColor('#FFF');
      setColorText('#38070C');
      setColorComponentsText('#6D050F');
      setBackgroundColorComponents('#FFA1AA')
    }
  }
  const changeValueProta = () => {
    setIsEnebledProta(previousState => !previousState);
    if (isEnebledProta === true) {
      setBackgroundColor('#6D050F');
      setColorText('#FFF');
      setColorComponentsText('#FFF');
      setBackgroundColorComponents('#E23C4C');
    } else {
      setBackgroundColor('#FFFFFE');
      setColorText('#38070C');
      setColorComponentsText('#6D050F');
      setBackgroundColorComponents('#FF933E');
    }
  }
 return (
   <SafeAreaView style={{...stylesTheme.containerTheme, ...styles.container}}>
    <StatusBar
      backgroundColor={backgroundColor}
      hidden={false}
    />
    <Voltar voltar={() => navigation.navigate('Home')}/>
    <View style={styles.areaTituloConfig}>
      <Text style={{...stylesTheme.grande,...styles.tituloConfig}}>CONFIGURAÇÕES</Text>
    </View>
    <View style={styles.areaOpcoesConfig}>
      <View style={styles.viewAreaOpcoesConfig}>
        <Text style={{...stylesTheme.medio,...styles.opcoesConfig}}>Modo claro (ou para pessoas com Tritanopia)</Text>
        <Switch 
          trackColor={{true: '#6D050F', false: isEnebledProta ? '#6D050F' : '#fff' }}
          thumbColor={isEnebledTrita ? '#ff0000' : '#ff0000'}
          value={isEnebledTrita}
          disabled={isEnebledProta ? true : false}
          onValueChange={changeValueTrita}
          style={{ transform: [{ scaleX: 2.0 }, { scaleY: 1.5 }] }}
        />
      </View>
        <View
          style={{
            marginVertical: 50,
            borderBottomColor: isEnebledTrita ? '#000' : '#fff',
            borderBottomWidth: StyleSheet.hairlineWidth,
            width: '85%',
            alignSelf: 'center',
            }}/>
      <View style={styles.viewAreaOpcoesConfig}>
        <Text style={{...stylesTheme.medio, ...styles.opcoesConfig}}>Protanopia (dificuldade de enxergar vermelho)   ou Deuteranopia (dificuldade de enxergar verde)</Text>
        <Switch 
          trackColor={{true: '#6D050F', false: isEnebledTrita ? '#6D050F' : '#fff'}}
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