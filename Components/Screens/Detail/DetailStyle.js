import { StyleSheet } from "react-native";
import color from "../../color";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
  card: {
    height: 500,
    width: 300,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: color.Primary,
    borderWidth: 5,
  }
})

export default styles;