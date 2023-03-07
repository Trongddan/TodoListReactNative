import { ScrollView, StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import Task from "../components/Task";
import InputForm from "../components/Form";

export default function TodoApp() {
  const [listTask, setListTask] = useState([]);
  const addTask = (task) => {
    setListTask([...listTask, task]);
  };
  const handleDeleteTask = (index) => {
    Alert.alert("Thông báo", "Bạn có muốn xóa Task này không?", [
      {
        text: "Hủy",
        // onPress: () => console.log(""),
        style: "cancel",
      },
      {
        text: "Xóa",
        onPress: () => {
          let taskListTmp = [...listTask];
          taskListTmp.splice(index, 1);
          setListTask(taskListTmp);
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.title_app}>
        <Text style={styles.title_app_text}>Todo List</Text>
      </View>
      <View style={styles.body}>
        {listTask.length > 0 ? (
          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {listTask.map((item, index) => (
              <Task
                key={index}
                name={item}
                stt={index}
                onDeleteTask={(index) => handleDeleteTask(index)}
              />
            ))}
          </ScrollView>
        ) : (
          <View>
            <Text>Bạn chưa có công việc nào?</Text>
          </View>
        )}
      </View>
      <View style={styles.footer}>
        <InputForm onAddTask={addTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d5f0fc",
  },
  title_app: {
    flex: 1,
  },
  title_app_text: {
    fontSize: 30,
    fontWeight: "700",
    color: "#3333ff",
    marginTop: 20,
    paddingLeft: 20,
    paddingVertical: 20,
  },
  body: {
    boxSizing: "",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 5,
  },
  footer: {
    flex: 1,
    backgroundColor: "#d5f0fc",
    justifyContent: "center",
    alignItems: "center",
  },
});
