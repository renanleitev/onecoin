import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filters: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 15, 
        justifyContent: 'space-evenly',  
    },
    buttonQuery: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: 'white',
        padding: 10,
    },
    textButtonQuery: {
        fontSize: 20,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    listQuotationCoins:{
        marginTop: 10,
        width: "100%",
    },
    shareContainer: {
        alignItems: 'flex-end', 
    }, 
    shareButton: {
        position: 'absolute',
        bottom: 1,
        right: 3, 
    }
});

export default styles;