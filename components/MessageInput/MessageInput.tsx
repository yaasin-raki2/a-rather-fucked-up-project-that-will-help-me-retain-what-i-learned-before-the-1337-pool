import React from "react";
import { View, TextInput } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

const MessageInput = () => {
    return (
        <View style={styles.root}>
            <View style={styles.inputContainer}>
                <AntDesign name="smileo" size={24} color="#595959" style={styles.icon} />
                <TextInput placeholder="Signal message" style={styles.input} />
                <Feather name="camera" size={24} color="#595959" style={styles.icon} />
                <Ionicons
                    name="mic-outline"
                    size={24}
                    color="#595959"
                    style={styles.icon}
                />
            </View>
            <View style={styles.buttonContainer}>
                <AntDesign name="plus" size={24} color="white" />
            </View>
        </View>
    );
};

export default MessageInput;
