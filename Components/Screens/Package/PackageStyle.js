import { StyleSheet } from "react-native";
import color from "../../color";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 65
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  card: {
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 350,
    borderColor: "#223671",
    borderWidth: 5,
  },
  button: {
    height: 40,
    width: 100,
    color: "red",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black"
  },
  value: {
    color: color.Secondary,
    textTransform: 'uppercase',
    fontWeight: "bold"
  },
  title: {
    color: color.Primary,
    textTransform: 'uppercase',
    fontWeight: "bold"
  },
  name: {
    color: color.Secondary,
    textTransform: 'uppercase',
    fontWeight: "bold",
    fontSize: 30
  },
})

export default styles;