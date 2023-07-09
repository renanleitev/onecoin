import React from "react";
import { View, Text, Image} from "react-native";
import styles from "./styles";

export default function QuotationsItems(props) {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                        style={styles.logoCoin}
                        source={require("../../img/dollar.png")}
                    />
                    <Text style={styles.dayCotation}>{props.day}</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ {props.value}</Text>
            </View>
        </View>
    )
}