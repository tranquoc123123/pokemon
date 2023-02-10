import { StyleSheet } from "react-native";
import {Primary} from "../color";
import  {Secondary} from "../color";

const styles = StyleSheet.create({
  container: {
   flex: 1, 
   justifyContent:"center",
   alignItems:"center",
   marginBottom: 65
  },
  header: {
    marginTop: 50,
    alignItems:"center",
    justifyContent:"center",
    flexDirection: 'row',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  card: {
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent:"center",
    alignItems:"center",
    width: 250,
    height: 300,
    borderColor: "#223671",
    borderWidth: 5
  },
  name: {
    textTransform: 'uppercase',
    color: "#F26526",
    fontWeight:"bold"
  }

})

export default styles;