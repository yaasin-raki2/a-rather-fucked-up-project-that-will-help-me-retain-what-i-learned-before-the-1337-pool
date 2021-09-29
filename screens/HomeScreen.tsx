import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ChatRoomItem from "../components/ChatRoomItem";
import chatRoomsData from "../assets/dummy-data/ChatRooms";
import ChatRoomModel from "../models/ChatRoomModel";
import HomeHeader from "../headers/HomeHeader";

export default function HomeScreen() {
    return (
        <View style={styles.page}>
            <HomeHeader />
            <FlatList<ChatRoomModel>
                data={chatRoomsData}
                renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        flex: 1,
    },
});
