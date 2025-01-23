import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  buttonNavigationContainer: {
    backgroundColor: "black",
    position: "absolute",
    left: 320,
    top: 10,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 1,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default styles;
