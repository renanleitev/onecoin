import React from "react";
import {
    FlatList,
    View,
    Text,
    TouchableOpacity
} from "react-native";
import QuotationsItems from "../QuotationsItems";
import styles from "./styles";

export default function QuotationsList(props) {
    return (
        <>
            <View style={styles.filters}>
            <TouchableOpacity 
            style={styles.buttonQuery}
            onPress={() => props.updateSearching(true)}>
                <Text style={styles.textButtonQuery}>Pesquisar</Text>
            </TouchableOpacity>
            </View>
            <FlatList
                inverted
                style={styles.listQuotationCoins}
                data={props.coinsList}
                renderItem={({ item }) => {
                    return <QuotationsItems
                        coin={props.coin}
                        valor={item.value}
                        data={item.id} />;
                }}
            />
        </>
    )
}