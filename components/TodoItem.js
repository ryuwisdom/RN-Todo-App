import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../store/actions';

const TodoItem = ({ task, id }) => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.Reducer);
  const removeSelectedTodo = (id) => {
    const filteredTodos = todos.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    dispatch(removeTodo(filteredTodos));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.task}>{task}</Text>
      <TouchableOpacity
        style={styles.removeBtn}
        onPress={() => removeSelectedTodo(id)}>
        <Text style={styles.removeBtnText}>Done!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginLeft: 10,
  },
  task: {
    fontSize: 18,
  },
  removeBtn: {
    borderBottomColor: 'red',
    marginRight: 20,
  },
  removeBtnText: {
    fontWeight: 'bold',
    color: 'gray',
  },
});
