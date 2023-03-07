import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

export const styles = StyleSheet.create({
  itemJob: {
    marginBottom: 15,
    flexDirection: "row",
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    height: 60,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  itemJobNumber: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    
  },
  even: {
    backgroundColor: "#4de045",
  },
  odd: {
    backgroundColor: "#7af9ff",
  },
  itemJobNumberText: {
    fontSize: 15,
    color: "#fff",
  },
  itemJobContent: {
    width: "80%",
    fontSize: 17,
  },
});
export default styles;
