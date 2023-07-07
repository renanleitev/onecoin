import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function QuotationsItems(props) {
    // É preciso definir o require + caminho estático, pois os requires precisam de caminhos estáticos
    // Não é possível usar o caminho dinâmico, com variáveis, pois o require não suporta
    const [coinImage, setCoinImage] = useState(require("../../img/dollar.png"));
    useEffect(() => {
        switch (props.coin) {
            case 'USD-BRL':
                setCoinImage(require("../../img/dollar.png"));
                break;
            case 'EUR-BRL':
                setCoinImage(require("../../img/euro.png"));
                break;
            case 'BTC-BRL':
                setCoinImage(require("../../img/bitcoin.png"));
                break;
            case 'ARS-BRL':
                setCoinImage(require("../../img/argentina.png"));
                break;
        }
    }, [props.coin]);
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                        style={styles.logoBitcoin}
                        source={coinImage}
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