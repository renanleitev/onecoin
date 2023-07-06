import React from "react";
import {FlatList,
    View, 
    Text, 
    TouchableOpacity } from "react-native";
import QuotationsItems from "./QuatationsItems";
import styles from "./styles";

export default function QuotationsList(props){
    const daysQuery = props.filterDay;
    return (
        <>
        <View style={styles.filters}>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => daysQuery(1)}>
                <Text style={styles.textButtonQuery}>1D</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => daysQuery(7)}>
                <Text style={styles.textButtonQuery}>7D</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => daysQuery(15)}>
                <Text style={styles.textButtonQuery}>15D</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={() => daysQuery(21)}>
                <Text style={styles.textButtonQuery}>21D</Text>
            </TouchableOpacity>
        </View>
            <FlatList
                style={styles.listQuotationBitcoins}
                data={props.listTransactions}
                renderItem={({ item }) => {
                    return <QuotationsItems 
                    valor={item.value} 
                    data={item.id}/>;
                }}
            />
        </>
    )
}