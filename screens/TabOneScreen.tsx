import * as React from "react";

import { Text, Image, View, StyleSheet } from "react-native";

export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
                }}
                style={styles.image}
            />
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
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginRight: 10,
    },
    rightContainer: {
        flex: 1,
        justifyContent: "center",
    },
    name: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 3,
    },
    text: {
        color: "grey",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});