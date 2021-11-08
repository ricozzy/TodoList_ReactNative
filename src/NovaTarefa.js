import React from "react";
import { View, TextInput } from "react-native";
import { Styles } from "./Styles";

export const NovaTarefa = () => {
  return (
    <View style={Styles.containerNovaTarefa}>
      <TextInput
        style={Styles.barraTexto}
        defaultValue="Digite uma nova tarefa"
      />
    </View>
  );
};
