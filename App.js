import {
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Platform,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import ToastManager from 'toastify-react-native';
import { showToasts } from './src/services/showToasts';
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
    // Moeda para o título do gráfico
    const [queryCoinTitle, setQueryCoinTitle] = useState(queryCoin);
    // Para armazenar o histórico da moeda e exibir em um gráfico
    const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
    // Quantidade de dias que será exibido no gráfico (default: 7)
    const [days, setDays] = useState(defaultDays);
    // Quantidade de dias no título do gráfico
    const [daysTitle, setDaysTitle] = useState(defaultDays);
    // Se deve ou não realizar a consulta na API
    const [updateData, setUpdateData] = useState(true);
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
        if (days > 360 || days < 3){
            showToasts('Nº de dias inválido');
        } else {
            setDaysTitle(days);
            setQueryCoinTitle(queryCoin);
            setUpdateData(boolean);
        }
    }
    // Em caso de erro na consulta
    function errorApi(){
        showToasts('Consulta inválida'); 
        setCoinsList([]);
        setCoinsGraphicList([0]);
    }
    // Para atualizar os dados da moeda e o gráfico
    useEffect(() => {
        getCoins(getUrl(firstCoin, secondCoin, days)).then((data) => {
            setCoinsList(data);
        }).catch(errorApi);
        getCoinsGraphic(getUrl(firstCoin, secondCoin, days)).then((dataG) => {
            setCoinsGraphicList([...dataG]);
        }).catch(errorApi);
        if (updateData) {
            setUpdateData(false);
        }
    }, [updateData]);

    return (
        <SafeAreaView style={styles.container}>
            <ToastManager />
            <StatusBar
                backgroundColor='gray'
                barStyle='light-content' />
            <CurrentPrice coin={queryCoinTitle} days={daysTitle} />
            <HistoryGraphic
                updateData={updateData}
                infoDataGraphic={coinsGraphicList} />
            <CoinsList
                days={days}
                updateDay={updateDay}
                updateFirstCoin={updateFirstCoin}
                updateSecondCoin={updateSecondCoin}
                coinsList={coinsList} />
            <QuotationsList
                coin={queryCoin}
                updateSearching={updateSearching}
                coinsList={coinsList} />
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
