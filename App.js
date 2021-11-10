import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { Topo } from "./src/Topo";
import { Tarefa } from "./src/Tarefa";

import { Styles } from "./src/Styles";
import { NovaTarefa } from "./src/NovaTarefa";

export default function App() {
  const [tarefas, setTarefas] = useState([
    { id: 0, nome: "Comprar Leite", status: false },
    { id: 1, nome: "Estudar React Native", status: false },
  ]);

  function adicionaItem(nome) {
    const newArray = [...tarefas];
    newArray.push({ id: newArray.length, nome: nome, status: false });
    setTarefas(newArray);
  }

  function atualizaStatus(idTarefa) {
    setTarefas(
      tarefas.map((item) => {
        if (item.id === idTarefa) {
          return { ...item, status: !item.status };
        }
        return item;
      })
    );
  }

  function excluirTarefa(idTarefa) {
    setTarefas(tarefas.filter((item) => item.id !== idTarefa));
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.barraStatus} />
      <Topo texto="Todo List" />

      <NovaTarefa adicionaItem={adicionaItem} />
      <ScrollView style={Styles.listaDeTarefas}>
        <Tarefa
          tarefas={tarefas}
          atualizaStatus={atualizaStatus}
          excluirTarefa={excluirTarefa}
        />
      </ScrollView>
    </View>
  );
}
