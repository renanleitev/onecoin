import { StyleSheet, 
    StatusBar, 
    SafeAreaView, 
    Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import CoinsList from './src/components/CoinsList';
import QuotationsList from './src/components/QuotationsList';
import getCoins from './src/services/getCoins';
import getUrl from './src/services/getUrl';
import getCoinsGraphic from './src/services/getCoinsGraphic';

export default function App() {
    const [coinsList, setCoinsList] = useState([]);
    const [coin, setCoin] = useState('USD-BRL');
    const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
    const [days, setDays] = useState(1);
    const [updateData, setUpdateData] = useState(true);

    function updateCoin(coin) {
        setCoin(coin);
        setUpdateData(true);
    }

    function updateDay(number) {
        setDays(number);
        setUpdateData(true);
    }

    useEffect(() => {
        getCoins(getUrl(coin, days), days).then((data) => {
            setCoinsList(data);
        });
        getCoinsGraphic(getUrl(coin, days)).then((dataG) => {
            setCoinsGraphicList([...dataG]);
        });
        if (updateData) {
            setUpdateData(false);
        }
      }, [coin, updateData]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
            backgroundColor='red' 
            barStyle='light-content'/>
            <CurrentPrice coins={coinsList}/>
            <HistoryGraphic infoDataGraphic={coinsGraphicList}/>
            <CoinsList   
            filterCoin={updateCoin} 
            listTransactions={coinsList}/>
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
