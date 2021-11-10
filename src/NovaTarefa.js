import React from "react";
import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { Styles } from "./Styles";

export const NovaTarefa = (props) => {
  const [nome, setNome] = useState("");

  function apagaTexto() {
    setNome("");
  }

  return (
    <View style={Styles.containerNovaTarefa}>
      <TextInput
        style={Styles.barraTexto}
        defaultValue={nome}
        Value={nome}
        onChangeText={(e) => setNome(e)}
      />
      <TouchableOpacity
        style={Styles.botaoIncluir}
        onPress={() => props.adicionaItem(nome)}
      >
        <Text style={Styles.textoBranco}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.botaoExcluir} onPress={apagaTexto}>
        <Text style={Styles.textoBranco}>x</Text>
      </TouchableOpacity>
    </View>
  );
};
