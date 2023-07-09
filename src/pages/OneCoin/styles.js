import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },
    buttonNavigationContainer: {
        backgroundColor: 'black',
        position: 'absolute',
        left: 320
    }
});

export default styles;