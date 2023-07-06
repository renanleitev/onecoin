import React from "react";
import {View, 
    Text, 
    TouchableOpacity } from "react-native";
import styles from "./styles";

export default function CoinsList(props){
    const coinQuery = props.filterCoin;
    return (
        <View style={styles.filters}>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => coinQuery('USD-BRL')}>
                <Text style={styles.textButtonQuery}>USD</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => coinQuery('EUR-BRL')}>
                <Text style={styles.textButtonQuery}>EUR</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => coinQuery('BTC-BRL')}>
                <Text style={styles.textButtonQuery}>BTC</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => coinQuery('ARS-BRL')}>
                <Text style={styles.textButtonQuery}>ARS</Text>
            </TouchableOpacity>
        </View>
    )
}