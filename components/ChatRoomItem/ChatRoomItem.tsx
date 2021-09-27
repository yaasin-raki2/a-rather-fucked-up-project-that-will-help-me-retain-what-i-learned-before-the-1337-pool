import React, { FC } from "react";
import { Text, Image, View } from "react-native";

import { styles } from "./styles";
import ChatRoomModel from "../../models/ChatRoomModel";

interface IProps {
    chatRoom: ChatRoomModel;
}

const ChatRoomItem: FC<IProps> = ({ chatRoom }) => {
    const user = chatRoom.users[1];

    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: user.imageUri }} style={styles.image} />
                {chatRoom.newMessages != 0 && (
                    <View style={styles.badgeContainer}>
                        <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
                    </View>
                )}
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
                </View>
                <View>
                    <Text numberOfLines={1} style={styles.text}>
                        {chatRoom.lastMessage.content}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ChatRoomItem;
