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
    subcontainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 35,
        height: 30,
        marginLeft: 5,
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
        paddingLeft: 20,
    },
    search: {
        marginRight: 10,
    },
    dots: {
        marginHorizontal: 5,
    },
});
