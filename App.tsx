import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from './src/telas/welcome/index';
import { Login } from './src/telas/login';
import { TelaInicial } from './src/telas/telaInicial';
import { Cadastro } from './src/telas/telasCadastros/telaUm/Index';
import { CadastroDois } from './src/telas/telasCadastros/telaDois';
import { CadastroTres } from './src/telas/telasCadastros/telaTres';
import { CadastroQuatro } from './src/telas/telasCadastros/telaQuatro';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CadastroQuatro"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="CadastroDois" component={CadastroDois} />
        <Stack.Screen name="CadastroTres" component={CadastroTres} />
        <Stack.Screen name="CadastroQuatro" component={CadastroQuatro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
