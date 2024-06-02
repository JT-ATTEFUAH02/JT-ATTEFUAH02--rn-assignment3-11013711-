// src/App.js
import React from 'react';
import { Text, ScrollView, TextInput, StyleSheet, Button, FlatList } from 'react-native';
import Category from './src\Components\Category.js';
import Task from './src\Components\Task.js';

const categories = ['Exercise', 'Study', 'Code', 'Cook', 'Read', 'Meditate', 'Work', 'Play'];
const tasks = [
  { id: '1', title: 'Morning Run' },
  { id: '2', title: 'React Native Tutorial' },
  { id: '3', title: 'Bug Fixing' },
  { id: '4', title: 'Bake Cookies' },
  { id: '5', title: 'Read a Book' },
  { id: '6', title: 'Yoga Session' },
  { id: '7', title: 'Project Meeting' },
  { id: '8', title: 'Play Chess' },
  { id: '9', title: 'Clean the House' },
  { id: '10', title: 'Write a Blog Post' },
  { id: '11', title: 'Grocery Shopping' },
  { id: '12', title: 'Watch a Movie' },
  { id: '13', title: 'Gardening' },
  { id: '14', title: 'Learn Guitar' },
  { id: '15', title: 'Language Practice' },
];

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Task Manager</Text>
      <TextInput style={styles.input} placeholder="Search tasks..." />

      <ScrollView horizontal style={styles.categoriesContainer}>
        {categories.map((category) => (
          <Category key={category} title={category} />
        ))}
      </ScrollView>

      <FlatList
        data={tasks}
        renderItem={({ item }) => <Task title={item.title} />}
        keyExtractor={(item) => item.id}
      />

      <Button title="Add Task" onPress={() => {}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  categoriesContainer: {
    marginBottom: 16,
  },
});

export default App;
