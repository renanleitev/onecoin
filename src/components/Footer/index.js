import React from "react";
import { View, Text, Linking, Image } from "react-native";
import styles from "./styles";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <View style={styles.links}>
                <Text style={styles.text}>Renan Leite Vieira </Text>
                <Text onPress={() => Linking.openURL('https://github.com/renanleitev')}>
                    <View style={styles.github}>
                        <Image source={require('../../img/github.png')} style={styles.image} />
                    </View>
                </Text>
                <Text onPress={() => Linking.openURL('https://br.linkedin.com/in/renanleitev')}>
                    <View style={styles.linkedin}>
                        <Image source={require('../../img/linkedin.png')} style={styles.image} />
                    </View>
                </Text>
            </View>
            <Text>© 2025 - Todos os direitos reservados</Text>
        </View>
    )
}