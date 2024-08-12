import { View } from 'react-native';
import { Buttons } from "../../components/buttons/index";

export function TelaInicial({ navigation } : { navigation : any}) {
 return (
  <View>
   <Buttons
    text="Início"
    symbol='&gt;'
    action={() => navigation.navigate('Login')}
   />
   </View>

);}