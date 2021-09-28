import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";

import ChatsModel from "../../models/ChatsModel";

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
                isMe ? styles.rightContainer : styles.leftContainer,
            ]}
        >
            <Text style={{ color: isMe ? "black" : "white" }}>{message.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: "75%",
    },
    leftContainer: {
        backgroundColor: "#3777f0",
        marginLeft: 10,
        marginRight: "auto",
    },
    rightContainer: {
        backgroundColor: "lightgrey",
        marginLeft: "auto",
        marginRight: 10,
    },
});

export default Message;
