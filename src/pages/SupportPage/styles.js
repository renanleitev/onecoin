import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },
    questionContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-around',  
        backgroundColor: '#fff',
        marginLeft: '2.5%',
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
    },
    questionText: {
        fontWeight: 'bold',
    },
    contextLeft: {
        alignItems: 'flex-start',
        marginRight: 100
    },
    contextRight: {
        alignItems: 'flex-end',
        marginLeft: 100
    },
    answerContainer: {},
    answerText: {}
});

export default styles;