import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Message from "../components/Message";
import messagesData from "../assets/dummy-data/Chats";
import ChatsModel from "../models/ChatsModel";

const ChatRoomScreen = () => {
    return (
        <View style={styles.page}>
            <FlatList<ChatsModel["messages"][0]>
                data={messagesData.messages}
                renderItem={({ item }) => <Message message={item} />}
                inverted
            />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        flex: 1,
    },
});

export default ChatRoomScreen;
