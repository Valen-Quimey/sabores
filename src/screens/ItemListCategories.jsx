import { useEffect, useState } from "react";
import  {FlatList, StyleSheet, View } from "react-native";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search"; 
import  {useSelector} from "react-redux"



function ItemListCategories({navigation}) {
    //los hooks van arriba de todo y dentro de la función
    const [products, setProducts] = useState([]);

    const [keyword, setKeyword] = useState(" ");

    const productsFilteredByCategory = useSelector((state)=> state.shopReducer.value.productsFilteredByCategory);
    

    useEffect(()=> {
        const productsFiltered = productsFilteredByCategory.filter((product)=> product.name.includes(keyword))
        setProducts(productsFiltered)
    }, [productsFilteredByCategory, keyword])

    return(
        <View style= {styles.container} >
            <Search onSearch= {setKeyword} />
            <FlatList
            data= {products }
            renderItem={( {item}) => <ProductItem product= {item} navigation= {navigation} /> }
            keyExtractor={(item) => item.id}/>
        </View>
    );
}

export default ItemListCategories;

const styles= StyleSheet.create({ 
    container: {
        flex:1,
        width:"100%",
        paddingHorizontal:20,
        justifyContent:"center", 
        alignItems:"center"
    },

});