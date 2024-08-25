import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import { Voltar } from '../../../components/voltar';

export function FichaEditavel({navigation} : {navigation : any}) {
 return (
   <SafeAreaView style={styles.container}>
    <StatusBar
      backgroundColor={'#6D050F'}
      hidden={false}
    />
    <Voltar voltar={() => navigation.navigate('Home')}/>
      <View> 
        <Text style={styles.tituloFicha}> FICHA </Text>
      </View>
      <View style={styles.areaInformacoes}> 
        <ScrollView>
          <Text style={styles.titulosAreaInformacoes}>INFORMAÇÕES PESSOAIS</Text>
          <View style={styles.boxAreaInformacoes}>
            <Text style={styles.textoBoxAreaInformacoes}>Nome: </Text>
            <View style={styles.subBoxAreaInformacoes}>
              <Text style={styles.textoBoxAreaInformacoes}>Sexo:</Text>
              <Text style={styles.textoBoxAreaInformacoes}>Idade:</Text>
            </View>
            <Text style={styles.textoBoxAreaInformacoes}>CPF:</Text>  
            <Text style={styles.textoBoxAreaInformacoes}>Telefone pessoal: </Text>
            <Text style={styles.textoBoxAreaInformacoes}>Telefone emergência: </Text>
          </View>
          <Text style={styles.titulosAreaInformacoes}>ENDERÇO</Text>
          <View style={styles.boxAreaInformacoes}>
            <Text style={styles.textoBoxAreaInformacoes}>Rua: </Text>
            <View style={styles.subBoxAreaInformacoes}>
              <Text style={styles.textoBoxAreaInformacoes}>N°:</Text>
              <Text style={styles.textoBoxAreaInformacoes}>Bairro:</Text>
            </View>
            <View style={styles.subBoxAreaInformacoes}>
              <Text style={styles.textoBoxAreaInformacoes}>Cidade:</Text>
              <Text style={styles.textoBoxAreaInformacoes}>Estado:</Text>
            </View>
          </View>
          <Text style={styles.titulosAreaInformacoes}>INFORMAÇÕES MÉDICAS</Text>
          <View style={styles.boxAreaInformacoes}>
            <Text style={styles.textoBoxAreaInformacoes}>Problemas de Saúde: </Text>
            <Text style={styles.textoBoxAreaInformacoes}>Medicamentos:</Text>  
            <Text style={styles.textoBoxAreaInformacoes}>Alergias: </Text>
            <Text style={styles.textoBoxAreaInformacoes}>Comorbidades: </Text>
            <Text style={styles.textoBoxAreaInformacoes}>Câncer: </Text>
            <Text style={styles.textoBoxAreaInformacoes}>Tipo sanguíneo: </Text>
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