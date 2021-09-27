import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    badgeContainer: {
        backgroundColor: "#3777F0",
        height: 20,
        width: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 5,
        borderWidth: 1,
        borderColor: "#fff",
    },
    badgeText: {
        color: "white",
        fontSize: 12,
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
