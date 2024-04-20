import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import allCartItems from '../data/cart.json';
import CartItem from '../components/CartItem';
import { usePostOrderMutation } from "../services/shopService";

const Cart = () => {
   const [cartItems, setCartItems] = useState([]);
   const [triggerPost, result] = usePostOrderMutation();

   // Función para confirmar el carrito y enviar la orden
   const confirmCart = () => {
      // Envía la orden a Firebase
      triggerPost({ total: cartItems.length, cartItems, user: "loggedUser" });
   };

   useEffect(() => {
      setCartItems(allCartItems);
   }, []);

   return (
      <View>
         <FlatList
            data={cartItems}
            keyExtractor={(cartItem) => cartItem.id}
            renderItem={({item}) => <CartItem item={item} />}
         />
         <Pressable onPress={confirmCart}>
            <Text>Confirmar</Text>
         </Pressable>
      </View>
   );
}

export default Cart;

const styles = StyleSheet.create({});
