import {
    StatusBar,
    SafeAreaView,
    Button,
    View
} from 'react-native';
import React, { useState, useEffect } from 'react';
import ToastManager from 'toastify-react-native';
import { showToasts } from "../../services/showToasts";
import CurrentPrice from '../../components/CurrentPrice';
import HistoryGraphic from '../../components/HistoryGraphic';
import CoinsList from '../../components/CoinsList';
import QuotationsList from '../../components/QuotationsList';
import getCoins from '../../services/getCoins';
import getUrl from '../../services/getUrl';
import getCoinsGraphic from '../../services/getCoinsGraphic';
import {
    defaultFirstCoin,
    defaultSecondCoin,
    defaultDays
} from '../../constants';
import getFlagEmoji from '../../services/getFlagEmoji';
import LowBarAds from '../../components/LowBarAds';
import styles from './styles';

const OneCoin = ({ navigation }) => {
    // Para armazenar o histórico de variação da moeda
    const [coinsList, setCoinsList] = useState([]);
    // Primeira moeda. Por padrão, a opção escolhida é dolar
    const [firstCoin, setFirstCoin] = useState(defaultFirstCoin);
    // Segunda moeda. Por padrão, a opção escolhida é real
    const [secondCoin, setSecondCoin] = useState(defaultSecondCoin);
    // Primeira flag padrão (US)
    const [firstFlag, setFirstFlag] = useState(getFlagEmoji('US'));
    // Segunda flag padrão (BR)
    const [secondFlag, setSecondFlag] = useState(getFlagEmoji('BR'));
    // Moeda para consulta
    const queryCoin = `${firstCoin}-${secondCoin}`;
    // Moeda para o título do gráfico
    const [queryCoinTitle, setQueryCoinTitle] = useState(queryCoin);
    // Flags para exibir na lista de resultados
    const queryFlags = `${firstFlag}/${secondFlag}`;
    // Flags, com o resultado da consulta (primeira flag/segunda flag)
    const [flags, setFlags] = useState(queryFlags);
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
    // Para atualizar a bandeira da primeira moeda
    function updateFirstFlag(flag) {
        setFirstFlag(flag);
    }
    // Para atualizar a bandeira da segunda moeda
    function updateSecondFlag(flag) {
        setSecondFlag(flag);
    }
    // Para atualizar a quantidade de dias
    function updateDay(number) {
        setDays(number);
    }
    // Para realizar a pesquisa
    function updateSearching(boolean) {
        if (days > 360 || days < 3) {
            showToasts('Nº de dias inválido');
        } else {
            setDaysTitle(days);
            setQueryCoinTitle(queryCoin);
            setFlags(queryFlags);
            setUpdateData(boolean);
        }
    }
    // Em caso de erro na consulta
    function errorApi() {
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
            <View style={styles.buttonNavigationContainer}>
                <Button
                    title='?'
                    color={'black'}
                    onPress={() =>
                        navigation.navigate('Support')
                    } />
            </View>
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
                updateFirstFlag={updateFirstFlag}
                updateSecondFlag={updateSecondFlag}
                coinsList={coinsList} />
            <QuotationsList
                coin={queryCoinTitle}
                flags={flags}
                updateSearching={updateSearching}
                coinsList={coinsList} />
            <LowBarAds/>
        </SafeAreaView>
    );
}

export default OneCoin;