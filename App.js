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
    // Para armazenar o histórico de variação da moeda
    const [coinsList, setCoinsList] = useState([]);
    // Por padrão, a opção escolhida é dolar
    const [coin, setCoin] = useState('USD-BRL');
    // Para armazenar o histórico da moeda e exibir em um gráfico
    const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
    // Quantidade de dias que será exibido no gráfico (default: 7)
    const [days, setDays] = useState(7);
    // Quantidade de dias que será exibido na lista (default: 7)
    const defaultDays = 7;
    // Se deve ou não realizar a consulta na API
    const [updateData, setUpdateData] = useState(true);
    // Para atualizar o tipo de moeda
    function updateCoin(coin) {
        setCoin(coin);
        setUpdateData(true);
    }
    // Para atualizar a quantidade de dias
    function updateDay(number) {
        setDays(number);
        setUpdateData(true);
    }
    // Para atualizar os dados da moeda e o gráfico
    useEffect(() => {
        getCoins(getUrl(coin, defaultDays)).then((data) => {
            setCoinsList(data);
        });
        getCoinsGraphic(getUrl(coin, days)).then((dataG) => {
            setCoinsGraphicList([...dataG]);
        });
        if (updateData) {
            setUpdateData(false);
        }
      }, [updateData]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
            backgroundColor='gray' 
            barStyle='light-content'/>
            <CurrentPrice coin={coin} days={days}/>
            <HistoryGraphic coin={coin} infoDataGraphic={coinsGraphicList}/>
            <CoinsList   
            filterCoin={updateCoin} 
            listTransactions={coinsList}/>
            <QuotationsList   
            coin={coin}
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
