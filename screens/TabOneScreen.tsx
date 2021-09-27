import * as React from "react";

import { View, StyleSheet, Text } from "react-native";

import ChatRoomItem from "../components/ChatRoomItem";
import chatRoomsData from "../assets/dummy-data/ChatRooms";

export default function TabOneScreen() {
    const chatroom1 = chatRoomsData[0];
    const chatroom2 = chatRoomsData[1];
    const chatroom3 = chatRoomsData[2];

    return (
        <View style={styles.page}>
            <ChatRoomItem chatRoom={chatroom1} />
            <ChatRoomItem chatRoom={chatroom2} />
            <ChatRoomItem chatRoom={chatroom3} />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        flex: 1,
    },
});
