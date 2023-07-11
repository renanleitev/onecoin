import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    FlatList
} from "react-native";
import { questionsAndAnswers } from "../../constants";
import Footer from "../../components/Footer";
import styles from "./styles";

const SupportPage = () => {
    // Css de cada resposta = Por padrão, ela não é visível
    const cssCloseOption = {
        isPressed: false,
        height: 0,
        backgroundColor: 'black',
        marginBottom: 0,
        expandButton: '+'
    };
    const cssOpenOption = {
        isPressed: true,
        height: 'auto',
        backgroundColor: 'white',
        marginBottom: 10,
        expandButton: '-'
    };
    const [cssListOptions, setCssListOptions] = useState(questionsAndAnswers.map(() => cssCloseOption));
    function controlCss(id) {
        // Se o botão estiver pressionado, ele vai fechar, se não, ele abrirá
        if (cssListOptions[id].isPressed) {
            cssListOptions[id] = cssCloseOption;
            setCssListOptions([...cssListOptions]);
        } else {
            cssListOptions[id] = cssOpenOption;
            setCssListOptions([...cssListOptions]);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={questionsAndAnswers}
                renderItem={({ item }) => {
                    return <>
                        <View style={styles.questionContainer}>
                            <View style={styles.contextLeft}>
                                <TouchableOpacity
                                    onPress={() => controlCss(item.id)}
                                >
                                    <Text style={styles.questionText}>
                                        {item.question}
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.contextRight}>
                                <TouchableOpacity
                                    onPress={() => controlCss(item.id)}
                                >
                                    <Text style={[styles.questionText, styles.expandAnswer]}>
                                        {cssListOptions[item.id].expandButton}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.answerContainer, {
                            height: cssListOptions[item.id].height,
                            backgroundColor: cssListOptions[item.id].backgroundColor,
                            marginBottom: cssListOptions[item.id].marginBottom
                        }]}>
                            <Text style={styles.answerText}>
                                {item.answer}
                            </Text>
                        </View>
                    </>
                }}
            />
            <Footer />
        </SafeAreaView>
    )
}

export default SupportPage;