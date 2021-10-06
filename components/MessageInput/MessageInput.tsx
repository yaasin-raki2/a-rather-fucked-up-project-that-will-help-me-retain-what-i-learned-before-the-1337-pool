import React, { FC, useState } from "react";
import { View, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import ChatsModel from "../../models/ChatsModel";

import { Socket } from "../../node_modules/socket.io-client/build";
import { DefaultEventsMap } from "../../node_modules/socket.io-client/build/typed-events";

interface IProps {
    stateChanger: any;
    messages: ChatsModel["messages"];
    socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const MessageInput: FC<IProps> = ({ stateChanger, messages, socket }) => {
    const [message, setMessage] = useState<string>("");
    const [mid, setmid] = useState<number>(0);
    const [userId, setUserId] = useState<Boolean>(false);

    const sendMessage = () => {
        //Handle send message
        const messageObject: ChatsModel["messages"][0] = {
            content: message,
            createdAt: new Date().toISOString(),
            id: userId ? "mu1" + mid.toString() : "mu2" + mid.toString(),
            user: {
                id: userId ? "u1" : "u2",
                name: userId ? "User 1" : "User 2",
            },
        };
        setmid(mid + 1);
        console.log(mid);
        stateChanger([...messages, messageObject]);
        socket.emit("chat", messageObject);
    };

    const onPlusPressed = () => {
        //Handle plus press
        console.warn("User Switched");
        setUserId(!userId);
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
