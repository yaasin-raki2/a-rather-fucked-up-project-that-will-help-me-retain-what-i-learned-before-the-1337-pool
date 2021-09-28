/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
    ColorSchemeName,
    Text,
    View,
    Image,
    useWindowDimensions,
    Platform,
} from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

import ChatRoomScreen from "../screens/ChatRoomScreen";
import HomeScreen from "../screens/HomeScreen";
import { Feather } from "@expo/vector-icons";
import { FC } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    statusBarStyle: "dark",
                    header: HomeHeader,
                }}
            />
            <Stack.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={{
                    headerShown: true,
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    statusBarStyle: "dark",
                }}
            />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: "Oops!" }}
            />
        </Stack.Navigator>
    );
}

let start = 0;

const HomeHeader: FC<NativeStackHeaderProps> = (props) => {
    const { width } = useWindowDimensions();

    const marginTopCondition = (): number => {
        if (start == 0 && Platform.OS == "android") {
            start++;
            return 28;
        } else {
            return 0;
        }
    };

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#fff",
                marginTop: marginTopCondition(),
                width: width,
                padding: 10,
            }}
        >
            <Image
                source={{
                    uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
                }}
                style={{ width: 30, height: 30, borderRadius: 30 }}
            />
            <Text
                style={{
                    flex: 1,
                    textAlign: "center",
                    marginLeft: 45,
                    fontWeight: "bold",
                }}
            >
                Signal
            </Text>
            <Feather
                name="camera"
                size={24}
                color="black"
                style={{ marginHorizontal: 10 }}
            />
            <Feather name="edit-2" size={24} color="black" style={{ marginLeft: 5 }} />
        </View>
    );
};
