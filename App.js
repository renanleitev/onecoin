import {
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Platform,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import CoinsList from './src/components/CoinsList';
import QuotationsList from './src/components/QuotationsList';
import getCoins from './src/services/getCoins';
import getUrl from './src/services/getUrl';
import getCoinsGraphic from './src/services/getCoinsGraphic';
import {
    defaultFirstCoin,
    defaultSecondCoin,
    defaultDays
} from './src/constants';

export default function App() {
    // Para armazenar o histórico de variação da moeda
    const [coinsList, setCoinsList] = useState([]);
    // Primeira moeda. Por padrão, a opção escolhida é dolar
    const [firstCoin, setFirstCoin] = useState(defaultFirstCoin);
    // Segunda moeda. Por padrão, a opção escolhida é real
    const [secondCoin, setSecondCoin] = useState(defaultSecondCoin);
    // Moeda para consulta
    const queryCoin = `${firstCoin}-${secondCoin}`;
    // Para armazenar o histórico da moeda e exibir em um gráfico
    const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
    // Quantidade de dias que será exibido no gráfico (default: 7)
    const [days, setDays] = useState(defaultDays);
    // Se deve ou não realizar a consulta na API
    const [updateData, setUpdateData] = useState(true);
    // Se houver erro na consulta
    const [error, setError] = useState(false);
    // Para atualizar o tipo da primeira moeda
    function updateFirstCoin(coin) {
        setFirstCoin(coin);
    }
    // Para atualizar o tipo da segunda moeda
    function updateSecondCoin(coin) {
        setSecondCoin(coin);
    }
    // Para atualizar a quantidade de dias
    function updateDay(number) {
        setDays(number);
    }
    // Para realizar a pesquisa
    function updateSearching(boolean) {
        setUpdateData(boolean);
    }
    // Para atualizar os dados da moeda e o gráfico
    useEffect(() => {
        getCoins(getUrl(firstCoin, secondCoin, defaultDays)).then((data) => {
            setError(false);
            setCoinsList(data);
        }).catch(() => setError(true));
        getCoinsGraphic(getUrl(firstCoin, secondCoin, days)).then((dataG) => {
            setError(false);
            setCoinsGraphicList([...dataG]);
        }).catch(() => setError(true));
        if (updateData) {
            setUpdateData(false);
        }
    }, [updateData]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor='gray'
                barStyle='light-content' />
            <CurrentPrice coin={queryCoin} days={days} />
                <HistoryGraphic
                    coin={queryCoin}
                    updateData={updateData}
                    infoDataGraphic={coinsGraphicList} />
            <CoinsList
                days={days}
                updateDay={updateDay}
                updateFirstCoin={updateFirstCoin}
                updateSecondCoin={updateSecondCoin}
                coinsList={coinsList} />
            <QuotationsList
                updateSearching={updateSearching}
                listTransactions={coinsList} />
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
