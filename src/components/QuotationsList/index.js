import React from "react";
import {FlatList,
    View, 
    Text, 
    TouchableOpacity } from "react-native";
import QuotationsItems from "../QuotationsItems";
import styles from "./styles";

export default function QuotationsList(props){
    const daysQuery = props.filterDay;
    return (
        <>
        <View style={styles.filters}>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => daysQuery(7)}>
                <Text style={styles.textButtonQuery}>7D</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => daysQuery(30)}>
                <Text style={styles.textButtonQuery}>1M</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => daysQuery(180)}>
                <Text style={styles.textButtonQuery}>6M</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => daysQuery(365)}>
                <Text style={styles.textButtonQuery}>1Y</Text>
            </TouchableOpacity>
        </View>
            <FlatList
                inverted 
                style={styles.listQuotationCoins}
                data={props.listTransactions}
                renderItem={({ item }) => {
                    return <QuotationsItems 
                    coin={props.coin}
                    valor={item.value} 
                    data={item.id}/>;
                }}
            />
        </>
    )
}