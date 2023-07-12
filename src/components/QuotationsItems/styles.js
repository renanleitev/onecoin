import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent: {
        width: '95%',
        height: 'auto',
        backgroundColor: '#fff',
        marginLeft: '2.5%',
        marginBottom: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    boxLogo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contextLeft: {
        width: '36%',
        height: '100%',
        alignItems: 'flex-start',
    },
    contextRight: {
        width: '60%',
        alignItems: 'flex-end',
    },
    dayCotation: {
        fontSize: 16,
        paddingLeft: 4,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        paddingLeft: 4,
        fontWeight: 'bold',
    }
});

export default styles;