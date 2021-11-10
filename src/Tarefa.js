import React from "react";
import Checkbox from "expo-checkbox";
import { Text, View, TouchableOpacity } from "react-native";
import { Styles } from "./Styles";

export const Tarefa = (props) =>
  props.tarefas.map((item) => {
    return (
      <View style={[item.status ? Styles.tarefaConcluida : Styles.tarefa]}>
        <Checkbox
          value={item.status}
          onValueChange={() => props.atualizaStatus(item.id)}
        />
        <Text>{item.nome}</Text>
        <TouchableOpacity
          style={Styles.botaoExcluir}
          activeOpacity={0.6}
          onPress={() => props.excluirTarefa(item.id)}
        >
          <Text style={Styles.textoBranco}>X</Text>
        </TouchableOpacity>
      </View>
    );
  });
