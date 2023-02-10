import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginTop: 50,
    alignItems:"center",
    justifyContent:"center",
    flexDirection: 'row',
  },
  backgroundImage: {
    flex: 1,
    //resizeMode: 'cover', // or 'stretch'
  }
})

export default styles;