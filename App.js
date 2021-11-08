import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Topo } from "./src/Topo";
import { Tarefa } from "./src/Tarefa";

import { Styles } from "./src/Styles";
import { NovaTarefa } from "./src/NovaTarefa";

export default function App() {
  // const [tarefas, setTarefas] = useState([]);

  return (
    <View style={Styles.container}>
      <View style={Styles.barraStatus} />
      <Topo />

      <NovaTarefa />
      <ScrollView style={Styles.listaDeTarefas}>
        <Tarefa />
        <Tarefa />
      </ScrollView>
    </View>
  );
}
