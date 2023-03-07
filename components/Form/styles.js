import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    
  },
  input: {
    height: 44,
    width: "80%",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#d5f0fc",
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 54,
    marginRight:12
  },
  btnAdd: {
    width: 44,
    height: 44,
    backgroundColor: "red",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconAdd: {
    color: "white",
    fontSize:30,
    fontWeight:'400'
  },
});
