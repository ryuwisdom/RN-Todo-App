import React from 'react';
import { useSelector } from 'react-redux';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  StyleSheet,
} from 'react-native';

const TodoList = ({ navigation }) => {
  const todoItems = useSelector((store) => store.Reducer);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundWrap}>
        <ImageBackground
          source={require('../assets/miffy.png')}
          style={styles.background}>
          <Text style={styles.title}>Jihye's to do something</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('TodoList')}>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;Go To Check</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 100,
  },
  subtitle: {
    marginTop: 230,
    marginLeft: 145,
  },
  button: {
    width: 140,
    // textAlign: center,
    borderWidth: 1,
    borderRadius: 80,
    marginTop: 210,
    marginLeft: 150,
    padding: 10,
    borderColor: 'black',
  },
  backgroundWrap: {
    flex: 1,
    // flexDirection: row,
  },
  background: {
    width: '100%',
    height: '100%',
  },
});
