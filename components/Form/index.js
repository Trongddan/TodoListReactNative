import {
  Alert,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";

const InputForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const handlePressAdd = () => {
    if (task.length === 0) {
      Alert.alert("Thông báo!!!","Vui lòng nhập công việc");
      return false;
    }
    onAddTask(task);
    setTask("");
    Keyboard.dismiss();
  };
  return (
    <View style={styles.form}>
      <TextInput
        value={task}
        onChangeText={(e) => setTask(e)}
        placeholder="enter your task"
        style={styles.input}
      ></TextInput>
      <TouchableOpacity onPress={handlePressAdd}>
        <View style={styles.btnAdd}>
          <Text style={styles.iconAdd}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputForm;
