import { TouchableOpacity, View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'; // Importar o tipo de navegação
import { styles } from './styles';
import { useStylesTheme } from '../../styles';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { useEmergencialContext } from '../../hook/useEmergencialContext';

interface Props {
  emergencia: string;
  value: string;
  emergenciaSelecionada: (emergencia : string) => void;
}

export function Emergencias({ emergencia, emergenciaSelecionada }: Props) {
  const stylesTheme = useStylesTheme();
  const { backgroundColor, colorComponentsChoose, setColorComponentsChoose} = useEmergencialContext();

  useFocusEffect(
    React.useCallback(() => {
      if (backgroundColor === '#6D050F' || backgroundColor === '#FFF'){
        setColorComponentsChoose('#FFA1AA');
      }else if (backgroundColor === '#FFFFFE'){
        setColorComponentsChoose('#FF933E');
      }
    }, [backgroundColor])
  );

  return (
    <View style={styles.areaEscolher}> 
      <TouchableOpacity style={{...stylesTheme.backgroundColorComponents,...styles.botaoAreaEscolher, backgroundColor: colorComponentsChoose}} onPress={() => emergenciaSelecionada(emergencia)}>
          <Text style={{...stylesTheme.grande, color: '#000' }}>{emergencia}</Text>
      </TouchableOpacity>
    </View>
  );
}