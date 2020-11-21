import { StatusBar } from 'expo-status-bar';
import React from 'react';
//Componentes
import {
  Template
} from './Components/Template/style'

//Pages
import Login from './Pages/Login'

export default function App() {
  return (
    <Template>
      <Login/>
      <StatusBar style="auto" />
    </Template>
  );
}

