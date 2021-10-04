import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
        padding: 10,
    },
    leftcontainer: {
        marginLeft: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 35,
        height: 35,
        marginLeft: 15,
        borderRadius: 50,
    },
    text: {
        fontWeight: "bold",
        fontSize: 16,
        paddingLeft: 10,
    },
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    call: {
        marginLeft: 25,
        marginRight: 20,
    },
    dots: {
        marginRight: 5,
    },
});
