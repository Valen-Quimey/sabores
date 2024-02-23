import { StyleSheet, Text, Image, useWindowDimensions, Pressable } from 'react-native';
import Card from './Card';
import  {colors} from "../global/colors";


const ProductItem = ( {product, navigation}) => {
  const {width, height}= useWindowDimensions();


  return (
    <>
      <Pressable onPress={()=> navigation.navigate("ItemDetail", {id: product.id})}>
        <Card style= {{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.yellow}}>
          <Text style= {width < 400 ? styles.textMin : styles.text}> {product.name} </Text>
          <Image style={styles.image} source={{ uri: product.image }} />
        </Card>
      </Pressable>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({

    text: {
        fontSize:20,
        width: '70%',
        
    },
    
    textMin: {
      fontSize: 14,
      width: "70%",
    },

    image: {
      minWidth:90,
      minHeight: 90,
      width: '30%',
      borderRadius: 5
  },
});