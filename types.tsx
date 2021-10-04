/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ChatRoomModel from "./models/ChatRoomModel";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

export type RootStackParamList = {
    Home: undefined;
    ChatRoom: { reciever: ChatRoomModel["users"][1] };
};

export type Props = NativeStackScreenProps<RootStackParamList, "ChatRoom">;
