import { useEffect, useState } from "react";
import  {FlatList, Text, View } from "react-native";
import allProducts from '../data/products.json'
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";



function ItemListCategories({ category}) {
    //los hooks van arriba de todo y dentro de la función
    const [products, setProducts] = useState([]);

    const [keyword, setKeyword] = useState(" ");

    useEffect(()=> {
        if(category) {
            const products= allProducts.filter((product)=> product.category === category)
            const filteredProducts = products.filter((product)=> product.name.includes(keyword));

            setProducts(filteredProducts)
        }
    }, [category, keyword])

    return(
        <View>
            <Search keyword= {keyword } onSearch= {setKeyword} />
            <FlatList
            data= {products }
            renderItem={( {item}) => <ProductItem product= {item} />}
            keyExtractor={(item) => item.id}/>
        </View>
    );
}

export default ItemListCategories;