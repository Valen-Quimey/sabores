import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Search from '../components/Search';

// Aquí importo los datos de productos
import productsData from '../data/products.json';

const ItemListCategories = () => {
  const navigation = useNavigation();

  // Estado para almacenar la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Estado para almacenar los productos
  const [products, setProducts] = useState(productsData);

  // Función para manejar el filtro de productos basado en la categoría seleccionada
  const filterProductsByCategory = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
      setProducts(productsData);
    } else {
      const filteredProducts = productsData.filter(product => product.category === category);
      setProducts(filteredProducts);
      setSelectedCategory(category);
    }
  };

  // Extraer categorías únicas de los productos
  const uniqueCategories = Array.from(new Set(productsData.map(product => product.category)));

  // Función para renderizar cada elemento de la lista de categorías
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => filterProductsByCategory(item)}
      style={[
        styles.categoryItem,
        {
          backgroundColor: item === selectedCategory ? '#ddd' : 'transparent',
        },
      ]}
    >
      <Text style={{ fontWeight: 'bold', color: item === selectedCategory ? '#333' : '#666' }}>{item}</Text>
    </TouchableOpacity>
  );

  // Función para renderizar cada elemento de la lista de productos y navegar a ItemDetail
  const navigateToItemDetail = (item) => {
    navigation.navigate('ItemDetail', { id: item.id });
  };

  // Función para renderizar cada elemento de la lista de productos
  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productItem} onPress={() => navigateToItemDetail(item)}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Search />
      <FlatList
        data={uniqueCategories}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        contentContainerStyle={{ paddingBottom: 10 }}
        style={{ maxHeight: 60, marginBottom: 10 }}
      />
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  productItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 5,
  },
  productName: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
