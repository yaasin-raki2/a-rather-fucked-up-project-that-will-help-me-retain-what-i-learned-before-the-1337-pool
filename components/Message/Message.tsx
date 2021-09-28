import React, { FC } from "react";
import { Text, View } from "react-native";

import ChatsModel from "../../models/ChatsModel";
import { styles } from "./styles";

interface IProps {
    message: ChatsModel["messages"][0];
}

const Message: FC<IProps> = ({ message }) => {
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

export default Message;
