import React, { useState } from "react";
import { View, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

const MessageInput = () => {
    const [message, setMessage] = useState<string>("");

    const sendMessage = () => {
        //Handle send message
        console.warn("sending: ", message);
    };

    const onPlusPressed = () => {
        //Handle plus press
        console.warn("plus pressed");
    };

    const onPress = () => {
        if (message) {
            sendMessage();
        } else {
            onPlusPressed();
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.root}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={100}
        >
            <View style={styles.inputContainer}>
                <AntDesign name="smileo" size={24} color="#595959" style={styles.icon} />
                <TextInput
                    placeholder="Signal message"
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                />
                <Feather name="camera" size={24} color="#595959" style={styles.icon} />
                <Ionicons
                    name="mic-outline"
                    size={24}
                    color="#595959"
                    style={styles.icon}
                />
            </View>
            <Pressable onPress={onPress} style={styles.buttonContainer}>
                {message ? (
                    <Ionicons name="send" size={18} color="white" />
                ) : (
                    <AntDesign name="plus" size={24} color="white" />
                )}
            </Pressable>
        </KeyboardAvoidingView>
    );
};

export default MessageInput;
