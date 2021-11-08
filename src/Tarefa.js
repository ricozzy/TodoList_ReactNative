import React from "react";
import {
  Text,
  Button,
  Alert,
  View,
  TouchableOpacity,
  ColorPropType,
} from "react-native";
import { Styles } from "./Styles";

export const Tarefa = () => {
  return (
    <View style={Styles.tarefa}>
      <Text>Passear com o cachorro!!!</Text>
      <TouchableOpacity
        style={Styles.botaoExcluir}
        activeOpacity={0.6}
        onPress={() =>
          Alert.alert("MSG", "Tem certeza que deseja excluir esse item?")
        }
      >
        <Text style={Styles.textoExcluir}>X</Text>
      </TouchableOpacity>
    </View>
  );
};
