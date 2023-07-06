import { StyleSheet, 
    StatusBar, 
    SafeAreaView, 
    Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';
import getCoins from './src/services/getCoins';
import getUrl from './src/services/getUrl';
import getCoinsGraphic from './src/services/getCoinsGraphic';

export default function App() {
    const [coinsList, setCoinsList] = useState([]);
    const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
    const [days, setDays] = useState(1);
    const [updateData, setUpdateData] = useState(true);

    function updateDay(number) {
        setDays(number);
        setUpdateData(true);
    }

    useEffect(() => {
        getCoins(getUrl(days), days).then((data) => {
            setCoinsList(data);
        });
        getCoinsGraphic(getUrl(days), days).then((dataG) => {
            setCoinsGraphicList(dataG);
        });
        if (updateData) {
            setUpdateData(false);
        }
      }, [updateData]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
            backgroundColor='red' 
            barStyle='light-content'/>
            <CurrentPrice coins={coinsList}/>
            <HistoryGraphic infoDataGraphic={coinsGraphicList}/>
            <QuotationsList   
            filterDay={updateDay} 
            listTransactions={coinsList}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },
});
