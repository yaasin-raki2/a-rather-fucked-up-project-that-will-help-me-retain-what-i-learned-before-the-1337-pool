import * as React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

const ChatRoomScreen = () => {
    return (
        <View>
            <FlatList
                data={[1, 2, 3, 4, 5]}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => <Text>{item}</Text>}
            />
        </View>
    );
};

export default ChatRoomScreen;
