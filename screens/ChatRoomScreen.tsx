import * as React from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import Message from "../components/Message";
import messagesData from "../assets/dummy-data/Chats";
import ChatsModel from "../models/ChatsModel";
import MessageInput from "../components/MessageInput";

const ChatRoomScreen = () => {
    return (
        <SafeAreaView style={styles.page}>
            <FlatList<ChatsModel["messages"][0]>
                data={messagesData.messages}
                renderItem={({ item }) => <Message message={item} />}
                inverted
            />
            <MessageInput />
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
