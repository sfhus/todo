import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Platform, ScrollView} from 'react-native';
import Todo from "./Todo"
const {height, width} = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newTodo: "" /*,
    completedCount: 0 */
  };

  handleNewTodo = (text) => {
    this.setState({newToDo: text});
  };

  /*
  handleUpdateCount = (completed) => {
    if (completed) {
      this.setState({completedCount: this.state.completedCount + 1}, () => console.log(this.state.completedCount));
    } else {
      this.setState({completedCount: this.state.completedCount - 1});
    }
  };
  */

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Todo</Text>
        <View style={styles.card}>
          <TextInput 
            style={styles.input} 
            placeholder={"Enter an item"}
            onChangeText={this.handleNewTodo} 
            autoCapitalize={"sentences"}
            autocorrect={true}
            returnKeyType={"done"}
          />
          <ScrollView contentContainerStyle={styles.todos}>
            <Todo text={"Hello I'm a todo"} /* handleUpdateCount={this.handleUpdateCount} */ />
          </ScrollView>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  todos: {
    alignItems: "center"
  },
  container: {
    flex: 1,
    backgroundColor: '#0061fe',
    alignItems: 'center'  
  },
  title: {
    fontSize: 35,
    marginTop: 50,
    fontWeight: 400,
    marginBottom: 25,
    color: "#fff"
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25
  },
  card: {
    backgroundColor: "#fff",
    flex: 1,
    width: width - 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3
      },
      web: {
        boxShadow: "0px 0px 0px 1px"
      }
    })
  }
});
