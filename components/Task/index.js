import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
const Task = ({ name, stt, onDeleteTask }) => {
  const bgNum = (stt + 1) % 2 === 0 ? styles.even : styles.odd;
  return (
    <TouchableOpacity onPress={()=>onDeleteTask(stt)}>
      <View style={styles.itemJob}>
        <View style={[styles.itemJobNumber, bgNum]}>
          <Text style={styles.itemJobNumberText}>{stt + 1}</Text>
        </View>
        <Text style={styles.itemJobContent}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
