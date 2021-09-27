import React from "react";
import { Text, Image, View } from "react-native";

import { styles } from "./styles";

const ChatRoomItem = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={{
                        uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
                    }}
                    style={styles.image}
                />
                <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>5</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>Elon Musk</Text>
                    <Text style={styles.text}>11:11 AM</Text>
                </View>
                <View>
                    <Text numberOfLines={1} style={styles.text}>
                        uityzdfoqslic ki yfvol jef eou ylyhvuoyhrfdbrf ou
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ChatRoomItem;
