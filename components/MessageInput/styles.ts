import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        padding: 10,
    },
    inputContainer: {
        backgroundColor: "#f2f2f2",
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        flexDirection: "row",
        borderColor: "#dedede",
        alignItems: "center",
        padding: 5,
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
    },
    icon: {
        marginHorizontal: 5,
    },
    buttonContainer: {
        backgroundColor: "#3777f0",
        width: 40,
        height: 40,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
    },
});
