import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Bai2() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>Top</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
          <Text>Bottom left</Text>
        </View>
        <View style={styles.bottomRightTOp}>
          <View style={styles.bottomRight}>
            <Text>Bottom right top</Text>
          </View>
          <View style={styles.bottomRightBottom}>
            <Text>Bottom right bottom</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "gray", flex: 1 },
  top: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    flex: 1,
  },
  bottom: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
  },
  bottomLeft: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "blue",
  },
  bottomRight: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
