import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
        alignItems: 'center',
    },
    links: {
        flexDirection: 'row', 
    },
    github: {
        paddingLeft: 5,
        paddingRight: 10,
    },
    linkedin: {
        paddingLeft: 10,
    },
    image: {
        width: 30,
        height: 30,
    },
    text: {
        fontSize: 16,
        padding: 5
    }
});

export default styles;