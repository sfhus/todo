import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions} from "react-native";

const { width, height} = Dimensions.get("window")

export default class Todo extends React.Component {
    state = {
        isEditing: false
    };
    
    render() {
        return(
            <View>
                <Text>Hello I'm a todo</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: 1,
        flexDirection: "row"
    }
})