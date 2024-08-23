import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Welcome } from './src/telas/welcome/index';
import { Login } from './src/telas/login';
import { Home } from './src/telas/appMain/home';
import { Cadastro } from './src/telas/telasCadastros/telaUm/Index';
import { CadastroDois } from './src/telas/telasCadastros/telaDois';
import { CadastroTres } from './src/telas/telasCadastros/telaTres';
import { CadastroQuatro } from './src/telas/telasCadastros/telaQuatro';
import { TelaEscolha } from './src/telas/appMain/telaEscolha';
import { VideoDoenca } from './src/telas/appMain/primeiroSocorros';
import { FichaEditavel } from './src/telas/appMain/ficha';
import Configuracoes from './src/telas/appMain/configuracoes';
import {Sair} from './src/sair';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Definição do Drawer Navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false, drawerStyle: { backgroundColor: '#A80B1A', padding: 10 }, drawerLabelStyle: { color: '#fff', fontSize: 18 }}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="TelaEscolha" component={TelaEscolha} />
      <Drawer.Screen name="FichaEditavel" component={FichaEditavel} />
      <Drawer.Screen name="Configuracoes" component={Configuracoes} />
      <Drawer.Screen name="Sair" component={Sair} />
    </Drawer.Navigator>
  );
}

// Definição do Stack Navigator
function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Drawer"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      <Stack.Screen name="CadastroDois" component={CadastroDois} options={{animation: 'none'}} />
      <Stack.Screen name="CadastroTres" component={CadastroTres} options={{animation: 'none'}} />
      <Stack.Screen name="CadastroQuatro" component={CadastroQuatro} options={{animation: 'none'}} />
      <Stack.Screen name="VideoDoenca" component={VideoDoenca} />
    </Stack.Navigator>
  );
}

// Componente principal do App
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 16,
  },
  drawerItem: {
    marginVertical: 10,
  },
  drawerItemText: {
    fontSize: 18,
    color: '#fff',
  },
});
