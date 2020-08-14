import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions} from "react-native";

const { width, height} = Dimensions.get("window")

export default class Todo extends React.Component {
    state = {
        isEditing: false,
        isCompleted: false,
        value: ""
    };
    
    handleToggleTodo = () => {
        this.setState(prevState => {
            return({
                isCompleted: !prevState.isCompleted
            });
        });
    };

    startEditing = () => {
        const { text } = this.props;
        this.setState({
            isEditing: true,
            value: text
        });
    };

    finishEditing = () => {
        this.setState({
            isEditing: false
        });
    };

    controlInput = (text) => {
        this.setState({
            value: text
        });
    };

    render() {
        const { isCompleted, isEditing, value} = this.state;
        const { text } = this.props;
        
        return(
            <View style={styles.container}>
                <View style={styles.column}>
                <TouchableOpacity onPress={this.handleToggleTodo}>
                    <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]} />
                </TouchableOpacity>
                {isEditing ? (
                    <TextInput 
                        value={value} 
                        style={[
                            styles.input, 
                            styles.text, 
                            isCompleted ? styles.completedText : styles.uncompletedText
                        ]}
                        multiline={true}
                        onChangeText={this.controlInput}
                        returnKeyType={"done"}
                        autoCapitalize={"sentences"}
                        autocorrect={true}
                    />
                ) : (
                <Text 
                    style={[
                        styles.text, 
                        isCompleted ? styles.completedText : styles.uncompletedText
                    ]}
                >
                    {text}
                </Text>
                )}
                </View>
                    {isEditing ? (
                        <View style={styles.actions}>
                            <TouchableOpacity onPressOut={this.finishEditing}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>✅</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : (
                    <View style={styles.actions}>
                        <TouchableOpacity onPressOut={this.startEditing}>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>✏️</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>❌</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    )}
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 15,
        marginLeft: 15
    },
    completedCircle: {
        borderColor: "#0061fe",
        borderWidth: 15
    },
    uncompletedCircle: {
        borderColor: "#bbb",
        borderWidth: 2.5
    },
    completedText: {
        color: "#bbb",
        textDecorationLine: "line-through"
    },
    uncompletedText: {
        color: "#353839"
    },
    column: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    actions: {
        flexDirection: "row"
    },
    actionContainer: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    input: {
        marginVertical: 15,
        width: width / 2
    }
})