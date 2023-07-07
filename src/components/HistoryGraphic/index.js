import React, { useState, useEffect } from "react";
import { View, Dimensions, ActivityIndicator } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function HistoryGraphic(props) {
    // Para definir quantas casas decimais tem no eixo y
    const [decimalPlaces, setDecimalPlaces] = useState(4);
    // Para exibir uma tela de loading, enquanto realiza a requisição na API
    const [spinner, setSpinner] = useState(false);
    // Simulando um efeito de loading, enquanto gera o gráfico
    useEffect(() => {
        setSpinner(true);
        setTimeout(() => setSpinner(false), 1000);
    }, [props.days, props.coin]);
    // Definindo as casas decimais no eixo y, por tipo de moeda
    useEffect(() => {
        switch (props.coin) {
            case 'BTC-BRL':
                setDecimalPlaces(0);
                break;
            default:
                setDecimalPlaces(4);
                break;
        }
    }, [props.coin]);
    return (
        <View>
            {spinner ?
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator size="large" color="#fff" />
                </View> :
                <LineChart
                    data={{
                        datasets: [
                            {
                                data: props.infoDataGraphic
                            },
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel="$"
                    withVerticalLines={false}
                    yLabelsOffset={1}
                    withVerticalLabels={true}
                    chartConfig={{
                        backgroundColor: "#000000",
                        backgroundGradientFrom: "#232323",
                        backgroundGradientTo: "#3F3F3F",
                        decimalPlaces: decimalPlaces, // para definir quantas casas decimais tem no eixo y
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        propsForDots: {
                            r: "0",
                            strokeWidth: "2",
                            stroke: "#f50d41",
                        },
                        fontSize: 10,
                        backgroundGradientFrom: 'black',
                        backgroundGradientTo: 'black',
                        fillShadowGradient: 'white',
                        fillShadowGradientOpacity: 1,
                        // propsForLabels: {
                        //     fontSize:9, // para mudar a fonte dos labels (eixo x e y)
                        // }
                    }}
                    bezier
                />
            }
        </View>
    )
}