import React from "react";
import { View, Text} from "react-native";
import styles from "./styles";

export default function QuotationsItems(props) {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Text>{props.flags}</Text>
                    <Text style={styles.dayCotation}>{props.day}</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ {props.value}</Text>
            </View>
        </View>
    )
}