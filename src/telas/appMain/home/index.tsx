import { TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './style';

export function Home({ navigation } : { navigation : any}) {
  function chamarEmergencia(){
    navigation.navigate('TelaEscolha');
  }
 return (
  <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.areaMenu} onPress={() => navigation.openDrawer()}>
        <Text style={styles.textoMenu}>Menu</Text>
        <Icon name="navicon" size={27} color="white" />
      </TouchableOpacity>
      <View style={styles.areaChamar}>
        <TouchableOpacity style={styles.botaoAreaChamar} onPress={chamarEmergencia}>
          <Text style={styles.textoChamar}>CHAMAR EMERGÊNCIA</Text>
        </TouchableOpacity>
      </View>
  </SafeAreaView>

);}
