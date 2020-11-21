import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Pages
import Home from './Paginas/Home'
import Login from './Paginas/Login'
import Registro from './Paginas/Registro'
import RecuperarSenha from './Paginas/PerdiSenha'
import Registrar from './Paginas/RegistroAparelho'
import SistemaStart from './Paginas/Start'
import ConfigUm from './Paginas/ConfiguracaoUm'
import ConfigDois from './Paginas/ConfiguracaoDois'
import ConfigTres from './Paginas/ConfiguracaoTres'
import Sucesso from './Paginas/Sucesso'
import Limitador from './Paginas/Limitador'


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Registro" options={{headerShown:false}} component={Registro} />
        <Stack.Screen name="RecuperarSenha" options={{headerShown:false}} component={RecuperarSenha} />
        <Stack.Screen name="Registrar" options={{headerShown:false}} component={Registrar} />
        <Stack.Screen name="SistemaStart" options={{headerShown:false}} component={SistemaStart} />
        <Stack.Screen name="ConfigUm" options={{headerShown:false}} component={ConfigUm} />
        <Stack.Screen name="ConfigDois" options={{headerShown:false}} component={ConfigDois} />
        <Stack.Screen name="ConfigTres" options={{headerShown:false}} component={ConfigTres} />
        <Stack.Screen name="Sucesso" options={{headerShown:false}} component={Sucesso} />
        <Stack.Screen name="Limitador" options={{headerShown:false}} component={Limitador} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
