import React, { FC } from "react";
import { View, Image, Text } from "react-native";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./styles";
import ChatRoomModel from "../../models/ChatRoomModel";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

interface IProps {
    reciever: ChatRoomModel["users"][1];
    navigation: NativeStackNavigationProp<RootStackParamList, "ChatRoom">;
}

const ChatRoomHeader: FC<IProps> = ({ reciever, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftcontainer}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={{ uri: reciever.imageUri }} style={styles.image} />
                </TouchableOpacity>
                <Text style={styles.text}>{reciever.name}</Text>
            </View>
            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Feather name="video" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons
                        name="call-outline"
                        size={24}
                        color="black"
                        style={styles.call}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo
                        name="dots-three-vertical"
                        size={18}
                        color="black"
                        style={styles.dots}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChatRoomHeader;
