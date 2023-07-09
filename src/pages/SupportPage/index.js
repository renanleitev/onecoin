import React, {useState, useEffect} from "react";
import { SafeAreaView, 
    View, 
    Text,
    TouchableOpacity, 
 } from "react-native";
import styles from "./styles";

const SupportPage = () => {
    const [height, setHeight] = useState(40);
    const [isPressed, setIsPressed] = useState(false);
    useEffect(() => {
        function controlHeight(){
            if (isPressed){
                setHeight(height + 100);
            } else {
                setHeight(40);
            }
        }
        controlHeight();
    }, [isPressed]);
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.questionContainer, {height: height}]}>
                <View style={styles.contextLeft}>
                    <Text style={styles.questionText}>
                    Pergunta
                    </Text>
                </View>
                <View style={styles.contextRight}>
                    <TouchableOpacity
                    onPress={() => setIsPressed(!isPressed)}
                    >
                    <Text style={styles.questionText}>
                        Mais
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SupportPage;