import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
  },

  barraStatus: {
    width: "100%",
    height: 25,
  },

  textoTopo: {
    fontFamily: "Roboto",
    fontSize: 34,
    color: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },

  containerTopo: {
    width: "100%",
    height: 90,
    backgroundColor: "#6495ed",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  containerNovaTarefa: {
    width: "90%",
    height: "10%",
    marginTop: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  barraTexto: {
    width: "80%",
    paddingLeft: 10,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 10,
  },

  listaDeTarefas: {
    width: "90%",
    height: 200,
    marginTop: 29,
    backgroundColor: "white",
  },

  tarefa: {
    height: 30,
    paddingLeft: 10,
    borderColor: "#d3d3d3",
    marginBottom: 10,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  botaoExcluir: {
    width: 30,
    height: 30,
    backgroundColor: "#b22222",
    alignItems: "center",
    justifyContent: "center",
  },

  textoExcluir: {
    color: "white",
  },
});
