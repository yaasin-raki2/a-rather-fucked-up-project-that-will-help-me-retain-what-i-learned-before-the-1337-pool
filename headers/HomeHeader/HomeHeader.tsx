import { Entypo, EvilIcons } from "@expo/vector-icons";
import React from "react";

import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const HomeHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Image
                    source={require("../../assets/images/ghost.png")}
                    style={styles.image}
                />
                <Text style={styles.text}>Signal</Text>
            </View>
            <View style={styles.subcontainer}>
                <EvilIcons name="search" size={28} color="black" style={styles.search} />
                <Entypo
                    name="dots-three-vertical"
                    size={18}
                    color="black"
                    style={styles.dots}
                />
            </View>
        </View>
    );
};

export default HomeHeader;
