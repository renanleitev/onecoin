import React, { useState } from "react";
import {
    View,
    TextInput
} from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import { currencies, defaultFirstCoin, defaultSecondCoin } from "../../constants";
import styles from "./styles";

export default function CoinsList(props) {
    const [defaultFirstText, setDefaultFirstText] = useState(defaultFirstCoin);
    const [defaultSecondText, setDefaultSecondText] = useState(defaultSecondCoin);
    return (
        <View style={styles.filters}>
            <SelectDropdown
                data={currencies}
                buttonStyle={styles.buttonStyle}
                dropdownStyle={styles.dropdownStyle}
                defaultButtonText={defaultFirstText}
                onSelect={(selectedItem) => {
                    props.updateFirstCoin(selectedItem);
                    setDefaultFirstText(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem) => {
                    return selectedItem;
                }}
                rowTextForSelection={(item) => {
                    return item;
                }}
            />
            <SelectDropdown
                data={currencies}
                buttonStyle={styles.buttonStyle}
                dropdownStyle={styles.dropdownStyle}
                defaultButtonText={defaultSecondText}
                onSelect={(selectedItem) => {
                    props.updateSecondCoin(selectedItem);
                    setDefaultSecondText(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem) => {
                    return selectedItem
                }}
                rowTextForSelection={(item) => {
                    return item;
                }}
            />
            <TextInput
                style={[styles.dropdownStyle, styles.inputQuery]}
                onChangeText={props.updateDay}
                value={props.days.toString()}
                placeholder={"DIAS"}
                placeholderTextColor="lightgray"
                keyboardType="numeric"
            />
        </View>
    )
}