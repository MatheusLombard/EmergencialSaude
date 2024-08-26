import { TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './style'; 
import { useStylesTheme } from '../../../styles';
import { useEmergencialContext } from '../../../hook/useEmergencialContext';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';

export function Home({ navigation } : { navigation : any}) {
  const styleTheme = useStylesTheme();
  const { colorText, backgroundColor, colorComponentsChamar, setColorComponentsChamar } = useEmergencialContext();

  useFocusEffect(
    React.useCallback(() => {
      if (backgroundColor === '#6D050F' || backgroundColor === '#FFF'){
        setColorComponentsChamar('#D7747E');
      }else if (backgroundColor === '#FFFFFE') {
        setColorComponentsChamar('#FF933E');
      }
    }, [backgroundColor])
  );
  function chamarEmergencia(){
    navigation.navigate('TelaEscolha');
  }
 return (
  <SafeAreaView style={{...styleTheme.containerTheme,...styles.container}}>
      <TouchableOpacity style={styles.areaMenu} onPress={() => navigation.openDrawer()}>
        <Text style={{...styleTheme.medio,...styles.textoMenu}}>Menu</Text>
        <Icon name="navicon" size={27} color={colorText} />
      </TouchableOpacity>
      <View style={styles.areaChamar}>
        <TouchableOpacity style={{...styleTheme.backgroundColorComponents,...styles.botaoAreaChamar, backgroundColor: colorComponentsChamar}} onPress={chamarEmergencia}>
          <Text style={{...styleTheme.grande,...styles.textoChamar}}>CHAMAR EMERGÊNCIA</Text>
        </TouchableOpacity>
      </View>
  </SafeAreaView>

);}
function setColorComponentsDrawer(arg0: string) {
  throw new Error('Function not implemented.');
}

