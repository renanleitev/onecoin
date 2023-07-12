import React, { useState } from "react";
import {
    View,
    TextInput
} from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import {
    defaultFirstFlag,
    defaultSecondFlag,
    defaultFirstCoin,
    defaultSecondCoin,
} from "../../constants";
import getFlagEmoji from "../../services/getFlagEmoji";
import getCurrencyWithFlag from "../../services/getCurrencyWithFlag";
import styles from "./styles";

export default function CoinsList(props) {
    const [defaultFirstOption, setDefaultFirstOption] = useState(`${getFlagEmoji(defaultFirstFlag)} ${defaultFirstCoin}`);
    const [defaultSecondOption, setDefaultSecondOption] = useState(`${getFlagEmoji(defaultSecondFlag)} ${defaultSecondCoin}`);
    const currenciesWithFlag = getCurrencyWithFlag();
    return (
        <View style={styles.filters}>
            <SelectDropdown
                data={currenciesWithFlag}
                buttonStyle={styles.buttonStyle}
                dropdownStyle={styles.dropdownStyle}
                defaultButtonText={defaultFirstOption}
                onSelect={(selectedItem) => {
                    // Removendo o emoji de bandeira e obtendo a sigla da moeda
                    const coin = selectedItem.substring(selectedItem.indexOf(" ") + 1);
                    props.updateFirstCoin(coin);
                    props.updateFirstFlag(selectedItem.substring(0, selectedItem.indexOf(" ")));
                    setDefaultFirstOption(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem) => {
                    return selectedItem;
                }}
                rowTextForSelection={(item) => {
                    return item;
                }}
            />
            <SelectDropdown
                data={currenciesWithFlag}
                buttonStyle={styles.buttonStyle}
                dropdownStyle={styles.dropdownStyle}
                defaultButtonText={defaultSecondOption}
                onSelect={(selectedItem) => {
                    // Removendo o emoji de bandeira e obtendo a sigla da moeda
                    const coin = selectedItem.substring(selectedItem.indexOf(" ") + 1);
                    props.updateSecondCoin(coin);
                    props.updateSecondFlag(selectedItem.substring(0, selectedItem.indexOf(" ")));
                    setDefaultSecondOption(selectedItem);
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