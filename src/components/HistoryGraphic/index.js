import React from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function HistoryGraphic(props) {
    return (
        <View>
            <LineChart
                style={{right: 30}}
                data={{
                    datasets: [
                        {
                            data: props.infoDataGraphic
                        },
                        {
                            data: [props.infoDataGraphic[0]] // min
                        },
                        {
                            data: [props.infoDataGraphic.slice(-1)] // max
                        },
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                // segments={2}
                yAxisLabel="$"
                yAxisSuffix=".00"
                withHorizontalLabels={false}
                withVerticalLines={false}
                yLabelsOffset={1}
                withVerticalLabels={false}
                chartConfig={{
                    backgroundColor: "#000000",
                    backgroundGradientFrom: "#232323",
                    backgroundGradientTo: "#3F3F3F",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    propsForDots: {
                        r: "1",
                        strokeWidth: "1",
                        stroke: "#f50d41",
                    },
                    backgroundGradientFrom: 'black',
                    backgroundGradientTo: 'black',
                    fillShadowGradient:'red',
                    fillShadowGradientOpacity:1,
                }}
                bezier//ondas suaves do grafico
            />
        </View>
    )
}