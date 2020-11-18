import { StatusBar } from 'expo-status-bar';
import React from 'react';
//Componentes
import {
  Template
} from './Components/Template/style'

//Pages
import Login from './Pages/Login'
import Welcome from './Pages/Welcome'




export default function App() {
  return (
    <Template>
      <Welcome/>
      <StatusBar style="auto" />
    </Template>
  );
}

