import * as React from "react";
import { useState } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import { io } from "socket.io-client";

import Message from "../components/Message";
import messagesData from "../assets/dummy-data/Chats";
import ChatsModel from "../models/ChatsModel";
import MessageInput from "../components/MessageInput";
import ChatRoomHeader from "../headers/ChatRoomHeader";
import { Props } from "../types";

const socket = io("https://signalsocketserver.herokuapp.com/");

const ChatRoomScreen = ({ route, navigation }: Props) => {
    const reciever = route.params.reciever;

    const [messages, setMessages] = useState<ChatsModel["messages"]>([]);

    socket.on("chat", (args) => setMessages([...messages, args]));

    return (
        <SafeAreaView style={styles.page}>
            <ChatRoomHeader reciever={reciever} navigation={navigation} />
            <FlatList<ChatsModel["messages"][0]>
                data={messages}
                renderItem={({ item }) => <Message message={item} />}
                keyExtractor={(item) => item.id}
            />
            <MessageInput
                stateChanger={setMessages}
                messages={messages}
                socket={socket}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        flex: 1,
    },
});

export default ChatRoomScreen;
