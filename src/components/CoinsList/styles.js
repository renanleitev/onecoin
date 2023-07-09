import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filters: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 15, 
        justifyContent: 'space-evenly',  
    },
    inputQuery: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 50,
        textAlign: "center",
    },
    buttonStyle:{
        borderRadius: 50,
        width: 100,
    },
    dropdownStyle:{
        borderRadius: 10,
        width: 100,
    },
});

export default styles;