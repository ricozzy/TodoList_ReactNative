import React from "react";
import { Text, View } from "react-native";
import { Styles } from "./Styles";

export const Topo = (props) => {
  return (
    <View style={Styles.containerTopo}>
      <Text style={Styles.textoTopo}>{props.texto}</Text>
    </View>
  );
};
