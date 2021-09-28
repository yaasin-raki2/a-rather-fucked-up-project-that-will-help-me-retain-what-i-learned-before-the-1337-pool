import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import ChatsModel from "../../models/Chats";

interface IProps {
    message: ChatsModel["messages"][0];
}

const Message: FC<IProps> = ({ message }) => {
    const blue = "#3777f0";
    const grey = "lightgrey";

    const myID = "u1";
    const isMe = message.user.id === myID;

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: isMe ? grey : blue, marginLeft: isMe ? "auto" : 10 },
            ]}
        >
            <Text style={{ color: isMe ? "black" : "white" }}>{message.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3777f0",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: "75%",
    },
});

export default Message;