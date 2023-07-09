import React from "react";
import {
    FlatList,
    View,
    Text,
    TouchableOpacity
} from "react-native";
import QuotationsItems from "../QuotationsItems";
import { sharedExcel } from "../../services/sharedExcel";
import {FontAwesome} from '@expo/vector-icons';
import styles from "./styles";

export default function QuotationsList(props) {
    return (
        <>
            <View style={styles.filters}>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => props.updateSearching(true)}>
                    <Text style={styles.textButtonQuery}>Pesquisar</Text>
                    <View style={styles.shareContainer}>
                        <TouchableOpacity
                            style={styles.shareButton}
                            onPress={() => sharedExcel(props.coinsList, props.coin)}>
                            <FontAwesome name="share-alt" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
            <FlatList
                inverted
                style={styles.listQuotationCoins}
                data={props.coinsList}
                renderItem={({ item }) => {
                    return <QuotationsItems
                        coin={props.coin}
                        value={item.value}
                        day={item.id} />;
                }}
            />
        </>
    )
}