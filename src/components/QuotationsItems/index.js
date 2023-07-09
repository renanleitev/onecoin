import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
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
                    <Text style={styles.dayCotation}>{props.data}</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ {props.valor}</Text>
            </View>
        </View>
    )
}