import * as React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import Message from "../components/Message";
import messagesData from "../assets/dummy-data/Chats";

const ChatRoomScreen = () => {
    return (
        <View style={styles.page}>
            <Message message={messagesData.messages[1]} />
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
