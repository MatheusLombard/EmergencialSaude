import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import { Voltar } from '../../../components/voltar';
import { useStylesTheme } from '../../../styles';
import { useEmergencialContext } from '../../../hook/useEmergencialContext';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';

export function FichaEditavel({navigation} : {navigation : any}) {
  const stylesTheme = useStylesTheme();
  const { backgroundColor, setColorComponentsBox, colorComponentsBox } = useEmergencialContext();
  useFocusEffect(
    React.useCallback(() => {
      if (backgroundColor === '#6D050F'){
        setColorComponentsBox('#A80B1A');
      }else if (backgroundColor === '#FFF'){
        setColorComponentsBox('#FFA1AA');
      }else if (backgroundColor === '#FFFFFE'){
        setColorComponentsBox('#FF933E');
      }
    }, [backgroundColor])
  );

 return (
   <SafeAreaView style={{...stylesTheme.containerTheme, gap: 30,}}>
    <StatusBar
      backgroundColor={'#6D050F'}
      hidden={false}
    />
    <Voltar voltar={() => navigation.navigate('Home')}/>
      <View> 
        <Text style={{...stylesTheme.grande,...styles.tituloFicha}}> FICHA </Text>
      </View>
      <View style={styles.areaInformacoes}> 
        <ScrollView>
          <Text style={{...stylesTheme.medio,...styles.titulosAreaInformacoes}}>INFORMAÇÕES PESSOAIS</Text>
          <View style={{...styles.boxAreaInformacoes, backgroundColor: colorComponentsBox}}>
            <Text style={{...stylesTheme.pequeno,...styles.textoBoxAreaInformacoes}}>Nome: </Text>
            <View style={styles.subBoxAreaInformacoes}>
              <Text style={{...stylesTheme.pequeno,...styles.textoBoxAreaInformacoes}}>Sexo:</Text>
              <Text style={{...stylesTheme.pequeno,...styles.textoBoxAreaInformacoes}}>Idade:</Text>
            </View>
            <Text style={{...stylesTheme.pequeno,...styles.textoBoxAreaInformacoes}}>CPF:</Text>  
            <Text style={{...stylesTheme.pequeno,...styles.textoBoxAreaInformacoes}}>Telefone pessoal: </Text>
            <Text style={{...stylesTheme.pequeno,...styles.textoBoxAreaInformacoes}}>Telefone emergência: </Text>
          </View>
          <Text style={{...stylesTheme.medio,...styles.titulosAreaInformacoes}}>ENDEREÇO</Text>
          <View style={{...styles.boxAreaInformacoes, backgroundColor: colorComponentsBox}}>
            <Text style={{...stylesTheme.pequeno,...styles.textoBoxAreaInformacoes}}>Rua: </Text>
            <View style={styles.subBoxAreaInformacoes}>
              <Text style={{...stylesTheme.pequeno,...styles.textoBoxAreaInformacoes}}>N°:</Text>
              <Text style={{...stylesTheme.pequeno,...styles.textoBoxAreaInformacoes}}>Bairro:</Text>
            </View>
            <View style={styles.subBoxAreaInformacoes}>
              <Text style={{...stylesTheme.pequeno,...styles.textoBoxAreaInformacoes}}>Cidade:</Text>
              <Text style={{...stylesTheme.pequeno,...styles.textoBoxAreaInformacoes}}>Estado:</Text>
            </View>
          </View>
          <Text style={{...stylesTheme.medio,...styles.titulosAreaInformacoes}}>INFORMAÇÕES MÉDICAS</Text>
          <View style={{...styles.boxAreaInformacoes, backgroundColor: colorComponentsBox}}>
            <Text style={{...stylesTheme.pequeno,...styles.textoBoxAreaInformacoes}}>Problemas de Saúde: </Text>
            <Text style={{...stylesTheme.pequeno,...styles.textoBoxAreaInformacoes}}>Medicamentos:</Text>  
            <Text style={{...stylesTheme.pequeno,...styles.textoBoxAreaInformacoes}}>Alergias: </Text>
            <Text style={{...stylesTheme.pequeno,...styles.textoBoxAreaInformacoes}}>Comorbidades: </Text>
            <Text style={{...stylesTheme.pequeno,...styles.textoBoxAreaInformacoes}}>Câncer: </Text>
            <Text style={{...stylesTheme.pequeno,...styles.textoBoxAreaInformacoes}}>Tipo sanguíneo: </Text>
          </View>
          
        </ScrollView>
      </View>
      <View style={styles.viewAreaBotao}> 
        <TouchableOpacity style={styles.areaBotao} onPress={() => navigation.navigate('Edicao')}>
          <Text style={styles.textoAreaBotao}> editar </Text>
        </TouchableOpacity>
      </View> 
   </SafeAreaView>
  );
}