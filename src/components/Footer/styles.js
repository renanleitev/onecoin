import { StyleSheet } from "react-native";

const spaceBetweenNameAndGithub = 5;

const spaceBetweenGithubAndLinkedin = 10;

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
        paddingLeft: spaceBetweenNameAndGithub,
        paddingRight: spaceBetweenGithubAndLinkedin,
    },
    linkedin: {
        paddingLeft: spaceBetweenGithubAndLinkedin,
    },
    image: {
        width: 30,
        height: 30,
    },
    text: {
        fontSize: 16,
        padding: spaceBetweenNameAndGithub
    }
});

export default styles;