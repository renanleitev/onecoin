import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function QuotationsItems(props) {
    const [isPressed, setIsPressed] = useState(false);
    const high = props.info['high'];
    const low = props.info['low'];
    const varBid = props.info['varBid'];
    const pctChange = props.info['pctChange'];
    const bid = props.info['bid'];
    const ask = props.info['ask'];
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Text>{props.flags}</Text>
                    <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
                        <Text style={styles.textCotation}>{props.day}</Text>
                        {isPressed && <View style={styles.detailsContent}>
                            <Text>
                                Máximo: {high}
                            </Text>
                            <Text>
                                Mínimo: {low}
                            </Text>
                            <Text>
                                Variação: {varBid}
                            </Text>
                        </View>}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contextRight}>
                <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
                    <Text style={styles.textCotation}>$ {props.value}</Text>
                    {isPressed && <View style={styles.detailsContent}>
                        <Text>
                            Variação (%): {pctChange}
                        </Text>
                        <Text>
                            Compra: {bid}
                        </Text>
                        <Text>
                            Venda: {ask}
                        </Text>
                    </View>}
                </TouchableOpacity>
            </View>
        </View>
    )
}