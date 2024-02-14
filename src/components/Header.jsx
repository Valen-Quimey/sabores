import  {Text, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";


function Header ({ title}) {
    return(
        <View style= {styles.container}>
            <Text style={ styles.title}> {title}</Text>
        </View>
    );
}

export default Header;

const styles= StyleSheet.create( {
    container: {
        backgroundColor: colors.green,
        width: "100%",
        paddingTop: 20, // Ajusto el paddingTop 
        alignItems: "center", // Centro horizontalmente
        justifyContent: "center", // Centro verticalmente
        height: 80, // Establezco la altura del encabezado
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
      },
});